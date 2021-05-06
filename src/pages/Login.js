import React from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { SignIn } from "../redux/reducers/AuthReducer";
import Lottie from "react-lottie";
import animationData from "../animations/hero-animation.json";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className='d-flex align-items-center justify-content-center '>
        <button
          className='btn btn-outline-dark mt-5'
          onClick={() => {
            dispatch(SignIn());
          }}
        >
          Sign In With Google
        </button>
      </div>
    </>
  );
}
