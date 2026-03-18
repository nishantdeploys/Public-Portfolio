"use client";;
import { useEffect, useState } from "react";

export const Meteors = ({
  number = 20
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="meteor-shower" aria-hidden="true">
      {[...meteorStyles].map((style, idx) => (
        <span key={idx} className="meteor" style={style}>
          <div className="meteor-tail" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
