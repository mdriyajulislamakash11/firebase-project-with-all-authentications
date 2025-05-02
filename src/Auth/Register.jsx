import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center py-14 bg-gray-100">
      <div className="card bg-base-100 w-full max-w-md p-6 shadow-2xl">
        <form className="card-body space-y-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="User name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confiramePassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        {/* Link to Login */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
