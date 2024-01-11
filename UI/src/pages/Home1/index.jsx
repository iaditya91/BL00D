import React from "react";

import { Img, Text } from "components";
import DesktopOnePrimarylarge from "components/DesktopOnePrimarylarge";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col items-center justify-start pb-[11px] px-[11px] shadow-bs1 w-full">
          <div className="flex flex-col justify-start max-w-[1387px] mx-auto md:px-5 w-full">
            <div className="flex h-[88px] justify-end md:ml-[0] ml-[749px] relative w-[46%] md:w-full">
              <div className="bg-blue_gray-100 border border-black-900 border-solid h-[77px] mt-auto mx-auto shadow-bs1 w-[99%]"></div>
              <Img
                className="absolute h-[88px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_screenshot20240110.png"
                alt="screenshot20240"
              />
            </div>
            <Img
              className="h-[101px] md:h-auto mt-[17px] object-cover w-[44%]"
              src="images/img_screenshot20240110_101x601.png"
              alt="screenshot20240_One"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[485px] mt-[289px] pb-[21px] w-[24%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[13px] shadow-bs2 w-full"
                style={{
                  backgroundImage: "url('images/img_buttonbaseprimary.svg')",
                }}
              >
                <Text
                  className="rotate-[2deg] text-center text-sm text-white-A700 tracking-[0.75px] uppercase"
                  size="txtOpenSansSemiBold14"
                >
                  Upload Your Blood Report
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1432px] mx-auto p-[79px] md:px-5 w-full">
          <DesktopOnePrimarylarge
            className="sm:h-[287px] md:h-[289px] h-[70px] mb-[219px] sm:ml-[0] ml-[43px] sm:mt-0 mt-0.5 relative w-[23%] sm:w-full"
            userimage1="Integrate HEALTH APPS DATA"
          />
          <DesktopOnePrimarylarge
            className="flex sm:flex-1 flex-col items-center justify-start mb-[221px] mr-[150px] pb-[22px] w-[23%] sm:w-full"
            userimage="SELECT YOUR MEDICAL CARE"
            userimage1="SELECT YOUR MEDICAL CARE"
          />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
