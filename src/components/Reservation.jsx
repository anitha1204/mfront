
// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog,FaUserCircle } from 'react-icons/fa';
// import { Bell, ChevronDown } from 'lucide-react';
// import { Table } from 'antd';
// import logo from "../assets/logo.png";
// import { HiX } from "react-icons/hi";
// import '../styles/datepicker.css';
// import { BsCaretDownFill } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';

// const Reservation = () => {
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [showProductsDropdown, setShowProductsDropdown] = useState(false);
//     const [selectedHotel, setSelectedHotel] = useState('');

//     const [userData, setUserData] = useState({
//         username: '',
//         email: ''
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         // Get user data from localStorage
//         const user = localStorage.getItem('user');
//         if (user) {
//             const parsedUser = JSON.parse(user);
//             setUserData({
//                 username: parsedUser.username || '',
//                 email: parsedUser.email || ''
//             });
//         } else {
//             // If no user data, redirect to login
//             navigate('/');
//         }
//     }, [navigate]);


//     const handleHotelChange = (e) => {
//         setSelectedHotel(e.target.value); // Update the selected hotel
//     };

//     const handleProductsClick = () => setShowProductsDropdown(!showProductsDropdown);
//     const handleDropdownItemClick = () => setShowProductsDropdown(false);

//     // Update time every second
//     useEffect(() => {
//         const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//         return () => clearInterval(timer);
//     }, []);

//     // Format current time
//     const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//     const location = useLocation();
//     const isActiveLink = (path) => location.pathname === path;



//     return (
//         <div className="flex bg-gray-100">
//             {/* Sidebar */}
//             <section className="flex flex-col">
//                 <div className="flex items-center justify-center mb-8">
//                     <img src={logo} alt="Logo" className="h-24" />
//                 </div>

//                 <aside className="w-[260px] bg-gradient-to-r from-color to-colors text-white p-6 border-r rounded-3xl mx-6 h-[670px] ">

//                     <nav className="space-y-4 text-xl">
//                         <Link
//                             to="/home"
//                             className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200  
//                 ${isActiveLink('/home')
//                                     ? 'text-white border-b-2 border-white'
//                                     : 'text-text-white hover:text-white'}`}
//                         >
//                             <FaHome className="w-7 h-7" />
//                             <span className=''>Home</span>
//                         </Link>

//                         <Link
//                             to="/booking"
//                             className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
//           ${isActiveLink('/booking')
//                                     ? 'text-white border-b-2 border-white'
//                                     : 'text-text-white hover:text-white'}`}
//                         >
//                             <FaBook className="w-6 h-6" />
//                             <span>Booking</span>
//                         </Link>

//                         <Link
//                             to="/reservation"
//                             className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
//           ${isActiveLink('/reservation')
//                                     ? 'text-white border-b-2 border-white'
//                                     : 'text-text-white hover:text-white'}`}
//                         >
//                             <FaRegCalendarAlt className="w-6 h-6" />
//                             <span>Reservation</span>
//                         </Link>

//                         <Link
//                             to="/inhouseguest"
//                             className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
//           ${isActiveLink('/inhouseguest')
//                                     ? 'text-white border-b-2 border-white'
//                                     : 'text-text-white hover:text-white'}`}
//                         >
//                             <FaBed className="w-6 h-6" />
//                             <span>In House Guest</span>
//                         </Link>

//                         <Link
//                             to="/guesthistory"
//                             className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
//           ${isActiveLink('/guesthistory')
//                                     ? 'text-white border-b-2 border-white'
//                                     : 'text-text-white hover:text-white'}`}
//                         >
//                             <FaHistory className="w-6 h-6" />
//                             <span>Guest History</span>
//                         </Link>
//                     </nav>

//                     <div className="mt-2 flex flex-col items-center custom-datepicker-container">
//                         {/* Header with date and icon */}
//                         <div className="flex justify-between items-center w-full mb-2 px-2">
//                             <h3 className="text-2xl font-semibold">
//                                 {format(startDate, 'EEE, MMM d')}
//                             </h3>
//                             <FaPen className=" cursor-pointer" />
//                         </div>
//                         {/* Date Picker */}
//                         <DatePicker
//                             selected={startDate}
//                             onChange={(date) => setStartDate(date)}
//                             inline
//                             className="outline-none custom-datepicker"
//                         />
//                     </div>
//                 </aside>

