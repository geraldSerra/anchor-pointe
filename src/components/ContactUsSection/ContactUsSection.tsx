import Form from "../Form/Form";
import image from "../../assets/visa-aplication.png";
import styles from "./ContactUsSection.module.css";

const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.form}>
        <Form />
      </div>
      <img
        className={styles.image}
        src={image}
        alt="una imagen del proceso de aplicación"
      />
    </section>
  );
};

export default ContactUsSection;
