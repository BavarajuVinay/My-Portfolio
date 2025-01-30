import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinay</h1>
        <p className={styles.description}>
        <h3>🚀Developer | AI & IoT Enthusiast</h3>
I'm a B.Tech Computer Science (AI & ML) student with experience in IoT, 
Power BI analytics, and web development. I've worked on projects like smart
glasses for the visually  impaired and data visualization. Passionate about learning and innovation—let's connect!
        </p>
        <a href="mailto:bavarajuvinay@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
