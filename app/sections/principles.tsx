"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Principle from "../components/principle";

import transparency from "../assets/images/transparency.jpeg"
import teamSpirit from "../assets/images/team-spirit.jpg"
import excellence from "../assets/images/excellence opérationnelle.webp"

export default function Principles() {

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
      start: "top",
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
        <div className="principles box-border flex flex-col gap-20 h-[100vh] ">
            <h2 className="text-[48px] text-center">Our principles</h2>
          <div className={(width>767 ? "w-[100%] " : "gap-[4px] ") + "flex justify-between relative pb-2"}  >
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[100] mt-0 ") + "principle1 " } image={transparency} imageAlt="Transparency" label="Transparency" description="We keep it real and transparent, no smoke and mirrors." />
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[300] mt-4 ") + "principle2 " } image={excellence} imageAlt="Excellence" label="Excellence" description="We're cool, but we're seriopus about delivering top⁻notch quality" />
            <Principle className={ (width>999 ? " " : "absolute w-[100%] flex justify-center z-[200] mt-2 ") + "principle3 " } image={teamSpirit} imageAlt="Team Spirit" label="Team Spirit" description="We're all in this together, fostering collaboration and unity." />
          </div>
        </div>
      </section>
    </>
  )
}