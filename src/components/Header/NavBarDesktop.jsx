import React from "react";
import { links } from "../utils/Links";

const NavBarDesktop = () => {
  return (
    <section className="hidden md:flex gap-5 items-center">
      <ul className="flex gap-5 mr-5">
        {
          links.map((link, i) => (
            <li key={i} className="hover:text-Red-400 cursor-pointer transition duration-300 ease-in"><a href={link.to}>{link.name}</a></li>
          ))
        }
      </ul>

      <button className="bg-Red-400 rounded-md text-Grey-50 px-7 py-1 hover:text-Red-400 hover:bg-Grey-50 hover:border-2 hover:border-Red-400 cursor-pointer transition duration-300 ease-i"><a href="#login">LOGIN</a></button>
    </section>
  )

}

export { NavBarDesktop };