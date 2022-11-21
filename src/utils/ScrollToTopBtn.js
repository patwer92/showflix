import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="go-to-top">
      {showTopBtn && <ChevronUpIcon className="to-top-btn" onClick={goToTop} />}
    </div>
  );
};
export default ScrollToTopBtn;