//                 <div className="flex justify-between items-center mt-4 bg-white w-[260px] border rounded-3xl mx-6 h-[50px] shadow-lg">
//                     <button className="w-10 h-10 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
//                         <FaCog className="text-lg" />
//                     </button>
//                     <button className="w-[120px] bg-red-500 text-white py-1 px-2 rounded-full mr-2">
//                         Sign out
//                     </button>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <main className="flex-1 p-6 max-w-9xl mr-10 ">
//                 <nav className="bg-white px-4 py-2 shadow-sm rounded-[50px] mt-8">
//                     <div className="max-w-7xl mx-auto flex items-center justify-between">
//                         <div className="relative flex-1 max-w-md">
//                             <input
//                                 type="text"
//                                 placeholder="Search Here by Name"
//                                 className="w-96 pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
//                             />
//                             <button className="absolute right-20 top-1/2 -translate-y-1/2">
//                                 <HiX  className="h-4 w-4 text-gray-400"/>
//                             </button>
//                         </div>
//                         <div className="flex items-center">
//                             <div className="relative right-[50px]">
//                                 <Bell className="h-6 w-6 text-gray-600" />
//                                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                     15
//                                 </span>
//                             </div>
//                             <div className="relative">
//                                 <select
//                                     onChange={handleHotelChange}
//                                     value={selectedHotel}
//                                     className="bg-primary text-white px-6 py-2 rounded-3xl mr-10 text-[13px] font-semibold appearance-none"
//                                 >
//                                     <option value="">Select Hotel</option>
//                                     <option value="MAAG">MAAG</option>
//                                     <option value="MAAR">MAAR</option>
//                                     <option value="MAAS">MAAS</option>
//                                     <option value="MAA">MAA</option>
//                                 </select>
//                                 {/* Dropdown Icon */}
//                                 <div className="absolute top-0 text-white pointer-events-none ml-[99px] mt-3 ">
//                                     <BsCaretDownFill size={13} />
//                                 </div>
//                             </div>

//                             <p className="bg-gray-300 px-3 py-1 rounded mx-6">{formattedTime}</p>
//                             <div className="flex items-center gap-2">
//                                 {/* <img src={img} alt="User" className="h-10 w-10 rounded-full" /> */}
//                                 <FaUserCircle size={50} className='h-10 w-10 text-gray-400' />
//                                 <div className="flex flex-col text-sm">
//                                     <span className="text-gray-800">{userData.username}</span>
//                                      <span className="text-gray-800">{userData.email}</span>
//                                 </div>
//                                 <ChevronDown className="w-5 h-5 text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                 </nav>

//                 <form className="bg-white p-6 rounded-3xl shadow-md mt-4">

//                     <div className="">
//                         {/* Search Field */}
//                         <input
//                             type="text"
//                             placeholder="Search Here by Name"
//                             className=" pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 w-[900px]"
//                         />
//                         <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>

//                         <div className="grid md:grid-cols-[300px_300px_300px]  gap-4 mb-4">


//                             <div>
//                                 <label className="block text-lg text-color3 font-bold">Name Details</label>
//                                 <input
//                                     type="text"
//                                     name="bookingPersonName"

//                                     placeholder="Booking Person Name"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />

//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     placeholder="Mobile Number"
//                                     name="mobileNumber"

//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />

//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     name="emailAddress"

//                                     placeholder="Email Addres"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />

//                             </div>
//                         </div>

//                         <div className="grid  md:grid-cols-[300px_150px_450px] gap-4 mb-4">
//                             <div className="relative inline-block">
//                                 <label className="block text-lg text-color3 font-bold">Guest Details</label>
//                                 <select
//                                     name="guestDetails"

//                                     placeholder="select"
//                                     className="w-20 border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 >
//                                     <option value="">Select</option>
//                                     {Array.from({ length: 10 }, (_, i) => (
//                                         <option key={i + 1} value={i + 1}>
//                                             {i + 1}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {/* Dropdown Icon */}
//                                 <div className="absolute top-0 mt-[60px] text-gray-600 pointer-events-none ml-14">
//                                     <BsCaretDownFill size={12} />
//                                 </div>

//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Room Type</label>
//                                 <select
//                                     name="acNonac"

//                                     placeholder="Select type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 >
//                                     <option value="" >Select type</option>
//                                     <option value="Non-AC">Non-AC</option>
//                                     <option value="AC">AC</option>
//                                 </select>
//                                 <div className="absolute top-0 mt-[60px] right-3 text-gray-600 pointer-events-none">
//                                     <BsCaretDownFill size={12} />
//                                 </div>


//                             </div>
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select
//                                     name="roomType"

//                                     placeholder="Select room type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400 "
//                                 >
//                                     <option value="" >Select room type</option>
//                                     <option value="Single occupancy">Single occupancy</option>
//                                     <option value="Double occupancy with kitchen">Double occupancy with kitchen</option>
//                                     <option value="Double occupancy without kitchen">Double occupancy without kitchen</option>
//                                     <option value="Triple occupancy with kitchen">Triple occupancy with kitchen</option>
//                                     <option value="Triple occupancy without kitchen">Triple occupancy without kitchen</option>
//                                 </select>
//                                 {/* Dropdown Icon */}
//                                 <div className="absolute top-0 mt-[60px] right-3 text-gray-600 pointer-events-none">
//                                     <BsCaretDownFill size={12} />
//                                 </div>

