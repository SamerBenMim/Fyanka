import classes from "./Title.module.css";
const Title = (props) => {
  const width = props.width||"";
  return <div className={classes.title} style={{ width : width}}>{props.children}</div>;
};

export default Title;
