import React from "react";
import { IconArrowDown } from "./IconArrow";
import { IconArrowUp } from "./IconArrowUp";

const FAQItem = ({ question, answer, isOpenfaq, handleOpen }) => {

  return (
    <div className="flex flex-col mb-5 w-full border-b-2 border-gray-300 pb-5">
      <div className="flex justify-between items-center w-full "
        onClick={handleOpen}
      >
        <p className="text-gray-950">{question}</p>
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