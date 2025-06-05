import React, { useState, useEffect } from "react";

const WindowSizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Window Size Tracker</h2>
      <p>
        <strong>Width:</strong> {windowSize.width}px
      </p>
      <p>
        <strong>Height:</strong> {windowSize.height}px
      </p>
    </div>
  );
};

export default WindowSizeTracker;
