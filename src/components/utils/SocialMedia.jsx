import React from "react";
import IconFacebook from "../../assets/images/icon-facebook.svg"
import IconTwitter from "../../assets/images/icon-twitter.svg"

const SocialMedia = () => {
  return (
    <div className="w-full flex justify-center gap-5 mt-36">
      <img src={IconFacebook} alt="icon-facebook" />
      <img src={IconTwitter} alt="icon-twitter" />
    </div>
  )
}

export { SocialMedia };