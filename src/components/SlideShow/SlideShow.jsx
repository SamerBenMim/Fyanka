import classes from "./SlideShow.module.css";
import Title from "../../UI/Title";
import FireWork from "../../UI/Firework";
import { useState, useRef } from "react";
import { useEffect } from "react";
import steps from "../../Data/steps.json";
import phone from "../../assets/phone.png";
const SlideShow = (props) => {
  const scroll = props.scroll;
  const setScroll = props.setScroll;
  const slides = useRef(null);
  const executeScroll = () =>
    slides.current.scrollIntoView({ behavior: "smooth", block: "center" });
  const [slide, setSlide] = useState(1);
  const nextHandler = () => {
    if (slide === 4) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };


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
    if (scroll) {
      executeScroll();
      setScroll(false);
    }
    myObserver.observe(slides.current);
  }, [scroll, setScroll]);

  return (
    <div
      className={`${classes.slideShow} 
    ${isVisible ? classes.animate : ""}`}
      ref={slides}
    >
      <FireWork
        width="50px"
        height="50px"
        color="#EF9F99"
        style={{ position: "absolute", left: "53%", top: "22%" }}
      ></FireWork>
      <FireWork
        width="30px"
        height="30px"
        color="#EF9F99"
        style={{ position: "absolute", left: "25%", top: "50%" }}
      ></FireWork>
      <div className={classes.next} onClick={nextHandler}>
        <img src={`${require("../../assets/next.png")}`} alt="next" />
      </div>
      <h2>Comment ça marche?</h2>
      <div className={classes.circles}>
        <div
          className={`${classes.circle} ${slide === 1 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 2 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 3 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 4 ? classes.active : ""}`}
        ></div>
      </div>
      <div className={classes.slides}>
        <div className={classes.step}>
          <Title>Etape{slide}</Title>
        </div>
        <div className={classes.root}>
          <div className={classes.phone}>
            <div className={classes.background}>
              <img className={classes.border} src={phone} alt="phone" />
              {slide === 1 && (
                <img
                  className={classes.content}
                  src={`${require("../../assets/" + steps[0].image + ".png")}`}
                  alt="content"
                />
              )}
              {slide === 2 && (
                <img
                  className={classes.content}
                  src={`${require("../../assets/" + steps[1].image + ".png")}`}
                  alt="content"
                />
              )}
              {slide === 3 && (
                <img
                  className={classes.content}
                  src={`${require("../../assets/" + steps[2].image + ".png")}`}
                  alt="content"
                />
              )}
              {slide === 4 && (
                <img
                  className={classes.content}
                  src={`${require("../../assets/" + steps[3].image + ".png")}`}
                  alt="content"
                />
              )}
            </div>
          </div>

          {slide === 1 && (
            <div className={classes.description}>
              <h3>{steps[0].title}</h3>
              <p>{steps[0].content} </p>
            </div>
          )}
          {slide === 2 && (
            <div className={classes.description}>
              <h3>{steps[1].title}</h3>
              <p>{steps[1].content} </p>
            </div>
          )}
          {slide === 3 && (
            <div className={classes.description}>
              <h3>{steps[2].title}</h3>
              <p>{steps[2].content} </p>
            </div>
          )}
          {slide === 4 && (
            <div className={classes.description}>
              <h3>{steps[3].title}</h3>
              <p>{steps[3].content} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
