"use client"
import { useState, useEffect } from "react"

import "./navigation.css"
import ThemeMode from "./themeMode"


export default function Header() {

  //  Scroll Trigger
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY>5){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
  
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  

  //Mobile Nav
  const [mobileNav, setmobileNav] = useState(false);
  
  const toogleMenu = ()=>{
    if (mobileNav == false){
      setmobileNav(true)
    }else{
      setmobileNav(false)
    }
  }
  const setNavFalse =()=>{
    setmobileNav(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  return (
    <>
      <nav className={ (isScrolled ? "py-4" : "py-8" )+ " header flex justify-between items-center px-16 "}  >
        <div className="logo"> 
          <p className="text-[24px] duppercase "> <span className="font-bold text-[32px] ">W</span>hite <span className="font-bold text-[28px] ">d</span>evs </p>
        </div>
        <div className={(mobileNav == true ? 'mobile-menu ' : '') + "nav-links items-center justify-center relative " }>
          <ul className={ (isScrolled ? "bg-zinc-600 " : " bg-zinc-700 ") + "flex items-center justify-between gap-6 max-w-100 px-6 py-[7px] " }>
            <li onClick={setNavFalse} className={ (isScrolled ? "hover:text-slate-500 " : "hover:text-slate-800 " ) + "uppercase hover:bg-slate-50 " }>
              <a href="#home" className="desktop">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13641 1.01599C8.8731 0.81116 8.54901 0.699951 8.21541 0.699951C7.88181 0.699951 7.55772 0.81116 7.29441 1.01599L1.00641 5.90599C0.44241 6.34624 0.75291 7.24999 1.46766 7.24999H2.21541V13.25C2.21541 13.6478 2.37345 14.0293 2.65475 14.3107C2.93605 14.592 3.31759 14.75 3.71541 14.75H6.71541V10.25C6.71541 9.85217 6.87345 9.47064 7.15475 9.18933C7.43605 8.90803 7.81759 8.74999 8.21541 8.74999C8.61323 8.74999 8.99477 8.90803 9.27607 9.18933C9.55737 9.47064 9.71541 9.85217 9.71541 10.25V14.75H12.7154C13.1132 14.75 13.4948 14.592 13.7761 14.3107C14.0574 14.0293 14.2154 13.6478 14.2154 13.25V7.24999H14.9632C15.6772 7.24999 15.9892 6.34624 15.4244 5.90674L9.13641 1.01599Z" fill="currentColor"></path>
                </svg>
              </a>
              <a href="#home" className="mobile" >Home</a>
            </li>
            <li onClick={setNavFalse} className={ (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 " ) + "uppercase hover:bg-slate-50 " }>
              <a href="#services" className="">Services
              </a>
            </li>
            <li onClick={setNavFalse} className={ (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 " ) + "uppercase hover:bg-slate-50 " }>
              <a href="#works" className="">Works
              </a>
            </li>
            <li onClick={setNavFalse} className={ (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 " ) + "uppercase hover:bg-slate-50 " }>
              <a href="#about-us" className="">About
              </a>
            </li>
            <li onClick={setNavFalse} className={ (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 " ) + "uppercase hover:bg-slate-50 " }>
              <a href="#contact" className="">Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-theme flex">
          <ThemeMode />
        </div>
        <div className={(mobileNav===true ? "opened " : "")+"menu-icons relative"} onClick={toogleMenu}>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </nav>
    </>
  )
}