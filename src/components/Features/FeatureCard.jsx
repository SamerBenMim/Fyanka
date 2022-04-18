import classes from "./FeatureCard.module.css";
import { useState, useEffect, useRef } from "react";
const FeatureCard = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }else{
        setVisible(false)
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div className={classes.featureCard}>
      <img  src={`${require("../../assets/"+props.image+".png")}`} alt="INV" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <div
        className={`${classes.flap1} 
                  ${isVisible ? classes.animate : ""}`}
        ref={domRef}
      ></div>
      <div
        className={`${classes.flap2} 
                  ${isVisible ? classes.animate : ""}`}
        ref={domRef}
      ></div>
    </div>
  );
};

export default FeatureCard;