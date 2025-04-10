import React from "react";
import { links } from "../utils/Links";
import { SocialMedia } from "../utils/SocialMedia";
import { LogoFooter } from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="bg-Blue-950 flex flex-col justify-center items-center py-8 gap-6">
      <LogoFooter />
      <ul className="flex flex-col gap-5 text-Grey-50 font-light tracking-widest mb-10">
        {
          links.map((link, i) => (
          <li key={i} className="uppercase text-center">{link.name}</li>
        ))
        }
      </ul>
      <SocialMedia />
    </footer>
  )
}

export { Footer };