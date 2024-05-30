import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import MenuLinks from "../components/MenuLinks";
import Logo from "/assets/images/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white flex flex-col items-center w-full p-4 lg:p-8 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-3/4 mt-16 space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="flex flex-col items-start lg:items-start lg:text-left">
          <img src={Logo} alt="Logo" className="w-28 h-12 mb-4" />
          <span className="text-black opacity-40 font-signika text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </span>
        </div>
        <div className="m-[0_3.9rem_8.1rem_3.9rem] flex flex-row justify-between self-start w-[57.4rem] box-sizing-border">
          <div className="m-[0_0_2.3rem_0] flex flex-col box-sizing-border">
            <img className="m-[0_0_1rem_0] self-start w-[7.2rem] h-[3.1rem]" />
            <span className="opacity-40 break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </span>
          </div>
          <div className="flex flex-col items-center box-sizing-border">
            <div className="m-[0_0.2rem_0.6rem_0] inline-block break-words font-['Signika'] font-semibold text-[1.5rem] text-[#000000]">
              Menu
            </div>
            <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
              <div className="opacity-40 m-[0_1.1rem_0.6rem_0] inline-block break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
                Home
              </div>
              <div className="opacity-40 m-[0_1rem_0.6rem_0] inline-block break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
                About
              </div>
              <div className="opacity-40 m-[0_0rem_0.6rem_0] inline-block break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
                Trainers
              </div>
              <div className="opacity-40 m-[0_1.2rem_0.6rem_0] inline-block break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
                Plans
              </div>
              <span className="opacity-40 break-words font-['Signika'] font-normal text-[1.1rem] text-[#000000]">
                Reviews
              </span>
            </div>
          </div>
          <div className="m-[0_0_0.6rem_0] flex flex-col items-center box-sizing-border">
            <div className="m-[0_0_0.6rem_0] inline-block break-words font-['Signika'] font-semibold text-[1.5rem] text-[#000000]">
              Social Media
            </div>
            <div className="m-[0_1rem_0_0] flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0.5rem_0.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
                <img className="opacity-40 m-[0_0.9rem_0_0] w-[1.5rem] h-[1.5rem]" />
                <div className="opacity-[0.43] m-[0.1rem_0_0.1rem_0] inline-block break-words font-['Signika'] font-medium text-[1.1rem] text-[#000000]">
                  LinkedIn 
                </div>
              </div>
              <div className="m-[0_0.3rem_0.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="opacity-40 m-[0_0.9rem_0_0] flex p-[0.1rem_0.3rem_0.1rem_0.3rem] w-[1.5rem] h-[1.5rem] box-sizing-border">
                  <img className="w-[0.9rem] h-[1.3rem]" />
                </div>
                <div className="opacity-[0.43] m-[0.1rem_0_0.1rem_0] inline-block break-words font-['Signika'] font-medium text-[1.1rem] text-[#000000]">
                  Facebook
                </div>
              </div>
              <div className="m-[0_0_0.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
                <img className="opacity-40 m-[0_0.9rem_0_0] w-[1.5rem] h-[1.5rem]" />
                <div className="opacity-[0.43] m-[0.1rem_0_0.1rem_0] inline-block break-words font-['Signika'] font-medium text-[1.1rem] text-[#000000]">
                  Instagram
                </div>
              </div>
              <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
                <img className="opacity-40 m-[0_0.9rem_0_0] w-[1.5rem] h-[1.5rem]" />
                <div className="opacity-[0.43] m-[0.1rem_0_0.1rem_0] inline-block break-words font-['Signika'] font-medium text-[1.1rem] text-[#000000]">
                  Github
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="opacity-70 self-center break-words font-['Signika'] font-medium text-[1rem] text-[var(--dark,#0A142F)]">
           ©  2014 figma.com@saadshaikh
        </span>
      </div> 
    </>
  )
}

export default Footer;
