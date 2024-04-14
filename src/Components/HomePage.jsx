import React from "react";
import { addicon, homeimage1 } from "../assets";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Homepage">
      <Link
        to="/skip"
        style={{
          width: "36px",
          height: "20px",
          position: "absolute",
          top: "50px",
          right: "6px",
          color: "#9FB2FF",
          gap: "0px",
          textDecoration: "underline",
        }}
      >
        Skip
      </Link>
      <div
        className="image-container"
        style={{
          width: "282px",
          height: "282px",
          position: "absolute",
          top: "132px",
          left: "46px",
          opacity: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={homeimage1} alt="image" className="w-full h-full" />
      </div>

      <div
        className="text"
        style={{
          marginTop: "450px",
          marginLeft: "16px",
        }}
      >
        <p className="font-bold text-xl">Track Your Goal</p>
        <p
          className="mt-2"
          style={{
            color: "#787878",
            width: "343px",
            height: "60px",
            top: "538px",
            left: "16px",
            gap: "0px",
            opacity: "0px",
          }}
        >
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals.
        </p>
        <Link
          to="/registration"
          className="circle-container"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "701px",
            left: "304px",
            background:
              "linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={addicon}
            alt="icon"
            className="icon-image"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
