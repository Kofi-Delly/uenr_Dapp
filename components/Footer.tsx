import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="w-full h-[122px] py-[37px]
      rounded-t-[24px] flex flex-col items-center justify-center
      bg-black bg-opacity-40 px-5"
    >
      <div className="flex justify-center items-center space-x-4">
        <FaLinkedinIn size={30} />
        <FaGithub size={30} />
      </div>

      <hr className="w-full sm:w-[450px] border-t border-gray-400 mt-3" />

      <p className="text-sm font-[500px] mt-5">©️{new Date().getFullYear()}</p>
      <p className="text-sm font-[500px]">by UENR Dapp Team</p>
    </footer>
  )
}

export default Footer
