import React, { useState } from "react";
import bloodhomebackground from './Images/bloodhomebackground.jpg';
import Button from "@mui/material/Button";
import axios from "./api/axios1";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

function Home() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Example POST request using axios to upload file
      const response = await axios.post('/upload_excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', response.data);
      navigate("/reference");
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div
        className="mainPage"
        style={{
          backgroundColor: "lightblue",
          backgroundImage: `url(${bloodhomebackground})`,
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center", /* Center the image */
          backgroundRepeat: "no-repeat", /* Do not repeat the image */
          backgroundSize: "cover" /* Resize the background image to cover the entire container */
        }}
      >
      <TopBar/>
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
            fontWeight: "bold",
            color: "black",
            opacity: "0.5",
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
          <input type="file" onChange={handleFileChange} />
          <Button
            variant="contained"
            style={{
              width: "291.49px",
              height: "35.01px",
              backgroundColor: "blue",
            }}
            onClick={handleUpload}
          >
            UPLOAD YOUR BLOOD REPORT
          </Button>
        </div>

        {/* <div
          className="middle-border-line"
          style={{
            position: "absolute",
            width: "100%",
            height: "69px",
            top: "365px",
            height: "5px",
            backgroundColor: "black",
          }}
        ></div> */}


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
