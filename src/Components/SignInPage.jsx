import React from "react";
import { icongoogle, iconfacebook } from "../assets";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/goals");
  };

  return (
    <div>
      <div>
        <div className="login-page flex flex-col items-center">
          <div className="form mt-8">
            <p className="font-bold text-2xl mb-10">Welcome Back !</p>
            <form className="mt-4">
              <div className="mb-7">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-[343px] h-[50px] rounded-xl bg-gray-200 p-3"
                />
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-[343px] h-[50px] rounded-xl bg-gray-200 p-3"
                />
                <div className="flex items-center mt-7">
                  <a
                    href="/login"
                    style={{
                      color: "#7F7F7F",
                      width: "200px",
                      height: "15px",
                      position: "absolute",
                      top: "290px",
                      left: "21px",
                      gap: "0px",
                      opacity: "0px",
                      textAlign: "left",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-[274px]">
                <button
                  onClick={handleClick}
                  type="submit"
                  className="w-[343px] h-[50px] bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] text-white font-semibold text-lg rounded-lg"
                >
                  Sign In{" "}
                </button>
              </div>

              <div className="lines flex items-center my-4">
                <div className="w-[155px] h-[0.5px] bg-gray-400"></div>
                <span className="mx-2 text-gray-500">Or</span>
                <div className="w-[155px] h-[0.5px] bg-gray-400"></div>
              </div>

              <div className="icons flex justify-center items-center mt-4">
                <div className="flex flex-row items-center ">
                  <div
                    className="icon-container"
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid #7F7F7F",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={icongoogle}
                      alt="Google"
                      className="w-[18px] h-[18px]"
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div style={{ width: "20px" }}></div>
                  <div
                    className="icon-container"
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid #7F7F7F",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconfacebook}
                      alt="Facebook"
                      className="w-[18px] h-[18px]"
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "195px",
                  height: "15px",
                  position: "absolute",
                  top: "756px",
                  left: "90px",
                  textAlign: "center",
                }}
              >
                Don’t have an account yet?
                <a href="/registration" style={{ color: "#007BFF" }}>
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
