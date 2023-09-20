import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '../utils/Motion'
import SectionWraper from '../hoc/SectionWraper'
import emailjs from "@emailjs/browser"

// template_e2vtxfp
// service_iet6aif
// 9lXajF3wtkX6R7H9t

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })

  function submitHandler(event){
    event.preventDefault();
    setLoading(true)
    
    emailjs.send(
      "service_iet6aif",
      "template_e2vtxfp",
      {
        from_name:form.name,
        to_name:"Ankan",
        from_email:form.email,
        to_email:"ankan.hazra1710@gmail.com",
        message:form.message
      },
      "9lXajF3wtkX6R7H9t"
    )
    .then(() =>{
      setLoading(false)
      alert("Thank you. I will get back to you soon")
      setForm({
        name:"",
        email:"",
        message:""
      })
    },(error) =>{
      setLoading(false)
      console.log(error)
      alert("Somthing went wrong");
    } )

  }

  function changeHandler(event) {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }

  return (
    <div className='mt-20 w-full mb-20'>
      <div className='w-11/12 max-w-[1200px] mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get In touch</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h2>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className='mt-6 p-8 bg-black-100 rounded-2xl'
        >
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center'>Questions, Thoughts Or Just Want To Say Hello?</p>

          <form
            ref={formRef}
            onSubmit={submitHandler}
            className='mt-8 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <p className='text-white font-medium mb-4'>Your Name</p>
              <input type='text' name='name' value={form.name} onChange={changeHandler} placeholder="What's your name?" 
                className='s bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium outline-none border-none'
              ></input>
            </label>

            <label className='flex flex-col'>
              <p className='text-white font-medium mb-4'>Your Email</p>
              <input type='email' name='email' value={form.email} onChange={changeHandler} placeholder="What's your email?" 
                className='s bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium outline-none border-none'
              ></input>
            </label>

            <label className='flex flex-col'>
              <p className='text-white font-medium mb-4'>Your Message</p>
              <textarea rows='7' name='message' value={form.message} onChange={changeHandler} placeholder="What do you want to say?" 
                className='s bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium outline-none border-none'
              ></textarea>
            </label>

            <button className='text-tertiary bg-white py-3 px-8 w-fit rounded-md font-bold shadow-md shadow-primary hover:text-white hover:bg-tertiary transition-all duration-200'>
              {
                loading ? <p>Sending...</p> : <p>Send</p>
              }
            </button>

          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWraper(Contact, "contact")