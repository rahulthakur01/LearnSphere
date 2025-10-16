import React,{useState} from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main>
        <form className="flex flex-col gap-4">
          <div>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Email <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                // value={email}
                required
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Create Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="password"
                // value={password}
                placeholder="Enter your password"
                required
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <span
                className="absolute top-[50%] right-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginForm;
