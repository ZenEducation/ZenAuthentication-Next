import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import { Router, useRouter } from "next/router";
Auth.configure(awsExports);
// import { createTodo } from "./api/todo";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const user = await Auth.signIn(formData.email, formData.password);
      if (user) {
        localStorage.setItem(
          "authToken",
          user.signInUserSession.accessToken.jwtToken
        );
        localStorage.setItem("name", user.attributes.name);
        window.alert("Successfully logged In");
        console.log("logged in sucussfully", user);
        router.push("/profile");
      }
    } catch (error) {
      const obj = {
        status: true,
        message: error,
      };
      console.log("error", error);
      //  setErrorMsg(obj);
    }
  };

  return (
    <div className="container">
      <h1>Login here</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.otp}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
};

export default SignIn;
