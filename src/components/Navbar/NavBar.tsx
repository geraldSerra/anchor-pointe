import styles from "./NavBar.module.css";
import logo from "../../assets/anchor-symbol.png";
import scrollToSection from "../../utils/scrollToSection";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.tabsContainer}>
          <li>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("about")}
            >
              Who are we?
            </button>
          </li>
          <li>
            <button
              className={`${styles.tab} ${styles.highlight}`}
              onClick={() => scrollToSection("contact")}
            >
              Schedule with us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
