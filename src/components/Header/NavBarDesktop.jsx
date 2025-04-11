import React from "react";
import { links } from "../utils/Links";

const NavBarDesktop = () => {
  return (
    <section className="hidden md:flex gap-5 items-center">
      <ul className="flex gap-5 mr-5">
        {
          links.map((link, i) => (
            <li key={i}><a href={link.to}>{link.name}</a></li>
          ))
        }
      </ul>

      <button className="bg-Red-400 rounded-md text-Grey-50 px-7 py-1"><a href="#login">LOGIN</a></button>
    </section>
  )

}

export { NavBarDesktop };