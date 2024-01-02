import styles from "@/styles/Home.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  photo: string;
  url: string;
}

type MyProjectsProps = {
  projects: Project[];
};

const MyProjects: React.FC<MyProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectTitle}>
        <h4>
          Here are some projects that <br />
          I&apos;ve contributed to as frontend devleoper at{" "}
          <span className={styles.companyName}>Pytheas Infosys</span>
        </h4>
        <div className="dow-arrow">
          <DownOutlined />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "180px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
        {/* <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.slice(4, 8).map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "240px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
        <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.slice(8, 12).map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "240px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
        <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.slice(12, 16).map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "240px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
        <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.slice(16, 20).map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "240px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
        <Row gutter={[30, 30]} className={styles.cardRow}>
          {projects.slice(20, 24).map((item, index) => {
            return (
              <motion.div
                key={`item-${index}`}
                className={styles.cardCol}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div
                  className={styles.photoContainer}
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    height: "240px",
                  }}
                />
                <div className={styles.slide}>
                  <div className={styles.slideContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardBtnWrapper}>
                      <a href={item.url} className={styles.cardBtn}>
                        view website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row> */}
      </div>
    </div>
  );
};
export default MyProjects;
