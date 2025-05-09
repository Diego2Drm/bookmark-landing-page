import React from "react";
import { LogoNav } from "./LogoNav";
import IconCLose from "../../assets/images/icon-close.svg";
import { links } from "../utils/Links";
import { SocialMedia } from "../utils/SocialMedia";

const NavBar = ({ isopen, handleClose }) => {

  return (
    <section className={`${isopen ? 'block' : 'hidden'} w-full h-screen bg-[#252b46] fixed z-30 px-7 pt-5 opacity-95 md:hidden`}>
      <div className="flex justify-between items-center mb-5 border-b-2 pb-7 border-gray-600">
        <LogoNav />
        <img src={IconCLose} alt="icon-close" onClick={handleClose}/>
      </div>
      <nav>
        <ul className="flex flex-col gap-5 text-[#f7f7f7] items-center text-2xl uppercase">
          {
            links.map((link, i) => (
              <li key={i} className="w-full border-b-2 pb-5 border-gray-600 text-center">
                <a href={link.to}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="mb-36">
        <button className="w-full bg-transparent border-2 border-[#f7f7f7] text-center p-5 mt-7 text-2xl text-[#f7f7f7] font-semibold rounded-lg tracking-widest">
          <a href="#login">LOGIN</a>
        </button>
      </div>
      <SocialMedia />
    </section>
  )
}

export { NavBar };