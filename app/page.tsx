import Service from "./components/service";
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('./navigation/header'), { ssr: false });
const OurWorks = dynamic(() => import('./sections/works'), { ssr: false });
const Principles = dynamic(() => import('./sections/principles'), { ssr: false });
const Marquee = dynamic(() => import('./sections/marquee'), { ssr: false });
const BookJourney = dynamic(() => import('./sections/bookJourney'), { ssr: false });

/*
import Header from "./navigation/header";
import OurWorks from "./sections/works";
import Principles from "./sections/principles";
import Marquee from "./sections/marquee";
import BookJourney from "./sections/bookJourney";
*/

import Footer from "./navigation/footer"

import Argument from "./components/argument";
import ContactForm from "./components/contact";



export default function Page({searchParams} : {searchParams: {[key: string]: string | string[] | undefined }}) {

  const interests: string[] = ["Web-design", "Dévelopment web", "Branding", "Marketing", "Autres"];
  const budgetEUR: string[] = ["<1000", "1K-4K", "4-10K", ">10K", "JE NE SAIS PAS ENCORE"];
  const budgetCFA: string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "JE NE SAIS PAS ENCORE"]

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between ">
        <section id="home" className="">
          <div className="introduction hero-background px-[20%] py-[150px] h-[80vh] flex flex-col justify-center items-center gap-8">
            {/* <div className="hero-background">
              <img src="https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659fe7546a6e7ae239987ba7_bg-light.png" loading="lazy" srcSet="https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659fe7546a6e7ae239987ba7_bg-light-p-500.png 500w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659fe7546a6e7ae239987ba7_bg-light-p-800.png 800w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659fe7546a6e7ae239987ba7_bg-light-p-1080.png 1080w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659fe7546a6e7ae239987ba7_bg-light.png 1294w" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 95vw, (max-width: 1376px) 94vw, 1294px" className="light-hero d-flex  " />
              <img src="https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659feed645fc74deba226d36_bg-dark.png" loading="lazy" srcSet="https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659feed645fc74deba226d36_bg-dark-p-500.png 500w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659feed645fc74deba226d36_bg-dark-p-800.png 800w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659feed645fc74deba226d36_bg-dark-p-1080.png 1080w, https://assets-global.website-files.com/659e8ba042c43623b67e14ad/659feed645fc74deba226d36_bg-dark.png 1294w" alt="" sizes="100vw" className="dark-hero d-none" />
            </div> */}
            <h1 className="text-[18px] -mt-5">WHITE DEVS AGENCY</h1>
            <h2 className=" text-center">L'agence conçue pour scaler votre entreprise de +50% en 6 mois</h2>
          </div>
          <div className="introduction px-[15%] py-[100px] pt-[250px] flex flex-col justify-center items-center gap-6">
            <h2 className=" text-center leading-snug">Nous sommes un écosystème de designeurs, développeurs <span className="lato">&</span> marketers qui ne sont peut-être pas des génies, mais exaucent aussi les vœux.</h2>
            <p className="text-center pt-0 text-[12px] px-[25%]">En associant une analyse profonde des besoins, des compétences techniques éprouvées, la communication active & la réactivité, nous crééons des projets uniques avec une bouffée d'ondes positives</p>
            <a href="#about-us">
              <button className="btn cta">
                <span className="cta-text">Apprenez à nous connaître</span>
                <span className="cta-transition"></span>
              </button>
            </a>
          </div>
        </section>
        <section id="services" className="flex flex-col gap-2 py-[150px]">
          <h2 className=" text-start">Services</h2>
          {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">01</span><span className="separator"></span><span className="s-label ">SERVICES</span></p> */}
          <div className="flex justify-between min-w-100 gap-32 sides-section">
            <div className="left-side py-0 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">Nous crééons des solutions pour faciliter la vie de nos clients.</h2>
              <a href="#contact" className="learn-cta ">
                <button className="btn cta w-max">
                  <span className="cta-text ">
                    En savoir plus
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="cta-transition"></span>
                </button>
              </a>
            </div>
            <div className="right-side py-0 services w-[100%] flex flex-col gap-6">
              <Service
                index={10}
                label="Développement web"
                description="C'est le processus de création et de maintenance de sites et d'applications web. Il implique la maîtrise de plusieurs langages de programmation, de technologies web ou des outils comme les CMS pour concevoir, développer et déployer des solutions web performantes et attractives."
                service1="Création de site web"
                service2="Boutique E-commerce"
                service3="Applications web & PWA"
                service4="Web mobile (Responsivité)"
                service5="Expérience utilisateur (UX)"
                service6="Maintenance & Sécurité"
              />
              <Service
                index={2}
                label="Marketing digital"
                description="Le marketing digital est l'ensemble des techniques marketing qui utilisent les canaux numériques pour promouvoir une marque, ses produits et ses services, atteindre et engager les clients."
                service1="Référencement naturel (SEO)"
                service2="Campagnes de publicités (SEA)"
                service3="Marketing de contenu"
                service4="Social Media Marketing"
                service5="Email marketing"
                service6="Analyses et suivi de performances"
              />
              <Service
                index={3}
                label="Graphic Design"
                description="L'art de combiner le texte, les images et les éléments visuels pour créer une communication visuelle efficace. Il s'agit d'un domaine créatif et technique qui vise à transmettre des messages et des idées à un public cible de manière claire, concise et attrayante."
                service1="Création de logo"
                service2="Identité visuelle"
                service3="Direction artistique"
                service4="Interface utilisateur (UI)"
                service5="Illustrations"
                service6="Miniatures & affiches"
              />
              <Service
                index={1}
                label="Développement de marque"
                description="Le développement de marque (brand development) est le processus continu de définition, d'amélioration et de test de la stratégie globale de votre marque. C'est la base de votre approche de mise sur le marché et de votre stratégie de réussite à long terme."
                service1="Stratégie de marque"
                service2="Création de l'identité visuelle"
                service3="Communication Digitale"
                service4="Content marketing"
                service5="Relations publiques"
                service6="Expérience client"
              />
            </div>
          </div>
        </section>

        <OurWorks title="Nos projets" />

        <BookJourney />

        <section id="about-us" className="flex flex-col gap-2 py-[150px]">
          <h2 className=" text-center pb-4">Pourquoi nous choisir?</h2>
          {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">03</span><span className="separator"></span><span className="s-label uppercase">Why Choose us</span></p> */}
          <div className="sides-section flex justify-between min-w-100 gap-32">
            <div className="left-side py-0 w-[50%] flex flex-col gap-6">
              <h2 className="text-[32px]">Votre premier choix <br className="desktop" /> pour une valeur exceptionnelle.</h2>
              <a href="#contact" className="learn-cta ">
                <button className="btn cta w-max">
                  <span className="cta-text">
                    En savoir plus
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="cta-transition"></span>
                </button>
              </a>
            </div>
            <div className="right-side py-2 w-[100%] flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <p className="">Au plus profond de notre agence réside une conviction inébranlable : le potentiel illimité de nos clients. Passionés de l'entrepreneuriat, nous sommes convaincus que chaque entreprise détient en elle les graines du succès. Notre mission est simple : nourrir ces graines et les aider à germer, à grandir et à s'épanouir atteindre des sommets insoupçonnés. Nous ne sommes pas une simple agence, nous ne créons pas juste des sites et des stratégies NOUS CRÉONS DES RÉSULTATS. </p>
                <p className="">Notre approche unique repose sur une compréhension profonde de vos besoins et de vos objectifs. Nous sommes des docteurs au cœeur de serviteurs, et en ce sens ce n'est que quand vous réusissez que nous réussissons. En étroite collaboration avec vous, nous élaborons des stratégies sur-mesure qui s'adaptent à votre rythme et à vos ambitions. Notre objectif est clair : vous propulser vers la réussite et vous aider à réaliser votre plein potentiel.</p>
              </div>
              <div className="arguments-col flex gap-16 pt-8">
                <Argument icon={3} label="Design Innovant" description="En adoptant une approche holistique, nos designers livrent des créations cohérentes et mémorables qui marquent durablement le public." />
                <Argument icon={1} label="Développement axé utilisateur" description="Nous créons des interfaces fluides, une navigation intuitive, une expérience utilisateur optimale pour le plaisir de vos clients." />
              </div>
              <div className="arguments-col flex gap-16">
                <Argument icon={2} label="Marketing Ciblé" description="Avec la stratégie adaptée, nous touchons les bonnes personnes, avec le bon message sur tous les canaux pour une expérience client cohérente et rentable." />
                <Argument icon={4} label="Rapport Price-value" description="Nos solutions s'adaptent à votre budget. Nous utilisons les meilleures technologies et produisons du résultat sans casser votre tirelire. " />
              </div>
            </div>
          </div>
        </section>

        <Principles title="Nos principes" />

      </main>

      <Marquee marquee1Content={["Business2Business", "Ecomerce", "SaaS", "Développement Web", "Busniness2Consumers", "CMS", "No-code", "Responsive", "Ecomerce", "SaaS"]} marquee2Content={["CMS", "No-code", "Responsive", "Ecomerce", "Website Development", "SaaS", "Business2Business"]} />

      <ContactForm interests={interests} budgetCFA={budgetCFA} budgetEUR={budgetEUR} />

      <Footer />
    </>
  )
}