import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
// import Booking from "./components/Booking";
import Home from './components/Home';
// import Newform from "./components/Newform";
// import InHouseGuest from "./components/InHouseGuest";
// import Reservation from "./components/Reservation";
// import NewBooking from "./components/NewBooking";
// import GuestHistory from "./components/GuestHistory";





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
        {/* <Route path="/booking" element={<Booking/>} />
        <Route path="/newform" element={<Newform/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/inhouseguest" element={<InHouseGuest/>} />
        <Route path="/newbooking" element={<NewBooking/>} />
        <Route path="/guesthistory" element={<GuestHistory />} /> */}
       </Routes>
      </div>
    </Router>
  );
}

export default App;