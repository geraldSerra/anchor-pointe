import styles from "./Advice.module.css";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Advice = () => {
  return (
    <div className={styles.warning}>
      <PriorityHighIcon sx={{ color: "white", fontSize: "3.2rem" }} />
      <span>
        Services by Appointment Only To provide each client with dedicated
        attention, we are unable to accommodate walk-ins at this time.
      </span>
    </div>
  );
};

export default Advice;
