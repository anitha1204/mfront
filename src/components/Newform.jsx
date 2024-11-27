// // import React, { useState } from 'react';
// // import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog } from 'react-icons/fa';
// // import { Bell, Search } from 'react-icons/hi';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';

// // const BookingSystem = () => {
// //   const [isFormVisible, setIsFormVisible] = useState(false);
// //   const [startDate, setStartDate] = useState(new Date());

// //   const toggleForm = () => {
// //     setIsFormVisible(!isFormVisible);
// //   };

// //   return (
// //     <div className="flex bg-gray-100">
// //       {/* Sidebar */}
// //       <section className="flex flex-col">
// //         {/* Sidebar Logo */}
// //         <div className="flex items-center justify-center mb-8">
// //           <img src="/logo.png" alt="Logo" className="h-24" />
// //         </div>

// //         {/* Sidebar */}
// //         <aside className="w-[330px] bg-white p-6 border-r rounded-3xl mx-6 h-[700px]">
// //           {/* Sidebar Links with Icons */}
// //           <nav className="space-y-4">
// //             <a href="#" className="flex items-center space-x-3 text-orange-500 bg-gray-100 p-2 rounded-lg">
// //               <FaHome className="text-lg" />
// //               <span>Home</span>
// //             </a>
// //             <a href="#" className="flex items-center space-x-3 p-2">
// //               <FaBook className="text-lg" />
// //               <span>Booking</span>
// //             </a>
// //             <a href="#" className="flex items-center space-x-3 p-2">
// //               <FaRegCalendarAlt className="text-lg" />
// //               <span>Reservation</span>
// //             </a>
// //             <a href="#" className="flex items-center space-x-3 p-2">
// //               <FaBed className="text-lg" />
// //               <span>Rooms</span>
// //             </a>
// //             <a href="#" className="flex items-center space-x-3 p-2">
// //               <FaHistory className="text-lg" />
// //               <span>Guest History</span>
// //             </a>
// //           </nav>

// //           {/* Calendar Section */}
// //           <div className="bg-purple-50 rounded-2xl p-4 text-center max-h-96 h-[330px] mt-12">
// //             {/* Display current date */}
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-lg font-medium text-gray-800">{new Date().toDateString()}</h3>
// //               <FaPen className="text-gray-500" />
// //             </div>

// //             {/* DatePicker with custom styling */}
// //             <div className="outline-none">
// //               <DatePicker
// //                 selected={startDate}
// //                 onChange={(date) => setStartDate(date)}
// //                 inline
// //                 className="outline-none"
// //               />
// //             </div>
// //           </div>
// //         </aside>

// //         {/* Settings and Sign Out */}
// //         <div className="flex justify-between items-center mt-4 bg-white w-[330px] border-r rounded-3xl mx-6 h-[60px]">
// //           <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
// //             <FaCog className="text-lg" />
// //           </button>
// //           <button className="w-40 bg-red-500 text-white p-2 rounded-full mr-2">
// //             Sign out
// //           </button>
// //         </div>
// //       </section>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6">
// //         {/* Header */}
// //         <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
// //           <div className="max-w-7xl mx-auto flex items-center justify-between">
// //             {/* Search Bar */}
// //             <div className="relative flex-1 max-w-md">
// //               <input
// //                 type="text"
// //                 placeholder="Search Here by Name"
// //                 className="w-full pl-4 pr-10 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
// //               />
// //               <button className="absolute right-2 top-1/2 -translate-y-1/2">
// //                 <Search className="h-5 w-5 text-gray-400" />
// //               </button>
// //             </div>

// //             {/* Notification Bell */}
// //             <div className="relative right-[40px]">
// //               <Bell className="h-6 w-6 text-gray-600" />
// //               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 15
// //               </span>
// //             </div>

// //             {/* New Booking Button */}
// //             <button
// //               onClick={toggleForm}
// //               className="bg-green-500 text-white px-4 py-1 rounded-3xl"
// //             >
// //               New Booking
// //             </button>
// //           </div>
// //         </nav>

// //         {/* Conditionally render the form */}
// //         {isFormVisible && (
// //           <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
// //             {/* Name Details Section */}
// //             <div>
// //               <h2 className="text-xl font-bold mb-4">Name Details</h2>

// //               {/* Person 1 */}
// //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
// //                 <div>
// //                   <label className="block text-gray-700">Person 1</label>
// //                   <input
// //                     type="text"
// //                     className="w-full p-2 border rounded-md"
// //                     placeholder="First Name"
// //                   />
// //                 </div>
// //                 <div>
// //                   <input
// //                     type="text"
// //                     className="w-full p-2 border rounded-md mt-6"
// //                     placeholder="Last Name"
// //                   />
// //                 </div>
// //                 <div>
// //                   <input
// //                     type="text"
// //                     className="w-full p-2 border rounded-md mt-6"
// //                     placeholder="Mobile Number"
// //                   />
// //                 </div>
// //                 <div>
// //                   <input
// //                     type="text"
// //                     className="w-full p-2 border rounded-md mt-6"
// //                     placeholder="Sec. Mobile Number"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Room Details Section */}
// //               <div className="mt-6">
// //                 <h2 className="text-xl font-bold mb-4">Room Details</h2>
// //                 <div className="grid grid-cols-4 gap-4">
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Room Type"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="AC"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Non-AC"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Check In-out Details Section */}
// //               <div className="mt-6">
// //                 <h2 className="text-xl font-bold mb-4">Check In - Out Details</h2>
// //                 <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
// //                   <input
// //                     type="text"
// //                     className="col-span-2 p-2 border rounded-md"
// //                     placeholder="Check - IN"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Date"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Time"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-2 p-2 border rounded-md"
// //                     placeholder="Check - OUT"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Date"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Time"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Food Details Section */}
// //               <div className="mt-6">
// //                 <h2 className="text-xl font-bold mb-4">Food Details</h2>
// //                 <div className="grid grid-cols-6 gap-4">
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Break Fast"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Lunch"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="col-span-1 p-2 border rounded-md"
// //                     placeholder="Dinner"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default BookingSystem;

//=======================================================================================================================

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog } from 'react-icons/fa';
// import { Bell, Search, ChevronDown } from 'lucide-react';
// import { Table } from 'antd';
// import logo from "../assets/logo.png";
// import img from '../assets/girl.webp';

// // Sample guest data
// const guestDataInitial = [
//     {
//         key: '1',
//         bookingNo: 'M01',
//         name: 'Raja Ganapathi',
//         roomNo: '27',
//         roomType: 'Single Bed',
//         ac: 'A/C',
//         reservationTill: 'Sep 18, 8:00am',
//         phone: '1234567890',
//         address: 'Some Address',
//         idNumber: 'ID1234',
//         noOfGuests: '2',
//         checkInTime: '10:00 AM',
//         checkOutTime: '12:00 PM',
//         roomNights: '2',
//         rate: '3000',
//         totalRoomRent: '6000',
//         gstRequired: '18%',
//         gstAmount: '1080',
//         totalAmountPayable: '7080',
//         advance: '1000',
//         outstanding: '6080',
//         shiftingCharges: '0',
//         balance: '0',
//         clientPaid: 'Paid',
//         advanceReturn: '0',
//         modeOfPayment: 'Cash',
//         status: 'Confirmed',

//     },
// ];

