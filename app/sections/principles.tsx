"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Principle from "../components/principle";

import transparency from "../assets/images/transparency.jpeg"
import teamSpirit from "../assets/images/team-spirit.jpg"
import excellence from "../assets/images/excellence opérationnelle.webp"

interface Props{
  title: string
}

export default function Principles({title}:Props) {

  const [width, setWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getTriggetTop(){

    if(width>999){
      let triggerTop = "top top"
      return triggerTop;
    }else if (width>452){
      let triggerTop = "top -72px"
      return triggerTop;
    }else{
      let triggerTop = "top -144px"
      return triggerTop;
    }
    
  }

  let scrollStart:string = getTriggetTop()

  const principles = useRef<HTMLElement>(null);

  useGSAP(() => {

    const timeline = gsap.timeline();
    timeline.from(".principle1", { xPercent: -200, scale: 1 })
    .from(".principle3", { xPercent: 200, scale: 1 })
    .from(".principle2", { yPercent: 200, scale: 1 })
    ScrollTrigger.create({
      animation: timeline,
      trigger: ".principles",
      start: "top 10%",
      end: "+=3500",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: true
    })

  }, { scope: principles, dependencies:[scrollStart] });

  return (
    <>
      <section id="principles" ref={principles} className="px-[50px] py-[150px] max-w-[2000px] ">
        <div className="principles box-border flex flex-col gap-8 ">
            {/* <h2 className="text-[48px] text-center">{title}</h2> */}
            <p className="section-label text-[16px] flex gap-4 items-center"><span className="s-number">04</span><span className="separator"></span><span className="s-label ">{title}</span></p>
          <div className={(width>767 ? "w-[100%] " : "gap-[4px] ") + "flex justify-between relative pb-2"}  >
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[100] mt-0 ") + "principle1 " } image={transparency} imageAlt="Transparence" label="Transparence" description="Nous restons vrais et transparent, pas de poudre aux yeux." />
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[300] mt-4 ") + "principle2 " } image={excellence} imageAlt="Excellence" label="Excellence" description="Nous sommes cool, mais exigeants quant à produire un travail irréprochable." />
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[200] mt-2 ") + "principle3 " } image={teamSpirit} imageAlt="Team Spirit" label="Esprit d'équipe" description="Nous sommes ensemble dans cette quête, la collaboration et l'unité sont la clé." />
          </div>
        </div>
      </section>
    </>
  )
}