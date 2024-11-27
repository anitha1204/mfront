
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog,FaUserCircle } from 'react-icons/fa';
import { Bell, ChevronDown } from 'lucide-react';
import { Table } from 'antd';
import logo from "../assets/logo.png";
import { BsCaretDownFill } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import '../styles/datepicker.css';
import { useNavigate } from 'react-router-dom';

// Sample guest data
const guestDataInitial = [
    {
        key: '1',
        bookingNo: 'M01',
        name: 'Raja Ganapathi',
        roomNo: '27',
        roomType: 'Single Bed',
        ac: 'A/C',
        reservationTill: 'Sep 18, 8:00am',
        phone: '1234567890',
    },
];

const columns = [
    { title: 'Bk. No', dataIndex: 'bookingNo', key: 'bookingNo', width: 100, ellipsis: true },
    { title: 'Name', dataIndex: 'name', key: 'name', width: 150, ellipsis: true },
    { title: 'Room No', dataIndex: 'roomNo', key: 'roomNo', width: 100, ellipsis: true },
    { title: 'Room Type', dataIndex: 'roomType', key: 'roomType', width: 150, ellipsis: true },
    { title: 'A/C or Non A/C', dataIndex: 'ac', key: 'ac', width: 150, ellipsis: true },
    { title: 'Reservation Till', dataIndex: 'reservationTill', key: 'reservationTill', width: 150, ellipsis: true },
    { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 150, ellipsis: true },
];

const InHouseGuest = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [guestData, setGuestData] = useState(guestDataInitial);
    const [selectedHotel, setSelectedHotel] = useState('');
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    
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
    // Handle dropdown toggle
    const handleProductsClick = () => setShowProductsDropdown(!showProductsDropdown);
    const handleDropdownItemClick = () => setShowProductsDropdown(false);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newGuest = {
            key: guestData.length + 1, // Unique key for Ant Design table
            bookingNo: `M${guestData.length + 1}`, // Example booking number
            name: e.target.elements.name.value,
            roomNo: e.target.elements.roomNo.value,
            roomType: e.target.elements.roomType.value,
            ac: e.target.elements.ac.checked ? 'A/C' : 'Non A/C',
            reservationTill: format(endDate, 'MMM d, h:mm a'),
            phone: e.target.elements.phone.value,
        };

        // Update guest data
        setGuestData([...guestData, newGuest]);

        // Clear form fields
        e.target.reset();
        setStartDate(new Date());
        setEndDate(new Date());
        setIsFormVisible(false);
    };

    return (
        <div className="flex bg-gray-100">
            {/* Sidebar */}
            <section className="flex flex-col">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="Logo" className="h-24" />
                </div>

                <aside className="w-[260px] bg-gradient-to-r from-color1 to-colors p-6 border-r rounded-3xl mx-6 h-[670px]">
                    <nav className="space-y-4 text-xl">
                        <Link
                            to="/home"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
                ${isActiveLink('/home')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white hover:text-white'}`}
                        >
                            <FaHome className="w-7 h-7" />
                            <span>Home</span>
                        </Link>

                        <Link
                            to="/booking"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/booking')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white hover:text-white'}`}
                        >
                            <FaBook className="w-6 h-6" />
                            <span>Booking</span>
                        </Link>

                        <Link
                            to="/reservation"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/reservation')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white hover:text-white'}`}
                        >
                            <FaRegCalendarAlt className="w-6 h-6" />
                            <span>Reservation</span>
                        </Link>

                        <Link
                            to="/inhouseguest"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/inhouseguest')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white hover:text-white'}`}
                        >
                            <FaBed className="w-6 h-6" />
                            <span>In House Guest</span>
                        </Link>

                        <Link
                            to="/guesthistory"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/guesthistory')
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white hover:text-white'}`}
                        >
                            <FaHistory className="w-6 h-6" />
                            <span>Guest History</span>
                        </Link>
                    </nav>

                    <div className="mt-2 flex flex-col items-center custom-datepicker-container">
                        {/* Header with date and icon */}
                        <div className="flex justify-between items-center w-full mb-2 px-2">
                            <h3 className="text-2xl font-semibold text-white">
                                {format(startDate, 'EEE, MMM d')}
                            </h3>
                            <FaPen className=" cursor-pointer text-white" />
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
            <main className="flex-1 p-6">
                <nav className="bg-white px-4 py-2 shadow-sm rounded-[50px] mt-8">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search Here by Name"
                                className="w-96 pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                            <button className="absolute right-20 top-1/2 -translate-y-1/2">
                                <HiX className="h-4 w-4 text-gray-400" />
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

                <>
                    <Table
                        dataSource={guestData}
                        columns={columns}
                        pagination={false}
                        className="mt-4"
                    />
                </>

            </main>
        </div>
    );
};

export default InHouseGuest;

