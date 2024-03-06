import "./navigation.css"
import ThemeMode from "./themeMode"

export default function Header() {
  return (
    <>
      <nav className="flex justify-between items-center px-16 py-6 ">
        <div className="logo">
          <p className="text-[24px] "> <span className="font-bold text-[32px] ">W</span>hite  <span className="text-[28px] ">d</span>evs</p>
        </div>
        <div className="nav-links items-center justify-center relative ">
          <ul className="flex items-center justify-between gap-6 max-w-100 bg-zinc-700 px-6 py-[7px] ">
            <li className="uppercase hover:bg-slate-50 hover:text-slate-800 active ">
              <a href="#home" className="">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13641 1.01599C8.8731 0.81116 8.54901 0.699951 8.21541 0.699951C7.88181 0.699951 7.55772 0.81116 7.29441 1.01599L1.00641 5.90599C0.44241 6.34624 0.75291 7.24999 1.46766 7.24999H2.21541V13.25C2.21541 13.6478 2.37345 14.0293 2.65475 14.3107C2.93605 14.592 3.31759 14.75 3.71541 14.75H6.71541V10.25C6.71541 9.85217 6.87345 9.47064 7.15475 9.18933C7.43605 8.90803 7.81759 8.74999 8.21541 8.74999C8.61323 8.74999 8.99477 8.90803 9.27607 9.18933C9.55737 9.47064 9.71541 9.85217 9.71541 10.25V14.75H12.7154C13.1132 14.75 13.4948 14.592 13.7761 14.3107C14.0574 14.0293 14.2154 13.6478 14.2154 13.25V7.24999H14.9632C15.6772 7.24999 15.9892 6.34624 15.4244 5.90674L9.13641 1.01599Z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className="uppercase hover:bg-slate-50 hover:text-slate-800 ">
              <a href="#services" className="">Services
              </a>
            </li>
            <li className="uppercase hover:bg-slate-50 hover:text-slate-800 ">
              <a href="#works" className="">Works
              </a>
            </li>
            <li className="uppercase hover:bg-slate-50 hover:text-slate-800 ">
              <a href="#about-us" className="">About
              </a>
            </li>
            <li className="uppercase hover:bg-slate-50 hover:text-slate-800 ">
              <a href="#contact" className="">Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-theme flex">
          <ThemeMode />
        </div>
      </nav>
    </>
  )
}