import Link from "next/link";
import Logo from "../components/logo";
import ThemeMode from "./themeMode";


export default function Footer() {
  return (
    <>
      <footer className="footer flex flex-col justify-between items-start px-16 py-8 text-[16px] gap-2 ">
        <hr />
        <div className="footer-grid pt-16 flex w-[100%]">
          <div className="footer-left w-[50%] h-[100%] ">
            <div className="flex flex-col gap-5 items-start ">
              <Logo />
              <h3 className="w-[85%] ">L'accélarateur de croissance basé sur le WEB + SEO + AUTOMATISATIONS + IA</h3>
            </div>
          </div>
          <div className="footer-right flex justify-between md:justify-end gap-8 w-[50%] pt-3 ">
            <div className="footer-col flex flex-col gap-6">
              <h4 className="font-medium uppercase">Je suis prêt à faire le pas</h4>
              <a href="https://tally.so/r/mOryj7" >Demander mon analyse sur mesure </a>
              {/* <h4 className="font-medium uppercase">Nous sommes ici</h4>
              <div className="flex flex-col gap-2 ">
                <a href="mailto:rubenwhite22@gmail.com">rubenwhite22@gmail.com</a>
                <a href="tel:+2290196404757">+229 01 96 40 47 57</a>
              </div> */}
            </div>
            <div className="footer-col flex flex-col gap-6">
              <h4 className="font-medium uppercase">Nous suivre</h4>
              <div className="flex flex-col gap-2 ">
                <a href="https://wa.me/+22996404757">Whatsapp</a>
                <a href="https://www.linkedin.com/in/ruben-white22/">LinkedIn</a>
                <a href="https://x.com/rubenwhite22">X</a>
              </div>
            </div>
            {/* <div className="footer-col flex flex-col gap-6">
              <h4 className="font-medium uppercase">Menu</h4>
              <div className="flex flex-col gap-2 ">
                <a href="#home">Accueil</a>
                <a href="#works">Projets</a>
                <a href="#about-us">À propos</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copywright flex justify-between w-full pt-4 md:pt-0">
          <p className="">© 2025 All Rights Reserved</p>
          <ThemeMode />
        </div>
      </footer>
    </>
  )
}