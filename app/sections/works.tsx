"use client"

import Project from "../components/project";

import rabbit from "../assets/images/future-rabbit.png"
import bandage from "../assets/images/shopping.jpg"
import lemonplet from "../assets/images/lemonplet2.webp"
import white_developer from "../assets/images/White developer.png"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



interface Props {
  title: string
}


export default function Works({ title }: Props) {


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
      <section ref={container} id="works" className="flex flex-col items-centr gap-8 py-[100px] pb-0">
        {/* <h2 className="text-[48px] pb-8 text-center">{title}</h2> */}
        <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">02</span><span className="separator"></span><span className="s-label uppercase">{title}</span></p>
        <div className="projects border-solidd flex gap-24">
          <div className="project-col flex flex-col gap-16">
            <Project label="White Developer's Portfolio "
              description=""
              link="https://whitedev.vercel.app/" image={white_developer} imageAlt="white_developer" year="2024"
              skills={["Conception", "Direction Artistique", "Design", "Dévelopment"]}
            />
            <Project label="LEMÖNPLET Refonte"
              description="La marque asiatique a redonné à sa boutique Shopify un design au goût du jour. C'est le lieu d'intégrer une maquette à un thème Shopify et d'implémenter de nouvelles fonctionnalités"
              link="https://lemonplet.fr/" image={lemonplet} imageAlt="Lemonplet" year="2023"
              skills={["Collaboration", "Intégration web", "E-commerce"]}
            />
          </div>
          <div className={(width > 999 ? "project-col2 transform translate-y-[200px] " : "") + "project-col flex flex-col gap-16"} >
            <Project label="Bunny Management"
              description="La cuniculture est rentable mais délicate. Ma ferme en ligne est le Saas qui résoud ce paradigme, épaule et guide les éleveurs au quotidien"
              link="https://mes-lapins.com/" image={rabbit} imageAlt="Rabbit of Future" year="2023"
              skills={["Saas", "Conception", "Design", "Dévelopment"]}
            />
            <Project label="Bandage E-commerce"
              description="Intégrer une maquette Figma à un projet React, c'etait le but et nous l'avons fait. Ce faisant, nous avons veillé à assurer l'expérience utilisateur, comme d'habitude d'ailleurs" 
              link="https://bandage-ecommerce-ui.vercel.app/"
              image={bandage} imageAlt="Bandage E-commerce" year="2024"
              skills={["Intégration web", "UX"]}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="#contact" className="btn cta w-max">
            <span className="cta-text">Tout découvrir</span>
            <span className="cta-transition"></span>
          </a>
        </div>
      </section >
    </>
  )
}