import Logo from "../components/logo";


export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-between items-start px-16 py-8 text-[15px]  gap-16">
        <hr />
        <div className="footer-grid flex w-[100%]">
          <div className="footer-left w-[50%] h-[100%] ">
            <div className="flex flex-col gap-5 items-start ">
              <Logo/>
              <h3 className="w-[65%] ">Parce que nous ne créons pas des outils, nous créons du résultat</h3>
            </div>
            <div className="flex copywright desktop">
              <p className="">© 2024 All Rights Reserved</p>
            </div>
          </div>
          <div className="footer-right flex justify-between gap-8 w-[50%] ">
            <div className="footer-col flex flex-col gap-8">
              <h4 className="font-medium uppercase">Nous sommes ici</h4>
              <div className="flex flex-col gap-2 ">
                <a href="mailto:contact@whitedevs.agency">contact@white-devs.com</a>
                <a href="tel:+337808550">+33 7 80 95 85 50</a>
              </div>
            </div>
            <div className="footer-col flex flex-col gap-8">
              <h4 className="font-medium uppercase">Suivez-nous</h4>
              <div className="flex flex-col gap-2 ">
                <a href="https://wa.me/+22996404757">Whatsapp</a>
                <a href="https://www.facebook.com/alban.honfovou/">Facebook</a>
                <a href="https://www.linkedin.com/in/alban-honfovou/">Linkedin</a>
                {/* <a href="">X</a> */}
              </div>
            </div>
            <div className="footer-col flex flex-col gap-8">
              <h4 className="font-medium uppercase">Menu</h4>
              <div className="flex flex-col gap-2 ">
                <a href="#home">Accueil</a>
                <a href="#services">Services</a>
                <a href="#works">Projets</a>
                <a href="#about-us">À propos</a>
                {/* <a href="#contact">Contact</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex copywright mobile">
          <p className="">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}