import React from "react";
import LogoBookmark from "../../assets/images/illustration-hero.svg"

const BookMark = () => {
  return (
    <section className="p-7 pt-32 overflow-x-hidden lg:flex flex-row-reverse">
      <div className="relative mb-10 lg:w-1/2">
        <div className="w-[340px] h-44 bg-Blue-600 absolute -z-10 -right-20 bottom-0 rounded-l-[6rem] lg:h-80 lg:w-[38rem]"></div>
        <img src={LogoBookmark} alt="Logo-Bookmark" />
      </div>
      <div className="lg:pl-22 lg:pr-10 lg:w-1/2 lg:pt-22">
        <h1 className="text-center text-3xl font-bold text-Blue-950 mb-5 lg:text-start lg:text-4xl lg:pr-64">A Simple Bookmark Manager</h1>
        <p className="text-gray-400 text-center text-base mb-7 lg:text-start lg:pr-32 lg:text-lg">A clean and simple interface to organize your favourites websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex justify-center gap-5 w-full lg:justify-start">
          <button className="bg-Blue-600 h-14 text-Grey-50 w-1/2 rounded-lg lg:w-1/3 hover:bg-Grey-50 hover:border-2 hover:border-Blue-600 cursor-pointer hover:text-Blue-600 duration-200 ease-in">
            Get it on Chrome
          </button>
          <button className="bg-Grey-50 h-14 shadow-lg w-1/2 rounded-lg text-Blue-950 lg:w-1/3 hover:border-2 hover:border-Blue-950 hover:shadow-none duration-200 ease-in cursor-pointer">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  )
}

export { BookMark };