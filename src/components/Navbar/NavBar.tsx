import styles from "./NavBar.module.css";
import logo from "../../assets/anchor-symbol.png";
import scrollToSection from "../../utils/scrollToSection";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
          <div className={styles.name}>AnchorPointe</div>
        </div>
        <ul className={styles.tabsContainer}>
          <li className={styles.li}>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("about")}
            >
              Who are we?
            </button>
          </li>
          <li className={styles.li}>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
          </li>
        </ul>
        <button
          className={`${styles.tab} ${styles.highlight}`}
          onClick={() => scrollToSection("contact")}
        >
          Schedule with us
        </button>
        <div className={styles.burger}>
          <MenuIcon sx={{ fontSize: "3rem" }} onClick={() => setOpen(true)} />
        </div>
      </div>
      <NavbarDrawer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
