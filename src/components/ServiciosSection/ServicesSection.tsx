import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import styles from "./ServicesSection.module.css";
import { formularios } from "../../data/services";

const notaryDocuments = [
  "Affidavits and sworn statements",
  "Power of attorney forms",
  "Parental consent for travel",
  "School and medical forms",
  "Lease or rental agreements",
  "Identity verification",
  "Acknowledgments and jurats",
  "Permission to travel letters for minors",
  "General documents requiring a notary seal",
];

const ServiceCard = ({
  name,
  form,
  info,
  price,
}: {
  name: string;
  form: string;
  info: string;
  price: number;
}) => {
  return (
    <div className={styles.card}>
      <div>
        <FeedOutlinedIcon
          className={styles.icon}
          sx={{ fontSize: { xs: "10px", sm: "20px" } }}
        />
      </div>
      <div className={styles.cardTitle}>{name}</div>
      <div className={styles.form}>{form}</div>
      <div className={styles.info}>{info}</div>
      <div className={styles.cardPrice}>${price}</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Services</div>
        <div className={styles.cardContainer}>
          {formularios.map((item: any) => (
            <ServiceCard
              name={item.name}
              form={item.form}
              info={item.info}
              price={item.price}
            />
          ))}
        </div>
        <div className={styles.extra}>
          At AnchorPoint Immigration & Document Services, we offer professional
          notarization services for a wide range of personal, legal, and
          official documents — beyond immigration-related paperwork.
        </div>
        <div className={styles.title}>Our Notary Public services include:</div>
        <div className={styles.notaryContainer}>
          {notaryDocuments.map((notary: string) => (
            <div className={styles.notary}>{notary}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
