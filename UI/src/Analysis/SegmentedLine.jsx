import React, { useState } from "react";

const SegmentedLine = ({value, referenceRange}) => {
    const newVal = 1;
    // let value = 4.3;
    // let referenceRange = [
    //   { id: 1, color: "red", min: 0, max: 3.35 },
    //   { id: 2, color: "orange", min: 3.35, max: 3.72 },
    //   { id: 3, color: "yellow", min: 3.72, max: 4.09 },
    //   { id: 4, color: "green", min: 4.09, max: 4.83 },
    //   { id: 5, color: "yellow", min: 4.83, max: 5.2 },
    //   { id: 6, color: "orange", min: 5.2, max: 5.57 },
    //   { id: 7, color: "red", min: 5.7, max: 6.07 },
    // ];

    console.log('value: ',value);
    console.log('ref range: ', referenceRange);
    const calcFlexWeight = () => {
        return 1;
    }

    const bloodMarkerPosition = (r, value) =>{  
        let bloodPostion = ((value - r.min) / (r.max - r.min)) * 100;
        console.log('blood position: ', bloodPostion);
        return bloodPostion;
    }

    const bloodDropStyle = {
        position: "absolute",
        bottom: "0px",
        width: "0",
        height: "0",
        top: "-15px",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "15px solid #000000",
      };

      const annotationStyleBottom = {
        position: "absolute",
        bottom: "-25px",
        left: "100%",
        transform: "translateX(-100%)",
        fontSize: "12px",
        color: "#333",
      };

    let segmentStyle = {
        position: "relative",
        width: "20%",
        height: "5px",
      };

      const segmentedBarStyle = {
        width: "350px",
        flexDirection: "row",
        display: "flex",
        position: "relative",
      };

  return (
    <>
    <div  style={segmentedBarStyle}>
    
      {referenceRange &&  referenceRange.length > 0 &&
        referenceRange.map((ref, index) => {
          return (
            <div
              key={index}
              style={{ ...segmentStyle, flex: `${calcFlexWeight(ref.min, ref.max)}`, backgroundColor: ref.color }}
            >
              <div style={annotationStyleBottom}>{ref.max}</div>
              {value >= ref.min && value <= ref.max && (
                <div
                  style={{
                    ...bloodDropStyle,
                    left: `calc(${bloodMarkerPosition(ref, value)}}% - 10px)`,
                  }}
                ></div>
              )}
            </div>
          );
        })}
        </div>
    </>
  );
};

export default SegmentedLine;
