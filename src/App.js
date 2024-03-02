import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Auth from './Components/Auth';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import Booking from './Pages/Booking';
import AppoinmentList from './Pages/AppoinmentList';
import Pdf from './Pages/Pdf';
import DrApplication from './Pages/DrApplication';
import PdfTemplate from './Components/PdfTemplate';
import Admin from './Pages/Admin';
import AdminNotification from './Components/AdminNotification';
import AdminDrAdd from './Components/AdminDrAdd';
import AdminUsersList from './Components/AdminUsersList';
import AdminReview from './Components/AdminReview';
import AdminAuth from './Components/AdminAuth';
import AdminDrAppoinmentList from './Components/AdminDrAppoinmentList';
import UserNotifications from './Components/UserNotifications';
import { useEffect, useState } from 'react';
import { getAppoinmentsListApi, getDoctersAcceptedApi } from './Services/allApis';
import EditProfile from './Components/EditProfile';
import AdminDocterBookinglist from './Components/AdminDocterBookinglist';
import HelpLine from './Components/HelpLine';


function App() {


  const [docterList, setDocterList] = useState("")
  const [search,setSearch]=useState("")


  useEffect(() => {
      handleDocterList()
  }, [localStorage.getItem("token"),search])

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

  // console.log(docterList);

  // const [appoinments, setAppoinments] = useState("")

  // useEffect(() => {
  //   handleAppoinmentsList()
  // }, [localStorage.getItem("token")])

  // const handleAppoinmentsList = async () => {
  //   const reqHeader = {
  //     "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
  //   }
  //   console.log(reqHeader)
  //   const res = await getAppoinmentsListApi(reqHeader)
  //   if (res.status === 200) {
  //     setAppoinments(res.data)
  //   }
  // }

  // console.log(appoinments);

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Landing login />} />
        <Route path='/adminpage' element={<Admin />} />
        <Route path='/register' element={<Landing />} />
        <Route path='/adminregister' element={<AdminAuth />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/usernotification' element={<UserNotifications />} /> */}
        <Route path='/booking' element={<Booking />} />
        {
          docterList?
          docterList.map(item=>(
            <Route path={`/${item.lastname}/booking`} key={item._id} element={<Booking drItem={item}/>} />
          ))
          :""
        }
        <Route path='/drapplication' element={<DrApplication />} />
        <Route path='/appoinmentlist' element={<AppoinmentList />} />
        <Route path='/docterpdf' element={<PdfTemplate docter />} />
        <Route path='/bookingpdf' element={<PdfTemplate />} />
        <Route path='/adminnotification' element={<AdminNotification />} />
        {/* <Route path='/drapplication' element={<DrApplication admin/>}/> */}
        <Route path='/admindradd' element={<AdminDrAdd />} />
        <Route path='/userslist' element={<AdminUsersList />} />
        <Route path='/adminreview' element={<AdminReview />} />
        {
          docterList ?
            docterList.map(item => (
              <Route path={`/${item.lastname}/appoinmentlist`} key={item._id} element={<AdminDrAppoinmentList drItem={item}  />} />
            ))
            : ""
        }
      <Route path='/editprofile' element={<EditProfile/>}/>
      {/* <Route path='/loading' element={<HelpLine/>}/> */}
      {/* <Route path='/dummy' element={<AdminDocterBookinglist/>}/> */}
      </Routes>
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
