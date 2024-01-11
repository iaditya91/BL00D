import React from "react";

import { Text } from "components";

const DesktopOnePrimarylarge = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto p-[13px] shadow-bs top-[0] w-full"
          style={{
            backgroundImage:
              "url('images/img_buttonbaseprimary_indigo_a100.svg')",
          }}
        >
          {!!props?.userimage1 ? (
            <Text
              className="text-center text-sm text-white-A700 tracking-[0.75px] uppercase"
              size="txtOpenSansSemiBold14"
            >
              {props?.userimage1}
            </Text>
          ) : null}
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[22px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[13px] shadow-bs w-full"
            style={{
              backgroundImage:
                "url('images/img_buttonbaseprimary_indigo_a100.svg')",
            }}
          >
            {!!props?.userimage1 ? (
              <Text
                className="text-center text-sm text-white-A700 tracking-[0.75px] uppercase"
                size="txtOpenSansSemiBold14"
              >
                {props?.userimage1}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOnePrimarylarge.defaultProps = {};

export default DesktopOnePrimarylarge;
