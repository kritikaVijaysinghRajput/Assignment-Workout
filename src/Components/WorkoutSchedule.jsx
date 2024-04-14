import React from "react";
import Taskbar from "../constants/Taskbar";
import { Calendarimg } from "../assets";

const WorkoutSchedule = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        {" "}
        <h1
          className="font-semibold"
          style={{ marginTop: "10px", fontSize: "26px" }}
        >
          <span>Workout Schedule</span>
          <br />
          <span className="text-sm">Feb 2024</span>
        </h1>
        <div style={{ marginTop: "30px" }}>
          <img
            src={Calendarimg}
            alt="Workout"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            06:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            07:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            08:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            09:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            10:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            11:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>
          <p
            className=" ml-5"
            style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
          >
            12:00 AM
          </p>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid gray",
              margin: "10px 0",
            }}
          ></div>{" "}
        </div>
        <p
          className=" ml-5"
          style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
        >
          01:00 PM
        </p>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid gray",
            margin: "10px 0",
          }}
        ></div>
        <p
          className=" ml-5"
          style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
        >
          02:00 PM
        </p>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid gray",
            margin: "10px 0",
          }}
        ></div>
        <p
          className=" ml-5"
          style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left" }}
        >
          03:00 PM
        </p>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid gray",
            margin: "10px 0",
          }}
        ></div>
        <Taskbar />
      </div>
    </div>
  );
};

export default WorkoutSchedule;
