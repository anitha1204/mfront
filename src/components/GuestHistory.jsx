import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, } from 'react-icons/fa';
import { Bell, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.png";
import img from '../assets/girl.webp';
import { HiX } from "react-icons/hi";
import axios from 'axios';
import { BsCaretDownFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import { FaWhatsapp, FaGoogle } from 'react-icons/fa';

const GuestHistory = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const initialFormState = {
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

    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [roomRent, setRoomRent] = useState(0);
    const [gstOption, setGstOption] = useState('');


     // Validation function
     const validateForm = () => {
        const newErrors = {};

        if (!formData.bookingStaffName.trim()) {
            newErrors.bookingStaffName = 'Booking staff name is required';
        }

        if (!formData.bookingPersonName.trim()) {
            newErrors.bookingPersonName = 'Booking person name is required';
        }

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Invalid mobile number format';
        }

        if (formData.emailAddress && !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = 'Invalid email format';
        }

        if (!formData.checkInDate) {
            newErrors.checkInDate = 'Check-in date is required';
        }

        if (!formData.roomType) {
            newErrors.roomType = 'Room type is required';
        }

        if (formData.addressDetails && /[^a-zA-Z0-9\s,.-]/.test(formData.addressDetails)) {
            formErrors.addressDetails = "Address contains invalid characters";
        }



        return newErrors;
    };


    useEffect(() => {
        calculateRoomRent(formData.acNonac, formData.roomType);
    }, [formData.acNonac, formData.roomType]);

    const calculateRoomRent = (acNonac, roomType) => {
        let rent = 0;
        if (acNonac === "AC") rent = 2000;
        else if (acNonac === "Non-AC") rent = 1000;

        if (roomType === "Single occupancy") rent += 2000;
        else if (roomType === "Double occupancy with kitchen") rent += 2500;
        else if (roomType === "Double occupancy without kitchen") rent += 3000;
        else if (roomType === "Triple occupancy with kitchen") rent += 3500;
        else if (roomType === "Triple occupancy without kitchen") rent += 4000;

        setRoomRent(rent);
    };

   // Handle input changes
   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'paymentModes') {
        setFormData(prevData => ({
            ...prevData,
            paymentModes: checked
                ? [...prevData.paymentModes, value]
                : prevData.paymentModes.filter(mode => mode !== value)
        }));
    } else {
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
};




  
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    const bookingData = {
        bookingStaffName: formData.bookingStaffName,
        sourceOfLooking: formData.sourceOfLooking,
        bookingPersonName: formData.bookingPersonName,
        bookingNo: formData.bookingNo,
        mobileNumber: formData.mobileNumber,
        emailAddress: formData.emailAddress,
        guestDetails: formData.guestDetails,
        acNonac: formData.acNonac,
        roomType: formData.roomType,
        addressDetails: formData.addressDetails,
        checkInDate: formData.checkInDate,
        time: formData.time,
        amPm: formData.amPm,

    };

    // Validate form before sending data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    try {
        const response = await axios.post('https://maahotelbackend1.onrender.com/api/bookings', bookingData);
        console.log('Booking created successfully', response.data);
        toast.success('Booking created successfully!');

        setFormData({
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
        });


    } catch (error) {
        console.error('Error creating booking:', error.response ? error.response.data : error.message);
        if (error.response && error.response.data) {
            console.log('Detailed error from backend:', error.response.data);
            toast.error('Error creating booking: ' + error.response.data);
        } else {
            console.log('Error message:', error.message);
            toast.error('Error creating booking');
        }
    }
    setTimeout(() => {
        setIsSubmitting(false);
        setShowPopup(true); // Show the popup after form submission
    }, 1000);
};

const handlePopupClose = () => {
    setShowPopup(false); // Close the popup
};


