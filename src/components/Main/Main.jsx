import styles from "./Main.module.css";
import image from "../../../src/image/main/photo.jpg";
import { Projects } from "./projects/Projects";

export const Main = () => {
  return (
    <main className={styles.main}>
      {" "}
      <div className={styles.main_flex}>
        <div className={styles.main__photo_container}>
          <img className={styles.main__photo} src={image} />
          <div />
        </div>
        <div className={styles.main_container}>
          {" "}
          Привет! Я начинающий frontend-разработчик, программирование часто
          привлекало мое внимание, поскольку на работе приходилось
          взаимодействовать с разработчиками реализующие инструменты (Дашборды)
          позволяющие визуализировать различные аналитические данные. Если
          кратко во frontend разработке, мне нравится:{" "}
          <ol>
            {" "}
            <li>
              Писать инструкции, которые запускают интересные процессы, с
              описанием их логики.
            </li>{" "}
            <li>
              Результат моей работы в конечном итоге отражается на
              взаимодействие пользователя с веб-приложением, что дает
              возможность осознавать важность проделанной работы.
            </li>{" "}
          </ol>{" "}
          Я решил стать frontend разработчиком, с целью поиска деятельности,
          процесс которой действительно мне интересен.{" "}
        </div>{" "}
      </div>
      <h3 className={styles.main__text}>Проекты</h3>
      <Projects />
    </main>
  );
};
