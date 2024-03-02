import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { message } from 'antd';


function AdminHeader() {

    const [logout,setLogout]=useState('')
    const [userName,setUserName]=useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        const existingAdmin = JSON.parse(localStorage.getItem("currentUser"))
        if(localStorage.getItem("role") === "admin" ){
            setUserName(existingAdmin.username)
        }
        else{

            message.error("Login First")
            navigate("/")
        }
    },[])

  
    const handleLogout = () => {
      let existingAdmin=JSON.parse(localStorage.getItem("currentUser"))
      if(existingAdmin){
        setLogout(localStorage.clear(existingAdmin))
        message.success("Logout Success")
        navigate('/')
      }
    }


    return (
        <div className='p-2'>
            <div className='d-grid justify-content-center' style={{ paddingTop: "140px" }}>
                <h4 style={{ color: "#e0e0e0" }}>Admin : {userName}</h4>
                <Link to={'/adminpage'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><IoMdHome style={{ fontSize: "30px" }}  className='me-1'/><span style={{ position: "relative", top: '3px' }}>Home</span></h5>
                </div></Link>
                <Link to={'/admindradd'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><IoIosPersonAdd style={{ fontSize: "30px" }} className='me-1'/><span style={{ position: "relative", top: '3px' }}>Add Docter</span></h5>
                </div></Link>
                <Link to={'/userslist'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><FaUsers  style={{ fontSize: "30px" }}  className='me-1'/><span style={{ position: "relative", top: '3px' }}>Users List</span></h5>
                </div></Link>
                <Link to={'/adminnotification'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><IoIosNotifications style={{ fontSize: "30px" }}  className='me-1'/><span style={{ position: "relative", top: '3px' }}>Notifications</span></h5>
                </div></Link>
                <Link to={'/adminreview'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><FaStar style={{ fontSize: "30px" }}  className='me-1'/><span style={{ position: "relative", top: '3px' }}>Reviews</span></h5>
                </div></Link>
                <Link to={'/adminregister'} style={{ textDecoration: "none" }}><div className=' py-2 my-2' style={{ backgroundColor: "" }}>
                    <h5 style={{ color: "white" }}><RiUserAddFill style={{ fontSize: "30px" }}  className='me-1'/><span style={{ position: "relative", top: '3px' }}>Add Admin</span></h5>
                </div></Link>

                <button className='border-0 py-2 px-4 fw-bold my-5' style={{ color: "#fff", backgroundColor: "red"}} onClick={handleLogout}>Logout <img src="https://cdn-icons-png.flaticon.com/512/56/56805.png" alt="logout-icon" width={25} /></button>

            </div>

        </div>
    )
}

export default AdminHeader