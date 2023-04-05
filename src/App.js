import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import AddReview from './Components/DashBoard/Review/AddReview/AddReview';
import Login from './Components/LoginSignup/LogIn/Login';
import Signup from './Components/LoginSignup/SignUp/Signup';
import Home from './Components/Main/Home/Home';
import {
  default as AddService,
  default as AddServices,
} from './Components/Services/AddService/AddService';
import Booking from './Components/Services/Booking/Booking';
import Services from './Components/Services/Services/Services';

import AdminRoute from './SecureRouts/AdminRoute/AdminRoute';
import PrivateRoute from './SecureRouts/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider/AuthProvider';

import AboutRoute from './Components/AboutRoute/AboutRoute';
import ManageAllBooking from './Components/DashBoard/ManageAllBooking/ManageAllBooking/ManageAllBooking';
import ManageServices from './Components/DashBoard/ManageServices/ManageServices/ManageServices';
import MyBooking from './Components/DashBoard/MyBooking/MyBooking';
import Payment from './Components/DashBoard/Payment/Payment';

import Dashboard from './Components/DashBoard/Dashboard';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/aboutRoute" element={<AboutRoute />} />
          </Routes>
          <Routes>
            <Route path="/services" element={<Services />} />
          </Routes>
          <Routes>
            <Route path="/addServices" element={<AddServices />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              {/* <Route exact path="/dashboard/" element={<DashBoardHome/>}/> */}

              <Route path={`/dashboard/myBooking`} element={<MyBooking />} />

              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />

              <Route
                path={`/dashboard/manageAllBooking`}
                element={<ManageAllBooking />}
              />

              <Route
                path={`/dashboard/addservice`}
                element={
                  <AdminRoute>
                    <AddService />
                  </AdminRoute>
                }
              />

              <Route path={`/dashboard/addreview`} element={<AddReview />} />
              <Route path={`/dashboard/payment/:id`} element={<Payment />} />

              <Route
                path={`/dashboard/manageServices`}
                element={
                  <AdminRoute>
                    <ManageServices />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>

          <Routes>
            <Route
              path="/serviceDetails/:serviceId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
