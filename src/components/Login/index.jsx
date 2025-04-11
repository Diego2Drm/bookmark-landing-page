import React, { useState } from "react";
import IconError from "../../assets/images/icon-error.svg"
const Login = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const validateEmail = (valid) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(valid)
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <section className="w-full bg-Blue-600 flex flex-col items-center justify-center px-10 py-14 gap-3">
      <p className="text-Grey-50 text-sm font-light tracking-widest">
        35.000 + ALREADY JOINER
      </p>
      <h4 className="text-Grey-50 text-xl font-bold text-center">Stay up-to-date whit what we´re doing</h4>

      <form className="w-full flex flex-col gap-5 mt-2">
        <div className={`${error ? 'bg-Red-400 p-2 rounded-md' : ''} relative`}>
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
        <button className="bg-Red-400 text-Grey-50 font-semibold w-full p-3 rounded-lg"
          onClick={handleSubmit}
        >
          Contact Us
        </button>"
      </form>
    </section >
  )
}

export { Login };