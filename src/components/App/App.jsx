import { useState } from "react";
import { Header } from "../Header/Header";
import { BurgerMenu } from "../Burger-menu/Burger_menu";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import styles from "./App.module.css";

function App() {
  const [menuActive, setActive] = useState(true);

  const onClick = () => {
    setActive(!menuActive);
  };

  const items = [
    {
      _id: 1,
      value: "Резюме",
      href: "https://spb.hh.ru/applicant/resumes/view?resume=ead4493eff057c2a2f0039ed1f324c3773716c",
    },
    { _id: 2, value: "Телеграм,", href: "https://t.me/Nikita_Shibashov" },
    { _id: 3, value: "GitHub", href: "https://github.com/ShibashovNS" },
    { _id: 4, value: "Вконтакте", href: "https://vk.com/nikita5680" },
  ];

  return (
    <div className={styles.App}>
      <Header onClick={onClick} menuActive={menuActive} setActive={setActive} />
      <Main />
      <Footer />
      <BurgerMenu
        onClick={onClick}
        menuActive={menuActive}
        setActive={setActive}
        header={"Общая информация"}
        items={items}
      />
    </div>
  );
}

export default App;
