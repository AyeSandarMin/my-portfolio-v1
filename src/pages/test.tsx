import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const text = "This is a typing animation.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentLength = displayedText.length;
      const newText = text.slice(0, currentLength + 1);
      setDisplayedText(newText);

      if (newText === text) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [displayedText, text]);

  return (
    <div>
      <motion.p>{displayedText}</motion.p>
    </div>
  );
};

export default TypingAnimation;
