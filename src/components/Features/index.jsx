import React, { useState } from "react";
import { featuresData } from "../utils/FeaturesData";


const Features = () => {

  const [activeData, setActiveData] = useState(featuresData[0]);

  const handleActiveData = (data) => {
    setActiveData(data)
  }

  return (
    <section className="mt-10 p-7 overflow-x-hidden w-full" id="features">
      <div className="lg:flex flex-col mx-auto lg:w-1/3">
        <h2 className="text-Blue-950 font-bold text-center text-2xl lg:text-3xl">Features</h2>
        <p className="text-center text-[.99rem] text-gray-400 mt-5 lg:text-lg">
          Our aim is to make it quick and easy for yuo to access your favourite websites. Your booksmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <div>
        <ul className="flex flex-col items-center w-full mt-10 gap-7 border-t-2 border-gray-300 pt-4 md:flex-row md:border-t-0 md:border-b-2 md:justify-evenly md:gap-0 lg:w-1/2 lg:mx-auto">
          {
            featuresData.map(feature => (
              <li key={feature.id}
                className="relative border-b-2 border-gray-300 w-full text-center pb-4 md:border-none md:w-80"
                onClick={() => handleActiveData(feature)}>
                {feature.title}
                <span className={`${activeData.title == feature.title ? 'block w-40 h-2 rounded-md bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2 absolute lg:w-60' : ''}`}></span>
              </li>
            ))
          }
        </ul>

        <div className="mt-16 lg:flex">
          <div className="mb-18 relative lg:w-1/2 lg:flex lg:justify-end lg:pr-18">
            <div className="w-[350px] h-52 bg-Blue-600 absolute -z-10 -left-20 -bottom-9 rounded-r-[6rem] lg:h-80 lg:w-[35rem] lg:-bottom-12"></div>
            <img src={activeData.image} alt={activeData.title}/>
          </div>
          <div className="lg:w-1/2 lg:pt-18 lg:pl-20">
            <h3 className="text-center text-Blue-950 font-bold text-2xl lg:text-start">{activeData.subTitle}</h3>
            <p className="text-center text-gray-400 mt-5 text-[.95rem] lg:text-start lg:pr-72 leading-7">{activeData.info}</p>

            <button className="hidden md:block mt-10 bg-Blue-600 text-gray-50 px-5 py-3 rounded-lg">More info</button>
          </div>
        </div>
      </div>

    </section>
  )
};

export { Features };

//  