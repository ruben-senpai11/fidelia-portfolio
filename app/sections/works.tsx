"use client"

import Project from "../components/project";

import rabbit from "../assets/images/future-rabbit.png"
import bandage from "../assets/images/shopping.jpg"
import lemonplet from "../assets/images/lemonplet2.webp"
import playStation from "../assets/images/joystick.png"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



interface Props{
  title: string
}


export default function Works({title}:Props) {


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
        end: 'center top',
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <>
      <section ref={container} id="works" className="flex flex-col items-centr gap-20 py-[150px]">
        <h2 className="text-[48px] text-center">{title}</h2>
        {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">02</span><span className="separator"></span><span className="s-label uppercase">Our works</span></p> */}
        <div className="projects border-solid flex gap-24">
          <div className="project-col flex flex-col gap-16">
            <Project label="FAR IN GAMES " link="#" image={playStation} imageAlt="playstation" year="2022" skills={["Conception", "Direction Artistique", "Design", "Dévelopment"]} />
            <Project label="LEMÖNPLET Refonte" link="https://lemonplet.fr/" image={lemonplet} imageAlt="Lemonplet" year="2023" skills={["Intégration web", "UX", "Dévelopment"]} />
          </div>
          <div className={ (width>999 ? "project-col2 transform translate-y-[200px] " : "") + "project-col flex flex-col gap-16" } >
            <Project label="Bunny Management" link="https://mes-lapins.com/" image={rabbit} imageAlt="Rabbit of Future" year="2023" skills={["Saas", "Conception", "Design", "Dévelopment"]} />
            <Project label="Bandage E-commerce" link="https://bandage-ecommerce-ui.vercel.app/" image={bandage} imageAlt="Bandage E-commerce" year="2024" skills={["Collaboration", "Intégration web", "Dévelopment", "UX"]} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="#contact">
            <button className="btn cta w-max">
              <span className="cta-text">Tout découvrir</span>
              <span className="cta-transition"></span>
            </button>
          </a>
        </div>
      </section >
    </>
  )
}