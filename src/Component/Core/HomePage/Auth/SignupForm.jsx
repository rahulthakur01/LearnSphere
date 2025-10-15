import React,{useState} from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

import Tab from "../../../Common/Tab";

const SignupForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
  })

  const handleOnChange = () => {
    
  }

  return (
    <>
      <main className="">
        <Tab />
        <form>
          <div>
            <label>
              <p>first name</p>
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeHolder="Enter your name"
                onChange={handleOnChange}
              />
            </label>
          </div>
        </form>
      </main>
    </>
  );
};

export default SignupForm;
