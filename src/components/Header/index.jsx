import React, { useState } from "react";
import Logo from "../../assets/images/logo-bookmark.svg"
import IconHamburger from "../../assets/images/icon-hamburger.svg"
import { NavBar } from "./NavBar";
import { NavBarDesktop } from "./NavBarDesktop";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../actions";

const Header = () => {
  const isOpen = useSelector(state => state.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <header className="shadow-md shadow-gray-300 flex justify-between items-center fixed w-full left-0 top-0 p-5 z-20 bg-Grey-50 md:px-32">
        <img src={Logo} alt="Logo" />
        <img src={IconHamburger} alt="icon-hamburger" className="md:hidden" onClick={() => dispatch(setIsOpen(true))}/>

        <NavBarDesktop />
      </header>

      <NavBar isopen={isOpen}  handleClose={() => dispatch(setIsOpen(false))}/>
    </>
  )
}

export { Header };