import React, { useState } from "react";
import IconError from "../../assets/images/icon-error.svg"
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setError } from "../../actions";

const Login = () => {

  const email = useSelector(state => state.email);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      dispatch(setError(true))
    } else {
      dispatch(setError(false))
      alert(`Email -> ${email} <- ok`,)
      dispatch(setEmail(''));
    }
  }

  const validateEmail = (valid) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(valid)
  }

  const handleChange = (event) => {
    dispatch(setEmail(event.target.value))
  }

  return (
    <section className="w-full bg-Blue-600 flex flex-col items-center justify-center px-10 py-14 gap-3">
      <p className="text-Grey-50 text-sm font-light tracking-widest">
        35.000 + ALREADY JOINER
      </p>
      <h4 className="text-Grey-50 text-xl font-bold text-center lg:text-2xl lg:w-96 lg:px-4">Stay up-to-date whit what we´re doing</h4>

      <form className="w-full flex flex-col gap-5 mt-2 lg:w-1/2 lg:flex-row">
        <div className={`${error ? 'bg-Red-400 p-2 rounded-md' : ''} relative lg:w-3/4`}>
          <input type="text" placeholder="Enter you email adrees" className="bg-Grey-50 p-3 w-full rounded-lg placeholder:text-gray-300 pr-10"
            value={email}
            onChange={handleChange}
          />

          {error &&
            <>
              <img src={IconError} alt="icon-error" className="absolute right-5 top-5" />
              <span className="italic text-Grey-50 pt-1 text-sm pl-4">Whoops, make sure it's an email</span>
            </>
          }
        </div>
        <button className="bg-Red-400 text-Grey-50 font-semibold w-full p-3 rounded-lg lg:w-1/4 hover:bg-amber-50 hover:border-2 hover:border-Red-400 hover:text-Red-400 cursor-pointer duration-300 ease-in"
          onClick={handleSubmit}
        >
          Contact Us
        </button>"
      </form>
    </section >
  )
}

export { Login };