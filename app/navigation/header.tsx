"use client"
import { useState, useEffect } from "react"

import "./navigation.css"
import ThemeMode from "./themeMode"
import Language from "../components/language"
import Logo from "../components/logo"


export default function Header() {


  //  Scroll Trigger
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== undefined) {

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

  }

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


  return (
    <>
      <nav id="home" className={(isScrolled ? "py-2" : "py-6") + " header flex justify-between items-center px-12 "}  >
        <a href="#hero">
          <Logo />
        </a>
        <div className={(mobileNav == true ? 'mobile-menu ' : 'desktop-menu ') + " flex items-center justify-end gap-4 w-full  "}>
          <div className="nav-links">
            <ul className={(isScrolled ? "opacity-90 hover:opacity-100" : "opacity-100") + " flex items-center justify-between gap-6 max-w-100 px-4 py-[6px] text-[15px] font-medium transition-all "}>
              <li onClick={() => smoothScrollTo('home')}>
                <p className="desktop">Accueil</p>
                <a href="#hero" className="mobile" >Accueil</a>
              </li>
              <li onClick={() => smoothScrollTo('services')}>
                Services
              </li>
              <li onClick={() => smoothScrollTo('works')}>
                Projets
              </li>
              <li onClick={() => smoothScrollTo('about-us')}>
                À propos
              </li>
              <li onClick={() => smoothScrollTo('contact')}>
                Contact
              </li>
            </ul>
            <button type="submit" className="btn cta">
              <span className="cta-text">Demander mon audit</span>
              <span className="cta-transition"></span>
            </button>
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