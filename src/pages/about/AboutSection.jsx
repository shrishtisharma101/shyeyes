import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/images/about/01.png";
import img2 from "../../assets/images/about/02.png";
import img3 from "../../assets/images/about/03.png";
import img4 from "../../assets/images/about/04.png";
 
const stats = [
  { id: 1, value: 50452, label: "Verified Profiles", icon: img1 },
  { id: 2, value: 12784, label: "Active Members Today", icon: img2 },
  { id: 3, value: 6789, label: "Men Currently Online", icon: img3 },
  { id: 4, value: 5995, label: "Women Currently Online", icon: img4 },
];
 
// Format number with commas
const formatNumber = (num) => num.toLocaleString();
 
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const intervalRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting
            let start = 0;
            const duration = 5000; // 5 sec
            const stepTime = Math.max(Math.floor(duration / target), 20);
 
            intervalRef.current = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= target) {
                clearInterval(intervalRef.current);
              }
            }, stepTime);
          } else {
            // Reset when out of view
            clearInterval(intervalRef.current);
            setCount(0);
          }
        });
      },
      { threshold: 0.5 }
    );
 
    if (ref.current) observer.observe(ref.current);
 
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      clearInterval(intervalRef.current);
    };
  }, [target]);
 
  return (
    <h2 className="counter" ref={ref}>
      {formatNumber(count)}
    </h2>
  );
};
 
const AboutSection = () => {
  return (
    <section className="about-section padding-tb bg-img">
      <div className="container">
        <div className="section-header text-center">
          <h4>About SHY-EYES</h4>
          <h2>Find Real Connections, One Date at a Time ❤️</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-4">
            {stats.map((stat) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12" key={stat.id}>
                <div className="lab-item about-item">
                  <div className="lab-inner text-center">
                    <div className="lab-thumb">
                      <img src={stat.icon} alt="img" />
                    </div>
                    <div className="lab-content">
                      <Counter target={stat.value} />
                      <p>{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default AboutSection;