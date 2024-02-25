import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Carousel } from 'react-bootstrap'
import hospitalImage from '../Assets/hospital_image.jpg'
import hospitalRoom from '../Assets/hospital_room.webp'
import hospitalDocter from '../Assets/hospital_docters.jpg'
import hospitalNurse from '../Assets/hospital_nurse.jpg'
import './Home.css'
import HomeAbout from '../Components/HomeAbout'
import HomeReview from '../Components/HomeReview'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

function Home() {
    // const navigate=useNavigate()
    // const [userName,setUserName]=useState("")
    // useEffect(()=>{
    //     const existingUser= JSON.parse(localStorage.getItem("currentUser"))
    //     if(existingUser){
    //         setUserName(existingUser.username)
    //     }
    //     else{
    //         message.error("Login First")
    //         navigate('/')
    //     }
    // },[])
    return (
        <div>
            <Header />
            {/* <h5 style={{position:"absolute", top:"125px", right:"0", backgroundColor:"#23b3b4", padding:"15px 40px"}} >{userName}</h5> */}
            {/* <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh", backgroundColor: "#000", color: "#fff" }}> */}
            <div style={{ height: "710px ", backgroundColor: "#23b3b4", zIndex: "-1", position: "relative", top: "110px" }}>
                <Carousel fade className='w-100  ' >
                    <Carousel.Item>
                        <img src={hospitalImage} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}>
                                <h2 className='fw-bold text-dark'>HOPE WELL</h2>
                                <p>hospital is a medical facility dedicated to providing comprehensive healthcare services, encompassing diagnosis, treatment, and care for a diverse range of medical conditions, with the goal of promoting community health and well-being</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalDocter} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}>
                                <h2 className='fw-bold text-dark'>Professional Docters</h2>
                                <p>Professional doctors, through rigorous education and experience, deliver expert healthcare services, ensuring patient well-being and contributing to the ongoing advancement of medical knowledge and practice.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalNurse} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}>
                                <h2 className='fw-bold text-dark'>Our Angels</h2>
                                <p>Nurses, often regarded as angels in healthcare, are compassionate and highly skilled professionals who provide essential patient care, support, and advocacy, playing a critical role in promoting well-being and recovery.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalRoom} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}>
                                <h2 className='fw-bold text-dark'>Comfortable Rooms</h2>
                                <p>Hospital rooms are carefully designed and equipped spaces that prioritize patient comfort and healing, featuring essential medical facilities and technology to facilitate effective treatment and recovery.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <HomeAbout/>
            <HomeReview/>
        </div>
        // </div>
    )
}

export default Home