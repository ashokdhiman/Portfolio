import React from 'react'
import logo from "../assets/MyLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-5 flex items-center justify-between py-2'>
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="h-12 w-12" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar