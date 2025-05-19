import styles from "@/styles/Home.module.css";
import ArrowSvg from "../../public/project-photos/logos/arrow";
import React from "react";

const AboutMe = () => {
  return (
    <div className={`${styles.aboutMeWrapper} ${styles.slideUp}`}>
      <div className={styles.aboutMe}>
        <h4>About Me?</h4>
        <p>
          Hello, My name is <span>Aye Sandar Min</span>, a frontend developer
          hailing from Myanmar.
        </p>
        <p>
          Back in 2012, I made the decision to enroll in Computer University in
          my country, making the initial step in my journey into web
          development. <br />
          Although my coding journey kicked off after my graduation in 2018, the
          roots were planted in 2012. Since then, <br />
          I&apos;ve been immersed in the world of coding, specializing in
          front-end development.
        </p>
        <p>
          More than just a coder, I am a design enthusiast who believes in the
          power of beautiful UI/UX to attract and engage users with technology.{" "}
        </p>
        <p>
          My goal is to create websites and web apps that are not only
          functional but also seamless and visually appealing for end-users.{" "}
        </p>
        <p style={{ paddingTop: 10 }}>
          Fun Fact: I enjoy socializing with friends away from computer!
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
