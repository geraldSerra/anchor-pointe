import * as React from "react";
import Drawer from "@mui/material/Drawer";
import scrollToSection from "../../utils/scrollToSection";
import styles from "./NavbarDrawer.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function NavbarDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  const List = () => (
    <ul className={styles.tabsContainer}>
      <div className={styles.head}>
        ANCHOR POINTE
        <CloseIcon sx={{ fontSize: "2.5rem" }} onClick={() => setOpen(false)} />
      </div>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => {
            scrollToSection("about");
            // setOpen(false);
          }}
        >
          Who are we?
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => {
            scrollToSection("services");
            // setOpen(false);
          }}
        >
          Services
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={`${styles.tab} ${styles.highlight}`}
          onClick={() => {
            scrollToSection("contact");
            setOpen(false);
          }}
        >
          Schedule with us
        </button>
      </li>
    </ul>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <List />
      </Drawer>
    </div>
  );
}
