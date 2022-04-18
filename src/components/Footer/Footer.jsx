import classes from "./Footer.module.css";
import Firework from "../../UI/Firework";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.description}>
        <div className={classes.company}>
          <Firework
            color="white"
            height=" calc(20px + 1vmin);"
            style={{
              paddingRight: "calc(15px + 1vmin)",
            }}
          ></Firework>
          <h6>FYANKA</h6>
        </div>
        <p>
          Planifiez votre mariage en 10 minutes et vivez-le immédiatement, sans
          imprévus.
        </p>
      </div>
      <div className={classes.download}>
        <h2>Télécharger gratuitement</h2>
        <div className={classes.images}>
          <img src={require("../../assets/google play.png")} alt="google" />
          <img src={require("../../assets/appstore.png")} alt="appstore" />
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.contact}>
          <h3>Nos contacts</h3>
          <div className={classes.con}>
            <img src={require("../../assets/email.png")} alt="email" />
            <h5>ev.lilik@gmail.com</h5>
          </div>
          <div className={classes.con}>
            <img src={require("../../assets/phoneIcon.png")} alt="phone" />
            <h5>+ 216 99 856 785</h5>
          </div>
        </div>
        <div className={classes.social}>
          <h3>Suivez nous</h3>

          <div className={classes.con}>
            <img src={require("../../assets/fb.png")} alt="email" />
            <img src={require("../../assets/insta.png")} alt="email" />
            <img src={require("../../assets/in.png")} alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
