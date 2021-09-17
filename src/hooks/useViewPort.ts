import { useState, useEffect } from 'react';
import { isBrowser } from '../utils/domains';

const tabletWidth = 1170;
const mobileWidth = 768;

const useViewPort = () => {
  const [width, setWidth] = useState(isBrowser() ? window.innerWidth : 1366);
  const [height, setHeight] = useState(isBrowser() ? window.innerHeight : 768);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return {
    width,
    height,
    isMobile: width <= mobileWidth,
    isTablet: width <= tabletWidth,
  };
};

export default useViewPort;
