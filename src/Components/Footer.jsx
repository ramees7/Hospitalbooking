import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import WhatsAppIcon from '../Assets/WhatsApp_icon.png'
import facebookIcon from '../Assets/Facebook_icon.png'
import xIcon from '../Assets/x_icon.jpg'
import instagramIcon from '../Assets/instagram_icon.png'
import hospitalLogo from '../Assets/hospital_logo.png'


function Footer() {
  return (
    <div style={{ backgroundColor: "#014a32", height: "100%" }} >
      <Row style={{height:"100%"}} className='gx-0 p-3'>
        <Col md={4} style={{ backgroundColor: "skyblue", height: "" }} className='d-flex justify-content-center align-items-center flex-column p-5'>
          <img src={hospitalLogo} alt="" width={100} />
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png" alt="" width={100}/>  */}
          <h1>HOSPITAL</h1>
          <h6>Trust Us , We Are With You</h6>
          <div>
            <img src={WhatsAppIcon} alt="" width={25} className='mx-2' />
            <img src={facebookIcon} alt="" width={20} className='mx-2' />
            <img src={xIcon} alt="" width={20} className='mx-2' />
            <img src={instagramIcon} alt="" width={25} className='mx-2' />
          </div>
          {/* <div style={{border:"0 3px 0 0  solid red", height:"50px"}}></div> */}
        </Col>
        <Col style={{ backgroundColor: "red" }}>
          <div className='d-grid justify-content-center  mb-5' style={{marginTop:"80px"}}>
            <h4>Docters</h4>
            <ul className='ps-3' style={{listStyleType:"circle"}}>
              <li>hljk;ds</li>
              <li>hkdsnl</li>
              <li>hkl;kjds</li>
              <li>hkd;lks</li>
            </ul>
          </div>
        </Col>
        <Col style={{ backgroundColor: "blue" }}>
        <div className='d-grid justify-content-center mb-5' style={{marginTop:"80px"}}>
            <h4>Docters</h4>
            <ul className='ps-3' style={{listStyleType:"circle"}}>
              <li>hljk;ds</li>
              <li>hkdsnl</li>
              <li>hkl;kjds</li>
              <li>hkd;lks</li>
            </ul>
          </div>
        </Col>
        <Col style={{ backgroundColor: "green" }}>
        <div className='d-grid justify-content-center mb-5' style={{marginTop:"80px"}}>
            <h4>Docters</h4>
            <ul className='ps-3' style={{listStyleType:"circle"}}>
              <li>hljk;ds</li>
              <li>hkdsnl</li>
              <li>hkl;kjds</li>
              <li>hkd;lks</li>
            </ul>
          </div>
        </Col>
        <Col md={3} style={{ backgroundColor: "yellow" }}>
          <div className='p-4 '>
            <div className='d-flex justify-content-center mb-3'>
              <h4>Contact Us</h4>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email Address"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message Us</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className='d-flex float-end mb-3'>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer