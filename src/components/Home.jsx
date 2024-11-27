import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, FaUserCircle } from 'react-icons/fa';
import { Bell, ChevronDown } from 'lucide-react';
import { Table } from 'antd';
import logo from "../assets/logo.png";
import { HiX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import '../styles/datepicker.css';
import { BsCaretDownFill } from "react-icons/bs";

const guestDataInitial = [
    {
       bookingStaffName: '',
        sourceOfLooking: '',
        bookingPersonName: '',
        bookingNo: '', // Add bookingNo here if required
        mobileNumber: '',
        emailAddress: '',
        guestDetails: '',
        acNonac: '',
        roomType: '',
        addressDetails: '',
        checkInDate: '',
        time: '',
        amPm: '',
         

    },
];

const columns = [
    { title: 'Booking Staff Name', dataIndex: 'bookingStaffName', key: 'bookingStaffName' },
    { title: 'Source of Looking', dataIndex: 'sourceOfLooking', key: 'sourceOfLooking' },
    { title: 'Booking Person Name', dataIndex: 'bookingPersonName', key: 'bookingPersonName' },
    { title: 'Booking No', dataIndex: 'bookingNo', key: 'bookingNo' },
    { title: 'Mobile Number', dataIndex: 'mobileNumber', key: 'mobileNumber' },
    { title: 'Email Address', dataIndex: 'emailAddress', key: 'emailAddress' },
    { title: 'Guest Details', dataIndex: 'guestDetails', key: 'guestDetails' },
    { title: 'AC/Non-AC', dataIndex: 'acNonac', key: 'acNonac' },
    { title: 'Room Type', dataIndex: 'roomType', key: 'roomType' },
    { title: 'Address Details', dataIndex: 'addressDetails', key: 'addressDetails' },
    { title: 'Check-In Date', dataIndex: 'checkInDate', key: 'checkInDate' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
    { title: 'AM/PM', dataIndex: 'amPm', key: 'amPm' },
];


const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isExpanded, setIsExpanded] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guestData, setGuestData] = useState(guestDataInitial);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(''); // State to track the selected hotel
    const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
    
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

   

    const handleButtonClick = () => {
        if (isFormVisible) {
            toggleForm();
        } else {
            navigate('/newbooking'); // Navigate to the NewBooking page
        }
    };

    // Handle dropdown toggle
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

    // Toggle form visibility
    const toggleForm = () => setIsFormVisible(!isFormVisible);

   

    return (
        <div className="flex bg-gray-100">
            {/* Sidebar */}
            <section className="flex flex-col">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="Logo" className="h-24" />
                </div>

                <aside className="w-[280px] bg-white p-6 border-r rounded-3xl mx-6 h-[680px]">

                    <nav className="space-y-4 text-xl">
                        <Link
                            to="/home"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
                ${isActiveLink('/home')
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-black hover:text-black'}`}
                        >
                            <FaHome className="w-7 h-7" />
                            <span>Home</span>
                        </Link>

                        <Link
                            to="/booking"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/booking')
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-black hover:text-black'}`}
                        >
                            <FaBook className="w-6 h-6" />
                            <span>Booking</span>
                        </Link>

                        <Link
                            to="/reservation"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/reservation')
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-black hover:text-black'}`}
                        >
                            <FaRegCalendarAlt className="w-6 h-6" />
                            <span>Reservation</span>
                        </Link>

                        <Link
                            to="/inhouseguest"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/inhouseguest')
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-black hover:text-black'}`}
                        >
                            <FaBed className="w-6 h-6" />
                            <span>In House Guest</span>
                        </Link>

                        <Link
                            to="/guesthistory"
                            className={`flex items-center space-x-3 p-2 rounded-sm transition-all duration-200 
          ${isActiveLink('/guesthistory')
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-black hover:text-black'}`}
                        >
                            <FaHistory className="w-6 h-6" />
                            <span>Guest History</span>
                        </Link>
                    </nav>


                    <div className="mt-2 flex flex-col items-center custom-datepicker-container">
                        {/* Header with date and icon */}
                        <div className="flex justify-between items-center w-full mb-2 px-2">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {format(startDate, 'EEE, MMM d')}
                            </h3>
                            <FaPen className="text-gray-500 cursor-pointer" />
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
            <main className="flex-1 p-6 ">
                <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
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
                            <div className="relative right-[70px]">
                                <Bell className="h-6 w-6 text-gray-600" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    15
                                </span>
                            </div>
                            <div>
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

                            </div>
                            <div>
                                <button
                                    onClick={handleButtonClick}
                                    className={`px-5 py-2 rounded-3xl text-[13px] font-semibold ${selectedHotel ? 'bg-color5' : 'bg-green-300 cursor-not-allowed'
                                        } text-white`}
                                    disabled={!selectedHotel} // Disable button if no hotel is selected
                                >
                                    {isFormVisible ? 'View Bookings' : 'New Booking'}
                                </button>
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


                <>
                    {/* Overview Section */}
                    {/* <section className="grid grid-cols-4 gap-4 bg-white p-3 shadow rounded-3xl mt-3 text-white h-[250px]">
                        <h2 className="col-span-4 text-2xl ml-4 text-gray-500">Overview</h2>
                        <div className="bg-green-500 p-4 rounded-3xl text-center h-[180px]">
                            <h4 className="text-[15px] font-semibold text-start">Today's Check In</h4>
                            <p className="text-8xl text-end">{guestData.length}</p>
                            <h3 className="text-[15px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-red-500 p-4 rounded-3xl text-center">
                            <h4 className="text-[15px] font-semibold text-start">Today's Check Out</h4>
                            <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseInt(guest.noOfGuests), 0)}</p>
                            <h3 className="text-[15px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-blue-500 p-4 rounded-3xl text-center">
                            <h3 className="text-[15px] font-semibold text-start">Rooms Available</h3>
                            <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.totalAmountPayable), 0).toFixed(2)} ₹</p>
                            <h3 className="text-[15px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-orange-500 p-4 rounded-3xl text-center ">
                            <h3 className="text-[15px] font-semibold text-start">Rooms Reserved</h3>
                            <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.outstanding), 0).toFixed(2)} ₹</p>
                            <h3 className="text-[15px] font-semibold text-start">View Booking dates</h3>
                        </div>
                    </section> */}

                    <section className="grid grid-cols-4 gap-4 bg-white p-3 shadow rounded-3xl mt-3 text-white h-[250px]">
                        <h2 className="col-span-4 text-2xl ml-4 text-gray-500">Overview</h2>
                        <div className="bg-color5 p-4 rounded-3xl text-center h-[180px]">
                            <h4 className="text-[15px] font-semibold text-start">Today's Check In</h4>
                            <p className="text-8xl text-end">1</p>
                            <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-red-400 p-4 rounded-3xl text-center">
                            <h4 className="text-[15px] font-semibold text-start">Today's Check Out</h4>
                            <p className="text-8xl text-end">2</p>
                            <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-blue-400 p-4 rounded-3xl text-center">
                            <h3 className="text-[15px] font-semibold text-start">Rooms Available</h3>
                            <p className="text-8xl text-end">4</p>
                            <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
                        </div>
                        <div className="bg-orange-400 p-4 rounded-3xl text-center ">
                            <h3 className="text-[15px] font-semibold text-start">Rooms Reserved</h3>
                            <p className="text-8xl text-end">5</p>
                            <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
                        </div>
                    </section>

                    {/* Ant Design Table */}
                    <Table
                        columns={columns}
                        dataSource={guestData}

                        pagination={{ pageSize: 5 }}
                        scroll={{ x: 'max-content' }} // Enables horizontal scrolling
                        className="mt-8 w-[1100px]"
                        rowKey="key"
                    />
                </>

            </main>
        </div>
    );
};

export default Home;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../assets/logo.png";

// const Home = () => {
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

//     const handleLogout = () => {
//         // Clear localStorage
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         // Redirect to login page
//         navigate('/');
//     };

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <nav className="bg-white shadow-lg">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <div className="flex justify-between items-center py-4">
//                         <img src={logo} alt="Logo" className="w-24" />
//                         <button
//                             onClick={handleLogout}
//                             className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//                 <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Welcome to Your Dashboard</h1>
                
//                 <div className="space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                         <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Profile Information</h2>
//                         <div className="space-y-3">
//                             <div className="flex items-center">
//                                 <span className="text-gray-600 font-medium w-24">Username:</span>
//                                 <span className="text-gray-800">{userData.username}</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <span className="text-gray-600 font-medium w-24">Email:</span>
//                                 <span className="text-gray-800">{userData.email}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
