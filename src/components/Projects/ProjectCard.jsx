import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      {/* Project Image */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      {/* Project Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Project Description */}
      <p className={styles.description}>{description}</p>

      {/* Skills Used */}
      {skills && skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}

      {/* Project Links */}
      <div className={styles.links}>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Demo
          </a>
        )}
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Source
          </a>
        )}
      </div>
    </div>
  );
};
