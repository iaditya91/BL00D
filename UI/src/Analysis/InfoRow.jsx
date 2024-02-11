import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SegmentedBarChart from "../Reference/SegmentedBarChart";
import SegmentedLine from "./SegmentedLine";

function InfoRow({ name, desc, normalRange, value, units, lineValues }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "5px",
          justifyContent: "space-between",
        }}
      >
        <div className="item1">
          {name}
          <br />
          {desc}
        </div>
        <div className="item1">
          Normal range {normalRange[0]} - {normalRange[1]} {units}
        </div>
        <div className="item1">
          {value}
          <br />
          {units}
        </div>
        <div className="segmentedLine">
          <SegmentedLine
            // value = {1.3}
            // referenceRange = {[
            //   { id: 1, color: "red", min: 0, max: 3.35 },
            //   { id: 2, color: "orange", min: 3.35, max: 3.72 },
            //   { id: 3, color: "yellow", min: 3.72, max: 4.09 },
            //   { id: 4, color: "green", min: 4.09, max: 4.83 },
            //   { id: 5, color: "yellow", min: 4.83, max: 5.2 },
            //   { id: 6, color: "orange", min: 5.2, max: 5.57 },
            //   { id: 7, color: "red", min: 5.7, max: 6.07 },
            // ]}
        />
        </div>
        <div className="item1">
          <KeyboardArrowDownIcon />
          <br />
          more
        </div>
      </div>
    </>
  );
}

export default InfoRow;
