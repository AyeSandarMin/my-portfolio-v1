import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import AboutMe from "@/components/AboutMe";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import MyProjects from "@/components/MyProjects";
import { projects } from "../../public/data";
import { easeInOut, motion } from "framer-motion";
import AvatarAnimation from "@/components/AvatarAnimation";

interface HomeProps {
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

const Home: React.FC<HomeProps> = ({ sectionRefs }) => {
  const introText = "I'm Aye !";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentLength = displayedText.length;
      const newText = introText.slice(0, currentLength + 1);
      setDisplayedText(newText);

      if (newText === introText) {
        clearInterval(intervalId);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, [displayedText, introText]);
  return (
    <>
      <Head>
        <title>Aye Sandar Min | Protfolio</title>
        <meta name="description" content="This is Aye's Portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <motion.main
        className={`${styles.main}`}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.introWrapper} ref={sectionRefs[0]}>
          <div className={styles.intro}>
            <h4>Hi,</h4>
            <h1>{displayedText}</h1>
            <p>
              I <span>specialize</span> in building exceptional and accessible
              digital experiences for {" "}
              <span>websites </span>and <span>web applications</span>,
              <br /> bringing <span>creativity</span> and{" "}
              <span>functionality</span> together seamlessly.
            </p>
            <div className={styles.socialIconsWrapper}>
              <div className={styles.socialIcon}>
                <a href="https://github.com/AyeSandarMin" target="_blank">
                  <GithubOutlined />
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a
                  href="https://www.linkedin.com/in/aye-sandar-min/"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a href="https://www.instagram.com/__ayesdm__/" target="_blank">
                  <InstagramOutlined />
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a href="mailto:ayesandarmin.dev@gmail.com">
                  <MailOutlined />
                </a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AvatarAnimation />
          </motion.div>
        </div>
        <motion.div
          ref={sectionRefs[1]}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          ref={sectionRefs[2]}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ width: "100%" }}
        >
          <MyProjects projects={projects} />
        </motion.div>
      </motion.main>
    </>
  );
};
export default Home;
