import styles from "./WhatNotCard.module.css";
const WhatNot = ({ icon, title, description }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default WhatNot;
