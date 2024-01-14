import React from "react";
import Button from "@mui/material/Button";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {
  return (
    <>
      <div
        className="mainPage"
        style={{
          backgroundColor: "lightblue",
          height: "100vh",
          width: "100vw",
        }}
      >
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
            <h1 style={{margin:"0px"}}>BLOOD</h1>
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
              <a style={{textDecoration:"none", color:"black"}}href="">Home</a>
            </div>
            <div className="item2">
              <a style={{textDecoration:"none", color:"black"}}href="">Support</a>
            </div>
            <div className="item3">
              <a style={{textDecoration:"none", color:"black"}}href="">My Account</a>
            </div>
            <div className="item4">
              <a style={{textDecoration:"none", color:"black"}}href=""><LightModeIcon></LightModeIcon></a>
            </div>
            <div className="item4">
              <a style={{textDecoration:"none", color:"black"}}href=""><MenuIcon/></a>
            </div>
          </div>
        </div>
        <div
          id="userTable"
          style={{
            position: "absolute",
            display: "grid",
            gap: "20px",
            width: "601px",
            height: "101px",
            top: "105px",
            left: "27px",
            gridTemplateColumns: "repeat(2, 1fr)",
            backgroundColor: "white",
          }}
        >
          <div id="name" style={{ padding: "20px  50px 0px 50px" }}>
            <label>Name: </label>User Name
          </div>
          <div id="gender" style={{ padding: "20px  50px 0px 50px" }}>
            <label>Gender: </label>Male
          </div>
          <div id="age" style={{ padding: "0px 50px 30px 50px" }}>
            <label>Age: </label>45
          </div>
          <div id="contact" style={{ padding: "0px 50px 30px 50px" }}>
            <label>Contact: </label>1234556780
          </div>
        </div>

        <div
          className="upload-btn"
          style={{
            position: "absolute",
            left: "40%",
            top: "295px",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <Button
            variant="contained"
            style={{
              width: "291.49px",
              height: "35.01px",
              backgroundColor: "blue",
            }}
          >
            UPLOAD YOUR BLOOD REPORT
          </Button>
        </div>

        <div
          className="middle-border-line"
          style={{
            position: "absolute",
            width: "100%",
            height: "69px",
            top: "365px",
            height: "5px",
            backgroundColor: "black",
          }}
        ></div>


        <div
          className="bottom-2-btns"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            padding: "0px 50px",
            height: "69px",
            width: "90%",
            top: "420px",
          }}
        >
          <div>
            <Button
              variant="contained"
              style={{
                width: "300.49px",
                height: "35.01px",
                backgroundColor: "blue",
              }}
            >
              INTEGRATE HEALTH APPS DATA
            </Button>
          </div>

          <div>
            <Button
              variant="contained"
              style={{
                width: "291.49px",
                height: "35.01px",
                backgroundColor: "blue",
              }}
            >
              SELECT YOUR MEDICAL CARE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
