import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MdFlightTakeoff } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
import { FaBus } from "react-icons/fa";

function HomePlaces() {
    return (
        <div>
            <Row className='gx-0'>
                <Col md={6} style={{ backgroundColor: "#fff" }} className='d-flex justify-content-center p-4'>
                    <div style={{ width: "70%" }}>
                        <h1 className='text-center fw-bold'>Places Nearby</h1>
                        <p>While you are undergoing treatment at Aster, there is no reason that you cannot explore nearby attractions. Below are some of our must-visit recommendations.</p>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center p-3 shadow rounded' style={{backgroundColor:"#d4faef"}}>
                                <div style={{ borderRadius: "50%", backgroundColor: "#68cdb8"}} className='me-2 p-2'>
                                    <MdFlightTakeoff style={{ fontSize: "30px" }}  />
                                </div>
                                <div>
                                    <h5 className='mb-0' style={{fontSize: "clamp(0.8125rem, 0.6181rem + 0.7778vw, 1.25rem)"}}>Calicut International Airport</h5>
                                    <p className='mb-0' style={{fontSize:" clamp(0.5625rem, 0.5069rem + 0.2222vw, 0.6875rem)"}}>Approximate Travel Time : 45 min</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center p-3 shadow rounded' style={{backgroundColor:"#d4faef"}}>
                                <div style={{ borderRadius: "50%", backgroundColor: "#68cdb8"}} className='me-2 p-2'>
                                    <FaAnchor style={{ fontSize: "30px" }}  />
                                </div>
                                <div>
                                    <h5 className='mb-0' style={{fontSize: "clamp(0.8125rem, 0.6181rem + 0.7778vw, 1.25rem)"}}>Beypore Port</h5>
                                    <p className='mb-0' style={{fontSize:" clamp(0.5625rem, 0.5069rem + 0.2222vw, 0.6875rem)"}}>Approximate Travel Time : 22 min</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center p-3  shadow rounded' style={{backgroundColor:"#d4faef"}}>
                                <div style={{ borderRadius: "50%", backgroundColor: "#68cdb8"}} className='me-2 p-2'>
                                    <FaTrain style={{ fontSize: "30px" }}  />
                                </div>
                                <div>
                                    <h5 className='mb-0' style={{fontSize: "clamp(0.8125rem, 0.6181rem + 0.7778vw, 1.25rem)"}}>Kozhikode Railway station</h5>
                                    <p className='mb-0' style={{fontSize:" clamp(0.5625rem, 0.5069rem + 0.2222vw, 0.6875rem)"}}>Approximate Travel Time : 11 min</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center p-3  shadow rounded' style={{backgroundColor:"#d4faef"}}>
                            {/* <div className='d-flex align-items-center p-3  shadow rounded' style={{backgroundColor:"#e0e0e0"}}> */}
                                <div style={{ borderRadius: "50%", backgroundColor: "#68cdb8"}} className='me-2 p-2'>
                                    <FaBus style={{ fontSize: "30px" }}  />
                                </div>
                                <div>
                                    <h5 className='mb-0' style={{fontSize: "clamp(0.8125rem, 0.6181rem + 0.7778vw, 1.25rem)"}}>Kozhikode New Busstand</h5>
                                    <p className='mb-0' style={{fontSize:" clamp(0.5625rem, 0.5069rem + 0.2222vw, 0.6875rem)"}}>Approximate Travel Time : 8 min</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col md={6} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250436.59731091512!2d75.64599907160671!3d11.25612612924858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709229218763!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </div>
    )
}

export default HomePlaces