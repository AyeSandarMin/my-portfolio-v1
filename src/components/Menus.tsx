import { motion } from "framer-motion";

interface MenuProps {
  scrollToSection: (index: number) => void;
}

const Menus: React.FC<MenuProps> = ({ scrollToSection }) => {
  const handleClick = (index: number) => {
    scrollToSection(index);
  };

  return (
    <nav className="menu">
      <ul>
        <li>
          <motion.a whileTap={{ scale: 0.95 }} onClick={() => handleClick(0)}>
            Home
          </motion.a>
        </li>
        <li>
          <motion.a whileTap={{ scale: 0.95 }} onClick={() => handleClick(1)}>
            About Me
          </motion.a>
        </li>
        <li>
          <motion.a whileTap={{ scale: 0.95 }} onClick={() => handleClick(2)}>
            Projects
          </motion.a>
        </li>
        <li>
          <a href="mailTo:ayesandarmin.dev@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menus;
