import { Layout } from "antd";
import styles from '@/styles/Footer.module.css';
const Footer = () => {
  return (
    <Layout.Footer className={styles.footerWrapper}>
      <div>© 2023 Aye Sandar Min</div>
    </Layout.Footer>
  );
};
export default Footer;