//                             </div>

//                         </div>

//                         <div>
//                             <div className=''>
//                                 <label className="block text-lg text-color3 font-bold">Address Details</label>
//                                 <input
//                                     type="text"
//                                     name="addressDetails"

//                                     placeholder="Type customer Address"
//                                     className="w-[930px] border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                             </div>


//                         </div>
//                         {/* Divider */}
//                         <hr className="border-dashed border-gray-300 my-4 mt-10" />

//                         {/* Check-In / Check-Out Details */}
//                         <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-10">
//                             <div>
//                                 <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
//                                 <input
//                                     type="date"
//                                     name="checkInDate"


//                                     className="w-full border p-2 rounded-lg mt-5 text-sm py-2"
//                                 />

//                             </div>

//                             {/* Time Input */}
//                             <div>
//                                 <input
//                                     type="time"
//                                     name="time"
//                                     className="w-full border p-2 rounded-lg mt-11 py-2 text-sm"
//                                 />

//                             </div>

//                             {/* AM/PM Select */}
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select
//                                     name="amPm"

//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-11 appearance-none"
//                                 >
//                                     <option value="" className='text-gray-600'>Select</option>
//                                     <option value="AM">AM</option>
//                                     <option value="PM">PM</option>
//                                 </select>
//                                 {/* Dropdown Icon */}
//                                 <div className="absolute top-0 right-3 text-gray-600 pointer-events-none mt-14">
//                                     <BsCaretDownFill size={12} />
//                                 </div>

//                             </div>
//                             <div>
//                                 <label className="block text-md text-orange-500 font-bold">Check-OUT Date</label>
//                                 <input type="date" className="w-full border p-2 rounded-lg mt-5 text-sm py-2" />

//                             </div>
//                             <div>
//                                 <input type="time" className="w-full border p-2 rounded-lg mt-11 py-2 text-sm" />

//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select className="w-full border py-2 rounded-lg p-2 text-sm mt-11 ">
//                                     <option>am</option>
//                                     <option>pm</option>
//                                 </select>

//                             </div>
//                             <div>
//                                 <label className="block text-md text-orange-500 font-bold">C-Form Number</label>
//                                 <input
//                                     type="text"
//                                     placeholder="325214"
//                                     className="w-full border p-2 rounded-lg text-sm mt-5 py-2"
//                                 />
//                             </div>
//                             <p className='mt-12 font-bold'>Opened</p>
//                         </div>

//                         {/* Additional Charges and Payment */}
//                         <div className="grid md:grid-cols-[200px_180px_350px_330px] gap-4 mb-4 mt-6">
//                             <div>
//                                 <label className="block text-md text-orange-500 font-bold">Allocated Room Number</label>
//                                 <input
//                                     type="text"
//                                     placeholder="MAA053"
//                                     className="w-full border p-2 rounded-lg mt-4 text-sm"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-md text-orange-500 font-bold">Booking Number</label>
//                                 <input
//                                     type="text"
//                                     placeholder="SANJAY-007"
//                                     className="w-full border p-2 rounded-lg mt-4 text-sm"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-md text-orange-500 font-bold">Nationality</label>
//                                 <select className="w-full border py-2 rounded-lg p-2 text-sm mt-4">
//                                     <option>Non-AC</option>
//                                     <option>AC</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select className="w-full border py-2 rounded-lg p-2 text-sm mt-11 ">
//                                     <option>am</option>
//                                     <option>pm</option>
//                                 </select>

//                             </div>

//                         </div>
//                         <div className="grid md:grid-cols-[170px_180px_16px_350px_300px] gap-4 mb-4">

//                             <div>
//                                 <label className="text-md text-gray-600 mr-2">Additional Charges:</label>
//                                 <input
//                                     type="number"
//                                     placeholder="500"
//                                     className="border p-2 rounded-lg w-20 mt-3"
//                                 />

//                             </div>
//                             <div>
//                                 <button className="text-blue-500 text-sm mr-26  mt-10">+ Add payment</button>
//                             </div>
//                             <div></div>
//                             <div>
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select className="w-full border py-2 rounded-lg p-2 text-sm ">
//                                     <option>am</option>
//                                     <option>pm</option>
//                                 </select>

//                             </div>
//                             <div>
//                                 <label className="block text-md text-gray-600 mt-3">Payment Mode</label>
//                                 <div className="flex items-center mt-2">
//                                     <label className="mr-4">
//                                         <input type="radio" name="payment" className="mr-1" />
//                                         UPI
//                                     </label>
//                                     <label className="mr-4">
//                                         <input type="radio" name="payment" className="mr-1" />
//                                         Card
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="payment" className="mr-1" />
//                                         Cash
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Submit Button */}
//                         <div className="flex justify-end mt-6">
//                             <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full">
//                                 SUBMIT
//                             </button>
//                         </div>
//                     </div>


