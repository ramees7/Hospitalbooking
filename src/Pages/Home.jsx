import React from 'react'
import Header from '../Components/Header'
import { Carousel } from 'react-bootstrap'
import hospitalImage from '../Assets/hospital_image.jpg'
import hospitalRoom from '../Assets/hospital_room.webp'
import hospitalDocter from '../Assets/hospital_docters.jpg'
import hospitalNurse from '../Assets/hospital_nurse.jpg'
import './Home.css'
import HomeAbout from '../Components/HomeAbout'
import HomeReview from '../Components/HomeReview'
import HomePlaces from '../Components/HomePlaces'

function Home() {

    return (
        <div>
            <Header />
           
            <div style={{ height: "710px ", zIndex: "-1", position: "relative", top: "110px" }}>
                <Carousel fade className='w-100  ' >
                    <Carousel.Item>
                        <img src={hospitalImage} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#d4faef" }}>
                            {/* <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}> */}
                                <h2 className='fw-bold text-dark' style={{fontSize: "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)"}}>HOPE WELL</h2>
                                <p style={{fontSize: "clamp(0.625rem, 0.5139rem + 0.4444vw, 0.875rem)", color:"#000"}}>hospital is a medical facility dedicated to providing comprehensive healthcare services, encompassing diagnosis, treatment, and care for a diverse range of medical conditions, with the goal of promoting community health and well-being</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalDocter} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#d4faef" }}>
                            {/* <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#23b3b4" }}> */}
                                <h2 className='fw-bold text-dark' style={{fontSize: "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)"}}>Professional Docters</h2>
                                <p style={{fontSize: "clamp(0.625rem, 0.5139rem + 0.4444vw, 0.875rem)", color:"#000"}}>Professional doctors, through rigorous education and experience, deliver expert healthcare services, ensuring patient well-being and contributing to the ongoing advancement of medical knowledge and practice.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalNurse} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#d4faef" }}>
                                <h2 className='fw-bold text-dark' style={{fontSize: "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)"}}>Our Angels</h2>
                                <p style={{fontSize: "clamp(0.625rem, 0.5139rem + 0.4444vw, 0.875rem)", color:"#000"}}>Nurses, often regarded as angels in healthcare, are compassionate and highly skilled professionals who provide essential patient care, support, and advocacy, playing a critical role in promoting well-being and recovery.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hospitalRoom} alt="" style={{ width: "100vw", height: "600px" }} />
                        <Carousel.Caption>
                            <div className='py-3 px-5 rounded shadow' style={{ backgroundColor: "#d4faef" }}>
                                <h2 className='fw-bold text-dark' style={{fontSize: "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)"}}>Comfortable Rooms</h2>
                                <p style={{fontSize: "clamp(0.625rem, 0.5139rem + 0.4444vw, 0.875rem)", color:"#000"}}>Hospital rooms are carefully designed and equipped spaces that prioritize patient comfort and healing, featuring essential medical facilities and technology to facilitate effective treatment and recovery.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <HomeAbout/>
            <HomeReview/>
            <HomePlaces/>
        </div>
        // </div>
    )
}

export default Home