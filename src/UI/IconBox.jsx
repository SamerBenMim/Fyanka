import classes from "./IconBox.module.css";
const IconBox = (props) => {

  return (
    <div className={classes.iconBox + " " + classes[props.position]}>
      <img src={"../assets/"+props.image+".svg"} alt="svg" />
    </div>
  );
};

export default IconBox;
