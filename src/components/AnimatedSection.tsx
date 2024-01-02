// components/SlideUpSection.tsx

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    if (!isVisible && isInViewport(sectionRef.current)) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={`${styles.animatedSection} ${
        isVisible ? styles.slideUp : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
