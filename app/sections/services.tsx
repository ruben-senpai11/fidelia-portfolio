import Service from "../components/service";


export default function Services() {

  return (
    <>
        <section id="services" className="flex flex-col gap-2 px-[50px]">
          {/* <h2 className=" text-start">Services</h2> */}
          <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">01</span><span className="separator"></span><span className="s-label ">SERVICES</span></p>
          <div className="flex justify-between min-w-100 gap-8 sides-section">
            <div className="left-side py-0 w-[30%] flex flex-col gap-6">
              <p className="text-[32px]">Pas de sites classiques chez nous ! Nous créons un écosystème unique harmonieux</p>
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
                label="Design graphique"
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
    </>
  )
}