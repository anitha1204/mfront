import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const Register = () => {
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name.trim()]: e.target.value });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post('https://maahotelbackend1.onrender.com/api/auth/register', {
                username: registerData.username,
                email: registerData.email,
                password: registerData.password
            });
            if (response && response.data) {
                console.log('Registration successful:', response.data);
                toast.success('Registration successful');
                setRegisterData({ username: '', email: '', password: '', confirmPassword: '' });
                setTimeout(() => {
                    navigate('/'); // Redirect to login page
                }, 2000); // Delay to allow toast message to display
            }
        } catch (error) {
            console.error('Error during registration:', error.response?.data);
            toast.error('Registration failed: ' + (error.response?.data?.msg || 'An error occurred'));
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 md:p-8">
                <div className="flex md:flex-row rounded-lg overflow-hidden w-full max-w-md bg-white shadow-xl">
                    <div className="flex flex-col items-center justify-center p-6 md:p-10 w-full mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="w-24 md:w-44 mx-auto" />
                        <h2 className="text-center text-yellow-500 text-lg md:text-xl mt-6 font-semibold">Register</h2>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-4">
                            UserName
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={registerData.username}
                            onChange={handleRegisterChange}
                        />
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Mail Address"
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                        />
                         <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">
                            Password
                        </label>
                        <div className="relative w-full ">
                       
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={registerData.password}
                                onChange={handleRegisterChange}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <HiOutlineEyeOff className="text-gray-500" /> : <HiOutlineEye className="text-gray-500" />}
                            </div>
                        </div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mt-4">
                        Confirm Password
                        </label>
                        <div className="relative w-full">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-center focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={registerData.confirmPassword}
                                onChange={handleRegisterChange}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <HiOutlineEyeOff className="text-gray-500" /> : <HiOutlineEye className="text-gray-500" />}
                            </div>
                        </div>
                        <button onClick={handleRegisterSubmit}  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none mt-10">
                            Register
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Register;