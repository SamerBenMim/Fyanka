import classes from "./Hero.module.css";
import Info from "./Info";
import HeroImage from "./HeroImage";
import {useRef,useEffect,useState} from "react"
const Hero = (props) => {
  const hero = useRef(null);

  const [isVisible, setVisible] = useState(false);

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
    myObserver.observe(hero.current);
  }, [myObserver]);
  return (
    <div
      className={`${classes.heroContainer} 
    ${isVisible ? classes.animate : ""}`}
      ref={hero}
    >
      <Info setScroll={props.setScroll}></Info>
      <HeroImage></HeroImage>
    </div>
  );
};

export default Hero;
