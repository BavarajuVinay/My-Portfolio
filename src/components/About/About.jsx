import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in building responsive and optimized websites using 
                HTML, CSS, JavaScript and React. Developed projects like an 
                online movie booking system and an online mobile shopping system.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Developed robust backend solutions using PHP and MySQL. 
              Built scalable APIs and implemented secure database operations 
              for web applications like an online movie booking system 
              and an online mobile shopping system.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>IoT & Automation</h3>
              <p>
              Hands-on experience with IoT applications and industrial automation. 
              Completed a Smart Factory Automation internship at NIT Warangal, 
              working with PLC programming, KUKA robots, and real-time monitoring.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
