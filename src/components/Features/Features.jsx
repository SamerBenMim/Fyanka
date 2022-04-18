import classes from "./Features.module.css";
import Title from "../../UI/Title";
import FeatureCard from "./FeatureCard";
import { useState, useRef, useEffect } from "react";
const Features = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div className={classes.features}>
      <Title width="60%">Lorem ipsum dol Lorem ipsum dolor sit ame Lorem</Title>
      <div className={classes.featureBox}>
        <div className={classes.featureContainer}>
          <FeatureCard
            title="Personnalisation"
            content="Votre joli événement est personnalisé, et rien ne vous sera imposé."
            image="perso"
          ></FeatureCard>
          <FeatureCard
            title="Transparence"
            content="Le prix des prestataires vous sont communiqués en toute transparence"
            image="transperency"
          ></FeatureCard>
          <FeatureCard
            title="Qualité"
            content="FYANKA suit une formation professionnelle reconnue dans le monde des mariage."
            image="quality"
          ></FeatureCard>
          <FeatureCard
            title="Sain d'esprit"
            content="C’est garantir des préparatifs sereins car nous vous accompagnons de bout en bout !"
            image="calm"
          ></FeatureCard>
        </div>
        <div
          className={`${classes.featureDescription} 
                  ${isVisible ? classes.animate : ""}`}
          ref={domRef}
        >
          <p>
            Notre offre s’adapte à vos besoins Besoin de conseils passagers
            d’experts, ou au contraire d’un accompagnement complet pour toute la
            planification? Nous vous apportons la solution qui vous correspond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;