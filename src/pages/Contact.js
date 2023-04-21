import classes from "./Contact.module.css";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { CUSTOM_MOTION_PROPS } from "../config/config";

const Contact = () => {
  return (
    <motion.div
      {...CUSTOM_MOTION_PROPS}
      className={classes["contact-container"]}
    >
      <div className={classes["contact-image"]}></div>
      <div className={classes["contact-form-container"]}>
        <div className={classes["contact-form"]}>
          <ContactForm />
        </div>
        <div className={classes["contact-info-container"]}>
          <div className={classes["contact-info"]}>
            <p>
              <a href="tel:+48722265649">+48 722 265 649</a>
            </p>
            <p>
              <a href="mailto:info@wielechowski.net">info@wielechowski.net</a>
            </p>
            <p>Filip Wielechowski Fotografia - Trójmiasto</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
