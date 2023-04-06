import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes["contact-container"]}>
      <div className={classes.title}>
        <h2>Kontakt</h2>
      </div>
      <div className={classes["contact-image"]}>
        <div className={classes.info}>
          <a href="tel:+48722265649">+48 722 265 649</a>
          <a href="mailto:filip.wielechowski@gmail.com">
            filip.wielechowski@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
