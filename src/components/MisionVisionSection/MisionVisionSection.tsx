import styles from "./MisionVisionSection.module.css";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import getCssVariable from "../../utils/getCssVariable";

const accent = getCssVariable("--accent-color");

const MisionVisionSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Mission</h2>
        <TrackChangesOutlinedIcon sx={{ fontSize: "12rem", color: accent }} />
        <div>
          To provide immigration and document preparation services with
          accuracy, ethics, and warmth, helping individuals and families achieve
          their immigration goals through reliable, accessible, and personalized
          guidance.
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>Vision</h2>
        <RemoveRedEyeOutlinedIcon sx={{ fontSize: "12rem", color: accent }} />
        <div>
          To be the point of reference in our community for trustworthy
          immigration services, recognized for our commitment to integrity,
          inclusion, and the empowerment of those seeking to build a future in
          the United States.
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
