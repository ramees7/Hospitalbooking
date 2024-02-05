import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Button } from '@mui/material';


function HomeAbout() {
    return (
        <div style={{ height: "100%", backgroundColor: "red" }}>
            <Row className='h-100  gx-0 my-5' style={{ borderBottom: " 2px  solid green" }}>
                <Col lg={6} className='p-5 '>
                    <div className='h-100  bg-info d-flex  align-items-center'>
                        <div>
                            <h2 className='text-center mb-4'>ABOUT US</h2>
                            <h6 style={{ wordSpacing: "2px", lineHeight: "1.4", textAlign: "justify" }}>We prides itself on its exceptional healthcare services, anchored by a team of dedicated and professional doctors, along with well-trained nurses committed to providing compassionate care. With thoughtfully designed and comfortable rooms, the hospital ensures a conducive environment for patient recovery. The seamless online appointment booking system enhances accessibility for patients, offering convenience and efficiency in scheduling medical consultations. Furthermore, the hospital places a strong emphasis on hospitality, creating a welcoming and supportive atmosphere for patients and their families, ultimately prioritizing holistic well-being and quality healthcare experiences.</h6>
                            {/* <h4>24*7 </h4> */}
                        </div>
                    </div>
                </Col>
                <Col lg={6} className=' p-5'>
                    <div className=' bg-warning h-100'>
                        <Row className='gx-0'>
                            <Col md={6} xs={6} className='p-1'>
                                <img src="https://media.istockphoto.com/id/1001423914/photo/deciding-on-a-course-of-treatment-for-their-patients.jpg?s=612x612&w=0&k=20&c=bXC6o98w3ogNTbyfNiQQmfz4UHsskKpRx7m1fwuQiVA=" alt="" className='img-fulid w-100 h-100' />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src="https://media.istockphoto.com/id/1207467951/video/ensuring-their-patients-receive-the-right-treatment-they-need.jpg?s=640x640&k=20&c=OIUDGwTw8CJcZM-NsB2E55nVO0PUJtVJitjXGj3MZ-E=" alt="" className='img-fulid w-100 h-100' />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" alt="" className='img-fulid w-100 h-100' />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" alt="" className='img-fulid w-100 h-100' />
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
            <Row className='gx-0 my-5' style={{ borderBottom: " 2px  solid green" }}>
                <Col xs={12}>
                    <h1 className='text-center'>Our Docters</h1>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            {/* <div className=' my-5  ' style={{  backgroundColor:"yellow", borderBottom:"2px solid green"}}>
                <h1 className='text-center mb-5'>24/7 Service</h1>
                <div className='d-flex justify-content-center align-items-center px-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/80/80630.png" alt="" width={100}/>
                <img src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-ambulance-clipart-5-png-image_6004171.png" alt="" height={200}  width={350}/>
                    <h6>This hospital extends its commitment to patient care by offering a 24*7 helpline, ensuring continuous access to medical assistance and information. In addition, the hospital provides a dedicated ambulance service for swift and efficient transportation during emergencies, complementing its round-the-clock healthcare services to ensure the well-being of the community.</h6>
                </div>
            </div> */}
            
        </div>

    )
}

export default HomeAbout