import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import styles from "./ServicesSection.module.css";
import { formularios } from "../../data/services";

const ServicesSection = () => {
  const ServiceCard = ({ name, info, price }: any) => {
    return (
      <div className={styles.card}>
        <div>
          <FeedOutlinedIcon sx={{ fontSize: { xs: "20px", sm: "50px" } }} />
        </div>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.cardPrice}>${price}</div>
      </div>
    );
  };

  return (
    <section id='services' className={styles.container}>
      <div className={styles.title}>Services</div>
      <div className={styles.cardContainer}>
        {formularios.map((item: any) => (
          <ServiceCard name={item.name} info={item.info} price={item.price} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
