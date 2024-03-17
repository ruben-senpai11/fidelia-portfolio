"use client"

import Project from "../components/project";

import rabbit from "../assets/images/future-rabbit.png"
import bandage from "../assets/images/ecommerce.png"
import lemonplet from "../assets/images/lemonplet2.webp"
import playStation from "../assets/images/joystick.jpg"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Works() {


  const [width, setWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const container = useRef<HTMLElement>(null);

  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.to(".project-col2", {
      y: -100,
      scrollTrigger: {
        trigger: '.project-col2',
        toggleActions: "restart pause reverse pause",
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <>
      <section ref={container} id="works" className="flex flex-col items-centr gap-20 py-[150px]">
        <h2 className="text-[48px] text-center">Our works</h2>
        {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">02</span><span className="separator"></span><span className="s-label uppercase">Our works</span></p> */}
        <div className="projects flex gap-24">
          <div className="project-col flex flex-col gap-16">
            <Project label="FAR IN GAMES Tournament" image={playStation} imageAlt="playstation" year="2022" skills={["Concept", "Creative Direction", "Design", "Development"]} />
            <Project label="LEMÖNPLET Refonte" image={lemonplet} imageAlt="Lemonplet" year="2023" skills={["Integration", "UIX", "Development"]} />
          </div>
          <div className={ (width>999 ? "project-col2 transform translate-y-[200px] " : "") + "project-col flex flex-col gap-16" } >
            <Project label="Bunny Management" image={rabbit} imageAlt="Rabbit of Future" year="2023" skills={["Saas", "Concept", "Design", "Development"]} />
            <Project label="Bandage E-commerce" image={bandage} imageAlt="Bandage E-commerce" year="2024" skills={["Integration", "Concept", "Creative Direction", "Design", "Development"]} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="#contact">
            <button className="btn cta w-max">
              <span className="cta-text">Discover all</span>
              <span className="cta-transition"></span>
            </button>
          </a>
        </div>
      </section >
    </>
  )
}