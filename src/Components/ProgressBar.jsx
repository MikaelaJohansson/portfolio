import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-web';
import progressBarData from "../assets/progressBar.json";

const ProgressBar = ({ percentage, width, height }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !animationRef.current) {
      animationRef.current = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: progressBarData,
        renderer: 'svg',
        loop: false,
        autoplay: false,
      });
    }

    if (animationRef.current) {
      const anim = animationRef.current;
      anim.addEventListener('DOMLoaded', () => {
        const totalFrames = anim.totalFrames;
        const frameToReach = (totalFrames * percentage) / 100;
        anim.goToAndStop(frameToReach, true);
      });

      // Clean up on component unmount
      return () => {
        anim.destroy();
        animationRef.current = null;
      };
    }
  }, [percentage]); // Ensure `percentage` is a dependency

  return (
    <div style={{ width, height }} ref={containerRef}></div>
  );
};

export default ProgressBar;








