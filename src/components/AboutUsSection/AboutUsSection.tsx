import styles from "./AboutUsSection.module.css";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const AboutUsSection = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={styles.title}>Who are we?</h2>
        At AnchorPoint Immigration & Document Services, we provide certified
        translations that meet all USCIS requirements for immigration
        applications. Every document we translate comes with a signed translator
        certification statement confirming the translation is complete,
        accurate, and done by a fluent speaker of both English and the original
        language.
        <ul className={styles.ulLeft}>
          <li className={styles.liLeft}><ReceiptLongIcon />Birth certificates</li>
          <li className={styles.liLeft}><ReceiptLongIcon />Marriage/divorce records</li>
          <li className={styles.liLeft}><ReceiptLongIcon /> Diplomas transcripts</li>
          <li className={styles.liLeft}><ReceiptLongIcon /> Police, legal, and identity documents</li>
        </ul>
        We follow strict formatting guidelines and ensure your documents are
        ready for submission, so you can focus on what matters most — your
        immigration journey.
        <h2 className={styles.title}> Why choose us?</h2>
        <ul className={styles.ulLeft}>
          <li className={styles.liLeft}><DoneOutlineIcon />Translations accepted by USCIS</li>
          <li className={styles.liLeft}><DoneOutlineIcon /> Quick turnaround & professional formatting</li>
          <li className={styles.liLeft}><DoneOutlineIcon />Bilingual support & affordable pricing</li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>What we are not</h2>
        At AnchorPointe – Immigration Services and Document Preparation, we
        believe in honesty and transparency with our clients. That’s why we want
        to make the following clear:
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>
              We are not lawyers and do not offer legal advice
            </strong>
            We are not authorized to represent you before USCIS or provide legal
            guidance regarding your case.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>
              We do not guarantee immigration outcomes
            </strong>
            We assist you in correctly preparing your forms, but final approval
            is solely the responsibility of the U.S. government.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>
              We do not alter or falsify documents
            </strong>
            We only work with truthful information and documentation, in full
            compliance with all legal regulations.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>
              We do not replace specialized legal consultations
            </strong>
            If your case is complex or involves potential legal consequences, we
            recommend consulting with a licensed immigration attorney.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
