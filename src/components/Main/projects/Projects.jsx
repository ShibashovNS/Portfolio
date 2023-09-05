import { projectsArray } from "../../../utils/data/data";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      {projectsArray.map((element) => (
        <a
          key={element._id}
          className={styles.projects__link}
          target="_blank"
          href={element.link}
        >
          <div>
            <h2>{element.name}</h2>
            <img
              className={styles.projects__image}
              src={element.image}
              alt={element.name}
            />
          </div>
        </a>
      ))}
    </div>
  );
};
