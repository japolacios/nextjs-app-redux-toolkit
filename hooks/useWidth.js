import { useEffect, useState } from "react";

export default function useWidth() {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth <= 550) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleChange);

    handleChange();

    return () => window.removeEventListener("resize", handleChange);
  }, []);
  return isMobile;
}
