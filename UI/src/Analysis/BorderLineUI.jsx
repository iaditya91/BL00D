import React, { useState, useEffect } from "react";
import InfoRow from "./InfoRow";


const BorderLineUI = () => {
    return (
      <>
        <div>
          <h3>Latest Borderline</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "40px", paddingBottom: "5px" }}>
              <InfoRow
                name="Total Cholesterol"
                desc="total cholestrol"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
            </div>
          </div>
        </div>
      </>
    );
  };


  export default BorderLineUI;