// const columns = [
//     { title: 'Bk. No', dataIndex: 'bookingNo', key: 'bookingNo', width: 100, ellipsis: true },
//     { title: 'Name', dataIndex: 'name', key: 'name', width: 150, ellipsis: true },
//     { title: 'Room No', dataIndex: 'roomNo', key: 'roomNo', width: 100, ellipsis: true },
//     { title: 'Room Type', dataIndex: 'roomType', key: 'roomType', width: 150, ellipsis: true },
//     { title: 'A/C or Non A/C', dataIndex: 'ac', key: 'ac', width: 150, ellipsis: true },
//     { title: 'Reservation Till', dataIndex: 'reservationTill', key: 'reservationTill', width: 150, ellipsis: true },
//     { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 150, ellipsis: true },
//     { title: 'Guest Address', dataIndex: 'address', key: 'address', width: 200, ellipsis: true },
//     { title: 'ID Number', dataIndex: 'idNumber', key: 'idNumber', width: 100, ellipsis: true },
//     { title: 'No of Guests', dataIndex: 'noOfGuests', key: 'noOfGuests', width: 100, ellipsis: true },
//     { title: 'Check In Time', dataIndex: 'checkInTime', key: 'checkInTime', width: 150, ellipsis: true },
//     { title: 'Check Out Time', dataIndex: 'checkOutTime', key: 'checkOutTime', width: 150, ellipsis: true },
//     { title: 'Room Nights', dataIndex: 'roomNights', key: 'roomNights', width: 100, ellipsis: true },
//     { title: 'Rate', dataIndex: 'rate', key: 'rate', width: 100, ellipsis: true },
//     { title: 'Total Room Rent', dataIndex: 'totalRoomRent', key: 'totalRoomRent', width: 150, ellipsis: true },
//     { title: 'GST Required', dataIndex: 'gstRequired', key: 'gstRequired', width: 100, ellipsis: true },
//     { title: 'GST Amount', dataIndex: 'gstAmount', key: 'gstAmount', width: 100, ellipsis: true },
//     { title: 'Total Amount Payable', dataIndex: 'totalAmountPayable', key: 'totalAmountPayable', width: 150, ellipsis: true },
//     { title: 'Advance', dataIndex: 'advance', key: 'advance', width: 100, ellipsis: true },
//     { title: 'Outstanding', dataIndex: 'outstanding', key: 'outstanding', width: 100, ellipsis: true },
//     { title: 'Shifting Charges', dataIndex: 'shiftingCharges', key: 'shiftingCharges', width: 150, ellipsis: true },
//     { title: 'Balance', dataIndex: 'balance', key: 'balance', width: 100, ellipsis: true },
//     { title: 'Client Paid', dataIndex: 'clientPaid', key: 'clientPaid', width: 100, ellipsis: true },
//     { title: 'Advance Return', dataIndex: 'advanceReturn', key: 'advanceReturn', width: 150, ellipsis: true },
//     { title: 'Mode of Payment', dataIndex: 'modeOfPayment', key: 'modeOfPayment', width: 150, ellipsis: true },
//     { title: 'Status', dataIndex: 'status', key: 'status', width: 100, ellipsis: true },
// ];

// const Newform = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [guestData, setGuestData] = useState(guestDataInitial);

//     const toggleForm = () => {
//         setIsFormVisible(!isFormVisible);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         const newGuest = {
//             key: guestData.length + 1, // Unique key for Ant Design table
//             bookingNo: `M${guestData.length + 1}`, // Example booking number
//             name: e.target.elements.name.value,
//             roomNo: e.target.elements.roomNo.value,
//             roomType: e.target.elements.roomType.value,
//             ac: e.target.elements.ac.checked ? 'A/C' : 'Non A/C',
//             reservationTill: format(endDate, 'MMM d, h:mm a'),
//             phone: e.target.elements.phone.value,
//             address: e.target.elements.address.value,
//             idNumber: e.target.elements.idNumber.value,
//             noOfGuests: e.target.elements.noOfGuests.value,
//             checkInTime: e.target.elements.checkInTime.value,
//             checkOutTime: e.target.elements.checkOutTime.value,
//             roomNights: e.target.elements.roomNights.value,
//             rate: e.target.elements.rate.value,
//             totalRoomRent: e.target.elements.totalRoomRent.value,
//             gstRequired: e.target.elements.gstRequired.value,
//             gstAmount: e.target.elements.gstAmount.value,
//             totalAmountPayable: e.target.elements.totalAmountPayable.value,
//             advance: e.target.elements.advance.value,
//             outstanding: e.target.elements.outstanding.value,
//             shiftingCharges: e.target.elements.shiftingCharges.value,
//             balance: e.target.elements.balance.value,
//             clientPaid: e.target.elements.clientPaid.value,
//             advanceReturn: e.target.elements.advanceReturn.value,
//             modeOfPayment: e.target.elements.modeOfPayment.value,
//             status: e.target.elements.status.value,
//         };

//         // Update guest data
//         setGuestData([...guestData, newGuest]);

//         // Clear form fields
//         e.target.reset();
//         setStartDate(new Date());
//         setEndDate(new Date());
//         setIsFormVisible(false);
//     };

//     return (
//         <div className="flex bg-gray-100">
//             {/* Sidebar */}
//             <section className="flex flex-col">
//                 <div className="flex items-center justify-center mb-8">
//                     <img src={logo} alt="Logo" className="h-24" />
//                 </div>

//                 <aside className="w-[330px] bg-white p-6 border-r rounded-3xl mx-6 h-[700px]">
//                     <nav className="space-y-4">
//                         <a href="#" className="flex items-center space-x-3 text-orange-500 bg-gray-100 p-2 rounded-lg">
//                             <FaHome className="text-lg" />
//                             <span>Home</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-3 p-2">
//                             <FaBook className="text-lg" />
//                             <span>Booking</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-3 p-2">
//                             <FaRegCalendarAlt className="text-lg" />
//                             <span>Reservation</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-3 p-2">
//                             <FaBed className="text-lg" />
//                             <span>Rooms</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-3 p-2">
//                             <FaHistory className="text-lg" />
//                             <span>Guest History</span>
//                         </a>
//                     </nav>

//                     <div className="bg-purple-50 rounded-2xl p-4 text-center max-h-96 h-[330px] mt-12">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-lg font-medium text-gray-800">{format(startDate, 'EEE, MMM d')}</h3>
//                             <FaPen className="text-gray-500" />
//                         </div>
//                         <div className="outline-none">
//                             <DatePicker
//                                 selected={startDate}
//                                 onChange={(date) => setStartDate(date)}
//                                 inline
//                                 className="outline-none"
//                             />
//                         </div>
//                     </div>
//                 </aside>

//                 <div className="flex justify-between items-center mt-4 bg-white w-[330px] border-r rounded-3xl mx-6 h-[60px]">
//                     <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
//                         <FaCog className="text-lg" />
//                     </button>
//                     <button className="w-40 bg-red-500 text-white p-2 rounded-full mr-2">
//                         Sign out
//                     </button>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <main className="flex-1 p-6">
//                 <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
//                     <div className="max-w-7xl mx-auto flex items-center justify-between">
//                         <div className="relative flex-1 max-w-md">
//                             <input
//                                 type="text"
//                                 placeholder="Search Here by Name"
//                                 className="w-full pl-4 pr-10 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
//                             />
//                             <button className="absolute right-2 top-1/2 -translate-y-1/2">
//                                 <Search className="h-5 w-5 text-gray-400" />
//                             </button>
//                         </div>
//                         <div className="flex items-center">
//                             <div className="relative right-[40px]">
//                                 <Bell className="h-6 w-6 text-gray-600" />
//                                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                     15
//                                 </span>
//                             </div>
//                             <div className="">
//                                 <button onClick={toggleForm} className="bg-green-500 text-white px-4 py-1 rounded-3xl ">
//                                     {isFormVisible ? 'View Bookings' : 'New Booking'}
//                                 </button>
//                             </div>
//                             <p className="bg-gray-300 px-3 py-1 rounded mx-6">9:41AM</p>
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

//                 {/* Overview Section and Table */}
//                 {!isFormVisible ? (
//                     <>
//                         {/* Overview Section */}
//                         <section className="grid grid-cols-4 gap-4 bg-white p-3 shadow rounded-3xl mt-6 text-white">
//                             <h2 className="col-span-4 text-xl ml-4 text-orange-500">Overview</h2>
//                             <div className="bg-green-500 p-4 rounded-lg text-center">
//                                 <h4 className="text-[12px] font-semibold text-start">Today's Check In</h4>
//                                 <p className="text-5xl text-end">{guestData.length}</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-red-500 p-4 rounded-lg text-center">
//                                 <h4 className="text-[12px] font-semibold text-start">Today's Check Out</h4>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseInt(guest.noOfGuests), 0)}</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-blue-500 p-4 rounded-lg text-center">
//                                 <h3 className="text-[12px] font-semibold text-start">Rooms Available</h3>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.totalAmountPayable), 0).toFixed(2)} ₹</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-orange-500 p-4 rounded-lg text-center ">
//                                 <h3 className="text-[12px] font-semibold text-start">Rooms Reserved</h3>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.outstanding), 0).toFixed(2)} ₹</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                         </section>

