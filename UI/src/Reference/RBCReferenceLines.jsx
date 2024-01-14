import React, { useState } from "react";

function RBCReferenceLines({name, value, units}) {
  return (<>
  <div style={{display:"flex", flexdirection: "row"}}>
    <div id="name" style={{flex: 1}}>{name}<br/>{value}{units}</div>
    <div id="name" style={{flex: 1, backgroundColor: "red"}}><br/></div>
    <div id="name" style={{flex: 1, backgroundColor: "orange"}}><br/></div>
    <div id="name" style={{flex: 1, backgroundColor: "yellow"}}><br/></div>
    <div id="name" style={{flex: 2, backgroundColor: "green"}}><br/></div>
    <div id="name" style={{flex: 1, backgroundColor: "yellow"}}><br/></div>
    <div id="name" style={{flex: 1, backgroundColor: "orange"}}><br/></div>
    <div id="name" style={{flex: 1, backgroundColor: "red"}}><br/></div>
  </div>
  <div style={{display:"flex", flexdirection: "row"}}>
<div></div>
  </div>
  </>);
}

export default RBCReferenceLines;
