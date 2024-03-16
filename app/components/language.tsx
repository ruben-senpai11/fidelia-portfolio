"use client"
import { useState } from "react"


export default function Language() {

  const [currentLanguage, setCurrentLanguage] = useState("EN")

  const handleLanguauge = (newValue: string) => {
    setCurrentLanguage(newValue)
  }

  return (
    <>

      

      <div className="flex items-center pt-[0px] gap-1 z-[99999] ">
        <span className={(currentLanguage === "EN" ? "active " : "") + "language uppercase cursor-pointer font-medium text-[14px] pt-[2px]"} onClick={() => handleLanguauge("EN")} >EN</span>
        <span className="text-[14px]">|</span>
        <span className={(currentLanguage === "FR" ? "active " : "") + "language uppercase cursor-pointer font-medium text-[14px] pt-[2px]"} onClick={() => handleLanguauge("FR")} >FR</span>
      </div>
    </>
  )
}