import React from "react";
import { IconFacebook, IconTwitter } from "./Icons";

const SocialMedia = () => {
  return (
    <div className="w-full flex justify-center gap-5 lg:justify-end lg:gap-10">
      <IconFacebook />
      <IconTwitter />

    </div>
  )
}

export { SocialMedia };