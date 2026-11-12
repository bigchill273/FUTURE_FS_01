import { useState, useEffect } from "react";

const getDeviceSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState(getDeviceSize);

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize(getDeviceSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = deviceSize;

  return {
    width,
    height,

    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

export default useDeviceSize;
