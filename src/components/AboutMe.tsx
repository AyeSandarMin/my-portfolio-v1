import styles from "@/styles/Home.module.css";
import ArrowSvg from "../../public/project-photos/logos/arrow";
import React from "react";

const AboutMe = () => {
  return (
    <div className={`${styles.aboutMeWrapper} ${styles.slideUp}`}>
      <div className={styles.exp}>
      <div className={styles.expCard}>
          <div>
            <h4>
              Frontend Developer ·{" "}
              <span>
                Globiance
                <a href="https://globiance.com/" target="_blank">
                  {" "}
                  <ArrowSvg />
                </a>
              </span>
            </h4>
            <div className={styles.expYear}>Jan 2024 — Jun 2024 <span>( Contractor )</span></div>
            <p>
            Enhanced the existing <a href="https://exchange.globiance.com/" target="_blank">Globiance Exchange</a> by adding new features and resolving
            bugs, improving platform functionality and performance. Developed a decentralized 
            exchange (DEX) inspired by Uniswap, with wallet connectivity, token search, and 
            swap functionality. Built features like pool creation and liquidity management. 
            Integrated smart contract SDKs for secure blockchain interaction.
            </p>
            <div className={styles.expLanguages}>
              <div>React</div>
              <div>Redux</div>
              <div>Next</div>
              <div>Javascript</div>
              <div>Typescript</div>
              <div>Mantine</div>
            </div>
          </div>
        </div>
        <div className={styles.expCard}>
          <div>
            <h4>
              Frontend Developer ·{" "}
              <span>
                Pytheas
                <a href="https://pytheas.travel/" target="_blank">
                  {" "}
                  <ArrowSvg />
                </a>
              </span>
            </h4>
            <div className={styles.expYear}>Sep 2019 — Nov 2023 ( Full-Time )</div>
            <p>
              Developed and styled interactive web solutions tailored for the
              travel and tour industries, blending functionality with visually
              appealing designs to create seamless digital experiences.
            </p>
            <div className={styles.expLanguages}>
              <div>React</div>
              <div>Next</div>
              <div>Javascript</div>
              <div>Typescript</div>
              <div>Antd</div>
              <div>LESS</div>
            </div>
          </div>
        </div>
        <div className={styles.expCard}>
          <div>
            <h4>
              Web Developer ·{" "}
              <span>
                Ed Tech Myanmar
                <a href="" target="_blank">
                  <ArrowSvg />
                </a>
              </span>
            </h4>
            <div className={styles.expYear}>Oct 2018 — Aug 2019 ( Full-Time )</div>
            <p>
              Worked closely with senior developers to implement user interface
              enhancements and system features for School Management
              System.Contributed to quality assurance efforts by testing and
              debugging to ensure the functionality of the system.
            </p>
            <div className={styles.expLanguages}>
              <div>PHP</div>
              <div>Laravel</div>
              <div>Vue</div>
              <div>JQuery</div>
              <div>MySQL</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h4>About Me</h4>
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
