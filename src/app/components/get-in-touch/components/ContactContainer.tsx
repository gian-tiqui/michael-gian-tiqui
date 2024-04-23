import React from "react";
import InfoContainer from "./InfoContainer";

export interface ContactInterface {
  name: string;
  path?: string;
}

const ContactContainer = () => {
  const contactInfos: ContactInterface[] = [
    {
      name: "meow@gmail.com",
    },
    {
      name: "+63 9231-180-3011",
    },
    {
      name: "facebook",
      path: "/",
    },
    {
      name: "linkedin",
      path: "/",
    },
    {
      name: "github",
      path: "/",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-start max-w-96 md:max-w-[600px] gap-x-1 md:gap-x-2 gap-y-2 mt-5">
        {contactInfos.slice(0, 2).map((info, index) => (
          <InfoContainer key={index} {...info} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center md:justify-start max-w-96 md:max-w-[600px] gap-x-2 md:gap-x-2 gap-y-2 mt-3">
        {contactInfos.slice(2, contactInfos.length).map((info, index) => (
          <InfoContainer key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default ContactContainer;
