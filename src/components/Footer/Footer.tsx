import styles from "./Footer.module.css";
import icon from "../../assets/anchor-pointe-logo-name.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img className={styles.img} src={icon} alt="The lab icon" />
          <div className={styles.phrase}>
            Your migration journey, with support and trust
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Browse</h2>
          <div className={styles.li}>Home</div>
          <div className={styles.li}>Who we are?</div>
          <div className={styles.li}>Services</div>
          <div className={styles.li}>Schedule</div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Contact</h2>
          <div className={styles.li}>
            <EmailIcon /> anchorpointe.services@gmail.com
          </div>
          <div className={styles.li}>
            <PhoneIcon />
            +1 (239) 237-9775
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 The Anchor Pointe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
