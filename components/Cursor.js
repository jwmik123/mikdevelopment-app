import { useEffect } from "react";

const coords = { x: 0, y: 0 };

const Cursor = () => {
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
          circle.style.scale = (index - 10) / 10;
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
      };
      animateCircles();
    };
    animateCursor();
  });

  return (
    <>
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
    </>
  );
};

export default Cursor;
