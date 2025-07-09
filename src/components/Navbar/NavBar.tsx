import styles from "./NavBar.module.css";
import logo from "../../assets/anchor-symbol.png";
import scrollToSection from "../../utils/scrollToSection";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" /> ANCHOR POINTE
        </div>

        <ul className={styles.tabsContainer}>
          <li className={styles.li}>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
          </li>
          <li className={styles.li}>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("about")}
            >
              Who are we?
            </button>
          </li>
        </ul>
        <button
          className={`${styles.tab} ${styles.highlight}`}
          onClick={() => scrollToSection("contact")}
        >
          Schedule with us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
