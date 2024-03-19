import Logo from "../components/logo";


export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-between items-start px-16 py-8  gap-16">
        <hr />
        <div className="footer-grid flex w-[100%]">
          <div className="footer-left w-[50%] h-[100%] ">
            <div className="flex flex-col gap-5 items-start ">
              <Logo/>
              <h5 className="w-[55%]">We are the agency designed to scale who srongly believe in the power of improvment</h5>
            </div>
            <div className="flex copywright desktop">
              <p className="">© 2024 All Rights Reserved</p>
            </div>
          </div>
          <div className="footer-right flex justify-between gap-8 w-[50%] ">
            <div className="footer-col flex flex-col gap-8">
              <h4 className="font-medium uppercase">Find us here</h4>
              <div className="flex flex-col gap-2 ">
                <a href="">contact@white-devs.com</a>
                <a href="">00 (229) 964 047 57</a>
              </div>
            </div>
            <div className="footer-col flex flex-col gap-8">
              <h4 className="font-medium uppercase">FOLLOW US</h4>
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
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#works">Works</a>
                <a href="#about-us">About us</a>
                {/* <a href="#contact">Contact</a> */}
                <a href=""></a>
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