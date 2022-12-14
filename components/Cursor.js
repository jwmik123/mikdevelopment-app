import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const coords = { x: 0, y: 0 };

const Cursor = () => {
  const [linkHovered, setLinkHovered] = useState(false);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });

    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const animateCursor = () => {
      circles.forEach((circle) => {
        circle.x = 0;
        circle.y = 0;
      });
      document.addEventListener("mousemove", (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";

          circle.style.scale = (circles.length - index) / circles.length;
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.4;
          y += (nextCircle.y - y) * 0.4;
        });

        requestAnimationFrame(animateCircles);
      };
      animateCircles();
    };
    animateCursor();
    handleLinkHoverEvents();
  });

  return (
    <div className="circle-wrapper">
      {linkHovered ? (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="circle"
        ></motion.div>
      ) : (
        <motion.div
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="circle"
        ></motion.div>
      )}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Cursor;
