import React from "react";
import { IconArrowUp } from "./IconArrowUp";
import { IconArrowDown } from "./IconArrowDown";

const FAQItem = ({ question, answer, isOpenfaq, handleOpen }) => {

  return (
    <div className="flex flex-col mb-5 w-full border-b-2 border-gray-300 pb-5">
      <div className="flex justify-between items-center w-full group cursor-pointer"
        onClick={handleOpen}
      >
        <p className="text-gray-950 group-hover:text-Red-400">{question}</p>
        {
          isOpenfaq ? <IconArrowUp /> : <IconArrowDown />
        }
      </div>
      <div>
        {isOpenfaq && <p className="text-gray-500 mt-5 text-base/loose">{answer}</p>}
      </div>
    </div>
  )
}

export { FAQItem };