//                 </form>

//             </main>
//         </div>
//     );
// };

// export default Reservation;


import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog,FaUserCircle } from 'react-icons/fa';
import { Bell, ChevronDown } from 'lucide-react';
import { Table } from 'antd';
import logo from "../assets/logo.png";
import { HiX } from "react-icons/hi";
import '../styles/datepicker.css';
import { BsCaretDownFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { HiSearch } from 'react-icons/hi';

const Reservation = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState('');

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(true); // Set to null initially
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState("");


    const handleSearch = async (e) => {
        e.preventDefault();
        setIsSearching(true);
        setError("");
        setSearchResults([]);
        setSelectedBooking(true); // Reset selected booking on new search

        if (!searchTerm.trim()) {
            setIsSearching(false);
            setError("Please enter a search term.");
            return;
        }

        try {
            const response = await axios.get(
                `https://maahotelbackend1.onrender.com/api/bookings/search?query=${encodeURIComponent(searchTerm)}`
            );

            if (response.data.length === 0) {
                setError("No bookings found");
            } else {
                setSearchResults(response.data);
            }
        } catch (error) {
            const errorMessage = error.response
                ? error.response.data.message || "Error searching bookings"
                : error.message;

            setError(errorMessage);
            console.error("Error searching bookings:", errorMessage);
        }

        setIsSearching(false);
    };

    // Handle booking selection to view details
    const handleSelectBooking = (booking) => {
        setSelectedBooking(booking);
    };


    const [userData, setUserData] = useState({
        username: '',
        email: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Get user data from localStorage
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            setUserData({
                username: parsedUser.username || '',
                email: parsedUser.email || ''
            });
        } else {
            // If no user data, redirect to login
            navigate('/');
        }
    }, [navigate]);


    const handleHotelChange = (e) => {
        setSelectedHotel(e.target.value); // Update the selected hotel
    };

    const handleProductsClick = () => setShowProductsDropdown(!showProductsDropdown);
    const handleDropdownItemClick = () => setShowProductsDropdown(false);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Format current time
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;



    return (
        <div className="flex bg-gray-100">
            {/* Sidebar */}
            <section className="flex flex-col">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="Logo" className="h-24" />
                </div>

                <aside className="w-[260px] bg-gradient-to-r from-color to-colors text-white p-6 border-r rounded-3xl mx-6 h-[670px] ">

                    <nav className="space-y-4 text-xl">
                        <Link
                            to="/home"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200  
                ${isActiveLink('/home')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-text-white hover:text-white'}`}
                        >
                            <FaHome className="w-7 h-7" />
                            <span className=''>Home</span>
                        </Link>

                        <Link
                            to="/booking"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/booking')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-text-white hover:text-white'}`}
                        >
                            <FaBook className="w-6 h-6" />
                            <span>Booking</span>
                        </Link>

                        <Link
                            to="/reservation"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/reservation')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-text-white hover:text-white'}`}
                        >
                            <FaRegCalendarAlt className="w-6 h-6" />
                            <span>Reservation</span>
                        </Link>

                        <Link
                            to="/inhouseguest"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/inhouseguest')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-text-white hover:text-white'}`}
                        >
                            <FaBed className="w-6 h-6" />
                            <span>In House Guest</span>
                        </Link>

                        <Link
                            to="/guesthistory"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/guesthistory')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-text-white hover:text-white'}`}
                        >
                            <FaHistory className="w-6 h-6" />
                            <span>Guest History</span>
                        </Link>
                    </nav>

                    <div className="mt-2 flex flex-col items-center custom-datepicker-container">
                        {/* Header with date and icon */}
                        <div className="flex justify-between items-center w-full mb-2 px-2">
                            <h3 className="text-2xl font-semibold">
                                {format(startDate, 'EEE, MMM d')}
                            </h3>
                            <FaPen className=" cursor-pointer" />
                        </div>
                        {/* Date Picker */}
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            inline
                            className="outline-none custom-datepicker"
                        />
                    </div>
                </aside>

                <div className="flex justify-between items-center mt-4 bg-white w-[260px] border rounded-3xl mx-6 h-[50px] shadow-lg">
                    <button className="w-10 h-10 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
                        <FaCog className="text-lg" />
                    </button>
                    <button className="w-[120px] bg-red-500 text-white py-1 px-2 rounded-full mr-2">
                        Sign out
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 p-6 max-w-9xl mr-10 ">
                <nav className="bg-white px-4 py-2 shadow-sm rounded-[50px] mt-8">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search Here by Name"
                                className="w-96 pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                            <button className="absolute right-20 top-1/2 -translate-y-1/2">
                                <HiX  className="h-4 w-4 text-gray-400"/>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="relative right-[50px]">
                                <Bell className="h-6 w-6 text-gray-600" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    15
                                </span>
                            </div>
                            <div className="relative">
                                <select
                                    onChange={handleHotelChange}
                                    value={selectedHotel}
                                    className="bg-primary text-white px-6 py-2 rounded-3xl mr-10 text-[13px] font-semibold appearance-none"
                                >
                                    <option value="">Select Hotel</option>
                                    <option value="MAAG">MAAG</option>
                                    <option value="MAAR">MAAR</option>
                                    <option value="MAAS">MAAS</option>
                                    <option value="MAA">MAA</option>
                                </select>
                                {/* Dropdown Icon */}
                                <div className="absolute top-0 text-white pointer-events-none ml-[99px] mt-3 ">
                                    <BsCaretDownFill size={13} />
                                </div>
                            </div>

                            <p className="bg-gray-300 px-3 py-1 rounded mx-6">{formattedTime}</p>
                            <div className="flex items-center gap-2">
                                {/* <img src={img} alt="User" className="h-10 w-10 rounded-full" /> */}
                                <FaUserCircle size={50} className='h-10 w-10 text-gray-400' />
                                <div className="flex flex-col text-sm">
                                    <span className="text-gray-800">{userData.username}</span>
                                     <span className="text-gray-800">{userData.email}</span>
                                </div>
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </nav>

                <form onSubmit={handleSearch} className="bg-white p-6 rounded-3xl shadow-md mt-4">

                    <div className="">
                        {/* Search Field */}
                        <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Bookings ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 w-[930px]"
                        disabled={isSearching} // Disable input while searching
                    />
                    <button
                        type="submit"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        disabled={isSearching}
                    >
                        {isSearching ? (
                             <HiSearch className="mr-2" />
                        ) : (
                            <HiSearch className="mr-2" />
                        )}
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="text-red-500 bg-red-100 p-2 rounded">
                        {error}
                    </div>
                )}

