import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div
      style={{ maxHeight: props.maxHeight }}
      className={classes["spinner-container"]}
    >
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
