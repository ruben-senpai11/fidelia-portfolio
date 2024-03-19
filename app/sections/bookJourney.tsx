"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BookJourney() {

  const dreamContainer = useRef<HTMLElement>(null)

  useGSAP(() => {

    const timeline = gsap.timeline();
    timeline
      .from(".dream-container", { borderLeft: "#2222ff" })
      .from(".dream-container", { borderTop: "#2222ff" })
      .from(".dream-container", { borderRight: "#2222ff" })
      .from(".dream-container", { borderBottom: "#2222ff" })
      .from(".dream-container", { borderColor: "#2222ff" })
      .from(".btn.cta", { opacity: 0 })
      .from(".dream-container", { scale: 1 })
    ScrollTrigger.create({
      animation: timeline,
      trigger: ".dream-container",
      start: "top 15%",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: true
    })

  }, { scope: dreamContainer });


  return (
    <>
      <section ref={dreamContainer} id="book-journey" className="flex flex-col items-center px-[70px] py-[100px] ">
        <div className="dream-container flex flex-col justify-between border-solid gap-24 py-[100px] ">
          <div className="flex justify-center px-[24%] dream-part1">
            <h2 className="text-[48px] capitalize text-center "> Unlock 30 Minutes to dream together</h2>
          </div>
          <div className="flex justify-center dream-part2">
            <div className="flex justify-center w-[50%] ">
              <p className="text-[20px]] " >Join us for a 30-minute conversation where we can explore your ideas, collaborate on possibilities, and shape your vision into reality.</p>
            </div>
            <div className="flex justify-center items-center w-[30%] ">
              <a href="#contact">
                <button className="btn cta">
                  <span className="cta-text text-nowrap">book the journey</span>
                  <span className="cta-transition"></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}