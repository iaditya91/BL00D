import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <div className="item1">line</div>
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
