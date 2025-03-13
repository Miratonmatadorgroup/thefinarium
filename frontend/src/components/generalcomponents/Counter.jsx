import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const Counter = ({ endValue, decimals = 2, duration = 2000 }) => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } 
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && countRef.current) {
      anime({
        targets: { value: 0 },
        value: endValue,
        easing: 'easeOutExpo',
        duration: duration,
        update: function (anim) {
          const currentValue = anim.animations[0].currentValue;
          countRef.current.innerHTML =
            currentValue < endValue ? currentValue.toFixed(decimals) : endValue;
        }
      });
    }
  }, [isVisible, endValue, decimals, duration]);

  return <span ref={countRef}>0</span>;
};

export default Counter;
