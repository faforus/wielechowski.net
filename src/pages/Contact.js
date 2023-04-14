import classes from "./Contact.module.css";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <Title title={"Kontakt"} />
      <div className={classes["contact-container"]}>
        <div className={classes["contact-image"]}></div>
        <div className={classes["contact-form"]}>
          {" "}
          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
