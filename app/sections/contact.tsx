"use client"
import { useState } from "react"
import Budget from "../components/budget"
import Interest from "../components/interest"
import { Console } from "console"


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mtwammsrqnqlhxvmybcd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY 
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not defined in environment variables');
}
const supabase = createClient(supabaseUrl, supabaseKey)


interface Props {
  interestsList: string[],
  budgetEUR: string[],
  budgetCFA: string[]
}

interface FormData {
  name: string;
  email: string;
  interests: string,
  budget: string
}


interface Errors {
  name?: string,
  email?: string,
  interests?: string,
}


function ContactForm({ interestsList, budgetEUR, budgetCFA }: Props) {




  const [clickedInterests, setClickedInterests] = useState<string[]>([]);

  const handleInterestClick = (value: string) => {
    const isClicked = clickedInterests.includes(value);
    const newClickedInterests = isClicked ? clickedInterests.filter((item) => item !== value) : [...clickedInterests, value];
    setClickedInterests(newClickedInterests);

    setFormData((prevFormData) => ({
      ...prevFormData,
     interests: newClickedInterests.join(", "),
    }));
  };


  const [budget, setBudget] = useState("");

  const handleBudgetClick = (value: any) => {
    setBudget(value);
    setFormData({ ...formData, budget: value });
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interests: "",
    budget: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const errors: Errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Veuillez renseigner votre nom ';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Veuillez renseigner votre adresse ';
    } else
      if (!formData.email.includes('@')) {
        errors.email = "Cette adresse mail est invalide !";
      }
    return errors;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    const formIsClean = Object.keys(validationErrors).length === 0;

    if (formIsClean) {

      try {

        const { data, error } = await supabase
          .from('users')
          .insert([
            { 
              name: formData.name, 
              email: formData.email,
              interests: formData.interests,
              budget: formData.budget
            },
          ])
          .select()

        if (error) {
          console.error('Supabase insert error:', error);
          throw new Error(`Supabase insert failed: ${error.message}`);
        }

        setFormSent(true)

      } catch (error) {
        console.error('Error sending message:', error);
      }
    }

  };

  const [formSent, setFormSent] = useState(false)


  return (

    <>
      <main className="flex flex-col items-center justify-between ">
        <section id="contact" className="sides-section flex gap-2 py-[50px]">
          <div className="left-side flex flex-col w-[50%] gap-6 ">
            {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">05</span><span className="separator"></span><span className="s-label uppercase">Contact</span></p> */}
            <h2 className="text-[48px] "  >Let&#39;s connect</h2>
            {/* {!formSent && */}
            <h3 className={(formSent ? " " : "uppercase") + " w-[50%] text-[18px] "} >Il est temps de changer le standing de votre entreprise  {formSent && "!"} </h3>
            {/* } */}
            <a href="mailto:contact@whitedevs.agency" className="btn cta w-max">
              <span className="cta-text">Envoyer un mail</span>
              <span className="cta-transition"></span>
            </a>
          </div>
          <div className="right-side contact-form py-4 w-[50%] flex flex-col gap-2 ">
            {/* <div className="flex gap-4">
              <form onSubmit={setFormFalse}>
                <button type="submit" className="cta">
                  {formSent ? "setFalse" : ""}
                </button>
              </form>
            </div> */}
            <form onSubmit={handleSubmit} className={(formSent == false ? "flex" : "d-none") + " contact-container flex-col gap-10 p-6 "}>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-medium ">INFOS DE CONTACT *</h3>
                <div className="contact-infos flex gap-4">
                  <div className="flex flex-col gap-2 m-0 p-0 w-[100%]">
                    <input type="text " name="name" placeholder="VOTRE NOM *" onChange={handleChange} value={formData.name} />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2 m-0 p-0 w-[100%]">
                    <input name="email" type="e-mail" placeholder="VOTRE E-MAIL *" onChange={handleChange} value={formData.email} />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-medium ">Vous êtes intéressez par *</h3>
                <Interest interestsList={interestsList} handleInterestClick={handleInterestClick} clickedInterests={clickedInterests} errorMessage={errors.interests} />
              </div>
              <Budget title="Votre budget en" budgetCFA={budgetCFA} budgetEUR={budgetEUR} budget={budget} handleBudgetClick={handleBudgetClick} />
              <button type="submit" className="btn cta w-max">
                <span className="cta-text font-medium">Commencer l'aventure</span>
                <span className="cta-bottom-transition"></span>
              </button>
            </form>
            <div className={(formSent == true ? "flex" : "d-none") + " formSent contact-container flex-col items-center gap-4 p-6 "}>
              <p className="text-[20px] ">Votre formulaire a été reçu </p>
              <div className="flex justify-center items-center w-[100%] ">
                <span className="emoji flex flex-col justify-center items-center text-[34px] ">🗸</span>
              </div>
              <p>Notre équipe vous contactera dans les plus brefs délais. Au plaisir !</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactForm