import React from "react";
import Taskbar from "../constants/Taskbar";
import ChartFull from "../assets/ChartFull.png";
import { textpng, frame, workoutimg1, chevronleft } from "../assets";
import { Link } from "react-router-dom";
import { workoutItems } from "../constants/workoutItems";
import { useNavigate } from "react-router-dom";

const WorkoutTracker = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/workout-schedule");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        className="font-semibold"
        style={{ marginTop: "60px", fontSize: "26px" }}
      >
        <img
          onClick={handleClick}
          className=" ml-10 flex "
          src={chevronleft}
          alt=""
        />
        Workout Tracker
      </h1>

      <div style={{ marginTop: "30px" }}>
        <img
          src={ChartFull}
          alt="Workout"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <img
          src={textpng}
          alt="Workout"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <h1
        className="font-semibold mr-40"
        style={{ marginTop: "20px", fontSize: "19px" }}
      >
        Upcoming Workout
      </h1>

      {workoutItems.map((item, index) => (
        <Link key={index}>
          <div
            className="item flex justify-between items-center"
            style={{
              width: "360px",
              height: "90px",
              borderRadius: "12px",
              marginBottom: "20px",
              marginLeft: "12px",
              marginTop: "12px",
              padding: "10px",
              backgroundColor: "#F1F1F1",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="flex flex-col justify-center items-center"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.image}
            </div>

            <div
              className="flex flex-col justify-center items-start"
              style={{ marginLeft: "10px" }}
            >
              <p className="text-lg font-semibold" style={{ margin: 0 }}>
                {item.name}
              </p>
              <p style={{ marginTop: "5px" }}>{item.time}</p>
            </div>

            <div style={{ marginLeft: "auto" }}>{item.icon}</div>
          </div>
        </Link>
      ))}

      <h1
        className="font-semibold mr-36"
        style={{ marginTop: "20px", fontSize: "18px" }}
      >
        What Do You Want to Train
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "#8CB1FF",
            }}
          >
            <img
              src={frame}
              alt="Frame"
              style={{ width: "200px", height: "100px", marginRight: "8px" }}
            />
            <span className=" font-semibold">Full body Workout</span>
            <img
              src={workoutimg1}
              alt="Icon"
              style={{ width: "100px", height: "100px" }}
            />
          </span>
        </div>
      </div>
      <Taskbar />
    </div>
  );
};

export default WorkoutTracker;
