import styles from "./Hero.module.css";
import logo from "../../assets/hero-anchor.png";
import scrollToSection from "../../utils/scrollToSection";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.img}
          src={logo}
          alt="Una familia sonriendo frente a la bandera de USA"
        />
        <div className={styles.info}>
          <div className={styles.title}>
            Your migration journey, with support and trust
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
              <button className={styles.button}>Call Us</button>
            </a>

            {/* <button className={styles.button}>
              Llenar formulario de servicio
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
