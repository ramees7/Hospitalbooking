import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import Booking from './Pages/Booking';
import AppoinmentList from './Pages/AppoinmentList';
import DrApplication from './Pages/DrApplication';
import PdfTemplate from './Components/PdfTemplate';
import Admin from './Pages/Admin';
import AdminNotification from './Components/AdminNotification';
import AdminDrAdd from './Components/AdminDrAdd';
import AdminUsersList from './Components/AdminUsersList';
import AdminReview from './Components/AdminReview';
import AdminAuth from './Components/AdminAuth';
import AdminDrAppoinmentList from './Components/AdminDrAppoinmentList';
import { useContext, useEffect, useState } from 'react';
import {  getDoctersAcceptedApi } from './Services/allApis';
import EditProfile from './Components/EditProfile';
import AdminDept from './Components/AdminDept';
import AdminDeptView from './Components/AdminDeptView';
import UserNotification from './Components/UserNotification';
import { docterAddContext } from './Context/ContextShares';


function App() {


  const [docterList, setDocterList] = useState("")
  const [search,setSearch]=useState("")
  const {docterAddRes, setDocterAddRes}=useContext(docterAddContext)

  useEffect(() => {
      handleDocterList()
  }, [localStorage.getItem("token"),search,docterAddRes])

  const handleDocterList = async () => {
      const reqHeader = {
          "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
      }
      console.log(reqHeader)
      const res = await getDoctersAcceptedApi(reqHeader,search)
      if (res.status === 200) {
          setDocterList(res.data)
      }
  }

  console.log(docterList);

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Landing login />} />
        <Route path='/adminpage' element={<Admin />} />
        <Route path='/register' element={<Landing />} />
        <Route path='/adminregister' element={<AdminAuth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        {
          docterList?
          docterList.map(item=>(
            <Route path={`/${item._id}/booking`} key={item._id} element={<Booking drItem={item}/>} />
          ))
          :""
        }
        <Route path='/drapplication' element={<DrApplication />} />
        <Route path='/appoinmentlist' element={<AppoinmentList />} />
        <Route path='/docterpdf' element={<PdfTemplate docter />} />
        <Route path='/bookingpdf' element={<PdfTemplate />} />
        <Route path='/adminnotification' element={<AdminNotification />} />
        <Route path='/admindradd' element={<AdminDrAdd />} />
        <Route path='/userslist' element={<AdminUsersList />} />
        <Route path='/adminreview' element={<AdminReview />} />
        {
          docterList ?
            docterList.map(item => (
              <Route path={`/${item._id}/appoinmentlist`} key={item._id} element={<AdminDrAppoinmentList drItem={item}  />} />
            ))
            : ""
        }
      <Route path='/editprofile' element={<EditProfile/>}/>
      <Route path='/adddepartment' element={<AdminDept/>}/>
      <Route path='/departmentview' element={<AdminDeptView/>}/>
      <Route path='/usernotification' element={<UserNotification/>}/>
      </Routes>
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
