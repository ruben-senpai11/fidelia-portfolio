"use client"
import { useState, useEffect } from "react"

import "./navigation.css"
import ThemeMode from "./themeMode"
import Language from "../components/language"
import Logo from "../components/logo"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"


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
      <nav id="home" className={(isScrolled ? "py-2" : "py-4") + " header flex justify-between items-center px-12 "}  >
        <span onClick={() => smoothScrollTo('home')} className="cursor-pointer">
          <Logo />
        </span>
        <div className={(mobileNav == true ? 'mobile-menu ' : 'desktop-menu ') + " flex items-center justify-end gap-4 w-full  "}>
          <span className="w-[25%]"></span>
          <div className="nav-links">
            <ul className={(mobileNav == false && isScrolled ? "opacity-90 hover:opacity-100" : "opacity-100") + " flex items-center justify-between gap-6 max-w-100 px-4 py-[6px] text-[15px] font-medium transition-all "}>
              <li>
                <Link href="/" >
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#" >
                  Mon parcours
                </Link>
              </li>
              <li>
                <Link href="/creations" >
                  Mes créations
                </Link>
              </li>
            </ul>
            <a href="https://wa.me/+22994065204" className={(mobileNav ? "mobile " : "desktop ") + " btn cta header-cta"}>
              <span className="cta-text">Me contacter</span>
              <span className="cta-transition"></span>
            </a>
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