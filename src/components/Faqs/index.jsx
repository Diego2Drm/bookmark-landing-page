import React, { useState } from "react";
import { faqsData } from "../utils/FAQsData";
import { FAQItem } from "./FAQsItem";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenIndex } from "../../actions";

const Faqs = () => {
  const isOpenIndex = useSelector(state => state.isOpenIndex);
  const dispatch = useDispatch();

  return (
    <section className="mt-10 p-7 lg:w-1/2 lg:mx-auto">
      <h2 className="text-Blue-950 font-bold text-2xl text-center my-5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>
      
      {
        faqsData.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpenfaq={isOpenIndex === i}
            handleOpen={() => dispatch(setIsOpenIndex(isOpenIndex === i ? null : i))}
          />
        ))
      }

      <div className="flex justify-center w-full mt-12 mb-20">
        <button className="bg-Blue-600 py-3 px-10 text-Grey-50 font-semibold rounded-lg">More Info</button>
      </div>

    </section>
  )
}

export { Faqs };