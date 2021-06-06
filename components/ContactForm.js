import React, { useState, useEffect } from "react";
import styles from "../styles/ContactForm.module.scss";
import Alert from "../public/alert.svg";
import MailSvg from "../public/mail.svg";
import { send } from "emailjs-com";

function ContactForm({ contactActive, contactHandler }) {
  const [checkName, setCheckName] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [checkMail, setCheckMail] = useState("");
  const [alertName, setAlertName] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertMail, setAlertMail] = useState(false);
  const [contactButton, setContactButton] = useState("Send");
  const [isActive, setIsActive] = useState(false);
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  useEffect(() => {
    if (checkMail.length > 3) {
      setAlertMail(false);
    }
    if (checkName.length > 3) {
      setAlertName(false);
    }
  }, [checkMail, checkName]);

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

  useEffect(() => {
    contactActive ? setIsActive(styles.visible) : null;
  }, [contactActive]);

  return (
    <>
      <div
        onClick={() => contactHandler()}
        className={`${styles.overlay} ${isActive}`}
      ></div>
      <div className={`${styles.modal} ${isActive}`}>
        <div className={styles.close_btn} onClick={() => contactHandler()}>
          x
        </div>

        <form onSubmit={onSubmit}>
          <input
            className={styles.inpt}
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
            className={styles.inpt}
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
            className={styles.inpt}
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
            type={contactButton === "Send" ? "submit" : "button"}
            className={
              contactButton === "Message sent!"
                ? styles.message_sent
                : styles.btn
            }
          >
            {contactButton}
          </button>
          <div className={styles.information}>
            <MailSvg className={styles.mail_svg} /> Message will be sent to
            stjepanbrnjak.com
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
