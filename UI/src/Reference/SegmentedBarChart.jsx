import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SegmentedBarChart = ({
  name,
  value,
  units,
  first,
  referenceValues,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const chartContainerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const segmentedBarStyle = {
    display: "flex",
    position: "relative",
  };

  let segmentStyle = {
    position: "relative",
    width: "80px",
    height: "35px",
    flex: 1,
    // backgroundColor: "#3498db",
    // marginRight: '10px',
  };

  const bloodDropStyle = {
    position: "absolute",
    bottom: "0px",
    // left: "calc(100% - 50px)",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "15px solid #000000",
  };

  const annotationStyleBottom = {
    position: "absolute",
    bottom: "-25px",
    left: "100%",
    transform: "translateX(-100%)",
    fontSize: "12px",
    color: "#333",
  };

  let annotationStyleTop = {
    position: "absolute",
    top: "-20px",
    left: "80%",
    transform: "translateX(-100%)",
    fontSize: "12px",
    color: "#333",
    whiteSpace: "nowrap"
  };

  const bloodMarkerPosition = (r) => {
    console.log('entered blood position: ', value);
    let bloodPostion = ((value - r.min) / (r.max - r.min)) * 100;
    console.log(bloodPostion);
    return bloodPostion;}
 

  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: name,
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  const generateBar = (ref, index) => {
     (ref.id === "optimal") ? segmentStyle = { ...segmentStyle, flex: "2" }: segmentStyle = { ...segmentStyle, flex: "1" };
     (ref.id === "optimal") ? annotationStyleTop = { ...annotationStyleTop, left: "65%" }: annotationStyleTop = { ...annotationStyleTop, left: "80%" };
    return (
      <>
        <div
          key={index}
          style={{ ...segmentStyle, backgroundColor: ref.color }}
        >
          {first && <div style={annotationStyleTop}>{ref && ref.id}</div>}
          <div style={annotationStyleBottom}>{ref.max}</div>
          {console.log(name, value, ref.min, ref.max)}
          {/* value>=ref.min && value<=ref.max */}
          {(value>=ref.min && value<=ref.max) && 
          <div
          style={{
            ...bloodDropStyle,
            left: `calc(${bloodMarkerPosition(ref, value)}}% - 10px)`,
          }}
        ></div>}
        </div>
      </>
    );
  };

  return (
    <>
      <div style={chartContainerStyle}>
        <div style={segmentedBarStyle}>
          <div
            style={{ ...segmentStyle, fontSize: "14px", textAlign: "center" }}
          >
            <p style={{ padding: "0px", margin: "0px" }}>
              {name} <BarChartIcon onClick={handleClickOpen} />
            </p>{" "}
            {value} {units}
          </div>
          {referenceValues &&
            referenceValues.length > 0 &&
            referenceValues.map((ref, index) => generateBar(ref, index))}
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            This is a bar chart on {name} with {value} {units}
          </Typography>
          <Bar data={data} options={options}></Bar>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </>
  );
};

export default SegmentedBarChart;
