import React from "react";

import { Text, TextArea } from "components";
import DesktopOnePrimarylarge from "components/DesktopOnePrimarylarge";

const RecommendationsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans sm:gap-10 md:gap-10 gap-[102px] justify-start mx-auto p-10 sm:px-5 w-full">
        <DesktopOnePrimarylarge
          className="h-12 md:ml-[0] ml-[76px] md:px-5 relative w-1/4"
          userimage="Reccomendations"
          userimage1="Reccomendations"
        />
        <div className="flex flex-col items-center max-w-[1183px] mb-[27px] mx-auto md:px-5 w-full">
          <div className="h-[767px] relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-11px] mx-auto w-[11%] z-[1]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-start p-1.5 shadow-bs w-full"
                style={{
                  backgroundImage:
                    "url('images/img_buttonbaseprimary_indigo_a100.svg')",
                }}
              >
                <Text
                  className="text-center text-sm text-white-A700 tracking-[0.75px] uppercase"
                  size="txtOpenSansSemiBold14"
                >
                  Endurance
                </Text>
              </div>
            </div>
            <TextArea
              className="bg-transparent border-0 font-semibold leading-[16.00px] m-auto placeholder:text-black-900 text-black-900 text-center text-sm tracking-[0.75px] uppercase w-full"
              name="description"
              placeholder={`
Ferritin, Iron Serum, Hematocrit, and RBC levels are within the normal range, suggesting good endurance.
Ensure a balanced diet with sufficient iron-rich foods to maintain these levels.

  Heart Health:
Cholesterol levels are generally within the normal range.
Maintain a heart-healthy diet, low in saturated fats and cholesterol.
Regular physical activity is important for overall cardiovascular health.

Inflammation:
WBC count is within the normal range.
Monitor and manage inflammation by maintaining a healthy lifestyle, including regular exercise, a balanced diet, and stress management.

Metabolism:
Glucose and Hemoglobin A1C levels are within the normal range.
Continue to monitor blood glucose levels, maintain a healthy diet, and engage in regular physical activity.

Recovery:
Albumin levels are within the  normal range, indicating good recovery.
Adequate hydration and a balanced diet are crucial for recovery.

Liver Function:
ALT levels are within the normal range.
Limit alcohol intake, maintain a healthy weight, and consider liver-friendly foods.

Electrolytes:
Sodium and potassium levels are within the normal range.
Ensure a balanced intake of electrolyte-rich foods and stay hydrated.

Thyroid Function:
Thyroid-related markers (T3 Total Serum, Thyroid Stimulating Hormone) are within the normal range.
Regular monitoring and consultation with an endocrinologist are advisable.

Kidney Function:
Creatinine levels are within the normal range.
Stay hydrated and maintain a healthy lifestyle to support kidney function.

Overall:
Consider a well-balanced diet rich in fruits, vegetables, lean proteins, and whole grains.
Engage in regular physical activity.
Manage stress through relaxation techniques.`}
            ></TextArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationsPage;
