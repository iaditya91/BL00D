import React from "react";

import { Img, Text } from "components";
import DesktopOnePrimarylarge from "components/DesktopOnePrimarylarge";

const PlotsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-end justify-start mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-end mb-[83px] mt-1.5 md:px-5 w-[95%] md:w-full">
          <div className="flex flex-col gap-[58px] justify-start md:mt-0 mt-4 w-[45%] md:w-full">
            <DesktopOnePrimarylarge
              className="h-12 md:h-[47px] ml-3.5 md:ml-[0] relative w-[56%]"
              userimage="select biomarker for ANALYSIS"
              userimage1="select biomarker for ANALYSIS"
            />
            <Img
              className="h-[314px] md:h-auto object-cover w-full"
              src="images/img_screenshot20240110_314x588.png"
              alt="screenshot20240"
            />
          </div>
          <Img
            className="h-[899px] sm:h-auto object-cover w-[54%] md:w-full"
            src="images/img_screenshot20240110_899x702.png"
            alt="screenshot20240_One"
          />
        </div>
      </div>
    </>
  );
};

export default PlotsPage;
