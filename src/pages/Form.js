import React from "react";
import { useState } from "react";
import Link from "next/link";
import { createTodo } from "./api/todo";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createTodo(formData);
    console.log("data", data);
    // Here, you can perform any actions with the form data, such as submitting to a server.
    console.log("formdata", formData);
    formData.name = "";
    formData.email = "";
    formData.message = "";
  };

  return (
    <div className="container">
      <h1>Contact Form</h1>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <br />
        <Link href="/Form_details">
          <button type="submit">Form Details</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
