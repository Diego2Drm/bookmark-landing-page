import React from "react";
import image1 from "../../assets/images/illustration-features-tab-1.svg"

const Features = () => {
  return (
    <section className="mt-20">
      <h2 className="text-Blue-950 font-bold text-center text-2xl">Features</h2>
      <p className="text-center text-[.99rem] text-gray-400 mt-5">
        Our aim is to make it quick and easy for yuo to access your favourite websites. Your booksmarks sync between your devices so you can access them on the go.
      </p>

      <div>
        <ul className="flex flex-col items-center w-full mt-10 gap-7 border-t-2 border-gray-300 pt-4">
          <li className="border-b-2 border-gray-300 w-full text-center pb-4">Simple Bookmarking</li>
          <li className="border-b-2 border-gray-300 w-full text-center pb-4">Speedy Searching</li>
          <li className="border-b-2 border-gray-300 w-full text-center pb-4">Easy Sharing</li>
        </ul>

        <div className="mt-16">
          <div className="mb-18 relative">
            <div className="w-[350px] h-52 bg-Blue-600 absolute -z-10 -left-20 -bottom-9 rounded-r-[6rem]"></div>
            <img src={image1} alt="image1" />
          </div>
          <h3 className="text-center text-Blue-950 font-bold text-2xl">Bookmark in one click</h3>
          <p className="text-center text-gray-400 mt-5 text-[.95rem]">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        </div>
      </div>

    </section>
  )
};

export { Features };

//  after:content-[''] after:block after:w-2.5 after:h-2.5 after:bg-red-500