import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.scss";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      // увеличиваем круг (эффект приближения)
      .to(img, {
        clipPath: "circle(150% at 50% 50%)",
        scale: 1.2,
        ease: "none",
      });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div ref={imgRef} className="hero-image" />
    </section>
  );
};

export default HeroSection;
