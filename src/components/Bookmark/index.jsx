import React from "react";
import LogoBookmark from "../../assets/images/illustration-hero.svg"

const BookMark = () => {
  return (
    <section>
      <div className="relative mb-10">
        <div className="w-[340px] h-44 bg-Blue-600 absolute -z-10 -right-20 bottom-0 rounded-l-[6rem]"></div>
        <img src={LogoBookmark} alt="Logo-Bookmark" />
      </div>
      <h1 className="text-center text-3xl font-bold text-Blue-950 mb-5">A Simple Bookmark Manager</h1>
      <p className="text-gray-400 text-center text-base mb-7">A clean and simple interface to organize your favourites websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
      <div className="flex justify-center gap-5 w-full">
        <button className="bg-Blue-600 h-14 text-Grey-50 w-1/2 rounded-lg">Get it on Chrome</button>
        <button className="bg-Grey-50 h-14 shadow-md w-1/2 rounded-lg text-Blue-950">Get it on Firefox</button>
      </div>
    </section>
  )
}

export { BookMark };