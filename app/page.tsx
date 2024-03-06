import Service from "./components/service";
import rabbit from "./assets/images/future-rabbit.png"
import bandage from "./assets/images/ecommerce.png"
import shopping from "./assets/images/shopping-woman.jpeg"
import lemonplet from "./assets/images/lemonplet2.webp"
import portofolio from "./assets/images/magicWeb.png"
import playStation from "./assets/images/joystick.jpg"
import transparency from "./assets/images/transparency.jpeg"
import teamSpirit from "./assets/images/team-spirit.jpg"
import excellence from "./assets/images/excellence opérationnelle.webp"

import Image from "next/image";
import Project from "./components/project";
import Argument from "./components/argument";
import Principle from "./components/principle";
import Budget from "./components/budget";

import Header from "./navigation/header" 
import Footer from "./navigation/footer"

export default function Page() {

  const interests:string[] = ["Web-design", "Web-development", "Branding", "Marketing", "Other"];
  const budgetEUR:string[] = ["<5K", "5-10K", "10-20K", ">20K", "I don't know yet"];
  const budgetCFA:string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "I don't know yet"]

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <section id="home" className="bg-colored">
          <div className="px-[20%] py-[150px] flex flex-col justify-center items-center gap-8">
            <h1 className="text-[16px]">WHITE DEVS AGENCY</h1>
            <h2 className="text-[48px] text-center">The agency designed to make your business scale +50% within 6 months</h2>
          </div>
          <div className="px-[20%] py-[150px] flex flex-col justify-center items-center gap-6">
            <h2 className="text-[48px] text-center leading-snug">We are a ministry of designers & developers, who may not be genies, but grant wishes too</h2>
            <p className="text-center pt-0 text-[12px] px-[25%]">By connecting deep analysis, strong technical skills and design background with clear communication & responsiveness we’re creating unique projects with a pinch of good vibes</p>
            <button className="btn  cta">Get to know us</button>
          </div>
        </section>
        <section id="services" className="flex flex-col gap-2 py-[150px]">
          {/* <h2 className="text-[48px] text-start">Services</h2> */}
          <p className="section-label flex gap-4 items-center"><span className="s-number">01</span><span className="separator"></span><span className="s-label ">SERVICES</span></p>
          <div className="flex justify-between min-w-100 gap-32">
            <div className="py-4 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">We bring solutions to make life easier for our customers.</h2>
              <button className="btn cta w-max">Learn more</button>
            </div>
            <div className="services w-[100%] flex flex-col gap-6">
              <Service
                label="Brand Development"
                description="Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel leo varius blandit sit amet non magna eget risus."
                service1="Brand Copywriting"
                service2="Website Development"
                service3="Ecommerce Conversion"
                service4="No-Code Development"
                service5="Responsive Development"
                service6="Shopify Development"
              />
              <Service
                label="Digital Marketing"
                description="Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel leo varius blandit sit amet non magna eget risus."
                service1="Messaging Strategy"
                service2="Search Engine Optimization"
                service3="Marketing Consultancy"
                service4="Google Ads"
                service5="Facebook Ads"
                service6="Social Media"
              />
              <Service
                label="Graphic Design"
                description="Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel leo varius blandit sit amet non magna eget risus."
                service1="Logo Design"
                service2="Advertisment"
                service3="Art Direction"
                service4="User Interface Design"
                service5="Business Card Design"
                service6="Custom Illustration"
              />
              <Service
                label="UX & Product Design"
                description="Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel leo varius blandit sit amet non magna eget risus."
                service1="UX & UI design"
                service2="User Experience"
                service3="Mobile Design"
                service4="Wireframe & Prototyping"
                service5="Brand Guides"
                service6="Rebranding"
              />
            </div>
          </div>
        </section>
        <section id="works" className="flex flex-col items-centr gap-16 py-[150px]">
          {/* <h2 className="text-[48px] text-center">Our works</h2> */}
          <p className="section-label flex gap-4 items-center"><span className="s-number">02</span><span className="separator"></span><span className="s-label uppercase">Our works</span></p>
          <div className="flex gap-24">
            <div className="project-col flex flex-col gap-16">
              <Project label="FAR IN GAMES Tournament" image={playStation} imageAlt="playstation" year="2022" skills={["Concept", "Creative Direction", "Design", "Development"]} />
              <Project label="LEMÖNPLET Refonte" image={lemonplet} imageAlt="Lemonplet" year="2023" skills={["Integration", "UIX", "Development"]} />
            </div>
            <div className="project-col flex flex-col gap-16">
              <Project label="Bunny Management" image={rabbit} imageAlt="Rabbit of Future" year="2023" skills={["Saas", "Concept", "Design", "Development"]} />
              <Project label="Bandage E-commerce" image={bandage} imageAlt="Bandage E-commerce" year="2024" skills={["Integration", "Concept", "Creative Direction", "Design", "Development"]} />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <button className="btn cta w-max">Discover all</button>
          </div>
        </section>

        <section id="book-journey" className="flex flex-col items-center p-[50px] ">
          <div className="dream-container flex flex-col border-solid gap-24 py-[100px] ">
            <div className="flex justify-center px-[24%] ">
              <h3 className="text-[48px] capitalize text-center "> Unlock 30 Minutes to dream together</h3>
            </div>
            <div className="flex justify-center ">
              <div className="flex justify-center w-[50%] ">
                <p>Join us for a 30-minute conversation where we can explore your ideas, collaborate on possibilities, and shape your vision into reality.</p>
              </div>
              <div className="flex justify-center items-center w-[30%] ">
                <button className="btn cta">Book the Journey</button>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className="flex flex-col gap-2 py-[150px]">
          {/* <h2 className="text-[48px] text-center">Why choose us?</h2> */}
          <p className="section-label flex gap-4 items-center"><span className="s-number">03</span><span className="separator"></span><span className="s-label uppercase">Why Choose us</span></p>
          <div className="flex justify-between min-w-100 gap-32">
            <div className="py-4 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">Your premier option for outstanding value.</h2>
              <button className="btn cta w-max">Learn more</button>
            </div>
            <div className="w-[100%] flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <p className="">Deeply embedded within our organization is a profound and unwavering commitment to the perpetual expansion of artistic brilliance. We firmly believe that the quest for creative excellence is an endeavor without limits, and as such, we are embarked on an enduring journey to discover and unlock new dimensions of inspiration and ingenuity.</p>
                <p className="">We believe in breaking free from established norms, continually seeking fresh perspectives, and embracing the uncharted territories of design possibilities. Our tireless commitment to this cause drives us to redefine and expand the very essence of creativity.</p>
              </div>
              <div className="flex gap-16 pt-8">
                <Argument icon={1} label="Innovative Thinking" description="Innovative thinking is the key to effectively solving complex problems and driving progress in various fields." />
                <Argument icon={2} label="Rapid Solutions" description="Proactively prioritizing fast & effective solutions can streamline processes & significantly enhance productivity." />
              </div>
              <div className="flex gap-16">
                <Argument icon={3} label="Wholistic Approach" description="Designers using this approach deliver cohesive, memorable designs that resonate with the audience." />
                <Argument icon={4} label="Affordable Prices" description="Our design agency provides budget friendly, flexible pricing for customized design solutions." />
              </div>
            </div>
          </div>
        </section>
        <section id="principles" className="flex flex-col gap-20 py-[150px]">
          <h2 className="text-[48px] text-center">Our principles</h2>
          <div className="flex justify-between ">
            <Principle image={transparency} imageAlt="Transparency" label="Transparency" description="We keep it real and transparent, no smoke and mirrors." />
            <Principle image={teamSpirit} imageAlt="Team Spirit" label="Team Spirit" description="We're all in this together, fostering collaboration and unity." />
            <Principle image={excellence} imageAlt="Excellence" label="Excellence" description="We're cool, but we're seriopus about delivering top⁻notch quality" />
          </div>
        </section>
      </main>
        <section id="" className="flex flex-col gap-16 py-[100px] w-[100%] overflow-hidden">
          <p className="slipping-text text-[62px] text-nowrap whitespace-nowrap font-medium  "> Ecomerce - SaaS - Business2Business - Website Development </p>
          <p className="slipping-text text-[62px] text-nowrap whitespace-nowrap font-medium  "> Busniness2Consumers - CMS - No-code - Responsive </p>
          <p className=""></p>
        </section>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <section id="contact" className="flex gap-2 py-[50px]">
          <div className="flex flex-col w-[50%] gap-6 ">
          {/* <p className="section-label flex gap-4 items-center"><span className="s-number">05</span><span className="separator"></span><span className="s-label uppercase">Contact</span></p> */}
            <h2 className="text-[32px]">Let's connect</h2>
            <p className="uppercase w-[50%] ">NOW IT'S TIME TO TELL THE WHOLE WORLD ABOUT YOUR BUSINESS</p>
            <button className="btn cta w-max">SEND A MAIL</button>
          </div>
          <div className="w-[50%]  ">
            <div className="contact-container flex flex-col gap-16 p-6 ">
              <div className="flex flex-col gap-6">     
                <h3 className="uppercase ">Contact info*</h3>
                <div className="flex gap-4">
                  <input type="text" placeholder="YOUR NAME*" />
                  <input type="e-mail" placeholder="YOUR E-MAIL*" />
                </div>           
              </div>
              <div className="flex flex-col gap-6">  
                <h3 className="uppercase ">You are interested in*</h3>
                <div className="flex flex-wrap gap-4">
                  { interests.map((item, index) => (
                    <div key={index} className="rounded uppercase">{item}</div>
                  )) }
                </div>              
              </div>
              <Budget budgetCFA={budgetCFA} budgetEUR={budgetEUR} />
              <div className="btn cta">Start a journey</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}