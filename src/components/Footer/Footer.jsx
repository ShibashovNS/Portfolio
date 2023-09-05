import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.footer__lists}>
          <li>
            <a
              className={styles.footer__link}
              href="https://t.me/Nikita_Shibashov"
              target="_blank"
            >
              Телеграм
            </a>
          </li>
          <li>
            <a
              className={styles.footer__link}
              href="https://github.com/ShibashovNS"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
