import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const FormData = ({ showModal, setShowModal, bookingData = {} }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            // Validate required fields for booking
            const requiredFields = ['bookingNo', 'name', 'roomNo', 'roomType', 'phone', 'address'];
            const missingFields = requiredFields.filter(field => !bookingData[field]);

            if (missingFields.length > 0) {
                toast.error(`Please fill out the required fields: ${missingFields.join(', ')}`);
                setIsLoading(false);
                return;
            }

            console.log("Sending data:", bookingData); // Log data to check what's being sent

            // Send data to backend
            const response = await axios.post('https://formdata1.onrender.com/api/form/booking', bookingData);

            if (response.status === 201) {
                toast.success('Booking added successfully');
                setShowModal(false);
            } else {
                toast.error('Unexpected response from the server');
            }

        } catch (error) {
            // Log detailed error info for further inspection
            if (error.response) {
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
                toast.error(`Server error: ${error.response.data.error || 'Failed to submit the form'}`);
            } else if (error.request) {
                console.error("No response from the server:", error.request);
                toast.error('No response from the server, please try again later.');
            } else {
                console.error("Error submitting the form:", error.message);
                toast.error(`Error: ${error.message}`);
            }

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative overflow-y-auto max-h-[90vh]">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </button>

                <div className="flex flex-col lg:flex-row rounded-lg w-full p-4 lg:p-6">
                    {/* Booking Information */}
                    <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0 ml-10">
                        <h2 className="text-red-500 text-xl font-bold mb-4">Booking Information</h2>
                        <div className="w-full max-w-sm space-y-4">
                            {['bookingNo', 'name', 'roomNo', 'roomType', 'ac'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-400">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={bookingData[field] || ''}
                                        onChange={(e) => bookingData[field] = e.target.value} // update data
                                        className="border-b p-2 w-[300px] outline-none text-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical line for larger screens */}
                    <div className="hidden lg:block border-l border-gray-300 mx-4"></div>

                    {/* Guest and Payment Information */}
                    <div className="flex flex-col w-full lg:w-1/2 ml-10">
                        <h2 className="text-red-500 text-xl font-bold mb-4">Guest and Payment Information</h2>
                        <div className="w-full max-w-sm space-y-4 mt-10">
                            {['noOfGuests', 'reservationTill', 'phone', 'address', 'idNumber', 'checkInTime', 'checkOutTime', 'roomNights', 'rate', 'totalRoomRent'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-400">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={bookingData[field] || ''}
                                        onChange={(e) => bookingData[field] = e.target.value} // update data
                                        className="border-b p-2 w-[300px] outline-none text-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 mb-6">
                    <button
                        className={`bg-red-500 text-white px-10 py-2 rounded-md hover:bg-red-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Booking...' : 'Create Booking'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormData;
