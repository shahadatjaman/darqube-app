import React, { useState } from "react";
import Input from "../../../shared/input";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <form className="mt-8">
      <div className="mb-4">
        <Input type="email" name="email" placeholder="Your email address" />
      </div>
      <div className="mb-4">
        <Input type="password" name="email" placeholder="Your password" />
      </div>
      <div className="my-4 flex justify-between items-center">
        <div className="flex">
          <input type="checkbox" />
          <span className="ml-3 text-white">Remember me</span>
        </div>

        <span className="text-primary font-bold">Forgot Password?</span>
      </div>

      <div className="login-btn">
        <span>Sign In</span>
      </div>
      <div className="text-center my-6">
        <span className="text-white">
          Don't have an account?{" "}
          <Link to={"/"} className="text-primary ml-3">
            Sign Up
          </Link>
        </span>
      </div>
    </form>
  );
};

export default ContactForm;
