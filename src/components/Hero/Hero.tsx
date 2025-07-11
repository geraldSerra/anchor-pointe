import styles from "./Hero.module.css";
import logo from "../../assets/hero-anchor.png";
import flag from "../../assets/usa-flag.png";
import scrollToSection from "../../utils/scrollToSection";
import PhoneIcon from "@mui/icons-material/Phone";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.flag} src={flag} alt="USA flag" /> */}
      <div className={styles.content}>
        <img
          className={styles.img}
          src={logo}
          alt="Una familia sonriendo frente a la bandera de USA"
        />

        <div className={styles.info}>
          <div className={styles.title}>
            Your <span className={styles.highlight}>migration</span> journey,
            with <span className={styles.highlight}>support</span> and trust
          </div>
          <div className={styles.description}>
            Professional assistance with form preparation, translations, and
            more
          </div>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => scrollToSection("contact")}
            >
              Schedule
            </button>
            <a href="tel:+12392379775">
              <button className={`${styles.button} ${styles.callus}`}>
                <PhoneIcon /> Call Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
