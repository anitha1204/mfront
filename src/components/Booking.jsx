



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
import '../styles/datepicker.css';
import { BsCaretDownFill } from "react-icons/bs";
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

const Booking = () => {
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

                <aside className="w-[270px] bg-white p-6 border-r rounded-3xl mx-6 h-[680px]">

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

export default Booking;





// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format, setDate } from 'date-fns';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, } from 'react-icons/fa';
// import { Bell, ChevronDown } from 'lucide-react';
// import logo from "../assets/logo.png";
// import img from '../assets/girl.webp';
// import { HiX } from "react-icons/hi";
// import axios from 'axios';
// import { BsCaretDownFill } from "react-icons/bs";


// const NewBooking = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [editingItem, setEditingItem] = useState(null);
//     const [formData, setFormData] = useState({
//         bookingStaffName: "",
//         sourceOfLooking: "",
//         bookingPersonName: "",
//         mobileNumber: "",
//         emailAddress: "",
//         guestDetails: "",
//         acNonac: "",
//         roomType: "",
//         addressDetails: "",
//         checkInDate: "",
//         time: "",
//         amPm: "",
//         roomRent: "",
//         gstOption: "",
//         bookingPayment: "",
//         paymentType: ""
//     });
//     const [data, setData] = useState([]);
//     const [roomRent, setRoomRent] = useState(0);
//     const [gstOption, setGstOption] = useState('');
//     const [paymentType, setPaymentType] = useState('');

//     // Error state for form validation
//     const [errors, setErrors] = useState({
//         bookingStaffName: "",
//         sourceOfLooking: "",
//         bookingPersonName: "",
//         mobileNumber: "",
//         emailAddress: "",
//         guestDetails: "",
//         acNonac: "",
//         roomType: "",
//         addressDetails: "",
//         checkInDate: "",
//         time: "",
//         amPm: "",
//         roomRent: "",
//         gstOption: "",
//         bookingPayment: "",
//         paymentType: ""
//     });

//     useEffect(() => {
//         calculateRoomRent(formData.acNonac, formData.roomType);
//     }, [formData.acNonac, formData.roomType]);

//     const calculateRoomRent = (acNonac, roomType) => {
//         let rent = 0;
//         if (acNonac === "AC") rent = 2000;
//         else if (acNonac === "Non-AC") rent = 1000;

//         if (roomType === "Single occupancy") rent += 2000;
//         else if (roomType === "Double occupancy with kitchen") rent += 2500;
//         else if (roomType === "Double occupancy without kitchen") rent += 3000;
//         else if (roomType === "Triple occupancy with kitchen") rent += 3500;
//         else if (roomType === "Triple occupancy without kitchen") rent += 4000;

//         setRoomRent(rent);
//     };
   
//     useEffect(() => {
//         const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//         return () => clearInterval(timer);
//     }, []);

//     const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//     const location = useLocation();
//     const isActiveLink = (path) => location.pathname === path;
   

//     useEffect(()=>{
//         axios.get('https://maahotelbackend1.onrender.com/api/bookings/forms')
//         .then(response =>{
//             setDate(response.data);
//         })
//         .catch(error =>{
//             console.error("There was an error fetching the bookings data!", error);
//         });
//     },[]);

//     const handleChange= (e)=>{
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//      // Validation checks
//      const validateForm = () => {
//         let formErrors = {};
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         const mobilePattern = /^[0-9]{10}$/;


//         if (!formData.emailAddress || !emailPattern.test(formData.emailAddress)) {
//             formErrors.emailAddress = "Please enter a valid email address";
//         }


//         if (!formData.mobileNumber || !mobilePattern.test(formData.mobileNumber)) {
//             formErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
//         }


//         if (!formData.bookingPersonName || /[^a-zA-Z\s]/.test(formData.bookingPersonName)) {
//             formErrors.bookingPersonName = "Name should only contain alphabets";
//         }


//         if (!formData.bookingStaffName || /[^a-zA-Z\s]/.test(formData.bookingStaffName)) {
//             formErrors.bookingStaffName = "Staff name should only contain alphabets";
//         }


//         if (formData.addressDetails && /[^a-zA-Z0-9\s,.-]/.test(formData.addressDetails)) {
//             formErrors.addressDetails = "Address contains invalid characters";
//         }


//         if (!formData.roomRent || isNaN(formData.roomRent) || Number(formData.roomRent) <= 0) {
//             formErrors.roomRent = "Room rent must be a positive number";
//         }


//         if (!formData.checkInDate || new Date(formData.checkInDate) <= new Date()) {
//             formErrors.checkInDate = "Check-in date must be a future date";
//         }


//         if (!formData.time) {
//             formErrors.time = "Please select a time";
//         }


//         if (!formData.guestDetails) {
//             formErrors.guestDetails = "Please select number of guests";
//         }


//         if (!formData.roomType) {
//             formErrors.roomType = "Please select a room type";
//         }


//         if (!formData.acNonac) {
//             formErrors.acNonac = "Please select AC or Non-AC room";
//         }


//         if (!formData.paymentType) {
//             formErrors.paymentType = "Please select a payment method";
//         }


//         if (!formData.sourceOfLooking) {
//             formErrors.sourceOfLooking = "Please select a source of booking";
//         }


//         if (!formData.amPm) {
//             formErrors.amPm = "Please select AM or PM";
//         }

//         setErrors(formErrors);

//         return Object.keys(formErrors).length === 0;
//     };

//     const handleSubmit = async () => {
//        const validationErrors = validateForm();
//        if (Object.keys(validationErrors).length > 0){
//         setErrors(validationErrors);
//         return;
//        }

//         try {
//             if(editingItem){
//                 console.log("Data being sent to server:", formData);
//                 await axios.put(`https://maahotelbackend1.onrender.com/api/bookings/${editingItem._id}`, formData);
//                 setData(data.map(Item => Item._id === editingItem._id ? { ...Item, ...formData } : Item));
//             } else {
//                 const response = await axios.post('https://maahotelbackend1.onrender.com/api/bookings', formData);
//                 setData([...data, response.data])
//             }
//             setShowModal(false);
//             setFormData({
//                 bookingStaffName: "",
//                 sourceOfLooking: "",
//                 bookingPersonName: "",
//                 mobileNumber: "",
//                 emailAddress: "",
//                 guestDetails: "",
//                 acNonac: "",
//                 roomType: "",
//                 addressDetails: "",
//                 checkInDate: "",
//                 time: "",
//                 amPm: "",
//                 roomRent: "",
//                 gstOption: "",
//                 bookingPayment: "",
//                 paymentType: "",
//             });
//             toast.success('Entry saved successfully!');
//             setEditingItem(null);
//         }catch (error){
//             console.error('Error saving the entry:', error);
//             toast.error('There was an error saving the entry. Please try again.');
//         }


//         const handleDelecte = (id) =>{
//             axios.delete(`https://maahotelbackend1.onrender.com/api/bookings/${id}`)
//             .then(()=>{
//                 setData(data.filter(item => item._id !== id));
//                 toast.info('Entry deleted successfully.');
//             })
//             .catch(error =>{
//                 console.error('There was an error deleting the entry!', error);
//                 toast.error('There was an error deleting the entry. Please try again.');
//             });
//         };

//         const handleEdit = (item) => {
//             setEditingItem(item);
//             setFormData({
//                 bookingStaffName: item.bookingStaffName ||"",
//                 sourceOfLooking: item.sourceOfLooking ||"",
//                 bookingPersonName: item.bookingPersonName ||"",
//                 mobileNumber: item.mobileNumber||"",
//                 emailAddress: item.emailAddress ||"",
//                 guestDetails: item.guestDetails ||"",
//                 acNonac: item.acNonac ||"",
//                 roomType: item.roomType ||"",
//                 addressDetails: item.addressDetails ||"",
//                 checkInDate: item.checkInDate ||"",
//                 time: item.time ||"",
//                 amPm: item.amPm ||"",
//                 roomRent: item.roomRent ||"",
//                 gstOption: item.gstOption ||"",
//                 bookingPayment: item.bookingPayment ||"",
//                 paymentType: item.paymentType ||"",
//             });
//             setShowModal(true);
//         }
       
//     return (
//         <div className="flex bg-gray-100">
//             {/* Sidebar */}
//             <section className="flex flex-col">
//                 <div className="flex items-center justify-center mb-8">
//                     <img src={logo} alt="Logo" className="h-24" />
//                 </div>

//                 <aside className="w-[260px] bg-gradient-to-r from-color3 to-color4 text-white p-6 border-r rounded-3xl mx-6 h-[670px] ">

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
//                             <h3 className="text-lg font-semibold">
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
//                 <nav className="bg-white px-4 py-2 shadow-sm rounded-[50px] mt-5">
//                     <div className="max-w-7xl mx-auto flex items-center justify-between">
//                         <div className="relative flex-1 max-w-md">
//                             <input
//                                 type="text"
//                                 placeholder="Search Here by Name"
//                                 className="w-96 pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
//                             />
//                             <button className="absolute right-20 top-1/2 -translate-y-1/2">
//                                 <HiX className="h-5 w-5 text-gray-400" />
//                             </button>
//                         </div>
//                         <div className="flex items-center">
//                             <div className="relative right-[50px]">
//                                 <Bell className="h-6 w-6 text-gray-600" />
//                                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                     15
//                                 </span>
//                             </div>
//                             <div>
//                                 <select

//                                     className="bg-primary text-white px-4 py-1 rounded-3xl mr-10"
//                                 >
//                                     <option value="">Select Hotel</option>
//                                     <option value="MAAG">MAAG</option>
//                                     <option value="MAAR">MAAR</option>
//                                     <option value="MAAS">MAAS</option>
//                                     <option value="MAA">MAA</option>
//                                 </select>
//                             </div>

//                             <p className="bg-gray-300 px-3 py-1 rounded mx-6">{formattedTime}</p>
//                             <div className="flex items-center gap-2">
//                                 <img src={img} alt="User" className="h-10 w-10 rounded-full" />
//                                 <div className="flex flex-col">
//                                     <p className="text-sm font-medium">Raja Ganapathi</p>
//                                     <p className="text-xs text-gray-400">raja@example.com</p>
//                                 </div>
//                                 <ChevronDown className="w-5 h-5 text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                 </nav>

//                 <form className="bg-white p-6 rounded-3xl shadow-md mt-6"
//                     onSubmit={handleSubmit}
//                 >

//                     <div className="">

//                         <div className="grid grid-cols-3 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-lg text-color3 font-bold">Booking Staff</label>
//                                 <input
//                                     type="text"
//                                     name="bookingStaffName"
//                                     placeholder="Booking Staff Name"
//                                     value={formData.bookingStaffName}
//                                     onChange={handleChange}
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                                 {errors.bookingStaffName && (
//                                     <span className="text-red-500 text-sm">{errors.bookingStaffName}</span>
//                                 )}
//                             </div>
//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Source of Booking</label>
//                                 <select
//                                     type="text"
//                                     name="sourceOfLooking"
//                                     value={formData.sourceOfLooking}
//                                     onChange={handleChange}
//                                     placeholder="ourceOfLooking"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3 appearance-none "
//                                 >
//                                     <option value="" className=''>Select an option</option>
//                                     <option value="Google">Google</option>
//                                     <option value="Social Media">Social Media</option>
//                                     <option value="Friends & Family">Friends & Family</option>
//                                     <option value="Portal">Portal</option>
//                                     <option value="Others">Others</option>

//                                 </select>
//                                 <div className="absolute top-0 mt-[55px]  right-4 text-gray-600 pointer-events-none ">
//                                     <BsCaretDownFill size={12} />
//                                 </div>
//                                 {errors.sourceOfLooking && (
//                                     <span className="text-red-500 text-sm">{errors.sourceOfLooking}</span>
//                                 )}
//                             </div>

//                         </div>
//                         {/* Divider */}
//                         <hr className="border-dashed border-gray-300 my-4 mt-10" />
//                         <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>

//                         <div className="grid md:grid-cols-[300px_300px_300px]  gap-4 mb-4">


//                             <div>
//                                 <label className="block text-lg text-color3 font-bold">Name Details</label>
//                                 <input
//                                     type="text"
//                                     name="bookingPersonName"
//                                     value={formData.bookingPersonName}
//                                     onChange={handleChange}
//                                     placeholder="Booking Person Name"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                                 {errors.bookingPersonName && (
//                                     <span className="text-red-500 text-sm">{errors.bookingPersonName}</span>
//                                 )}
//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     placeholder="Mobile Number"
//                                     name="mobileNumber"
//                                     value={formData.mobileNumber}
//                                     onChange={handleChange}
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                                 {errors.mobileNumber && (
//                                     <span className="text-red-500 text-sm">{errors.mobileNumber}</span>
//                                 )}
//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     name="emailAddress"
//                                     value={formData.emailAddress}
//                                     onChange={handleChange}
//                                     placeholder="Email Addres"
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-10"
//                                 />
//                                 {errors.emailAddress && (
//                                     <span className="text-red-500 text-sm">{errors.emailAddress}</span>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="grid  md:grid-cols-[300px_150px_450px] gap-4 mb-4">
//                             <div className="relative inline-block">
//                                 <label className="block text-lg text-color3 font-bold">Guest Details</label>
//                                 <select
//                                     name="guestDetails"
//                                     value={formData.guestDetails}
//                                     onChange={handleChange}
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
//                                 {errors.guestDetails && (
//                                     <span className="text-red-500 text-sm">{errors.guestDetails}</span>
//                                 )}
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Room Type</label>
//                                 <select
//                                     name="acNonac"
//                                     value={formData.acNonac}
//                                     onChange={handleChange}
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
//                                 {errors.acNonac && (
//                                     <span className="text-red-500 text-sm">{errors.acNonac}</span>
//                                 )}

//                             </div>
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select
//                                     name="roomType"
//                                     value={formData.roomType}
//                                     onChange={handleChange}
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
//                                 {errors.roomType && (
//                                     <span className="text-red-500 text-sm">{errors.roomType}</span>
//                                 )}
//                             </div>

//                         </div>

//                         <div>
//                             <div className=''>
//                                 <label className="block text-lg text-color3 font-bold">Address Details</label>
//                                 <input
//                                     type="text"
//                                     name="addressDetails"
//                                     value={formData.addressDetails}
//                                     onChange={handleChange}
//                                     placeholder="Type customer Address"
//                                     className="w-[930px] border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />
//                             </div>
//                             {errors.addressDetails && (
//                                 <span className="text-red-500 text-sm">{errors.addressDetails}</span>
//                             )}

//                         </div>

//                         <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-6">
//                             {/* Check-IN Date */}
//                             <div>
//                                 <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
//                                 <input
//                                     type="date"
//                                     name="checkInDate"
//                                     value={formData.checkInDate}
//                                     onChange={handleChange}
//                                     className="w-full border p-2 rounded-lg mt-5 text-sm py-2"
//                                 />
//                                 {errors.checkInDate && (
//                                     <span className="text-red-500 text-sm">{errors.checkInDate}</span>
//                                 )}
//                             </div>

//                             {/* Time Input */}
//                             <div>
//                                 <input
//                                     type="time"
//                                     name="time"
//                                     value={formData.time}
//                                     onChange={(e) => {
//                                         handleChange(e); // Update the time value in formData
//                                         const selectedTime = e.target.value;
//                                         if (selectedTime) {
//                                             const hours = parseInt(selectedTime.split(':')[0], 10);
//                                             // Automatically set AM or PM based on the hours
//                                             const amPmValue = hours < 12 ? 'AM' : 'PM';
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 amPm: amPmValue,
//                                             }));
//                                         }
//                                     }}
//                                     className="w-full border p-2 rounded-lg mt-11 py-2 text-sm"
//                                 />
//                                 {errors.time && (
//                                     <span className="text-red-500 text-sm">{errors.time}</span>
//                                 )}
//                             </div>

//                             {/* AM/PM Select */}
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select
//                                     name="amPm"
//                                     value={formData.amPm}
//                                     onChange={handleChange}
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
//                                 {errors.amPm && (
//                                     <span className="text-red-500 text-sm">{errors.amPm}</span>
//                                 )}
//                             </div>
//                         </div>



//                         <hr className="border-dashed border-gray-300 my-4 mt-6" />

//                         <div className="flex items-center justify-between p-4 border-2 rounded-lg   w-full max-w-4xl mx-auto mr-60">
//                             {/* Room Rent */}
//                             <div className=" items-center">
//                                 <span className="font-bold text-color3">Room rent</span>
//                                 <span className="flex flex-row text-lg font-bold mt-5">Rs.{roomRent}/-</span>

//                             </div>
//                             <div>
//                                 <label className="  items-center">
//                                     <input type="radio" name="extra" className="mr-1 mt-12" />
//                                     <span>Extra</span>
//                                 </label>
//                             </div>

//                             {/* GST Bill */}
//                             <div className="flex flex-col items-center">
//                                 <span className="text-color3 font-bold">GST bill</span>
//                                 <label className="mt-4 flex items-center">
//                                     <input
//                                         type="radio"
//                                         name="gst"
//                                         value="Add GST"
//                                         checked={gstOption === "Add GST"}
//                                         onChange={() => setGstOption("Add GST")}
//                                         className="mr-1" />
//                                     <span>Add GST</span>
//                                 </label>
//                             </div>

//                             <div className="flex flex-col items-center">
//                                 <div className="my-4 lg:my-0 ">
//                                     <form className="flex flex-col md:flex-row items-center justify-center">
//                                         <label className='text-color3 font-bold '>Booking Payment</label>
//                                         <input
//                                             type="text"
//                                             name='bookingPayment'
//                                             placeholder="Type Payment"
//                                             value={formData.bookingPayment}
//                                             onChange={handleChange}
//                                             className="w-full md:w-[300px] lg:w-[200px] py-2 border-b ml-10"
//                                         />
//                                         {errors.bookingPayment && (
//                                             <span className="text-red-500 text-sm">{errors.bookingPayment}</span>
//                                         )}

//                                     </form>
//                                     <div className="text-center mt-4 text-black text-xs ">
//                                         <div className="flex mt-2 space-x-2">
//                                             <label className="flex items-center text-color3 font-bold text-[15px] mr-20">Payment Mode </label>
//                                             <input
//                                                 type="radio"
//                                                 name="payment"
//                                                 value="UPI"
//                                                 checked={paymentType === 'UPI'}
//                                                 onChange={() => setPaymentType('UPI')}
//                                                 className="mr-1"
//                                             />


//                                             <span>UPI</span>


//                                             <input
//                                                 type="radio"
//                                                 name="payment"
//                                                 value="Card"
//                                                 checked={paymentType === 'Card'}
//                                                 onChange={() => setPaymentType('Card')}
//                                                 className="mr-1"
//                                             />
//                                             <span>Card</span>


//                                             <input
//                                                 type="radio"
//                                                 name="payment"
//                                                 value="Cash"
//                                                 checked={paymentType === 'Cash'}
//                                                 onChange={() => setPaymentType('Cash')}
//                                                 className="mr-1"
//                                             />
//                                             <span>Cash</span>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end ">
//                             <button className="bg-color3 text-white font-semibold py-2 px-8 rounded-full">
//                                 SUBMIT
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </main>
//         </div>
//     );
// };

// export default NewBooking;



