import classes from "./Info.module.css";
import Title from "../../UI/Title";
import Button from "../../UI/Button";
const Info = (props) => {
  return (
    <div className={classes.info}>
      <h6>Plannifier avec FYANKA</h6>
      <Title>Organiser votre mariage de rêve</Title>
      <p>
        Vivez le plus beau jour de votre vie sans stress, et avec beaucoup
        d'amour.
      </p>
      <Button
        onClick={() => {
          props.setScroll(true);
        }}
      >
       Comment ça marche ?
      </Button>
    </div>
  );
};

export default Info;
