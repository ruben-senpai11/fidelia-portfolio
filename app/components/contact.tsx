"use client"
import { useState } from "react"
import Budget from "./budget"
import Interest from "./interest"

interface Props{
  interests: string[],
  budgetEUR: string[],
  budgetCFA: string[]
}

interface FormData {
  name: string;
  email: string;
  interests: string,
  budget: string
}

function ContactForm({interests, budgetEUR, budgetCFA}:Props) {
  

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interests: "",
    budget: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', interests: "", budget: "" });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const escapedString1 = "Let &#39 s connect"
  const escapedString2 = "NOW IT &#39 S TIME TO TELL THE WHOLE WORLD ABOUT YOUR BUSINESS"


  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <section id="contact" className="sides-section flex gap-2 py-[50px]">
          <div className="left-side flex flex-col w-[50%] gap-6 ">
            {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">05</span><span className="separator"></span><span className="s-label uppercase">Contact</span></p> */}
            <h2 className="text-[48px] ">Let's connect</h2>
            <p className="uppercase w-[50%] text-[20px] ">NOW IT'S TIME TO TELL THE WHOLE WORLD ABOUT YOUR BUSINESS</p>
            <a href="mailto:albanhonfovou@gmail.com">
              <button className="btn cta w-max">
                <span className="cta-text">Send a mail instead</span>
                <span className="cta-transition"></span>
              </button>
            </a>
          </div>
          <div className="right-side py-4 w-[50%]  ">
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
                <Interest interestsList={interests} />
              </div>
              <Budget budgetCFA={budgetCFA} budgetEUR={budgetEUR} />
              <button className="btn cta w-max">
                <span className="cta-text">Start a journey</span>
                <span className="cta-bottom-transition"></span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactForm