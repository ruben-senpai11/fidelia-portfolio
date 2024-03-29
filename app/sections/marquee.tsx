"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



interface Props {
  marquee1Content: string[],
  marquee2Content: string[]
}

export default function Marquee({ marquee1Content, marquee2Content }: Props) {

  useGSAP(() => {

    gsap.to(".marquee1", {
      x: -300,
      scrollTrigger: {
        trigger: '.marquee1',
        toggleActions: "restart pause reverse pause",
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    });

    gsap.to(".marquee2", {
      x: 200,
      scrollTrigger: {
        trigger: '.marquee2',
        toggleActions: "restart pause reverse pause",
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    });

  }, {});

  return (
    <>
      <section id="marquee" className="flex flex-col gap-16 py-[100px] w-[100%] overflow-hidden">
        <div className="marquee1 flex flex-nowrap gap-8 ">
          {marquee1Content.map((item, index) => (
            <span className="marquee text-nowrap whitespace-nowrap flex items-center " key={index} >
              {item}
              {index < marquee1Content.length - 1 && <span className="hyphen"></span>}
            </span>
          ))}
        </div>
        <div className="marquee2 flex flex-nowrap gap-8 ml-[-200px] ">
          {marquee2Content.map((item, index) => (
            <span className="marquee text-nowrap whitespace-nowrap flex items-center" key={index} >
              {item}
              {index < marquee2Content.length - 1 && <span className="hyphen"></span>}
            </span>
          ))}
        </div>
        <p className=""></p>
      </section>
    </>
  )
}