import styles from "./AboutUsSection.module.css";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import WhoCard from "../WhoCard/WhoCard";
import Translation from "../../assets/Translation";
import Formatting from "../../assets/Formatting";
import Support from "../../assets/Support";
import WhatNotCard from "../WhatNotCard/WhatNotCard";

const disclaimers = [
  {
    icon: "1",
    title: "We are not lawyers and do not offer legal advice",
    description:
      "We are not authorized to represent you before USCIS or provide legal guidance regarding your case.",
  },
  {
    icon: "2",
    title: "We do not guarantee immigration outcomes",
    description:
      "We assist you in correctly preparing your forms, but final approval is solely the responsibility of the U.S. government.",
  },
  {
    icon: "3",
    title: "We do not alter or falsify documents",
    description:
      "We only work with truthful information and documentation, in full compliance with all legal regulations.",
  },
  {
    icon: "4",
    title: "We do not replace specialized legal consultations",
    description:
      "If your case is complex or involves potential legal consequences, we recommend consulting with a licensed immigration attorney.",
  },
];

const whoArray = [
  {
    icon: <ReceiptLongIcon sx={{ fontSize: "3rem" }} />,
    title: "Birth certificates",
    description:
      "Official government-issued documents that confirm the details of a person's birth, including name, date, place of birth, and parentage.",
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: "3rem" }} />,
    title: "Marriage/Divorce records",
    description:
      "Legal documents that provide evidence of a marriage or its dissolution, often required for legal, immigration, or personal purposes.",
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: "3rem" }} />,
    title: "Diplomas transcripts",
    description:
      "Educational records that certify the completion of academic programs and list the courses taken and grades received.",
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: "3rem" }} />,
    title: "Police, legal and identify documents",
    description:
      "A variety of official records used to verify identity, background, or legal status, including police clearances, court documents, and national IDs.",
  },
];

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
          {whoArray.map((item) => (
            <li className={styles.li}>
              <WhoCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
        We follow strict formatting guidelines and ensure your documents are
        ready for submission, so you can focus on what matters most — your
        immigration journey.
        <h2 className={styles.title}> Why choose us?</h2>
        <ul className={styles.ulWhy}>
          <li className={styles.liWhy}>
            <Translation width={"4rem"} />
            Translations accepted by USCIS
          </li>
          <li className={styles.liWhy}>
            <Formatting width={"4rem"} /> Quick turnaround & professional
            formatting
          </li>
          <li className={styles.liWhy}>
            <Support width={"4rem"} />
            Bilingual support & affordable pricing
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>What we are not</h2>
        At AnchorPointe – Immigration Services and Document Preparation, we
        believe in honesty and transparency with our clients. That’s why we want
        to make the following clear:
        <ul className={styles.ulRight}>
          {disclaimers.map((item) => (
            <li className={styles.li}>
              <WhatNotCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