{searchResults.length > 0 && (
                    <div className="">
                        {/* <h3 className="text-lg font-semibold mb-4">Search Results</h3> */}
                        <ul className="mt-8">
                            {searchResults.map((booking) => (
                                <li
                                    key={booking.bookingId}
                                    onClick={() => handleSelectBooking(booking)}
                                    className="cursor-pointer "
                                >
                                    {booking.bookingPersonName}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            
                        <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>
                          
                        <div className="grid md:grid-cols-[300px_300px_300px] gap-4 mb-4">
                            <div>
                                <label className="block text-lg text-color3 font-bold">Name Details</label>
                                <input
                                    type="text"
                                    name="bookingPersonName"
                                    value={selectedBooking.bookingPersonName || ""}
                                    readOnly
                                    placeholder="Booking Person Name"
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    name="mobileNumber"
                                    value={selectedBooking.mobileNumber || ''}
                                    readOnly
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="emailAddress"
                                    value={selectedBooking.emailAddress || ''}
                                    readOnly
                                    placeholder="Email Address"
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
                                />
                            </div>
                        </div>

                        {/* More details sections */}
                        <div className="grid md:grid-cols-[300px_150px_450px] gap-4 mb-4">
                            <div className="relative inline-block">
                                <label className="block text-lg text-color3 font-bold">Guest Details</label>
                                <input
                                    name="guestDetails"
                                    value={selectedBooking.guestDetails || ''}
                                    readOnly
                                    placeholder="Select"
                                    className="w-20 border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
                                />
                            </div>

                            <div className="relative w-full">
                                <label className="block text-lg text-color3 font-bold">Room Type</label>
                                <input
                                    name="acNonac"
                                    value={selectedBooking.acNonac || ''}
                                    readOnly
                                    placeholder="Select type"
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
                                />
                            </div>

                            <div className="relative w-full">
                                <label className="block text-sm text-gray-600"></label>
                                <input
                                    name="roomType"
                                    value={selectedBooking.roomType || ''}
                                    readOnly
                                    placeholder="Select room type"
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg text-color3 font-bold">Address Details</label>
                            <input
                                type="text"
                                name="addressDetails"
                                value={selectedBooking.addressDetails || ''}
                                readOnly
                                placeholder="Type customer Address"
                                className="w-[930px] border py-2 rounded-lg p-2 text-sm mt-3"
                            />
                        </div>
                       
                        {/* Divider */}
                        <hr className="border-dashed border-gray-300 my-4 mt-10" />

                        {/* Check-In / Check-Out Details */}
                        <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-10">
                        <div>
                                <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
                                <input
                                    type="date"
                                    name="checkInDate"
                                    value={selectedBooking.checkInDate || ''}
                                    readOnly
                                    className="w-full border p-2 rounded-lg mt-5 text-sm py-2"
                                />
                            </div>

                            <div>
                                <input
                                    type="time"
                                    name="time"
                                    value={selectedBooking.time || ''}
                                    readOnly
                                    className="w-full border p-2 rounded-lg mt-11 py-2 text-sm"
                                />
                            </div>

                            <div className="relative w-full">
                                <label className="block text-sm text-gray-600"></label>
                                <input
                                    name="amPm"
                                    value={selectedBooking.amPm || ''}
                                    readOnly
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-11 appearance-none"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-orange-500 font-bold">Check-OUT Date</label>
                                <input type="date" className="w-full border p-2 rounded-lg mt-5 text-sm py-2" />

                            </div>
                            <div>
                                <input type="time" className="w-full border p-2 rounded-lg mt-11 py-2 text-sm" />

                            </div>
                            <div>
                                <label className="block text-sm text-gray-600"></label>
                                <select className="w-full border py-2 rounded-lg p-2 text-sm mt-11 ">
                                    <option>am</option>
                                    <option>pm</option>
                                </select>

                            </div>
                            <div>
                                <label className="block text-md text-orange-500 font-bold">C-Form Number</label>
                                <input
                                    type="text"
                                    placeholder="325214"
                                    className="w-full border p-2 rounded-lg text-sm mt-5 py-2"
                                />
                            </div>
                            <p className='mt-12 font-bold'>Opened</p>
                        </div>

                        {/* Additional Charges and Payment */}
                        <div className="grid md:grid-cols-[200px_180px_350px_330px] gap-4 mb-4 mt-6">
                            <div>
                                <label className="block text-md text-orange-500 font-bold">Allocated Room Number</label>
                                <input
                                    type="text"
                                    placeholder="MAA053"
                                    className="w-full border p-2 rounded-lg mt-4 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-orange-500 font-bold">Booking Number</label>
                                <input
                                    type="text"
                                    placeholder="SANJAY-007"
                                    className="w-full border p-2 rounded-lg mt-4 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-orange-500 font-bold">Nationality</label>
                                <select className="w-full border py-2 rounded-lg p-2 text-sm mt-4">
                                    <option>Non-AC</option>
                                    <option>AC</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600"></label>
                                <select className="w-full border py-2 rounded-lg p-2 text-sm mt-11 ">
                                    <option>am</option>
                                    <option>pm</option>
                                </select>

                            </div>

                        </div>
                        <div className="grid md:grid-cols-[170px_180px_16px_350px_300px] gap-4 mb-4">

                            <div>
                                <label className="text-md text-gray-600 mr-2">Additional Charges:</label>
                                <input
                                    type="number"
                                    placeholder="500"
                                    className="border p-2 rounded-lg w-20 mt-3"
                                />

                            </div>
                            <div>
                                <button className="text-blue-500 text-sm mr-26  mt-10">+ Add payment</button>
                            </div>
                            <div></div>
                            <div>
                                <label className="block text-sm text-gray-600"></label>
                                <select className="w-full border py-2 rounded-lg p-2 text-sm ">
                                    <option>am</option>
                                    <option>pm</option>
                                </select>

                            </div>
                            <div>
                                <label className="block text-md text-gray-600 mt-3">Payment Mode</label>
                                <div className="flex items-center mt-2">
                                    <label className="mr-4">
                                        <input type="radio" name="payment" className="mr-1" />
                                        UPI
                                    </label>
                                    <label className="mr-4">
                                        <input type="radio" name="payment" className="mr-1" />
                                        Card
                                    </label>
                                    <label>
                                        <input type="radio" name="payment" className="mr-1" />
                                        Cash
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-end mt-6">
                            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full">
                                SUBMIT
                            </button>
                        </div>
                    </div>

            
                </form>

            </main>
        </div>
    );
};

export default Reservation;







// import React, { useState } from "react";
// import axios from "axios";
// import { HiSearch } from 'react-icons/hi';


// const Reservation = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedBooking, setSelectedBooking] = useState(true);
//     const [isSearching, setIsSearching] = useState(false);
//     const [error, setError] = useState("");

//     // Search handler
//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setIsSearching(true);
//         setError("");
//         setSearchResults([]);
//         setSelectedBooking(true);

//         if (!searchTerm.trim()) {
//             setIsSearching(false);
//             setError("Please enter a search term.");
//             return;
//         }

//         try {
//             const response = await axios.get(
//                 `https://maahotelbackend1.onrender.com/api/bookings/search?query=${encodeURIComponent(searchTerm)}`
//             );

//             if (response.data.length === 0) {
//                 setError("No bookings found");
//             } else {
//                 setSearchResults(response.data);
//             }
//         } catch (error) {
//             const errorMessage = error.response
//                 ? error.response.data.message || "Error searching bookings"
//                 : error.message;

//             setError(errorMessage);
//             console.error("Error searching bookings:", errorMessage);
//         }

//         setIsSearching(false);
//     };

//     // Handle booking selection to view details
//     const handleSelectBooking = (booking) => {
//         setSelectedBooking(booking);
//     };

//     return (
//         <div className="flex flex-col bg-gray-100 p-6">
//             <form onSubmit={handleSearch} className="bg-white p-6 rounded-3xl shadow-md mb-6">
//                 {/* Search Bar */}
//                 <div className="relative ">
//                     <input
//                         type="text"
//                         placeholder="Search Bookings (ID, Name, Mobile, Email)..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="pl-4 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 w-[900px]"
//                     />
//                     <button
                       
//                         className=" absolute left-[850px] top-1/2 transform -translate-y-1/2   text-gray-500"
//                         disabled={isSearching}
//                     >
//                         {isSearching ? (
//                             "Searching..."
//                         ) : (
//                             <>
//                                 <HiSearch className="mr-2" /> 
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                     <div className="text-red-500 bg-red-100 p-2 rounded">
//                         {error}
//                     </div>
//                 )}


//                 {/* Search Results */}
//                 {searchResults.length > 0 && (
//                     <div className="bg-white p-4 rounded-3xl shadow-md">
//                         <h3 className="text-lg font-semibold mb-4">Search Results</h3>
//                         <ul className="border rounded max-h-60 overflow-y-auto">
//                             {searchResults.map((booking) => (
//                                 <li
//                                     key={booking.bookingId}
//                                     onClick={() => handleSelectBooking(booking)}
//                                     className="cursor-pointer hover:bg-gray-200 p-3 border-b last:border-b-0"
//                                 >

//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Booking Details */}
//                 {selectedBooking && (

//                     <>
//                         <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>

//                         <div className="grid md:grid-cols-[300px_300px_300px] gap-4 mb-4">
//                             <div>
//                                 <label className="block text-lg text-color3 font-bold">Name Details</label>
//                                 <input
//                                     type="text"
//                                     name="bookingPersonName"
//                                     value={selectedBooking.bookingPersonName || ""}
//                                     readOnly
//                                     placeholder="Booking Person Name"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Mobile Number"
//                                     name="mobileNumber"
//                                     value={selectedBooking.mobileNumber || ''}
//                                     readOnly
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="text"
//                                     name="emailAddress"
//                                     value={selectedBooking.emailAddress || ''}
//                                     readOnly
//                                     placeholder="Email Address"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[300px_150px_450px] gap-4 mb-4">
//                             <div className="relative inline-block">
//                                 <label className="block text-lg text-color3 font-bold">Guest Details</label>
//                                 <input
//                                     name="guestDetails"
//                                     value={selectedBooking.guestDetails || ''}
//                                     readOnly
//                                     placeholder="Select"
//                                     className="w-20 border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Room Type</label>
//                                 <input
//                                     name="acNonac"
//                                     value={selectedBooking.acNonac || ''}
//                                     readOnly
//                                     placeholder="Select type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <input
//                                     name="roomType"
//                                     value={selectedBooking.roomType || ''}
//                                     readOnly
//                                     placeholder="Select room type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="">
//                                 <label className="block text-lg text-color3 font-bold">Address Details</label>
//                                 <input
//                                     type="text"
//                                     name="addressDetails"
//                                     value={selectedBooking.addressDetails || ''}
//                                     readOnly
//                                     placeholder="Type customer Address"
//                                     className="w-[930px] border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                             </div>
//                         </div>

//                         {/* Divider */}
//                         <hr className="border-dashed border-gray-300 my-4 mt-10" />

//                         {/* Check-In / Check-Out Details */}
//                         <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-10">
//                             <div>
//                                 <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
//                                 <input
//                                     type="date"
//                                     name="checkInDate"
//                                     value={selectedBooking.checkInDate || ''}
//                                     readOnly
//                                     className="w-full border p-2 rounded-lg mt-5 text-sm py-2"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="time"
//                                     name="time"
//                                     value={selectedBooking.time || ''}
//                                     readOnly
//                                     className="w-full border p-2 rounded-lg mt-11 py-2 text-sm"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <input
//                                     name="amPm"
//                                     value={selectedBooking.amPm || ''}
//                                     readOnly
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-11 appearance-none"
//                                 />
//                             </div>
//                         </div>
//                     </>
//                 )}

//             </form>
//         </div>
//     );
// };

// export default Reservation;



// import React, { useState } from "react";
// import axios from "axios";
// import { HiSearch } from 'react-icons/hi';

// const Reservation = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedBooking, setSelectedBooking] = useState(true); // Set to null initially
//     const [isSearching, setIsSearching] = useState(false);
//     const [error, setError] = useState("");

//     // Search handler
//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setIsSearching(true);
//         setError("");
//         setSearchResults([]);
//         setSelectedBooking(true); // Reset selected booking on new search

//         if (!searchTerm.trim()) {
//             setIsSearching(false);
//             setError("Please enter a search term.");
//             return;
//         }

//         try {
//             const response = await axios.get(
//                 `https://maahotelbackend1.onrender.com/api/bookings/search?query=${encodeURIComponent(searchTerm)}`
//             );

//             if (response.data.length === 0) {
//                 setError("No bookings found");
//             } else {
//                 setSearchResults(response.data);
//             }
//         } catch (error) {
//             const errorMessage = error.response
//                 ? error.response.data.message || "Error searching bookings"
//                 : error.message;

//             setError(errorMessage);
//             console.error("Error searching bookings:", errorMessage);
//         }

//         setIsSearching(false);
//     };

//     // Handle booking selection to view details
//     const handleSelectBooking = (booking) => {
//         setSelectedBooking(booking);
//     };
    

//     return (
//         <div className="flex flex-col bg-gray-100 p-6">
//             <form onSubmit={handleSearch} className="bg-white p-6 rounded-3xl shadow-md mb-6">
//                 {/* Search Bar */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         placeholder="Search Bookings ..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="pl-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 w-[930px]"
//                         disabled={isSearching} // Disable input while searching
//                     />
//                     <button
//                         type="submit"
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                         disabled={isSearching}
//                     >
//                         {isSearching ? (
//                              <HiSearch className="mr-2" />
//                         ) : (
//                             <HiSearch className="mr-2" />
//                         )}
//                     </button>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                     <div className="text-red-500 bg-red-100 p-2 rounded">
//                         {error}
//                     </div>
//                 )}

//                 {/* Search Results */}
//                 {searchResults.length > 0 && (
//                     <div className="">
//                         {/* <h3 className="text-lg font-semibold mb-4">Search Results</h3> */}
//                         <ul className="mt-8">
//                             {searchResults.map((booking) => (
//                                 <li
//                                     key={booking.bookingId}
//                                     onClick={() => handleSelectBooking(booking)}
//                                     className="cursor-pointer "
//                                 >
//                                     {booking.bookingPersonName}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Booking Details */}
            
//                     <>
//                         <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>

//                         <div className="grid md:grid-cols-[300px_300px_300px] gap-4 mb-4">
//                             <div>
//                                 <label className="block text-lg text-color3 font-bold">Name Details</label>
//                                 <input
//                                     type="text"
//                                     name="bookingPersonName"
//                                     value={selectedBooking.bookingPersonName || ""}
//                                     readOnly
//                                     placeholder="Booking Person Name"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Mobile Number"
//                                     name="mobileNumber"
//                                     value={selectedBooking.mobileNumber || ''}
//                                     readOnly
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="text"
//                                     name="emailAddress"
//                                     value={selectedBooking.emailAddress || ''}
//                                     readOnly
//                                     placeholder="Email Address"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                             </div>
//                         </div>

//                         {/* More details sections */}
//                         <div className="grid md:grid-cols-[300px_150px_450px] gap-4 mb-4">
//                             <div className="relative inline-block">
//                                 <label className="block text-lg text-color3 font-bold">Guest Details</label>
//                                 <input
//                                     name="guestDetails"
//                                     value={selectedBooking.guestDetails || ''}
//                                     readOnly
//                                     placeholder="Select"
//                                     className="w-20 border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Room Type</label>
//                                 <input
//                                     name="acNonac"
//                                     value={selectedBooking.acNonac || ''}
//                                     readOnly
//                                     placeholder="Select type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <input
//                                     name="roomType"
//                                     value={selectedBooking.roomType || ''}
//                                     readOnly
//                                     placeholder="Select room type"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-lg text-color3 font-bold">Address Details</label>
//                             <input
//                                 type="text"
//                                 name="addressDetails"
//                                 value={selectedBooking.addressDetails || ''}
//                                 readOnly
//                                 placeholder="Type customer Address"
//                                 className="w-[930px] border py-2 rounded-lg p-2 text-sm mt-3"
//                             />
//                         </div>

//                         {/* Divider */}
//                         <hr className="border-dashed border-gray-300 my-4 mt-10" />

//                         {/* Check-In / Check-Out Details */}
//                         <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-10">
//                             <div>
//                                 <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
//                                 <input
//                                     type="date"
//                                     name="checkInDate"
//                                     value={selectedBooking.checkInDate || ''}
//                                     readOnly
//                                     className="w-full border p-2 rounded-lg mt-5 text-sm py-2"
//                                 />
//                             </div>

//                             <div>
//                                 <input
//                                     type="time"
//                                     name="time"
//                                     value={selectedBooking.time || ''}
//                                     readOnly
//                                     className="w-full border p-2 rounded-lg mt-11 py-2 text-sm"
//                                 />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <input
//                                     name="amPm"
//                                     value={selectedBooking.amPm || ''}
//                                     readOnly
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-11 appearance-none"
//                                 />
//                             </div>
//                         </div>
//                     </>
//             </form>
//         </div>
//     );
// };

// export default Reservation;
