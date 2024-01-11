import React from "react";

import { Img, Text } from "components";
import DesktopOnePrimarylarge from "components/DesktopOnePrimarylarge";

const AnalyticsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex flex-col gap-2.5 items-start justify-start max-w-[1165px] mb-[260px] mx-auto md:px-5 w-full">
          <DesktopOnePrimarylarge
            className="h-12 md:h-[47px] relative w-[29%]"
            userimage="reference Ranges"
            userimage1="reference Ranges"
          />
          <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-between w-full">
            <Img
              className="h-[669px] md:h-auto object-cover"
              src="images/img_screenshot20240110_669x364.png"
              alt="screenshot20240"
            />
            <Img
              className="h-[636px] md:h-auto object-cover"
              src="images/img_screenshot20240110_636x762.png"
              alt="screenshot20240_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
