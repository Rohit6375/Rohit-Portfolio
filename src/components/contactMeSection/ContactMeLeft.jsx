import React from 'react'
import ContactForm from './ContactForm';

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white'>Let's connect and explore how I can contribute to your team,<br/>I'm excited about new opportunities.</p>
        </div>
        <ContactForm/>
    </div>
  );
};

export default ContactMeLeft;