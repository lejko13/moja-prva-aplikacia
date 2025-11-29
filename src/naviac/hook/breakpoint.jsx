import { useState, useEffect } from "react";

export default function useBreakpoint() {
  const getSize = () => window.innerWidth;

  const [width, setWidth] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 600,
    isTablet: width >= 600 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}
