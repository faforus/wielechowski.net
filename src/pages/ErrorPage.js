import classes from "./ErrorPage.module.css";
import errorImg from "../assets/images/errorpig.jpg";

const ErrorPage = () => {
  return (
    <div className={classes.error}>
      <img alt="error" src={errorImg} />
      <h1>Nie ma takiej strony.</h1>
    </div>
  );
};

export default ErrorPage;
