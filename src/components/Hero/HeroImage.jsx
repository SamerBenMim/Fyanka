import classes from "./HeroImage.module.css";
import Firework from "../../UI/Firework";
import married from "../../assets/married.png"
import bloba from "../../assets/bloba.png"
const HeroImage = () => {
  return (
    <div className={classes.heroImageContainer}>
      <img className={classes.married} src={married} alt="blob" />
      <img className={classes.blob} src={bloba} alt="blob" />
      <div style={{width:"fit-content",height:"fit-content",position:"absolute",right:"45%"}}>
        <Firework color="#EF9F99" width="50" height="40"></Firework>
      </div>
      <div style={{width:"fit-content",height:"fit-content",position:"absolute",right:"38%", top:"60px"}}>
        <Firework  color="#EF9F99" width="50" height="30"></Firework>
      </div>
      <div style={{zIndex:"4", width:"fit-content",height:"fit-content",position:"absolute",right:"40%", bottom:"50%"}}>
        <Firework   color="#ffffff" width="40" height="20"></Firework>
      </div>
      <div style={{zIndex:"4", width:"fit-content",height:"fit-content",position:"absolute",left:"30%", bottom:"35%"}}>
        <Firework   color="#ffffff" width="30" height="20"></Firework>
      </div>
    </div>
  );
};

export default HeroImage;
