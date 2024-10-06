import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (for in-page navigation)
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scroll to the specific section if a hash is found
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Run effect on pathname or hash change

  return null;
};

export default ScrollToTop;