//                         {/* Ant Design Table */}
//                         <Table
//                             columns={columns}
//                             dataSource={guestData}

//                             pagination={{ pageSize: 5 }}
//                             scroll={{ x: 'max-content' }} // Enables horizontal scrolling
//                             className="mt-8 w-[1100px]"
//                             rowKey="key"
//                         />
//                     </>
//                 ) : (
//                     <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-3xl shadow-md mt-6">
//                         <h2 className="text-lg font-semibold mb-4">New Booking</h2>
//                         <div className="grid grid-cols-2 gap-4">
//                             <input type="text" name="name" placeholder="Guest Name" required className="border p-2 rounded" />
//                             <input type="text" name="roomNo" placeholder="Room No" required className="border p-2 rounded" />
//                             <input type="text" name="roomType" placeholder="Room Type" required className="border p-2 rounded" />
//                             <input type="checkbox" name="ac" className="ml-2" /> <label className="ml-1">A/C</label>
//                             <input type="text" name="phone" placeholder="Phone" required className="border p-2 rounded" />
//                             <input type="text" name="address" placeholder="Guest Address" required className="border p-2 rounded" />
//                             <input type="text" name="idNumber" placeholder="ID Number" required className="border p-2 rounded" />
//                             <input type="number" name="noOfGuests" placeholder="No of Guests" required className="border p-2 rounded" />
//                             <input type="text" name="checkInTime" placeholder="Check In Time" required className="border p-2 rounded" />
//                             <input type="text" name="checkOutTime" placeholder="Check Out Time" required className="border p-2 rounded" />
//                             <input type="number" name="roomNights" placeholder="Room Nights" required className="border p-2 rounded" />
//                             <input type="number" name="rate" placeholder="Rate" required className="border p-2 rounded" />
//                             <input type="number" name="totalRoomRent" placeholder="Total Room Rent" required className="border p-2 rounded" />
//                             <input type="text" name="gstRequired" placeholder="GST Required" required className="border p-2 rounded" />
//                             <input type="number" name="gstAmount" placeholder="GST Amount" required className="border p-2 rounded" />
//                             <input type="number" name="totalAmountPayable" placeholder="Total Amount Payable" required className="border p-2 rounded" />
//                             <input type="number" name="advance" placeholder="Advance" required className="border p-2 rounded" />
//                             <input type="number" name="outstanding" placeholder="Outstanding" required className="border p-2 rounded" />
//                             <input type="number" name="shiftingCharges" placeholder="Shifting Charges" required className="border p-2 rounded" />
//                             <input type="number" name="balance" placeholder="Balance" required className="border p-2 rounded" />
//                             <input type="text" name="clientPaid" placeholder="Client Paid" required className="border p-2 rounded" />
//                             <input type="number" name="advanceReturn" placeholder="Advance Return" required className="border p-2 rounded" />
//                             <input type="text" name="modeOfPayment" placeholder="Mode of Payment" required className="border p-2 rounded" />
//                             <input type="text" name="status" placeholder="Status" required className="border p-2 rounded" />
//                         </div>
//                         <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add Guest</button>
//                     </form>
//                 )}
//             </main>
//         </div>
//     );
// };

// export default Newform;
//==================================================================================


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog } from 'react-icons/fa';
// import { Bell, Search, ChevronDown } from 'lucide-react';
// import { Table } from 'antd';
// import logo from "../assets/logo.png";
// import img from '../assets/girl.webp';

// // Sample guest data
// const guestDataInitial = [
//   {
//     key: '1',
//     bookingNo: 'M01',
//     name: 'Raja Ganapathi',
//     roomNo: '27',
//     roomType: 'Single Bed',
//     ac: 'A/C',
//     reservationTill: 'Sep 18, 8:00am',
//     phone: '1234567890',
//   },
// ];

// const columns = [
//   { title: 'Bk. No', dataIndex: 'bookingNo', key: 'bookingNo', width: 100, ellipsis: true },
//   { title: 'Name', dataIndex: 'name', key: 'name', width: 150, ellipsis: true },
//   { title: 'Room No', dataIndex: 'roomNo', key: 'roomNo', width: 100, ellipsis: true },
//   { title: 'Room Type', dataIndex: 'roomType', key: 'roomType', width: 150, ellipsis: true },
//   { title: 'A/C or Non A/C', dataIndex: 'ac', key: 'ac', width: 150, ellipsis: true },
//   { title: 'Reservation Till', dataIndex: 'reservationTill', key: 'reservationTill', width: 150, ellipsis: true },
//   { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 150, ellipsis: true },
// ];

// const Newform = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [guestData, setGuestData] = useState(guestDataInitial);

//   const toggleForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newGuest = {
//       key: guestData.length + 1, // Unique key for Ant Design table
//       bookingNo: `M${guestData.length + 1}`, // Example booking number
//       name: e.target.elements.name.value,
//       roomNo: e.target.elements.roomNo.value,
//       roomType: e.target.elements.roomType.value,
//       ac: e.target.elements.ac.checked ? 'A/C' : 'Non A/C',
//       reservationTill: format(endDate, 'MMM d, h:mm a'),
//       phone: e.target.elements.phone.value,
//     };

//     // Update guest data
//     setGuestData([...guestData, newGuest]);

//     // Clear form fields
//     e.target.reset();
//     setStartDate(new Date());
//     setEndDate(new Date());
//     setIsFormVisible(false);
//   };

//   return (
//     <div className="flex bg-gray-100">
//       {/* Sidebar */}
//       <section className="flex flex-col">
//         <div className="flex items-center justify-center mb-8">
//           <img src={logo} alt="Logo" className="h-24" />
//         </div>

//         <aside className="w-[330px] bg-white p-6 border-r rounded-3xl mx-6 h-[700px]">
//           <nav className="space-y-4">
//             <a href="#" className="flex items-center space-x-3 text-orange-500 bg-gray-100 p-2 rounded-lg">
//               <FaHome className="text-lg" />
//               <span>Home</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2">
//               <FaBook className="text-lg" />
//               <span>Booking</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2">
//               <FaRegCalendarAlt className="text-lg" />
//               <span>Reservation</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2">
//               <FaBed className="text-lg" />
//               <span>Rooms</span>
//             </a>
//             <a href="#" className="flex items-center space-x-3 p-2">
//               <FaHistory className="text-lg" />
//               <span>Guest History</span>
//             </a>
//           </nav>

//           <div className="bg-purple-50 rounded-2xl p-4 text-center max-h-96 h-[330px] mt-12">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-medium text-gray-800">{format(startDate, 'EEE, MMM d')}</h3>
//               <FaPen className="text-gray-500" />
//             </div>
//             <div className="outline-none">
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 inline
//                 className="outline-none"
//               />
//             </div>
//           </div>
//         </aside>

