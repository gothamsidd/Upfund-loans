
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <section id='contact-main' className='contact-main'>
        <div className='contact-container'>
            <form action="https://api.web3forms.com/submit" method="POST" className='contact-left'>
                <div className='contact-left-title'>
                    <h2 >Get in touch</h2>
                    <hr style={{color:"#2563eb"}} className='line' ></hr><br/>
                    <input type="hidden" name="access_key" value="3498f2a9-bbdd-403a-b766-fbfdc66b74b0"></input>
                    <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required></input><br/><br/>
                    <input type="email" name="email" placeholder='Your email' className='contact-inputs' required></input><br/><br/>
                    <textarea name="message" placeholder='Your Message' className='contact-inputs' required></textarea><br/><br/>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className='contact-right'>
                <img src='maincontact.jpg' alt="Contact Image"></img>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Contact
