import React, { useEffect, useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Avatar from '../components/Avatar';

const CheckPasswordPage = () => {
  const [formData, setFormData] = useState({ 
    password: "", 
    userId: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.name) {
      navigate('/email');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

    try {
      const response = await axios({
        method :'post',
        url : URL,
        data : {
          userId : location?.state?._id,
          password : formData.password
        },
        withCredentials : true
      })
      toast.success(response?.data?.message);

      if (response.data.success) {
        setFormData({ password: '', });
        navigate('/');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-1">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-xl form-container">
        <div className="flex items-center">
          <Avatar 
            name={location?.state?.name} 
            imageUrl={location?.state?.profilePic}
            width={60}
            height={60}
          />
          <h2 className="ml-3 font-semibold">{location?.state?.name}</h2> {/* Thêm class ml-3 để tạo khoảng cách */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl text-center">Login</h3>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring input-field text-black"
            />
            {formData.password && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            )}
          </div> 

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-gradient-to-r hover:from-[#0695FF] hover:via-[#A334FA] hover:to-[#FF6968] focus:outline-none focus:ring-2 focus:ring-blue-300 submit-button transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Forgot password ? <Link to="/forgot-password" className="text-blue-500 no-underline">Click here</Link>
        </p>
      </div>

      <footer className="mt-10 text-center text-gray-500">
        <p>Messenger &copy; 2021</p>
      </footer>
    </div>
  );
};

export default CheckPasswordPage;