//         <div className="flex justify-between items-center mt-4 bg-white w-[330px] border-r rounded-3xl mx-6 h-[60px]">
//           <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
//             <FaCog className="text-lg" />
//           </button>
//           <button className="w-40 bg-red-500 text-white p-2 rounded-full mr-2">
//             Sign out
//           </button>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
//           <div className="max-w-7xl mx-auto flex items-center justify-between">
//             <div className="relative flex-1 max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search Here by Name"
//                 className="w-full pl-4 pr-10 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </button>
//             </div>
//             <div className="flex items-center">
//               <div className="relative right-[40px]">
//                 <Bell className="h-6 w-6 text-gray-600" />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   15
//                 </span>
//               </div>
//               <div className="">
//                 <button onClick={toggleForm} className="bg-green-500 text-white px-4 py-1 rounded-3xl ">
//                   New Booking
//                 </button>
//               </div>
//               <p className="bg-gray-300 px-3 py-1 rounded mx-6">9:41AM</p>
//               <div className="flex items-center gap-2">
//                 <img src={img} alt="User" className="h-10 w-10 rounded-full" />
//                 <div className="flex flex-col">
//                   <p className="text-sm font-medium">Raja Ganapathi</p>
//                   <p className="text-xs text-gray-400">raja@example.com</p>
//                 </div>
//                 <ChevronDown className="w-5 h-5 text-gray-500" />
//               </div>
//             </div>
//           </div>
//         </nav>
//         {/* Form and Table Rendering */}
//         {isFormVisible ? (
//           <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
//             <h2 className="text-xl font-bold mb-4">New Booking Form</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="name" className="block mb-1">Guest Name</label>
//                 <input type="text" name="name" required className="border border-gray-300 rounded-lg w-full p-2" />
//               </div>
//               <div>
//                 <label htmlFor="roomNo" className="block mb-1">Room No</label>
//                 <input type="text" name="roomNo" required className="border border-gray-300 rounded-lg w-full p-2" />
//               </div>
//               <div>
//                 <label htmlFor="roomType" className="block mb-1">Room Type</label>
//                 <input type="text" name="roomType" required className="border border-gray-300 rounded-lg w-full p-2" />
//               </div>
//               <div>
//                 <label htmlFor="ac" className="block mb-1">A/C</label>
//                 <input type="checkbox" name="ac" className="mr-2" /> Yes
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block mb-1">Phone</label>
//                 <input type="text" name="phone" required className="border border-gray-300 rounded-lg w-full p-2" />
//               </div>
//               <div>
//                 <label htmlFor="endDate" className="block mb-1">Reservation Till</label>
//                 <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="w-full border border-gray-300 rounded-lg p-2" />
//               </div>
//             </div>
//             <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Booking</button>
//           </form>
//         ) : (
//           <>
//             <Table
//               dataSource={guestData}
//               columns={columns}
//               pagination={false}
//               className="mt-4"
//             />
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Newform;


///======================================================================


// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons

// const Newform = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const guestData = [
//     {
//       bookingNo: 'M01',
//       name: 'Raja Ganapathi',
//       roomNo: '27',
//       roomType: 'Single Bed',
//       checkIn: 'Sep 18; 8.00am',
//       checkOut: '-',
//       totalAmount: 'Rs.1500/-'
//     },
//     {
//       bookingNo: 'M01',
//       name: 'Swetha Sivakumar',
//       roomNo: '12',
//       roomType: 'Double Bed',
//       checkIn: 'Sep 27; 10.00am',
//       checkOut: '-',
//       totalAmount: 'Rs.3500/-'
//     }
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       {/* Header */}
//       <div 
//         className="flex items-center gap-2 text-gray-600 text-xl mb-4 cursor-pointer"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {isExpanded ? <FaChevronDown className="w-5 h-5" /> : <FaChevronUp className="w-5 h-5" />}
//         Guest List
//       </div>

//       {/* Table */}
//       {isExpanded && (
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-2">Bk. No</th>
//                 <th className="text-left py-2">Name</th>
//                 <th className="text-left py-2">Room No</th>
//                 <th className="text-left py-2">Room Type</th>
//                 <th className="text-left py-2">Check In</th>
//                 <th className="text-left py-2">Check Out</th>
//                 <th className="text-right py-2">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {guestData.map((guest, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-2 text-gray-600">{guest.bookingNo}</td>
//                   <td className="py-2">{guest.name}</td>
//                   <td className="py-2">{guest.roomNo}</td>
//                   <td className="py-2 text-orange-500">{guest.roomType}</td>
//                   <td className="py-2">{guest.checkIn}</td>
//                   <td className="py-2">{guest.checkOut}</td>
//                   <td className="py-2 text-right">{guest.totalAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Newform;




// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { Bell, Search, ChevronDown } from 'lucide-react';
// import { Table, Modal, Form, Input, Select, InputNumber, DatePicker as AntDatePicker } from 'antd';
// import axios from 'axios';
// import logo from "../assets/logo.png";
// import img from '../assets/girl.webp';
// import { toast } from 'react-toastify';

// const { Option } = Select;

