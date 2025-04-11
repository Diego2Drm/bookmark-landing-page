import React, { useState } from "react";
import { featuresData } from "../utils/FeaturesData";


const Features = () => {

  const [activeData, setActiveData] = useState(featuresData[0]);

  const handleActiveData = (data) => {
    setActiveData(data)
  }

  return (
    <section className="mt-10 p-7 overflow-x-hidden">
      <h2 className="text-Blue-950 font-bold text-center text-2xl">Features</h2>
      <p className="text-center text-[.99rem] text-gray-400 mt-5">
        Our aim is to make it quick and easy for yuo to access your favourite websites. Your booksmarks sync between your devices so you can access them on the go.
      </p>

      <div>
        <ul className="flex flex-col items-center w-full mt-10 gap-7 border-t-2 border-gray-300 pt-4">
          {
            featuresData.map(feature => (
              <li key={feature.id}
                className="
           relative border-b-2 border-gray-300 w-full text-center pb-4" onClick={() => handleActiveData(feature)}>
                {feature.title}
                <span className={`${activeData.title == feature.title ? 'block w-40 h-2 rounded-md bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2 absolute' : ''}`}></span>
              </li>
            ))
          }
        </ul>

        <div className="mt-16">
          <div className="mb-18 relative">
            <div className="w-[350px] h-52 bg-Blue-600 absolute -z-10 -left-20 -bottom-9 rounded-r-[6rem]"></div>
            <img src={activeData.image} alt={activeData.title} />
          </div>
          <h3 className="text-center text-Blue-950 font-bold text-2xl">{activeData.subTitle}</h3>
          <p className="text-center text-gray-400 mt-5 text-[.95rem]">{activeData.info}</p>
        </div>
      </div>

    </section>
  )
};

export { Features };

//  