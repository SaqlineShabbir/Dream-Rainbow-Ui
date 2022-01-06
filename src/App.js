
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from './Components/Main/Home/Home';
import Services from './Components/Services/Services/Services';
import AddServices from './Components/Services/AddService/AddService'
import Booking from './Components/Services/Booking/Booking'
import Signup from './Components/LoginSignup/SignUp/Signup';
import Login from './Components/LoginSignup/LogIn/Login';
import DashBoard from './Components/DashBoard/Dashboard'
import AddService from './Components/Services/AddService/AddService'
import DashBoardHome from './Components/DashBoard/DashBoardHome/DashBoardHome'
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import AddReview from './Components/DashBoard/Review/AddReview/AddReview';

import AdminRoute from './SecureRouts/AdminRoute/AdminRoute';
import PrivateRoute from './SecureRouts/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Footer from './Components/Shared/Footer/Footer';

import MyBooking from './Components/DashBoard/MyOrders/MyBooking';
import ManageServices from './Components/DashBoard/ManageCars/ManageServices/ManageServices';
import ManageAllBooking from './Components/DashBoard/ManageAllOrders/ManageAllBooking/ManageAllBooking';
import AboutRoute from './Components/AboutRoute/AboutRoute';
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

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        
               {/* <Route exact path="/dashboard/" element={<DashBoardHome/>}/> */}
        
               <Route path={`/dashboard/myBooking`} element={<MyBooking/>}/>
          
               <Route  path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute> }/>
                 
               
               <Route  path={`/dashboard/manageAllBooking`} element={<ManageAllBooking/>}/>
                 
               <Route  path={`/dashboard/addservice`} element={<AdminRoute><AddService/></AdminRoute> }/>
               
               <Route  path={`/dashboard/addreview`} element={ <AddReview/>}/>
               <Route  path={`/dashboard/payment`} element={ <Payment/>}/>
                 
               
               <Route  path={`/dashboard/manageServices`} element={<AdminRoute><ManageServices/></AdminRoute>}/>
        
               </Route> 
        
 
          
        
      </Routes>

      <Routes>
          <Route path="/serviceDetails/:serviceId" element={<PrivateRoute><Booking/></PrivateRoute>} />
        </Routes>


    </div>
     
  </BrowserRouter>
     </AuthProvider>
  );
}

export default App;
