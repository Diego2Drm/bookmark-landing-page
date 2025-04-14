import React, { useState } from "react";
import Logo from "../../assets/images/logo-bookmark.svg"
import IconHamburger from "../../assets/images/icon-hamburger.svg"
import { NavBar } from "./NavBar";
import { NavBarDesktop } from "./NavBarDesktop";

const Header = () => {
  const [isOpen, setIsopen] = useState(false)

  const handleOpen = () => {
    setIsopen(!isOpen)
  }
  return (
    <>
      <header className="shadow-md shadow-gray-300 flex justify-between items-center fixed w-full left-0 top-0 p-5 z-20 bg-Grey-50 md:px-32">
        <img src={Logo} alt="Logo" />
        <img src={IconHamburger} alt="icon-hamburger" onClick={handleOpen} className="md:hidden" />

        <NavBarDesktop />
      </header>

      <NavBar isopen={isOpen} handleClose={handleOpen} />
    </>
  )
}

export { Header };