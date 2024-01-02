import { Layout, Menu, MenuProps } from "antd";
import {
  HomeOutlined,
  PaperClipOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import styles from '@/styles/Header.module.css';

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "About Me",
    key: "about",
    icon: <SmileOutlined />,
  },
  {
    label: "Projects",
    key: "projects",
    icon: <SmileOutlined />,
  },
  {
    label: "Resume",
    key: "resume",
    icon: <PaperClipOutlined />,
  },
];

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Layout.Header className={styles.headerWrapper}>
        <Link href="/home">
          <h4>Aye Sandar Min</h4>
        </Link>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className={styles.menus}
        />
      </Layout.Header>
    </Layout>
  );
};
export default Header;
