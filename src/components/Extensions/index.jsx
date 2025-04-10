import React from "react";
import LogoCrhome from "../../assets/images/logo-chrome.svg"
import LogoFirefox from "../../assets/images/logo-firefox.svg"
import LogoOpera from "../../assets/images/logo-opera.svg"
import bgDots from "../../assets/images/bg-dots.svg"


const Extensions = () => {

  const Downloads = [
    { logo: LogoCrhome, name: "Crhome", version: 62, },
    { logo: LogoFirefox, name: "Firefox", version: 55, },
    { logo: LogoOpera, name: "Opera", version: 46, },
  ]

  return (
    <section className="mt-10 p-7">
      <h2 className="text-center text-Blue-950 text-2xl font-bold">
        Download the extension
      </h2>
      <p className="text-center text-gray-400 my-5">
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
      </p>

      <div className="w-full flex flex-col items-center gap-5">
        {
          Downloads.map((item, i) => (
            <article className="w-full bg-Grey-50 shadow-lg flex flex-col items-center p-5 mt-5 relative" key={i}>
              <img src={item.logo} alt="" className="my-5" />
              <h4 className="text-Blue-950 font-semibold text-xl">Add to {item.name}</h4>
              <p className="text-gray-400 text-base mt-3">Minimum version {item.version}</p>
              <img src={bgDots} alt="bg-dots" className="my-5" />
              <button className="bg-Blue-600 rounded-lg p-4 w-full mt-5 text-Grey-50 font-semibold">Add & Install Extension</button>
            </article>
          ))
        }

      </div>

    </section>
  )
}

export { Extensions };