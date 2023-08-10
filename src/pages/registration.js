import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const router = useRouter();
  const [email, setemail] = useState("chaitanya.tata2105@gmail.com");
  const [isSigned, setisSigned] = useState(true);
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
    // Perform form validation here
    try {
      const user = await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          name: formData.name,
        },
      });
      //   setisSigned(!isSigned);
      if (user) {
        window.alert("Account created Successfully");
        console.log("registration", user);
        setemail(formData.email);
        setisSigned(!isSigned);
      }
    } catch (error) {
      const err = {
        status: true,
        message: error,
      };
      //   setErrorMsg(err);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const user = await Auth.confirmSignUp(email, formData.otp);
      if (user) {
        window.alert("Account verified Successfully");
        router.push("/signIn");
        console.log("sucuessfully logged in", user);
      }
    } catch (error) {
      const obj = {
        status: true,
        message: error,
      };
      console.log("error", error);
      // setErrorMsg(obj);
    }
  };

  return (
    <div>
      {isSigned && (
        <div className="container">
          <h1>Registration Form</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <br />
            {/* <Link href="/Form_details">
          <button type="submit">Form Details</button>
        </Link> */}
          </form>
        </div>
      )}
      {!isSigned && (
        <div className="container">
          <h1>Submit your OTP to very your email</h1>
          <form className="form" onSubmit={handleSubmit1}>
            <div className="form-group">
              <label htmlFor="name">OTP:</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
