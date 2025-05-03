import React from "react";
import banner from"../assets/banner.avif";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to SecureZone</h1>
            <p className="mb-6 text-lg">
              Sign up to get started or log in to access your secure dashboard.
              Your privacy matters — we protect it with Firebase Authentication.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/login">
                <button className="btn btn-primary px-6">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-secondary px-6">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
