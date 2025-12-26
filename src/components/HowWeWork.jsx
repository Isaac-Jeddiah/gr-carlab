//how we work component
import React, { useRef, useEffect } from "react";
import HowWeWorkDesk from "./HowWeWorkDesktop.jsx";
import CarWorkflowMobile from "./HowWeWorkMobile.jsx";

const HowWeWork = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <>
    {!isMobile ? <HowWeWorkDesk /> : <CarWorkflowMobile />}
  </>
);

};

export default HowWeWork;