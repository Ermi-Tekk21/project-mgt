// src/components/SignIn.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, json, useNavigate } from "react-router-dom";
function LogIn() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://65f3509e105614e654a05b09.mockapi.io/ownbest/UserTable")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data received from the server
        const checkLogIn = (email, password) => {
          const getEmail = data.filter((user) => user.email === email);
          if (getEmail.length != 0) {
            if (getEmail[0].password === password) {
              // console.log("found");
              setErrorMessage("verified");
              setTimeout(() => {
                const currentUser = JSON.stringify(getEmail);
                localStorage.setItem("curUser", currentUser)
                navigate(`/user-account/${getEmail[0]['fullName']}`);
              }, 1000);
            } else {
              // console.log("email does not match");
              setErrorMessage("email and password does not match");
            }
          } else {
            // console.log("not registered");
            setErrorMessage("email not registered");
          }
        };
        checkLogIn(formData.email, formData.password);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  };

  return (
    <div
      data-aos="zoom-in-left"
      className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <p
          className={`text-center
            ${
              errorMessage === "verified"
                ? "text-green-500"
                : "text-red-600 animate-pulse"
            }
          `}
        >
          {errorMessage}
        </p>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-1 justify-between text-sm">
                <Link
                  to="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
                <Link
                  to="/sign-in"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  create new account.
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
