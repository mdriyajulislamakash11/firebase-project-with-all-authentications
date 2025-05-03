import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLoaderData()

  const handleLogInSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    logInUser(email, password)
    .then((result) => {
        console.log(result.user)
        navigate(location?.state ? location.state : "/")
    })
    .catch((error) => {
        console.log(error.message)
    })
  }

  return (
    <div className="flex justify-center items-center py-14 bg-gray-100">
      <div className="card bg-base-100 w-full max-w-sm p-6 shadow-2xl">
        <form className="card-body space-y-4" onSubmit={handleLogInSubmit}>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        {/* Link to Register Page */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
