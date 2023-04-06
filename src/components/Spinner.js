import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
