import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://www.linkedin.com/in/rohit-kumar-morya-6a1375202/' Icon={FaLinkedinIn} />
      <SingleContactSocial link='https://github.com/Rohit6375' Icon={FiGithub} />
      <SingleContactSocial link='https://www.instagram.com/rohit__6375/' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial