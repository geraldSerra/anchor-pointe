import styles from "./Hero.module.css";
import logo from "../../assets/hero-anchor.png";
import scrollToSection from "../../utils/scrollToSection";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

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
              <button className={`${styles.button} ${styles.callus}`}>
                <PhoneIcon /> Call Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.warning}>
        <PriorityHighIcon sx={{ color: "white", fontSize: "50px" }} />
        <div>
          <div>
            Services by Appointment Only To provide each client with dedicated
            attention, we are unable to accommodate walk-ins at this time.
          </div>
          Please contact us to schedule your appointment — we’re happy to assist
          you!
        </div>
      </div>
    </div>
  );
};

export default Hero;
