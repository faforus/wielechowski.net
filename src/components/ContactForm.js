import { Fragment, useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsSent, setFormIsSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      try {
        const response = await fetch(
          "https://react-http-83ecd-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              surname: surname,
              phoneNumber: phoneNumber,
              email: email,
              message: message,
            }),
          }
        );
        if (response.ok) {
          setName("");
          setSurname("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
          setFormIsSent(true);
        } else {
          throw new Error("Error sending the form.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let error = "";

    if (message.trim().length < 10) {
      isValid = false;
      error = "Wiadomość musi mieć co najmniej 10 znaków.";
    }

    const nameAndSurnameProvided =
      name.trim().length > 0 || surname.trim().length > 0;
    const emailOrPhoneProvided =
      email.trim().length > 0 || phoneNumber.trim().length > 0;

    if (!nameAndSurnameProvided || !emailOrPhoneProvided) {
      isValid = false;
      error = "Proszę podać imię lub nazwisko oraz email lub numer telefonu.";
    }

    const nameContainsNumbers = /\d/.test(name);
    const surnameContainsNumbers = /\d/.test(surname);

    if (nameContainsNumbers || surnameContainsNumbers) {
      isValid = false;
      error = "Imię i nazwisko nie mogą zawierać cyfr.";
    }

    if (
      email.trim().length > 0 &&
      (!email.includes("@") || !email.includes("."))
    ) {
      isValid = false;
      error = "Adres email jest nieprawidłowy.";
    }

    if (phoneNumber.trim().length > 0 && !/^[0-9+\-\s]+$/.test(phoneNumber)) {
      isValid = false;
      error = "Numer telefonu zawiera niedozwolone znaki.";
    }

    setFormIsValid(isValid);
    setErrorMessage(error);
  };

  return (
    <Fragment>
      {formIsSent ? (
        <div className={classes.sent}>
          <p>Wiadomośc wysłana!</p>
          <button
            onClick={() => {
              setFormIsSent(false);
            }}
          >
            Ok
          </button>
        </div>
      ) : (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes["input-label-caontainer"]}>
            <label htmlFor="name">Imię:</label>
            <input
              type="text"
              id="name"
              value={name}
              name="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={classes["input-label-caontainer"]}>
            <label htmlFor="surname">Nazwisko:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              name="Surname"
              onChange={(event) => setSurname(event.target.value)}
            />
          </div>
          <div className={classes["input-label-caontainer"]}>
            <label htmlFor="phone">Telefon:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              name="phone"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className={classes["input-label-caontainer"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes["input-label-caontainer"]}>
            <label htmlFor="message">Wiadomość:</label>
            <textarea
              id="message"
              value={message}
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          {!formIsValid ? (
            <div className={classes["error-message-container"]}>
              <p>{errorMessage}</p>
            </div>
          ) : (
            ""
          )}
          <button type="submit" onClick={validateForm}>
            Wyślij
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default ContactForm;
