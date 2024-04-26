import Service from "./components/service";
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('./navigation/header'), { ssr: false });
const OurWorks = dynamic(() => import('./sections/works'), { ssr: false });
const Principles = dynamic(() => import('./sections/principles'), { ssr: false });
const Marquee = dynamic(() => import('./sections/marquee'), { ssr: false });
const BookJourney = dynamic(() => import('./sections/bookJourney'), { ssr: false });


import './sections/heroBackground.css'
import Footer from "./navigation/footer"

import Argument from "./components/argument";
import ContactForm from "./components/contact";
import Image from "next/image";
import WordCarousel from "./components/wordsCarousel";
import ImageCarousel from "./components/imagesCarousel";



export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const interestsList: string[] = ["Croissance +40%", "Graphic design", "Dévelopment web", "Branding", "Marketing", "Autres"];
  const budgetEUR: string[] = ["<2k", "2-5K", "5-10K", ">10K", "JE NE SAIS PAS ENCORE"];
  const budgetCFA: string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "JE NE SAIS PAS ENCORE"]

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between ">
        <section id="hero" className="">
          <div className="introduction hero-background px-[0%] pt-[5%] pb-[10%] flex flex-col justify-center items-center gap-12">
            <h1 className="text-[18px] -mt-5">WHITE DEVS AGENCY</h1>
            <h2 className="text-[5vw] leading-[120%] text-center">
              Nous scalons votre business  de +40% en 6 mois avec un site web et du marketing
            </h2>
          </div>
          <div className="introduction px-[1%] py-[0px] pb-16 flex flex-col justify-center items-center gap-6  ">
            <div className="artisans flex flex-row justify-between gap-2 ">
              <div className="left-side border-solidd flex justify-center w-[50%] items-center gap-6">
                <h2 className=" text-right text-[3.5vw] leading-snug ">
                  Nous sommes des <br className="desktop-n-tab mobile-sm" />
                  <WordCarousel initialWord="designers" delay={2500} /> 
                  <br className="mobile-md" />
                  &nbsp;qui ne sont peut-être pas des génies, mais exaucent aussi les vœux.
                </h2>
              </div>
              <div className="right-side border-solidd w-[50%] h-[400px] max-h-[400px] flex justify-center items-center ">
                <ImageCarousel initialImage="Designer" delay={2500} />
              </div>
            </div>
            <div className="hero-lead flex justify-between w-[80%] px-[0%] py-4 gap-8 ">
              <p className="text-center pt-0 text-[14px] w-[56%] ">En associant une analyse profonde des besoins, des compétences techniques éprouvées, la communication active & la proactivité, nous crééons des projets uniques, des résultats et une bouffée d'air frais</p>
              <div className="hero-cta w-[50%]">
                <a href="#about-us ">
                  <button className="btn cta w-max ">
                    <span className="cta-text">Apprendre à nous connaître</span>
                    <span className="cta-transition"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="flex flex-col gap-2 pt-[100px] pb-[100px]">
          {/* <h2 className=" text-start">Services</h2> */}
          <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">01</span><span className="separator"></span><span className="s-label ">SERVICES</span></p>
          <div className="flex justify-between min-w-100 gap-16 sides-section">
            <div className="left-side py-0 w-[30%] flex flex-col gap-6">
              <p className="text-[32px]">Nous crééons des solutions pour faciliter la vie de nos clients.</p>
              <a href="#contact" className="learn-cta btn cta w-max ">
                <span className="cta-text ">
                  En savoir plus
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <span className="cta-transition"></span>
              </a>
            </div>
            <div className="right-side py-0 services w-[60%] flex flex-col gap-6">
              <Service
                index={7}
                label="Graphic design"
                description="L'art de combiner le texte, les images et les éléments visuels pour créer une communication visuelle efficace. C'est un domaine créatif et technique qui a pour but de transmettre des messages et des idées à un public cible de manière claire, concise et attrayante."
                service1="Création de logo"
                service2="Identité visuelle"
                service3="Direction artistique"
                service4="Interface utilisateur (UI)"
                service5="Illustrations"
                service6="Miniatures & affiches"
              />
              <Service
                index={10}
                label="Développement web"
                description="Le processus de création et de maintenance de sites et d'applications web implique la maîtrise de langages de programmation, de technologies web, de CMS ou d'outils No-code pour concevoir, développer et déployer des solutions web performantes attractives, et répondant à vos besoins."
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
                description="Le marketing digital est l'ensemble des techniques marketing qui utilisent les canaux numériques pour promouvoir une marque, ses produits et services, atteindre et engager les clients."
                service1="Référencement naturel (SEO)"
                service2="Campagnes de publicités (SEA)"
                service3="Marketing de contenu"
                service4="Social Media Marketing"
                service5="Email marketing"
                service6="Analyses et suivi de performances"
              />
              <Service
                index={8}
                label="Identité & Image de Marque"
                description="L'identité de marque est la définition que vous donnez à votre marque, l'image de marque est la perception que les consommateurs ont de votre marque. Construisez une image de marque forte et cohérente.  Nous proposons des services de conseil, création de contenu digital et visuel, photographie et vidéo"
                service1="Identité de Marque"
                service2="Stratégie de Marque"
                service3="Conseil"
                service4="Vidéo & Photographie"
                service5="Création de Contenu Digital"
                service6="Identité Visuelle"
              />
              <Service
                index={1}
                label="Développement de marque"
                description="Le développement de marque englobe l'identité & l'image de marque, mais aussi la stratégie marketing, la communication, et tout ce qui façonne l'image de votre entreprise et la positionne efficacement sur le marché."
                service1="Stratégie de marque"
                service2="Création de l'identité visuelle"
                service3="Communication Digitale"
                service4="Content marketing"
                service5="Relations publiques"
                service6="Expérience client"
              />
            </div>

            <a href="#contact" className="learn-cta btn cta w-max d-none ">
              <span className="cta-text ">
                En savoir plus
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span className="cta-transition"></span>
            </a>
          </div>
        </section>

        <OurWorks title="Projets récents" />

        {/* <BookJourney /> */}

        <section id="about-us" className="flex flex-col gap-2 pt-[180px]">
          {/* <h2 className=" text-center pb-4">Pourquoi nous choisir?</h2> */}
          <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">03</span><span className="separator"></span><span className="s-label uppercase">Pourquoi nous choisir ?</span></p>
          <div className="sides-section flex justify-between min-w-100 gap-32">
            <div className="left-side py-0 w-[50%] flex flex-col gap-6">
              <p className="text-[32px]">Votre première option <br className="desktop" /> pour une valeur exceptionnelle.</p>
              <a href="#contact" className="learn-cta btn cta w-max">
                <span className="cta-text">
                  En savoir plus
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <span className="cta-transition"></span>
              </a>
            </div>
            <div className="right-side py-2 w-[100%] flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <p className="">
                  Au lieu de vous parler un français fastidieux, nous irons en termes simples. Nous sommes une équipe dynamique de 4 artisans qui ont fait leur preuves et s'unissent à présent pour donner de l'impact. Nous sommes, un designer, un developpeur, un expert en génération de leads et un expert en référencement et social media marketing.
                  {/* Nous avons foi en quelque chose : le potentiel illimité de nos clients. Passionés de l'entrepreneuriat, nous sommes convaincus que chaque entreprise détient en elle les graines du succès. Notre mission est simple : nourrir ces graines et les aider à germer, à grandir et à s'épanouir atteindre des sommets insoupçonnés. Nous ne sommes pas une simple agence, nous ne créons pas juste des sites et des stratégies NOUS CRÉONS DES RÉSULTATS.  */}
                </p>
                <p className="">
                  Nous n'avons foi qu'en une chose, le potentiel de votre marque. Du moment que vous apportez de la valeur à vos clients, à coup sûr nous exploiterons la puissance d'internet pour vous faire grandir.
                  Nous sommes des docteurs au cœur de serviteurs, nous faisons concert de nos expertises pour vous garantir du résultat. Tout ce que vous avez à faire, c'est d'exprimer vos souhaits pour que nous les réalisions.
                </p>
              </div>
              <div className="arguments-col flex gap-16 pt-8">
                <Argument icon={3} label="Design Innovant" description="En adoptant une approche holistique, nous donnons vie à des créations cohérentes et mémorables qui marquent durablement le public." />
                <Argument icon={1} label="Développement axé utilisateur" description="Nous créons des interfaces fluides, une navigation intuitive, une expérience utilisateur optimale pour guider vos prospects et les convertir en clients." />
              </div>
              <div className="arguments-col flex gap-16">
                <Argument icon={2} label="Marketing Ciblé" description="Avec la stratégie adaptée, nous touchons les bonnes personnes, au bon moment avec le bon message sur le canal approprié. Nous comprenons les besoins de vos clients et les satisfont." />
                <Argument icon={4} label="Rapport Price-value" description="Nos solutions s'adaptent à votre budget. Nous utilisons les meilleures technologies et produisons du résultat sans casser votre tirelire. " />
              </div>
            </div>
          </div>
        </section>

        <Principles title="Nos principes" />

      </main>

      <Marquee marquee1Content={["Business2Business", "Ecomerce", "SaaS", "Développement Web", "Busniness2Consumers", "CMS", "No-code", "Responsive", "Ecomerce", "SaaS"]} marquee2Content={["CMS", "No-code", "Responsive design", "Ecomerce", "Dévelopment web", "SaaS", "Business2Business"]} />

      <ContactForm interestsList={interestsList} budgetCFA={budgetCFA} budgetEUR={budgetEUR} />

      <Footer />
    </>
  )
}