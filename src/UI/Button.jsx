import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.btnContainer}>
      <button className={classes.btnBorder}>{props.children}</button>
      <button onClick={props.onClick} className={classes.btn}>{props.children}</button>
    </div>
  );
};

export default Button;
