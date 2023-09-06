import styles from "./Burger_menu.module.css";

export const BurgerMenu = ({onClick, header, items, menuActive }) => {
  return (
    <div onClick={onClick} className={menuActive ? styles.menu : styles.menu_active}>
      <div onClick={onClick} className={styles.menu__blur} />
      <ul className={styles.menu__content}>
        <li className={styles.menu__header}>{header}</li>
        {items.map((item) => (
          <li key={item._id}>
            <a className={styles.menu__link} href={item.href}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
