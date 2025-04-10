import React from "react";
import IconArrowDown from "../../assets/images/icon-arrow.svg";

const Faqs = () => {

  const faqsData = [
    {
      name: "What is Bookmark?",
      description: "Lorem",
    },
    {
      name: "How can I requets a new browser?",
      description: "Lorem",
    },
    {
      name: "Is there a mobile app?",
      description: "Lorem",
    },
    {
      name: "What about other Chromium browsers?",
      description: "Lorem",
    },
  ]

  return (
    <section className="mt-20">
      <h2 className="text-Blue-950 font-bold text-2xl text-center my-5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>

      <div className="flex flex-col gap-8 w-full ">
        {
          faqsData.map((faq, i) => (
            <div key={i} className="flex justify-between items-center w-full border-b-2 border-gray-300 pb-3">
              <p className="text-gray-950">{faq.name}</p>
              <img src={IconArrowDown} alt="icon-arrow-down" />
            </div>
          ))
        }
      </div>
        <div className="flex justify-center w-full mt-12 mb-20">
        <button className="bg-Blue-600 py-3 px-10 text-Grey-50 font-semibold rounded-lg">More Info</button>
        </div>
    
    </section>
  )
}

export { Faqs };