import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import WhatsAppIcon from '../Assets/WhatsApp_icon.png'
import facebookIcon from '../Assets/Facebook_icon.png'
import xIcon from '../Assets/x_icon.jpg'
import instagramIcon from '../Assets/instagram_icon.png'
import hospitalLogo from '../Assets/hospital_logo.png'
import appStore from '../Assets/appstore-removebg-preview.png'
import playStore from '../Assets/playstore-removebg-preview.png'


function Footer() {
  return (
    <div style={{ backgroundColor: "gray", height: "100%" }} >
      <Row style={{ height: "100%" }} className='gx-0 '>
        <Col md={6} style={{ backgroundColor: "", height: "", borderBottom: "2px solid #23b3b48f" }} className='d-flex justify-content-center align-items-center flex-column p-5'>
          <img src={hospitalLogo} alt="" width={150} />
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png" alt="" width={100}/>  */}
          <h1 style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "4px", fontSize: "50px" , color:"black"}} className='mb-0'>HOPE WELL</h1>
          <h5 style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "3px", color:"black"}}>Trust Us , We Are With You</h5>
          <div>
            <img src={WhatsAppIcon} alt="" width={25} className='mx-2' />
            <img src={facebookIcon} alt="" width={20} className='mx-2' />
            <img src={xIcon} alt="" width={20} className='mx-2' />
            <img src={instagramIcon} alt="" width={25} className='mx-2' />
          </div>
        </Col>
        <Col md={6}>
          <Row>
            <Col xs={4} style={{borderRight:"1px solid #23b3b48f"}} className='ps-3'>
              <div className='d-grid justify-content-center  mb-5' style={{ marginTop: "80px" }}>
                <h6 className='fw-bolder' style={{color:"black"}}>PATIENTS AND VISITORS</h6>
                <ul className='ps-3' style={{ listStyleType: "circle" }}>
                  <li className='fw-bold'>What to expect</li>
                  <li className='fw-bold'>MyAdmission</li>
                  <li className='fw-bold'>Patients FAQs</li>
                  <li className='fw-bold'>Pay my bill</li>
                </ul>
              </div>
            </Col>
            <Col xs={4}  style={{borderRight:"1px solid #23b3b48f"}}>
              <div className='d-grid justify-content-center mb-5' style={{ marginTop: "80px" }}>
                <h6 className='fw-bolder' style={{color:"black"}}>FEATURED SERVICES</h6>
                <ul className='ps-3' style={{ listStyleType: "circle" }}>
                  <li className='fw-bold'>Maternity services</li>
                  <li className='fw-bold'>Medical and surgical</li>
                  <li className='fw-bold'>Mental health and therapy</li>
                  <li className='fw-bold'>Rehabilitation services</li>
                </ul>
              </div>
            </Col>
            <Col xs={4} className='pe-3'>
              <div className='d-grid justify-content-center mb-5' style={{ marginTop: "80px" }}>
                <h6 className='fw-bolder' style={{color:"black"}}>WORKING WITH US</h6>
                <ul className='ps-3' style={{ listStyleType: "circle" }}>
                  <li className='fw-bold'>MyPay</li>
                  <li className='fw-bold'>Caregiver resources</li>
                  <li className='fw-bold'>Job search</li>
                  <li className='fw-bold'>Employee benefits</li>
                </ul>
              </div>
            </Col>
            <Col md={12} className='mt-3'>
              <p className='text-center fw-bold' style={{color:"black"}}>Thalappara velimukku P.O, Malappuram Distict.,Kerala - 676317.</p>
            </Col>
          </Row>
        </Col>
        <h6 style={{ backgroundColor: "#23b3b4", color:"black"}} className='mb-0 text-center py-2'>Copyright © DMS Hospital LLP. All Rights Reserved.</h6>
      </Row>
    </div>
  )
}

export default Footer