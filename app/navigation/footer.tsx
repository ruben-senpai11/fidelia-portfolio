

export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-between items-start px-16 py-8  gap-16">
        <hr />
        <div className="flex w-[100%]">
          <div className="footer-left w-[50%] h-[100%] ">
            <div className="flex flex-col gap-5">
              <div className="logo3">
                <p className="text-[24px] "> <span className="font-bold text-[32px] ">W</span>hite  <span className="text-[28px] ">d</span>evs</p>
              </div>
              <h5 className="w-[55%]">We are the agency designed to scale who srongly believe in the power of improvment</h5>
            </div>
            <div className="flex copywright ">
              <p className="">2024 All Rights Reserved</p>
            </div>
          </div>
          <div className="flex justify-between gap-8 w-[50%] ">
            <div className="flex flex-col gap-8">
              <h4 className="font-medium uppercase">Find us here</h4>
              <div className="flex flex-col gap-2 ">
                <a href="">contact@white-devs.com</a>
                <a href="">00 (229) 964 047 57</a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-medium uppercase">FOLLOW US</h4>
              <div className="flex flex-col gap-2 ">
                <a href="">Whatsapp</a>
                <a href="">Facebook</a>
                <a href="">Linkedin</a>
                <a href="">X</a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-medium uppercase">Menu</h4>
              <div className="flex flex-col gap-2 ">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Works</a>
                <a href="">About us</a>
                <a href="">Contact</a>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}