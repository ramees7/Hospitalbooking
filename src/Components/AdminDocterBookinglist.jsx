// import { TextField } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import hospitalLogo from '../Assets/hospital_logo.png'
// import fbLogo from '../Assets/Facebook_icon.png'
// import googleIcon from '../Assets/google_icon.webp'
// import Xlogo from '../Assets/x_icon.jpg'
// import { IoIosArrowBack } from "react-icons/io";
// import { Link } from 'react-router-dom'
// import iphoneBattery from '../Assets/iphone_battery.png'

// function AdminDocterBookinglist() {

//     const timeNow= Date().slice(16,21)
//     console.log(timeNow)


//     return (
//         <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "700px" }}>
//             <div style={{ width: "310px", height: "80%", backgroundColor: "white", borderRadius: "50px", border: "10px solid black" }} className='d-flex justify-content-center p-3'>
//                 <div>
//                     <div style={{ width: "30%", height: "28px", backgroundColor: "black", borderRadius: "40px " }} className='mx-auto'>
//                     <span style={{position:"relative", right:"75px", fontWeight:"700", top:"3px"}}>{timeNow}</span>
//                     <span style={{position:"relative", left:"88px", bottom:"32px"}}> <img src={iphoneBattery} alt="" width={80}/> </span>
//                     </div>
//                     <div className='d-flex justify-content-center align-items-center '>
//                         <img src={hospitalLogo} alt="hospital-logo" width={50} height={50} />
//                         <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
//                             <h4 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px", color: "black" }}>HOPE WELL</h4>
//                             <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "1px", fontSize: "12px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>
//                         </div>
//                     </div>
//                     <Link><IoIosArrowBack style={{ position: "relative", bottom: "65px", fontSize: "25px", color: "#000" }} /></Link>
//                     <div className=''>
//                         {/* <h5 className='fw-bold mb-0'>Welcome Back!</h5>
//                         <p className='' style={{fontSize:"13px"}}>Sign in to Continue</p> */}
//                         <h5 className='fw-bold mb-0'>Almost There !</h5>
//                         <p className='' style={{ fontSize: "13px" }}>We are excited to see you here..!</p>
//                     </div>
//                     <div className=''>
//                         <input type="text" placeholder='' style={{ width: "100%" }} className='mb-2' />
//                         <input type="password" placeholder='' style={{ width: "100%" }} className='mb-2' />
//                         {/* <p className='text-end' style={{fontSize:"12px"}}>Forget Password ?</p> */}
//                         <input type="text" placeholder='' style={{ width: "100%" }} className='mb-2' />
//                         <input type="text" placeholder='' style={{ width: "100%" }} className='mb-2' />
//                         {/* <button className='w-100 py-2' style={{backgroundColor:"black", color:"#d3d3d3"}}>SIGN IN</button> */}
//                         <button className='w-100 py-2' style={{ backgroundColor: "black", color: "#d3d3d3", fontWeight: "600" }}>SIGN UP</button>
//                         {/* <p className='text-center mb-2 mt-3'>or login with</p>
//                         <div className='d-flex justify-content-center '>
//                                 <img src={fbLogo} alt="" width={20} className='mx-3'/>
//                                 <img src={googleIcon} alt="" width={20} className='mx-3'/>
//                                 <img src={Xlogo} alt="" width={20} className='mx-3'/>
//                         </div> */}
//                         {/* <p style={{fontSize:"13px", position:"relative",top:"65px"}} className='text-center  mb-0'>Don't have an account ? <span style={{fontWeight:"800"}}>SIGNUP_!</span></p> */}
//                         <div>
//                             <p style={{ fontSize: "11px", position: "relative", top: "80px" }} className=' mb-0'>By signing up,you agree our <span style={{ textDecoration: "underline", color: "skyblue" }}>Terms & Condition </span>and <span style={{ textDecoration: "underline", color: "skyblue" }}>Privacy Policy</span></p>
//                         </div>
//                     </div>
//                     {/* <div style={{ border: "4px solid #000", position: "relative", top: "70px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div> */}
//                     <div style={{ border: "4px solid #000", position: "relative", top: "93px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div>

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default AdminDocterBookinglist