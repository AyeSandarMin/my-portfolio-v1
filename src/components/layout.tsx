import Footer from "@/elements/Footer";
import Header from "@/elements/header";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrap}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