// const Home = () => {
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [formData, setFormData] = useState({
//         bookingNo: '',
//         name: '',
//         roomNo: '',
//         roomType: '',
//         ac: '',
//         reservationTill: '',
//         phone: '',
//         address: '',
//         idNumber: '',
//         noOfGuests: '',
//         checkInTime: '',
//         checkOutTime: '',
//         roomNights: '',
//         rate: '',
//         totalRoomRent: '',
//         gstRequired: '',
//         gstAmount: '',
//         totalAmountPayable: '',
//         advance: '',
//         outstanding: '',
//         shiftingCharges: '',
//         balance: '',
//         clientPaid: '',
//         advanceReturn: '',
//         modeOfPayment: '',
//         status: '',
//     });
//     const [data, setData] = useState([]);
//     const [errors, setErrors] = useState({});
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [editingItem, setEditingItem] = useState(null);
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         axios.get('https://maahotelbackend1.onrender.com/api/guests')
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     const handleNavigation = (button) => {
//         navigate(`/${button.replace(/\s+/g, '').toLowerCase()}`);
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const validateForm = () => {
//         // Validation logic
//         // ...
//         return {};
//     };

//     const handleSubmit = async () => {
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         try {
//             if (editingItem) {
//                 await axios.put(`https://maahotelbackend1.onrender.com/api/guests/${editingItem._id}`, formData);
//                 setData(data.map(item => item._id === editingItem._id ? { ...item, ...formData } : item));
//             } else {
//                 const response = await axios.post('https://maahotelbackend1.onrender.com/api/guests', formData);
//                 setData([...data, response.data]);
//             }
//             setIsFormVisible(false);
//             toast.success('Entry saved successfully!');
//             setEditingItem(null);
//             setFormData({
//                 bookingNo: '',
//                 name: '',
//                 roomNo: '',
//                 roomType: '',
//                 ac: '',
//                 reservationTill: '',
//                 phone: '',
//                 address: '',
//                 idNumber: '',
//                 noOfGuests: '',
//                 checkInTime: '',
//                 checkOutTime: '',
//                 roomNights: '',
//                 rate: '',
//                 totalRoomRent: '',
//                 gstRequired: '',
//                 gstAmount: '',
//                 totalAmountPayable: '',
//                 advance: '',
//                 outstanding: '',
//                 shiftingCharges: '',
//                 balance: '',
//                 clientPaid: '',
//                 advanceReturn: '',
//                 modeOfPayment: '',
//                 status: '',
//             });
//         } catch (error) {
//             console.error('Error saving the entry:', error);
//             toast.error('There was an error saving the entry. Please try again.');
//         }
//     };

//     const handleDelete = (id) => {
//         axios.delete(`https://maahotelbackend1.onrender.com/api/guests/${id}`)
//             .then(() => {
//                 setData(data.filter(item => item._id !== id));
//                 toast.info('Entry deleted successfully.');
//             })
//             .catch(error => {
//                 console.error("Error deleting entry:", error);
//                 toast.error('There was an error deleting the entry. Please try again.');
//             });
//     };

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);
//         return () => clearInterval(timer);
//     }, []);

//     const toggleForm = () => {
//         setIsFormVisible(!isFormVisible);
//     };

//     const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const isActiveLink = (path) => location.pathname === path;

//     const columns = [
//         {
//             title: 'Booking No',
//             dataIndex: 'bookingNo',
//             key: 'bookingNo',
//         },
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Room No',
//             dataIndex: 'roomNo',
//             key: 'roomNo',
//         },
//         {
//             title: 'Room Type',
//             dataIndex: 'roomType',
//             key: 'roomType',
//         },
//         {
//             title: 'A/C',
//             dataIndex: 'ac',
//             key: 'ac',
//         },
//         {
//             title: 'Check-in',
//             dataIndex: 'checkInTime',
//             key: 'checkInTime',
//         },
//         {
//             title: 'Check-out',
//             dataIndex: 'checkOutTime',
//             key: 'checkOutTime',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_, record) => (
//                 <div>
//                     <button onClick={() => handleEdit(record)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
//                         Edit
//                     </button>
//                     <button onClick={() => handleDelete(record._id)} className="bg-red-500 text-white px-2 py-1 rounded">
//                         Delete
//                     </button>
//                 </div>
//             ),
//         },
//     ];

//     const handleEdit = (record) => {
//         setFormData(record);
//         setEditingItem(record);
//         setIsFormVisible(true);
//     };

//     return (
//         <div className="flex bg-gray-100">
//             {/* Sidebar */}
//             <section className="flex flex-col">
//                 <div className="flex items-center justify-center mb-8">
//                     <img src={logo} alt="Logo" className="h-24" />
//                 </div>

//                 <aside className="w-[330px] bg-white p-6 border-r rounded-3xl mx-6 h-[700px]">

//                     <nav className="space-y-4">
//                         <Link
//                             to="/home"
//                             className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 
//                 ${isActiveLink('/home')
//                                     ? 'text-orange-500 bg-gray-100'
//                                     : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
//                         >
//                             <FaHome className="w-5 h-5" />
//                             <span>Home</span>
//                         </Link>

//                         <Link
//                             to="/booking"
//                             className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 
//           ${isActiveLink('/booking')
//                                     ? 'text-orange-500 bg-gray-100'
//                                     : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
//                         >
//                             <FaBook className="w-5 h-5" />
//                             <span>Booking</span>
//                         </Link>

//                         <Link
//                             to="/reservation"
//                             className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 
//           ${isActiveLink('/reservation')
//                                     ? 'text-orange-500 bg-gray-100'
//                                     : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
//                         >
//                             <FaRegCalendarAlt className="w-5 h-5" />
//                             <span>Reservation</span>
//                         </Link>

//                         <Link
//                             to="/rooms"
//                             className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 
//           ${isActiveLink('/rooms')
//                                     ? 'text-orange-500 bg-gray-100'
//                                     : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
//                         >
//                             <FaBed className="w-5 h-5" />
//                             <span>Rooms</span>
//                         </Link>

//                         <Link
//                             to="/guesthistory"
//                             className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 
//           ${isActiveLink('/guesthistory')
//                                     ? 'text-orange-500 bg-gray-100'
//                                     : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
//                         >
//                             <FaHistory className="w-5 h-5" />
//                             <span>Guest History</span>
//                         </Link>
//                     </nav>

//                     <div className="bg-purple-50 rounded-2xl p-4 text-center max-h-96 h-[330px] mt-12">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-lg font-medium text-gray-800">{format(startDate, 'EEE, MMM d')}</h3>
//                             <FaPen className="text-gray-500" />
//                         </div>
//                         <div className="outline-none">
//                             <DatePicker
//                                 selected={startDate}
//                                 onChange={(date) => setStartDate(date)}
//                                 inline
//                                 className="outline-none"
//                             />
//                         </div>
//                     </div>
//                 </aside>

//                 <div className="flex justify-between items-center mt-4 bg-white w-[330px] border-r rounded-3xl mx-6 h-[60px]">
//                     <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
//                         <FaCog className="text-lg" />
//                     </button>
//                     <button className="w-40 bg-red-500 text-white p-2 rounded-full mr-2">
//                         Sign out
//                     </button>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <main className="flex-1 p-6">
//                 <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
//                     <div className="max-w-7xl mx-auto flex items-center justify-between">
//                         <div className="relative flex-1 max-w-md">
//                             <input
//                                 type="text"
//                                 placeholder="Search Here by Name"
//                                 className="w-full pl-4 pr-10 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
//                             />
//                             <button className="absolute right-2 top-1/2 -translate-y-1/2">
//                                 <Search className="h-5 w-5 text-gray-400" />
//                             </button>
//                         </div>
//                         <div className="flex items-center">
//                             <div className="relative right-[40px]">
//                                 <Bell className="h-6 w-6 text-gray-600" />
//                                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                     15
//                                 </span>
//                             </div>
//                             <div>
//                                 <button onClick={toggleForm} className="bg-green-500 text-white px-4 py-1 rounded-3xl">
//                                     {isFormVisible ? 'View Bookings' : 'New Booking'}
//                                 </button>
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

//                 {/* Overview Section and Table */}
//                 {!isFormVisible ? (
//                     <>
//                         {/* Overview Section */}
//                         <section className="grid grid-cols-4 gap-4 bg-white p-3 shadow rounded-3xl mt-6 text-white">
//                             <h2 className="col-span-4 text-2xl ml-4 text-gray-500">Overview</h2>
//                             <div className="bg-green-500 p-4 rounded-lg text-center">
//                                 <h4 className="text-[12px] font-semibold text-start">Today's Check In</h4>
//                                 <p className="text-5xl text-end">{guestData.length}</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-red-500 p-4 rounded-lg text-center">
//                                 <h4 className="text-[12px] font-semibold text-start">Today's Check Out</h4>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseInt(guest.noOfGuests), 0)}</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-blue-500 p-4 rounded-lg text-center">
//                                 <h3 className="text-[12px] font-semibold text-start">Rooms Available</h3>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.totalAmountPayable), 0).toFixed(2)} ₹</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                             <div className="bg-orange-500 p-4 rounded-lg text-center ">
//                                 <h3 className="text-[12px] font-semibold text-start">Rooms Reserved</h3>
//                                 <p className="text-5xl text-end">{guestData.reduce((acc, guest) => acc + parseFloat(guest.outstanding), 0).toFixed(2)} ₹</p>
//                                 <h3 className="text-[12px] font-semibold text-start">View Booking dates</h3>
//                             </div>
//                         </section>

//                         {/* Ant Design Table */}
//                         <Table
//                             columns={columns}
//                             dataSource={guestData}

//                             pagination={{ pageSize: 5 }}
//                             scroll={{ x: 'max-content' }} // Enables horizontal scrolling
//                             className="mt-8 w-[1100px]"
//                             rowKey="key"
//                         />
//                     </>
//                 ) : (
// <form onSubmit={handleSubmit} className="bg-purple-50 p-6 rounded-3xl shadow-md mt-6">
//     <h2 className="col-span-4 text-2xl mb-4 text-gray-500">New Booking</h2>
//     <div className="grid grid-cols-3 gap-6 ">
//         <div className="grid grid-rows-5 gap-2">
//             <div className="flex flex-col">
//                 <label className="mb-2">Bk.No</label>
//                 <input
//                     type="text"
//                     name="bookingNo"
//                     value={formData.bookingNo}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Room No</label>
//                 <input
//                     type="text"
//                     name="roomNo"
//                     value={formData.roomNo}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Room Type</label>
//                 <select
//                     name="roomType"
//                     value={formData.roomType}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 >
//                     <option value="">Select Room Type</option>
//                     <option value="single-occupancy">Single Occupancy</option>
//                     <option value="double-occupancy-kitchen">Double Occupancy with Kitchen</option>
//                     <option value="double-occupancy-no-kitchen">Double Occupancy without Kitchen</option>
//                     <option value="triple-occupancy-kitchen">Triple Occupancy with Kitchen</option>
//                     <option value="triple-occupancy-no-kitchen">Triple Occupancy without Kitchen</option>
//                 </select>
//             </div>

//             <div className="grid grid-cols-2 gap-2 mt-2">
//                 <div className="flex flex-col">
//                     <label className="mb-2">A/C or Non A/C</label>
//                     <select
//                         name="ac"
//                         value={formData.ac}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     >
//                         <option value="">Select</option>
//                         <option value="ac">A/C</option>
//                         <option value="non-ac">Non A/C</option>
//                     </select>
//                 </div>

//                 <div className="flex flex-col">
//                     <label className="mb-2">No of Guests</label>
//                     <input
//                         type="text"
//                         name="noOfGuests"
//                         value={formData.noOfGuests}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     />
//                 </div>
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Reservation Till</label>
//                 <input
//                     type="text"
//                     name="reservationTill"
//                     value={formData.reservationTill}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Phone</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="flex flex-col mt-2">
//                 <label className="mb-2">Guest Address</label>
//                 <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>
//         </div>
//         {/* ---------------------------------------------- */}

//         <div className="grid grid-row-6 ">
//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">ID Number</label>
//                 <input
//                     type="text"
//                     name="idNumber"
//                     value={formData.idNumber}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Check In Time</label>
//                 <input
//                     type="text"
//                     name="checkInTime"
//                     value={formData.checkInTime}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col mb-2">
//                 <label className="mb-2">Check Out Time</label>
//                 <input
//                     type="text"
//                     name="checkOutTime"
//                     value={formData.checkOutTime}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Room Nights</label>
//                 <input
//                     type="number"
//                     name="roomNights"
//                     value={formData.roomNights}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Rate</label>
//                 <input
//                     type="number"
//                     name="rate"
//                     value={formData.rate}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Total Room Rent</label>
//                 <input
//                     type="number"
//                     name="totalRoomRent"
//                     value={formData.totalRoomRent}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">GST Required</label>
//                 <input
//                     type="text"
//                     name="gstRequired"
//                     value={formData.gstRequired}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">GST Amount</label>
//                 <input
//                     type="number"
//                     name="gstAmount"
//                     value={formData.gstAmount}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>
//         </div>

//         {/* -------------------------------------------------------------- */}

//         <div className="grid grid-row-6 gap-1">

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Total Amount Payable</label>
//                 <input
//                     type="number"
//                     name="totalAmountPayable"
//                     value={formData.totalAmountPayable}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="flex flex-col">
//                     <label className="mb-2">Advance</label>
//                     <input
//                         type="number"
//                         name="advance"
//                         value={formData.advance}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                     <label className="mb-2">Outstanding</label>
//                     <input
//                         type="number"
//                         name="outstanding"
//                         value={formData.outstanding}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     />
//                 </div>
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Shifting Charges</label>
//                 <input
//                     type="number"
//                     name="shiftingCharges"
//                     value={formData.shiftingCharges}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="flex flex-col">
//                     <label className="mb-2">Balance</label>
//                     <input
//                         type="number"
//                         name="balance"
//                         value={formData.balance}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                     <label className="mb-2">Client Paid</label>
//                     <input
//                         type="number"
//                         name="clientPaid"
//                         value={formData.clientPaid}
//                         onChange={handleChange}
//                         className="border p-2 rounded outline-none"
//                     />
//                 </div>
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Advance Return</label>
//                 <input
//                     type="text"
//                     name="advanceReturn"
//                     value={formData.advanceReturn}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Mode of Payment</label>
//                 <input
//                     type="text"
//                     name="modeOfPayment"
//                     value={formData.modeOfPayment}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>

//             <div className="col-span-1 flex flex-col">
//                 <label className="mb-2">Status</label>
//                 <input
//                     type="text"
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="border p-2 rounded outline-none"
//                 />
//             </div>
//         </div>

//         <div className='text-center mt-4'>
//             <button type="submit" className="bg-purple-500  text-white py-2 px-24 rounded-xl hover:bg-purple-400 ">Add Guest</button>
//         </div>
//     </div>

// </form>
//                 )}
//             </main>
//         </div>
//     );
// };

// export default Home;






// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, FaUserCircle  } from 'react-icons/fa';
// import { Bell, ChevronDown } from 'lucide-react';
// import logo from "../assets/logo.png";
// import img from '../assets/girl.webp';
// import { HiX } from "react-icons/hi";
// import axios from 'axios';
// import { BsCaretDownFill } from "react-icons/bs";
// import { ToastContainer, toast } from 'react-toastify';
// import { FaWhatsapp } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// const NewBooking = () => {
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [showProductsDropdown, setShowProductsDropdown] = useState(false);

//     const initialFormState = {
//         sourceOfLooking: "",
//         bookingPersonName: "",
//         bookingNo: "",
//         mobileNumber: "",
//         emailAddress: "",
//         guestDetails: "",
//         acNonac: "",
//         roomType: "",
//         addressDetails: "",
//         checkInDate: "",
//         time: "",
//         amPm: "",
//         extra: "",
//         gst: "",
//         bookingPayment: "",
//         paymentType: [], // Updated to reflect it's an array
//       };

//     const [formData, setFormData] = useState(initialFormState);
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showPopup, setShowPopup] = useState(false);
//     const [roomRent, setRoomRent] = useState(0);
//     const [gstOption, setGstOption] = useState('');

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

//     // Validation function
//     const validateForm = () => {
//         const newErrors = {};
    
//         if (!formData.bookingPersonName.trim()) {
//           newErrors.bookingPersonName = "Booking person name is required";
//         }
    
//         if (!formData.mobileNumber.trim()) {
//           newErrors.mobileNumber = "Mobile number is required";
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//           newErrors.mobileNumber = "Invalid mobile number format";
//         }
    
//         if (!formData.emailAddress.trim()) {
//           newErrors.emailAddress = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
//           newErrors.emailAddress = "Invalid email format";
//         }
    
//         if (!formData.guestDetails) {
//           newErrors.guestDetails = "Guest details are required";
//         }
    
//         if (!formData.acNonac) {
//           newErrors.acNonac = "AC/Non-AC selection is required";
//         }
    
//         if (!formData.roomType) {
//           newErrors.roomType = "Room type is required";
//         }
    
//         if (!formData.addressDetails.trim()) {
//           newErrors.addressDetails = "Address is required";
//         } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9\s,.-]+$/.test(formData.addressDetails)) {
//           newErrors.addressDetails = "Address must contain both letters and numbers";
//         }
    
//         if (formData.extra && formData.extra.length > 100) {
//           newErrors.extra = "Extra information is too long (max 100 characters)";
//         }
    
//         if (formData.gst && !/^[A-Za-z0-9]+$/.test(formData.gst)) {
//           newErrors.gst = "GST should be alphanumeric";
//         }
    
//         if (!formData.bookingPayment) {
//           newErrors.bookingPayment = "Booking payment is required";
//         } else if (isNaN(formData.bookingPayment) || formData.bookingPayment <= 0) {
//           newErrors.bookingPayment = "Booking payment must be a positive number";
//         }
    
//         if (formData.paymentType.length === 0) {
//           newErrors.paymentType = "At least one payment type is required";
//         }
    
//         return newErrors;
//       };



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

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
    
//         if (type === "checkbox" && name === "paymentType") {
//           setFormData((prevData) => ({
//             ...prevData,
//             paymentType: checked
//               ? [...prevData.paymentType, value]
//               : prevData.paymentType.filter((mode) => mode !== value),
//           }));
//         } else {
//           setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === "checkbox" ? checked : value,
//           }));
//         }
    
//         if (errors[name]) {
//           setErrors((prev) => ({ ...prev, [name]: "" }));
//         }
//       };



//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//           setErrors(validationErrors);
//           setIsSubmitting(false);
//             return;
//         }

//         const bookingData = {

//             sourceOfLooking: formData.sourceOfLooking,
//             bookingPersonName: formData.bookingPersonName,
//             bookingNo: formData.bookingNo,
//             mobileNumber: formData.mobileNumber,
//             emailAddress: formData.emailAddress,
//             guestDetails: formData.guestDetails,
//             acNonac: formData.acNonac,
//             roomType: formData.roomType,
//             addressDetails: formData.addressDetails,
//             checkInDate: formData.checkInDate,
//             time: formData.time,
//             amPm: formData.amPm,
//             extra: formData.extra,
//             gst: formData.gst,
//             bookingPayment: formData.bookingPayment,
//             paymentType: formData.paymentType,
//         };

//         try {
//             const response = await axios.post('https://maahotelbackend1.onrender.com/api/bookings', bookingData);
//             console.log('Booking created successfully', response.data);
//             toast.success('Booking created successfully!');

//             setFormData({
//                 sourceOfLooking: '',
//                 bookingPersonName: '',
//                 bookingNo: '',
//                 mobileNumber: '',
//                 emailAddress: '',
//                 guestDetails: '',
//                 acNonac: '',
//                 roomType: '',
//                 addressDetails: '',
//                 checkInDate: '',
//                 time: '',
//                 amPm: '',
//                 extra: '',
//                 gst: '',
//                 bookingPayment: '',
//                 paymentType: []
//             });

//             setShowPopup(true); // Show the popup on success
//         } catch (error) {
//             console.error('Error creating booking:', error.response ? error.response.data : error.message);

//             if (error.response?.data) {
//                 console.log('Detailed error from backend:', error.response.data);
//                 toast.error(`Error creating booking: ${error.response.data}`);
//             } else {
//                 console.log('Error message:', error.message);
//                 toast.error('Error creating booking');
//             }
//         } finally {
//             setIsSubmitting(false); // Ensure the submitting state is reset
//         }
//     };


//     const handlePopupClose = () => {
//         setShowPopup(false); // Close the popup
//     };


//     // Error message component
//     const ErrorMessage = ({ error }) => {
//         return error ? <span className="text-red-500 text-sm mt-1">{error}</span> : null;
//     };


//     const handleProductsClick = () => setShowProductsDropdown(!showProductsDropdown);
//     const handleDropdownItemClick = () => setShowProductsDropdown(false);


//     useEffect(() => {
//         const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//         return () => clearInterval(timer);
//     }, []);

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
//                             <FaUserCircle size={50} className='h-10 w-10 text-gray-400' />
//                                 <div className="flex flex-col text-sm">
//                                     <span className="text-gray-800">{userData.username}</span>
//                                     <span className="text-gray-800">{userData.email}</span>
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
//                                     name="username"
//                                     placeholder="Booking Staff Name"
//                                     value={userData.username}
//                                     onChange={handleChange}
//                                     className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
//                                 />

//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Source of Booking</label>
//                                 <select
//                                     type="text"
//                                     name="sourceOfLooking"
//                                     value={formData.sourceOfLooking}
//                                     onChange={handleChange}
//                                     placeholder="ourceOfLooking"
//                                     className={`w-full border ${errors.sourceOfLooking ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3 appearance-none `}
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
//                                 <ErrorMessage error={errors.sourceOfLooking} />
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
//                                     className={`w-full border ${errors.bookingPersonName ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
//                                 />
//                                 <ErrorMessage error={errors.bookingPersonName} />
//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     placeholder="Mobile Number"
//                                     name="mobileNumber"
//                                     value={formData.mobileNumber}
//                                     onChange={handleChange}
//                                     className={`w-full border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-10`}
//                                 />
//                                 <ErrorMessage error={errors.mobileNumber} />
//                             </div>
//                             <div>

//                                 <input
//                                     type="text"
//                                     name="emailAddress"
//                                     value={formData.emailAddress}
//                                     onChange={handleChange}
//                                     placeholder="Email Addres"
//                                     className={`w-full border ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-10`}
//                                 />
//                                 <ErrorMessage error={errors.emailAddress} />
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
//                                     className={`w-20 border ${errors.guestDetails ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400`}
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
//                                 <ErrorMessage error={errors.guestDetails} />
//                             </div>

//                             <div className="relative w-full">
//                                 <label className="block text-lg text-color3 font-bold">Room Type</label>
//                                 <select
//                                     name="acNonac"
//                                     value={formData.acNonac}
//                                     onChange={handleChange}
//                                     placeholder="Select type"
//                                     className={`w-full border ${errors.acNonac ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-5 appearance-none text-gray-400`}
//                                 >
//                                     <option value="" >Select type</option>
//                                     <option value="Non-AC">Non-AC</option>
//                                     <option value="AC">AC</option>
//                                 </select>
//                                 <div className="absolute top-0 mt-[60px] right-3 text-gray-600 pointer-events-none">
//                                     <BsCaretDownFill size={12} />
//                                 </div>
//                                 <ErrorMessage error={errors.acNonac} />

//                             </div>
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <select
//                                     name="roomType"
//                                     value={formData.roomType}
//                                     onChange={handleChange}
//                                     placeholder="Select room type"
//                                     className={`w-full border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-12 appearance-none text-gray-400 `}
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
//                                 <ErrorMessage error={errors.roomType} />
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
//                                     className={`w-[930px] border ${errors.addressDetails ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
//                                 />
//                             </div>
//                             <ErrorMessage error={errors.addressDetails} />

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
//                                     className={`w-full border ${errors.checkInDate ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg mt-5 text-sm py-2`}
//                                 />
//                                 <ErrorMessage error={errors.checkInDate} />
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
//                                     className={`w-full border ${errors.time ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg mt-11 py-2 text-sm`}
//                                 />
//                                 <ErrorMessage error={errors.time} />
//                             </div>

//                             {/* AM/PM Select */}
//                             <div className="relative w-full">
//                                 <label className="block text-sm text-gray-600"></label>
//                                 <input
//                                     name="amPm"
//                                     value={formData.amPm}
//                                     onChange={handleChange}
//                                     className={`w-full border ${errors.amPm ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-11 appearance-none`}
//                                 />
//                                 <ErrorMessage error={errors.amPm} />
//                             </div>
//                         </div>



//                         <hr className="border-dashed border-gray-300 my-4  mt-6" />
//                         <div className="flex flex-col items-center  max-w-5xl  space-y-6 md:space-y-0 md:space-x-4 md:flex-row">
//                             <div className="flex items-center justify-between p-4 border-2 rounded-lg   w-full ">

//                                 <div className=" items-center">
//                                     <span className="font-bold text-color3">Room rent</span>
//                                     <span className="flex flex-row text-lg font-bold mt-5">Rs.{roomRent}/-</span>

//                                 </div>
//                                 <div>
//                                     <label className="  items-center">
//                                         <input type="checkbox"
//                                             name="extra"
//                                             value={formData.extra}
//                                             onChange={handleChange}
//                                             className="mr-1 mt-12" />
//                                         <span>Extra</span>
//                                     </label>
//                                 </div>


//                                 <div className="flex flex-col items-center">
//                                     <span className="text-color3 font-bold">GST bill</span>
//                                     <label className="mt-4 flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             name="gst"
//                                             value="Add GST"
//                                             onChange={handleChange}
//                                         />

//                                         <span>Add GST</span>
//                                     </label>
//                                 </div>

//                                 <div className="flex flex-col items-center">
//                                     <div className="my-4 lg:my-0 ">
//                                         <form className="flex flex-col md:flex-row items-center justify-center">
//                                             <label className='text-color3 font-bold '>Booking Payment</label>
//                                             <input
//                                                 type="text"
//                                                 name='bookingPayment'
//                                                 placeholder="Type Payment"
//                                                 value={formData.bookingPayment}
//                                                 onChange={handleChange}
//                                                 className="w-full md:w-[300px] lg:w-[200px] py-2 border-b ml-10"
//                                             />


//                                         </form>
//                                         <div className="text-center mt-4 text-black text-xs ">
//                                             <div className="flex mt-2 space-x-2">
//                                                 <label className="flex items-center text-color3 font-bold text-[15px] mr-20">Payment Mode </label>
//                                                 <input
//                                                     type="checkbox"
//                                                     name="paymentType"
//                                                     value="UPI"
//                                                     className="mr-1"
//                                                     onChange={handleChange}
//                                                     checked={formData.paymentType.includes('UPI')}
//                                                 />


//                                                 <span>UPI</span>


//                                                 <input
//                                                     type="checkbox"
//                                                     name="paymentType"
//                                                     value="Card"
//                                                     onChange={handleChange}
//                                                     checked={formData.paymentType.includes('Card')}
//                                                     className="mr-1"
//                                                 />
//                                                 <span>Card</span>


//                                                 <input
//                                                     type="checkbox"
//                                                     name="paymentType"
//                                                     onChange={handleChange}
//                                                     value="Cash"
//                                                     checked={formData.paymentType.includes('Cash')}
//                                                     className="mr-1"
//                                                 />
//                                                 <span>Cash</span>

//                                             </div>
//                                             {errors.paymentType && <p className="text-red-500">{errors.paymentType}</p>}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <div className="flex justify-end ">
//                             <button className="bg-color3 text-white font-semibold py-2 px-8 rounded-full">
//                                 SUBMIT
//                             </button>
//                         </div> */}

//                             <div className="flex justify-end mt-6">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`
//                                     bg-color3 text-white font-semibold py-2 px-8 rounded-full
//                                     hover:bg-color3 transition duration-300
//                                     ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
//                                 `}
//                                 >
//                                     SUBMIT
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//                 {showPopup && (
//                     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//                         <div className="bg-white p-6 rounded-lg shadow-md w-80">
//                             <h2 className="text-xl font-semibold mb-4">Form Submitted Successfully</h2>
//                             <div className="flex justify-center gap-4">
//                                 <a href="#" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp size={32} color="green" />
//                                 </a>
//                                 <a href="#" target="_blank" rel="noopener noreferrer">
//                                     <MdEmail size={32} color="red" />
//                                 </a>
//                             </div>
//                             <div className="mt-4 text-center">
//                                 <button
//                                     onClick={handlePopupClose}
//                                     className="bg-gray-300 text-black px-4 py-2 rounded-full"
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </main>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />
//         </div>
//     );
// };

// export default NewBooking;







import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaPen, FaCog, FaUserCircle  } from 'react-icons/fa';
import { Bell, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.png";
import img from '../assets/girl.webp';
import { HiX } from "react-icons/hi";
import axios from 'axios';
import { BsCaretDownFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const NewBooking = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    const initialFormState = {
        sourceOfLooking: "",
        bookingPersonName: "",
        bookingNo: "",
        mobileNumber: "",
        emailAddress: "",
        guestDetails: "",
        acNonac: "",
        roomType: "",
        addressDetails: "",
        checkInDate: "",
        time: "",
        amPm: "",
        extra: "",
        gst: "",
        bookingPayment: "",
        paymentType: [], // Updated to reflect it's an array
      };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [roomRent, setRoomRent] = useState(0);
    const [gstOption, setGstOption] = useState('');

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

    // Validation function
    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.bookingPersonName.trim()) {
          newErrors.bookingPersonName = "Booking person name is required";
        }
    
        if (!formData.mobileNumber.trim()) {
          newErrors.mobileNumber = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
          newErrors.mobileNumber = "Invalid mobile number format";
        }
    
        if (!formData.emailAddress.trim()) {
          newErrors.emailAddress = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
          newErrors.emailAddress = "Invalid email format";
        }
    
        if (!formData.guestDetails) {
          newErrors.guestDetails = "Guest details are required";
        }
    
        if (!formData.acNonac) {
          newErrors.acNonac = "AC/Non-AC selection is required";
        }
    
        if (!formData.roomType) {
          newErrors.roomType = "Room type is required";
        }
    
        if (!formData.addressDetails.trim()) {
          newErrors.addressDetails = "Address is required";
        } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9\s,.-]+$/.test(formData.addressDetails)) {
          newErrors.addressDetails = "Address must contain both letters and numbers";
        }
    
        if (formData.extra && formData.extra.length > 100) {
          newErrors.extra = "Extra information is too long (max 100 characters)";
        }
    
        if (formData.gst && !/^[A-Za-z0-9]+$/.test(formData.gst)) {
          newErrors.gst = "GST should be alphanumeric";
        }
    
        if (!formData.bookingPayment) {
          newErrors.bookingPayment = "Booking payment is required";
        } else if (isNaN(formData.bookingPayment) || formData.bookingPayment <= 0) {
          newErrors.bookingPayment = "Booking payment must be a positive number";
        }
    
        if (formData.paymentType.length === 0) {
          newErrors.paymentType = "At least one payment type is required";
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox" && name === "paymentType") {
          setFormData((prevData) => ({
            ...prevData,
            paymentType: checked
              ? [...prevData.paymentType, value]
              : prevData.paymentType.filter((mode) => mode !== value),
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
          }));
        }
    
        if (errors[name]) {
          setErrors((prev) => ({ ...prev, [name]: "" }));
        }
      };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setIsSubmitting(false);
            return;
        }

        const bookingData = {

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
            extra: formData.extra,
            gst: formData.gst,
            bookingPayment: formData.bookingPayment,
            paymentType: formData.paymentType,
        };

        try {
            const response = await axios.post('https://maahotelbackend1.onrender.com/api/bookings', bookingData);
            console.log('Booking created successfully', response.data);
            toast.success('Booking created successfully!');

            setFormData({
                sourceOfLooking: '',
                bookingPersonName: '',
                bookingNo: '',
                mobileNumber: '',
                emailAddress: '',
                guestDetails: '',
                acNonac: '',
                roomType: '',
                addressDetails: '',
                checkInDate: '',
                time: '',
                amPm: '',
                extra: '',
                gst: '',
                bookingPayment: '',
                paymentType: []
            });

            setShowPopup(true); // Show the popup on success
        } catch (error) {
            console.error('Error creating booking:', error.response ? error.response.data : error.message);

            if (error.response?.data) {
                console.log('Detailed error from backend:', error.response.data);
                toast.error(`Error creating booking: ${error.response.data}`);
            } else {
                console.log('Error message:', error.message);
                toast.error('Error creating booking');
            }
        } finally {
            setIsSubmitting(false); // Ensure the submitting state is reset
        }
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

                <form className="bg-white p-6 rounded-3xl shadow-md mt-6"
                    onSubmit={handleSubmit}
                >

                    <div className="">

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-lg text-color3 font-bold">Booking Staff</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Booking Staff Name"
                                    value={userData.username}
                                    onChange={handleChange}
                                    className="w-full border py-2 rounded-lg p-2 text-sm mt-3"
                                />

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
                                    className={`w-[930px] border ${errors.addressDetails ? 'border-red-500' : 'border-gray-300'} py-2 rounded-lg p-2 text-sm mt-3`}
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
                                <div>
                                    <label className="  items-center">
                                        <input type="checkbox"
                                            name="extra"
                                            value={formData.extra}
                                            onChange={handleChange}
                                            className="mr-1 mt-12" />
                                        <span>Extra</span>
                                    </label>
                                </div>


                                <div className="flex flex-col items-center">
                                    <span className="text-color3 font-bold">GST bill</span>
                                    <label className="mt-4 flex items-center">
                                        <input
                                            type="checkbox"
                                            name="gst"
                                            value="Add GST"
                                            onChange={handleChange}
                                        />

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


                                        </form>
                                        <div className="text-center mt-4 text-black text-xs ">
                                            <div className="flex mt-2 space-x-2">
                                                <label className="flex items-center text-color3 font-bold text-[15px] mr-20">Payment Mode </label>
                                                <input
                                                    type="checkbox"
                                                    name="paymentType"
                                                    value="UPI"
                                                    className="mr-1"
                                                    onChange={handleChange}
                                                    checked={formData.paymentType.includes('UPI')}
                                                />


                                                <span>UPI</span>


                                                <input
                                                    type="checkbox"
                                                    name="paymentType"
                                                    value="Card"
                                                    onChange={handleChange}
                                                    checked={formData.paymentType.includes('Card')}
                                                    className="mr-1"
                                                />
                                                <span>Card</span>


                                                <input
                                                    type="checkbox"
                                                    name="paymentType"
                                                    onChange={handleChange}
                                                    value="Cash"
                                                    checked={formData.paymentType.includes('Cash')}
                                                    className="mr-1"
                                                />
                                                <span>Cash</span>

                                            </div>
                                            {errors.paymentType && <p className="text-red-500">{errors.paymentType}</p>}
                                        </div>
                                    </div>
                                </div>
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
                                    SUBMIT
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
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={32} color="green" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <MdEmail size={32} color="red" />
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

export default NewBooking;












