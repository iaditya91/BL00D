import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <MenuIcon
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={(e)=> navigate("/reference")}>Reference</MenuItem>
              <MenuItem onClick={(e)=> navigate("/analysis")}>Analysis</MenuItem>
              <MenuItem onClick={(e)=> navigate("/segmentLine")}>Segment Line</MenuItem>
              <MenuItem onClick={(e)=> navigate("/recomendations")}>Recommendation</MenuItem>
            </Menu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;