// Error message component
const ErrorMessage = ({ error }) => {
    return error ? <span className="text-red-500 text-sm mt-1">{error}</span> : null;
};


    const handleProductsClick = () => setShowProductsDropdown(!showProductsDropdown);
    const handleDropdownItemClick = () => setShowProductsDropdown(false);


    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

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

                <aside className="w-[260px] bg-gradient-to-r from-color3 to-color4 text-white p-6 border-r rounded-3xl mx-6 h-[670px] ">

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
                            <h3 className="text-lg font-semibold">
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
                <nav className="bg-white px-4 py-2 shadow-sm rounded-[50px] mt-5">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search Here by Name"
                                className="w-96 pl-4 pr-10 py-1 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                            <button className="absolute right-20 top-1/2 -translate-y-1/2">
                                <HiX className="h-5 w-5 text-gray-400" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="relative right-[50px]">
                                <Bell className="h-6 w-6 text-gray-600" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    15
                                </span>
                            </div>
                            <div>
                                <select

                                    className="bg-primary text-white px-4 py-1 rounded-3xl mr-10"
                                >
                                    <option value="">Select Hotel</option>
                                    <option value="MAAG">MAAG</option>
                                    <option value="MAAR">MAAR</option>
                                    <option value="MAAS">MAAS</option>
                                    <option value="MAA">MAA</option>
                                </select>
                            </div>

                            <p className="bg-gray-300 px-3 py-1 rounded mx-6">{formattedTime}</p>
                            <div className="flex items-center gap-2">
                                <img src={img} alt="User" className="h-10 w-10 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium">Raja Ganapathi</p>
                                    <p className="text-xs text-gray-400">raja@example.com</p>
                                </div>
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </nav>

                <form className="bg-white p-6 rounded-3xl shadow-md mt-6"
                    onSubmit={handleSubmit}
                >

                    <div className="">

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-lg text-color3 font-bold">Booking Staff</label>
                                <input
                                    type="text"
                                    name="bookingStaffName"
                                    placeholder="Booking Staff Name"
                                    value={formData.bookingStaffName}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.bookingStaffName ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
                                />
                                <ErrorMessage error={errors.bookingStaffName} />
                            </div>

                            <div className="relative w-full">
                                <label className="block text-lg text-color3 font-bold">Source of Booking</label>
                                <select
                                    type="text"
                                    name="sourceOfLooking"
                                    value={formData.sourceOfLooking}
                                    onChange={handleChange}
                                    placeholder="ourceOfLooking"
                                    className={`w-full border ${errors.sourceOfLooking ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3 appearance-none `}
                                >
                                    <option value="" className=''>Select an option</option>
                                    <option value="Google">Google</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Friends & Family">Friends & Family</option>
                                    <option value="Portal">Portal</option>
                                    <option value="Others">Others</option>

                                </select>
                                <div className="absolute top-0 mt-[55px]  right-4 text-gray-600 pointer-events-none ">
                                    <BsCaretDownFill size={12} />
                                </div>
                                <ErrorMessage error={errors.sourceOfLooking} />
                            </div>

                        </div>
                        {/* Divider */}
                        <hr className="border-dashed border-gray-300 my-4 mt-10" />
                        <h2 className="text-xl font-semibold text-color3 mb-4 mt-4 font-bold">Customer Details</h2>

                        <div className="grid md:grid-cols-[300px_300px_300px]  gap-4 mb-4">


                            <div>
                                <label className="block text-lg text-color3 font-bold">Name Details</label>
                                <input
                                    type="text"
                                    name="bookingPersonName"
                                    value={formData.bookingPersonName}
                                    onChange={handleChange}
                                    placeholder="Booking Person Name"
                                    className={`w-full border ${errors.bookingPersonName ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
                                />
                                 <ErrorMessage error={errors.bookingPersonName} />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-10`}
                                />
                                 <ErrorMessage error={errors.mobileNumber} />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    placeholder="Email Addres"
                                    className={`w-full border ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-10`}
                                />
                               <ErrorMessage error={errors.emailAddress} />
                            </div>
                        </div>

                        <div className="grid  md:grid-cols-[300px_150px_450px] gap-4 mb-4">
                            <div className="relative inline-block">
                                <label className="block text-lg text-color3 font-bold">Guest Details</label>
                                <select
                                    name="guestDetails"
                                    value={formData.guestDetails}
                                    onChange={handleChange}
                                    placeholder="select"
                                    className={`w-20 border ${errors.guestDetails ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400`}
                                >
                                    <option value="">Select</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                {/* Dropdown Icon */}
                                <div className="absolute top-0 mt-[60px] text-gray-600 pointer-events-none ml-14">
                                    <BsCaretDownFill size={12} />
                                </div>
                                <ErrorMessage error={errors.guestDetails} />
                            </div>

                            <div className="relative w-full">
                                <label className="block text-lg text-color3 font-bold">Room Type</label>
                                <select
                                    name="acNonac"
                                    value={formData.acNonac}
                                    onChange={handleChange}
                                    placeholder="Select type"
                                    className={`w-full border ${errors.acNonac ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400`}
                                >
                                    <option value="" >Select type</option>
                                    <option value="Non-AC">Non-AC</option>
                                    <option value="AC">AC</option>
                                </select>
                                <div className="absolute top-0 mt-[60px] right-3 text-gray-600 pointer-events-none">
                                    <BsCaretDownFill size={12} />
                                </div>
                                <ErrorMessage error={errors.acNonac} />

                            </div>
                            <div className="relative w-full">
                                <label className="block text-sm text-gray-600"></label>
                                <select
                                    name="roomType"
                                    value={formData.roomType}
                                    onChange={handleChange}
                                    placeholder="Select room type"
                                    className={`w-full border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400 `}
                                >
                                    <option value="" >Select room type</option>
                                    <option value="Single occupancy">Single occupancy</option>
                                    <option value="Double occupancy with kitchen">Double occupancy with kitchen</option>
                                    <option value="Double occupancy without kitchen">Double occupancy without kitchen</option>
                                    <option value="Triple occupancy with kitchen">Triple occupancy with kitchen</option>
                                    <option value="Triple occupancy without kitchen">Triple occupancy without kitchen</option>
                                </select>
                                {/* Dropdown Icon */}
                                <div className="absolute top-0 mt-[60px] right-3 text-gray-600 pointer-events-none">
                                    <BsCaretDownFill size={12} />
                                </div>
                                <ErrorMessage error={errors.roomType} />
                            </div>

                        </div>

                        <div>
                            <div className=''>
                                <label className="block text-lg text-color3 font-bold">Address Details</label>
                                <input
                                    type="text"
                                    name="addressDetails"
                                    value={formData.addressDetails}
                                    onChange={handleChange}
                                    placeholder="Type customer Address"
                                    className={`w-[930px] border ${errors.addressDetails? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
                                />
                            </div>
                            <ErrorMessage error={errors.addressDetails} />

                        </div>

                        <div className="grid md:grid-cols-[150px_100px_100px_150px_100px_100px_170px_120px] gap-4 mb-4 mt-6">
                            {/* Check-IN Date */}
                            <div>
                                <label className="text-md text-orange-500 font-bold text-color3">Check-IN Date</label>
                                <input
                                    type="date"
                                    name="checkInDate"
                                    value={formData.checkInDate}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.checkInDate ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg mt-5 text-sm py-2`}
                                />
                                 <ErrorMessage error={errors.checkInDate} />
                            </div>

                            {/* Time Input */}
                            <div>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={(e) => {
                                        handleChange(e); // Update the time value in formData
                                        const selectedTime = e.target.value;
                                        if (selectedTime) {
                                            const hours = parseInt(selectedTime.split(':')[0], 10);
                                            // Automatically set AM or PM based on the hours
                                            const amPmValue = hours < 12 ? 'AM' : 'PM';
                                            setFormData((prev) => ({
                                                ...prev,
                                                amPm: amPmValue,
                                            }));
                                        }
                                    }}
                                    className={`w-full border ${errors.time ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg mt-11 py-2 text-sm`}
                                />
                                <ErrorMessage error={errors.time} />
                            </div>

                            {/* AM/PM Select */}
                            <div className="relative w-full">
                                <label className="block text-sm text-gray-600"></label>
                                <input
                                    name="amPm"
                                    value={formData.amPm}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.amPm ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-11 appearance-none`}
                                />
                                <ErrorMessage error={errors.amPm} />
                            </div>
                        </div>



                        <hr className="border-dashed border-gray-300 my-4  mt-6" />
                        <div className="flex flex-col items-center  max-w-5xl  space-y-6 md:space-y-0 md:space-x-4 md:flex-row">
                        <div className="flex items-center justify-between p-4 border-2 rounded-lg   w-full ">
                            
                            <div className=" items-center">
                                <span className="font-bold text-color3">Room rent</span>
                                <span className="flex flex-row text-lg font-bold mt-5">Rs.{roomRent}/-</span>

                            </div>
                            {/* <div>
                                <label className="  items-center">
                                    <input type="radio" name="extra" className="mr-1 mt-12" />
                                    <span>Extra</span>
                                </label>
                            </div>

                           
                            <div className="flex flex-col items-center">
                                <span className="text-color3 font-bold">GST bill</span>
                                <label className="mt-4 flex items-center">
                                    <input
                                        type="radio"
                                        name="gst"
                                        value="Add GST"
                                        checked={gstOption === "Add GST"}
                                        onChange={() => setGstOption("Add GST")}
                                        className="mr-1" />
                                    <span>Add GST</span>
                                </label>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="my-4 lg:my-0 ">
                                    <form className="flex flex-col md:flex-row items-center justify-center">
                                        <label className='text-color3 font-bold '>Booking Payment</label>
                                        <input
                                            type="text"
                                            name='bookingPayment'
                                            placeholder="Type Payment"
                                            value={formData.bookingPayment}
                                            onChange={handleChange}
                                            className="w-full md:w-[300px] lg:w-[200px] py-2 border-b ml-10"
                                        />
                                        {errors.bookingPayment && (
                                            <span className="text-red-500 text-sm">{errors.bookingPayment}</span>
                                        )}

                                    </form>
                                    <div className="text-center mt-4 text-black text-xs ">
                                        <div className="flex mt-2 space-x-2">
                                            <label className="flex items-center text-color3 font-bold text-[15px] mr-20">Payment Mode </label>
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="UPI"
                                                checked={paymentType === 'UPI'}
                                                onChange={() => setPaymentType('UPI')}
                                                className="mr-1"
                                            />


                                            <span>UPI</span>


                                            <input
                                                type="radio"
                                                name="payment"
                                                value="Card"
                                                checked={paymentType === 'Card'}
                                                onChange={() => setPaymentType('Card')}
                                                className="mr-1"
                                            />
                                            <span>Card</span>


                                            <input
                                                type="radio"
                                                name="payment"
                                                value="Cash"
                                                checked={paymentType === 'Cash'}
                                                onChange={() => setPaymentType('Cash')}
                                                className="mr-1"
                                            />
                                            <span>Cash</span>

                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="flex justify-end ">
                            <button className="bg-color3 text-white font-semibold py-2 px-8 rounded-full">
                                SUBMIT
                            </button>
                        </div> */}

                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                                    bg-color3 text-white font-semibold py-2 px-8 rounded-full
                                    hover:bg-color3 transition duration-300
                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
                {showPopup && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-md w-80">
                            <h2 className="text-xl font-semibold mb-4">Form Submitted Successfully</h2>
                            <div className="flex justify-center gap-4">
                                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={32} color="green" />
                                </a>
                                <a href="mailto:youremail@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FaGoogle size={32} color="red" />
                                </a>
                            </div>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={handlePopupClose}
                                    className="bg-gray-300 text-black px-4 py-2 rounded-full"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default GuestHistory;