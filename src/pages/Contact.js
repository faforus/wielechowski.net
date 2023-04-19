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
      <div className={classes["contact-form"]}>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
