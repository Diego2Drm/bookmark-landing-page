import React from "react";

const Login = () => {
  return (
    <section className="w-full bg-Blue-600 flex flex-col items-center justify-center px-10 py-18 gap-3">
      <p className="text-Grey-50 text-sm font-light tracking-widest">
        35.000 + ALREADY JOINER
      </p>
      <h4 className="text-Grey-50 text-xl font-bold text-center">Stay up-to-date whit what we´re doing</h4>

      <input type="text" placeholder="Enter you email adrees" className="bg-Grey-50 p-3 w-full rounded-lg placeholder:text-gray-300"/>
      <button className="bg-Red-400 text-Grey-50 font-semibold w-full p-3 rounded-lg">Contact Us</button>
    </section>
  )
}

export { Login };