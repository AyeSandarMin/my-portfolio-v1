import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrap}>
      <main>{children}</main>
      <div className={styles.footerWrapper}>© 2025 Aye Sandar Min</div>
    </div>
  );
};

export default Layout;
