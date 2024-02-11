import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
  return (
    <div
      className="TopBar"
      style={{
        height: "50px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "0px 0px 0px 200px",
        }}
      >
        <h1 style={{ margin: "0px" }}>BLOOD</h1>
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className="menuItems"
      >
        <div className="item1">
          <a style={{ textDecoration: "none", color: "black" }} href="">
            Home
          </a>
        </div>
        <div className="item2">
          <a style={{ textDecoration: "none", color: "black" }} href="">
            Support
          </a>
        </div>
        <div className="item3">
          <a style={{ textDecoration: "none", color: "black" }} href="">
            My Account
          </a>
        </div>
        <div className="item4">
          <a style={{ textDecoration: "none", color: "black" }} href="">
            <LightModeIcon></LightModeIcon>
          </a>
        </div>
        <div className="item4">
          <a style={{ textDecoration: "none", color: "black" }} href="">
            <MenuIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;