"use client"
import { useState, useEffect } from "react"

import "./navigation.css"
import ThemeMode from "./themeMode"
import Language from "../components/language"
import Logo from "../components/logo"
import { useRouter } from "next/navigation"


export default function Header() {
  
  //  Links autot hover
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = Array.from(document.querySelectorAll('section')).map(section => ({
        id: section.id,
        offsetTop: section.offsetTop,
        offsetBottom: section.offsetTop + section.clientHeight,
      }));

      const currentPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sectionOffsets.find(section => currentPosition >= section.offsetTop && currentPosition < section.offsetBottom);

      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  //  Scroll Trigger
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true)
      } else {
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

  const toogleMenu = () => {
    if (mobileNav == false) {
      setmobileNav(true)
    } else {
      setmobileNav(false)
    }
  }
  function setNavFalse() {
    setmobileNav(false)
    window.scrollTo({
      behavior: 'smooth'
    });
  }

  //Nav Buttons Handle
  function smoothScrollTo(targetId: any) {
    setNavFalse()
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  //Retrieve device's width

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <nav id="home" className={(isScrolled ? "py-2" : "py-8") + " header flex justify-between items-center px-16 "}  >
        <Logo />
        <div className={(mobileNav == true ? 'mobile-menu ' : '') + "flex items-center gap-4 "}>
          <div className="nav-links items-center justify-center relative ">
            <ul className={(width > 1000 && isScrolled ? "opacity-25 hover:opacity-100 " : "opacity-100 ") + "flex items-center justify-between gap-6 max-w-100 bg-zinc-700 px-6 py-[7px] transition-all "}>
              <li onClick={() => smoothScrollTo('home')} className={ (activeLink === 'home' ? 'active ' : '') + (isScrolled ? "hover:text-slate-500  " : "hover:text-slate-800 ") + "uppercase hover:bg-slate-50 "}>
                <a className="desktop">
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13641 1.01599C8.8731 0.81116 8.54901 0.699951 8.21541 0.699951C7.88181 0.699951 7.55772 0.81116 7.29441 1.01599L1.00641 5.90599C0.44241 6.34624 0.75291 7.24999 1.46766 7.24999H2.21541V13.25C2.21541 13.6478 2.37345 14.0293 2.65475 14.3107C2.93605 14.592 3.31759 14.75 3.71541 14.75H6.71541V10.25C6.71541 9.85217 6.87345 9.47064 7.15475 9.18933C7.43605 8.90803 7.81759 8.74999 8.21541 8.74999C8.61323 8.74999 8.99477 8.90803 9.27607 9.18933C9.55737 9.47064 9.71541 9.85217 9.71541 10.25V14.75H12.7154C13.1132 14.75 13.4948 14.592 13.7761 14.3107C14.0574 14.0293 14.2154 13.6478 14.2154 13.25V7.24999H14.9632C15.6772 7.24999 15.9892 6.34624 15.4244 5.90674L9.13641 1.01599Z" fill="currentColor"></path>
                  </svg>
                </a>
                <a className="mobile" >Home</a>
              </li>
              <li onClick={() => smoothScrollTo('services')} className={ (activeLink === 'services' ? 'active ' : '') + (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 ") + "uppercase hover:bg-slate-50 "}>
                <a href="#services" >Services
                </a>
              </li>
              <li onClick={() => smoothScrollTo('works')} className={ (activeLink === 'works' || activeLink === "book-journey" ? 'active ' : '') + (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 ") + "uppercase hover:bg-slate-50 "}>
                <a href="#works" >Works
                </a>
              </li>
              <li onClick={() => smoothScrollTo('about-us')} className={ (activeLink === 'about-us' || activeLink === "principles" || activeLink === "marquee" ? 'active ' : '') + (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 ") + "uppercase hover:bg-slate-50 "}>
                <a href="#about-us" >About
                </a>
              </li>
              <li onClick={() => smoothScrollTo('contact')} className={ (activeLink === 'contact' ? 'active ' : '') + (isScrolled ? "hover:text-slate-700 " : "hover:text-slate-800 ") + "uppercase hover:bg-slate-50 "}>
                <a href="#contact" >Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-theme flex items-center gap-6">
            {/* <Language /> */}
            <ThemeMode />
          </div>
          <div className={(mobileNav === true ? "opened " : "") + "menu-icons relative"} onClick={toogleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </nav>
    </>
  )
}