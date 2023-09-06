import { ButtonMemu } from "../Button_menu/Button_menu";
import styles from "./Header.module.css";

export const Header = ({onClick, setActive, menuActive }) => {


  return (
    <header className={styles.header}>
      <nav className={styles.header_menu}>
        <ul className={styles.header_lists__container}>
          <li>{<ButtonMemu onClick={onClick} />}</li>
          <li>Никита</li>
        </ul>
      </nav>
    </header>
  );
};
