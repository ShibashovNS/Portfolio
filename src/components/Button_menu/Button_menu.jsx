import styles from "./Button_menu.module.css";

export const ButtonMemu = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.burger_btn}>
      <span />
    </div>
  );
};
