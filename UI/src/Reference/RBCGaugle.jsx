import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer"

function RBCGauge() {
    const textColor = "#AAA";
  return (
    <>
      <div>
        <ReactSpeedometer
        height={230}
        width={360}
          needleHeightRatio={0.7}
          maxSegmentLabels={0}
          segments={3}
          customSegmentStops={[0, 500, 700, 900, 1000]}
          segmentColors={["green", "yellow", "gold", "red"]}
          value={980}
          textColor={textColor}
        />
      </div>
    </>
  );
}

export default RBCGauge;
