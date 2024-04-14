import React from "react";
import { goalsItems } from "../constants/goalsitems";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { frame } from "../assets";

const GoalsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/workout-tracker");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          marginTop: "20px",
          fontWeight: "semibold",
          fontSize: "26px",
          width: "100%",
        }}
      >
        What are your goals?
      </p>
      <div style={{ margin: "20px", marginTop: "80px" }}>
        {goalsItems.map((item, index) => (
          <Link key={index}>
            <div
              className="item flex justify-between items-center"
              style={{
                width: "360px",
                height: "55px",
                borderRadius: "12px",
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#F1F1F1",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p className="text-lg font-semibold" style={{ margin: 0 }}>
                {item.name}
              </p>
              <div
                className="flex justify-center items-center"
                style={{
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={handleClick}
        type="submit"
        className="w-[343px] h-[50px] bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] text-white font-semibold text-lg rounded-xl mt-20"
      >
        Confirm
      </button>
    </div>
  );
};

export default GoalsPage;
