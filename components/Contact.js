import React, { useState, useEffect } from "react";
import { send } from "emailjs-com";
import styles from "../styles/Contact.module.scss";
import Alert from "../public/alert.svg";

function Contact() {
  const [checkName, setCheckName] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [checkMail, setCheckMail] = useState("");
  const [alertName, setAlertName] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertMail, setAlertMail] = useState(false);
  const [contactButton, setContactButton] = useState("Contact");
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!checkName && !checkMessage && !checkMail) {
      setAlertName("Name missing");
      setAlertMessage("Message missing");
      setAlertMail("Email missing");
    }

    if (
      !alertName &&
      !alertMail &&
      !alertMessage &&
      checkName &&
      checkMail &&
      checkMessage
    ) {
      send(
        "service_voecb8h",
        "template_3r7vk3l",
        toSend,
        "user_wvzNj8LTe2PKr8k3Eav7t"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });

      setContactButton("Message sent!");
    }
  };

  useEffect(() => {
    if (checkMail.length > 3) {
      setAlertMail(false);
    }
    if (checkName.length > 3) {
      setAlertName(false);
    }
  }, [checkMail, checkName]);

  const handleChange = (e) => {
    if (e.target.name === "from_name") {
      setCheckName(e.target.value);
      if (checkName.length < 2) {
        setAlertName("Name is too short");
      } else {
        setAlertName(false);
      }
    } else if (e.target.name === "message") {
      setCheckMessage(e.target.value);
      if (checkMessage.length < 3) {
        setAlertMessage("Message is too short");
      } else {
        setAlertMessage(false);
      }
    } else if (e.target.name === "reply_to") {
      setCheckMail(e.target.value);

      if (!checkMail.match(mailformat)) {
        setAlertMail("Email not valid");
      } else {
        setAlertMail(false);
      }
    }
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container} id="contact">
      <div className={styles.clip_path}></div>
      <div className={styles.thanks}>
        <h3>
          I am really happy to see you this far in the portfolio. If you have
          any queries, please feel free to contact me.
        </h3>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type={contactButton === "Contact" ? "text" : undefined}
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <div className={styles.alert}>
          {alertName === false ? null : alertName}
          {alertName !== false ? <Alert className={styles.svg} /> : null}
        </div>
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <div className={styles.alert}>
          {alertMessage === false ? null : alertMessage}
          {alertMessage !== false ? <Alert className={styles.svg} /> : null}
        </div>
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <div className={styles.alert}>
          {alertMail === false ? null : alertMail}
          {alertMail !== false ? <Alert className={styles.svg} /> : null}
        </div>
        <button
          type={contactButton === "Contact" ? "submit" : "button"}
          className={
            contactButton === "Message sent!" ? styles.message_sent : null
          }
        >
          {contactButton}
        </button>
      </form>
      <div className={styles.copyrights}>
        Copyright &#169; Stjepan Brnjak. All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
