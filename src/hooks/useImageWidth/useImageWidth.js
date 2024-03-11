import { useState, useEffect } from 'react';

export const useImageWidth = () => {

  const [width, setWidth] = useState(200);

  useEffect(() => {

    const handleResize = () => {
      let newWidth;
      if (window.innerWidth < 500 && window.innerWidth > 600) {
        newWidth = 150
      } else if (window.innerWidth < 600) {
        newWidth = 120 
      } else if (window.innerWidth < 700) {
        newWidth = 150
      }else if (window.innerWidth < 800) {
        newWidth = 180
      } else if (window.innerWidth < 1200) {
        newWidth = 220
      } else {
        newWidth = 180 
      }

      setWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [width]);

  return width;

}
