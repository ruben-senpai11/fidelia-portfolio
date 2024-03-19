import Service from "./components/service";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./navigation/header'), { ssr: false });
const OurWorks = dynamic(() => import('./sections/works'), { ssr: false });
const Principles = dynamic(() => import('./sections/principles'), { ssr: false });

import Footer from "./navigation/footer"

import Argument from "./components/argument";
import BookJourney from "./sections/bookJourney";
import Marquee from "./sections/marquee";
import ContactForm from "./components/contact";



export default function Page() {

  const interests: string[] = ["Web-design", "Web-development", "Branding", "Marketing", "Other"];
  const budgetEUR: string[] = ["<5K", "5-10K", "10-20K", ">20K", "I don't know yet"];
  const budgetCFA: string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "I don't know yet"]

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between ">
        <section className="">
          <div className="introduction px-[20%] py-[150px] flex flex-col justify-center items-center gap-8">
            <h1 className="text-[18px]">WHITE DEVS AGENCY</h1>
            <h2 className="text-[48px] text-center">The agency designed to scale your business +50% within 6 months</h2>
          </div>
          <div className="introduction px-[20%] py-[150px] flex flex-col justify-center items-center gap-6">
            <h2 className="text-[48px] text-center leading-snug">We are a ministry of designers & developers, who may not be genies, but grant wishes too</h2>
            <p className="text-center pt-0 text-[12px] px-[25%]">By connecting deep analysis, strong technical skills and design background with clear communication & responsiveness we’re creating unique projects with a pinch of good vibes</p>
            <a href="#about-us">
              <button className="btn cta">
                <span className="cta-text">Get to know us</span>
                <span className="cta-transition"></span>
              </button>
            </a>
          </div>
        </section>
        <section id="services" className="flex flex-col gap-2 py-[150px]">
          <h2 className="text-[48px] text-start">Services</h2>
          {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">01</span><span className="separator"></span><span className="s-label ">SERVICES</span></p> */}
          <div className="flex justify-between min-w-100 gap-32 sides-section">
            <div className="left-side py-0 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">We bring solutions to make life easier for our customers.</h2>
              <a href="#contact" className="learn-cta ">
                <button className="btn cta w-max">
                  <span className="cta-text ">
                    Learn more
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                  <span className="cta-transition"></span>
                </button>
              </a>
            </div>
            <div className="right-side py-2 services w-[100%] flex flex-col gap-6">
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

        <OurWorks />

        <BookJourney />

        <section id="about-us" className="flex flex-col gap-2 py-[150px]">
          <h2 className="text-[48px] text-center pb-4">Why choose us?</h2>
          {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">03</span><span className="separator"></span><span className="s-label uppercase">Why Choose us</span></p> */}
          <div className="sides-section flex justify-between min-w-100 gap-32">
            <div className="left-side py-0 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">Your premier option for outstanding value.</h2>
              <a href="#contact" className="learn-cta ">
                <button className="btn cta w-max">
                  <span className="cta-text">
                    Learn more
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                  <span className="cta-transition"></span>
                </button>
              </a>
            </div>
            <div className="right-side py-2 w-[100%] flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <p className="">Deeply embedded within our organization is a profound and unwavering commitment to the perpetual expansion of artistic brilliance. We firmly believe that the quest for creative excellence is an endeavor without limits, and as such, we are embarked on an enduring journey to discover and unlock new dimensions of inspiration and ingenuity.</p>
                <p className="">We believe in breaking free from established norms, continually seeking fresh perspectives, and embracing the uncharted territories of design possibilities. Our tireless commitment to this cause drives us to redefine and expand the very essence of creativity.</p>
              </div>
              <div className="arguments-col flex gap-16 pt-8">
                <Argument icon={1} label="Innovative Thinking" description="Innovative thinking is the key to effectively solving complex problems and driving progress in various fields." />
                <Argument icon={2} label="Rapid Solutions" description="Proactively prioritizing fast & effective solutions can streamline processes & significantly enhance productivity." />
              </div>
              <div className="arguments-col flex gap-16">
                <Argument icon={3} label="Wholistic Approach" description="Designers using this approach deliver cohesive, memorable designs that resonate with the audience." />
                <Argument icon={4} label="Affordable Prices" description="Our design agency provides budget friendly, flexible pricing for customized design solutions." />
              </div>
            </div>
          </div>
        </section>

        <Principles />

      </main>

      <Marquee marquee1Content={["Ecomerce", "SaaS", "Business2Business", "Website Development", "Busniness2Consumers", "CMS", "No-code", "Responsive", "Ecomerce", "SaaS"]} marquee2Content={["Busniness2Consumers", "CMS", "No-code", "Responsive", "Ecomerce", "SaaS", "Business2Business", "Website Development"]} />
      
      <ContactForm interests={interests} budgetCFA={budgetCFA} budgetEUR={budgetEUR} />
      
      <Footer />
    </>
  )
}