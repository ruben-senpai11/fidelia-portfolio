"use client"
import { useState } from "react"

import enFlag from "../../public/images/flag_uk.webp"
import frFlag from "../../public/images/flag_fr.png"
import Image from "next/image"

export default function Language() {

  const [currentLanguage, setCurrentLanguage] = useState("EN")

  const handleLanguauge = () => {
    if(currentLanguage == "EN"){
      setCurrentLanguage("FR")
    }else{
      setCurrentLanguage("EN")
    }
  }


  const [clickedButton, setClickedButton] = useState(false);

  const handleClick = () => {
    setClickedButton(!clickedButton)
    console.log("clicked" , clickedButton)
  };


  return (
    <>
      <div className="flex items-center pt-[0px] gap-1 z-[99999] relative " onClick={handleClick}>
        <div className="language-selector">
          <div className="flag">
            <Image src={currentLanguage== "EN" ? enFlag : frFlag } alt={currentLanguage} width={25} height={12} />
          </div>
          <div className="language text-[14px]">{currentLanguage} </div>
          <svg fill="currentColor" opacity=".7" width="10px" height="10px" viewBox="0 0 30.727 30.727">
            <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
          </svg>
        </div>{clickedButton}
        <div className={ (clickedButton===true ? "d-flex" : "d-none") + " language-selector addtional-language" } onClick={handleLanguauge} >
          <div className="flag">
            <Image src={currentLanguage== "FR" ? enFlag : frFlag } alt={currentLanguage} width={25} height={12} />
          </div>
          <div className="language text-[14px]">{currentLanguage==="EN" ? "FR" : "EN"} </div>
        </div>
      </div>
{/* 
      <div className="flex d-none items-center pt-[0px] gap-1 z-[99999] ">
        <span className={(currentLanguage === "EN" ? "active " : "") + "language uppercase cursor-pointer font-medium text-[14px] pt-[2px]"} onClick={() => handleLanguauge("EN")} >EN</span>
        <span className="text-[14px]">|</span>
        <span className={(currentLanguage === "FR" ? "active " : "") + "language uppercase cursor-pointer font-medium text-[14px] pt-[2px]"} onClick={() => handleLanguauge("FR")} >FR</span>
      </div> */}
    </>
  )
}