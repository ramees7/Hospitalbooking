import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import WhatsAppIcon from '../Assets/WhatsApp_icon.png'
import facebookIcon from '../Assets/Facebook_icon.png'
import xIcon from '../Assets/x_icon.jpg'
import instagramIcon from '../Assets/instagram_icon.png'
import hospitalLogo from '../Assets/hospital_logo.png'
import { message } from 'antd'


function Footer() {

  const [time, setTime] = useState("")
  const [datenow, setDateNow] = useState("")
  const [subscribe, setSubscribe] = useState({
    sub:""
  })

  useEffect(() => {
    setInterval(() => {
      setTime(Date().slice(16, 25))
      setDateNow(Date().slice(4, 15))
    }, 1000)
  }, [])
  const handleSubscribe=()=>{
    if(!subscribe){
      message.warning("Enter Email Address")
    }else{
      message.success("Subscribed Success")
      setSubscribe({sub:""})
    }
  }
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center p-3' style={{backgroundColor:"#1a73e8", color:"#fff"}}>
        <div className='w-50 py-2'>
          <h4 style={{fontSize: "clamp(0.625rem, 0.3472rem + 1.1111vw, 1.25rem)"}}>Subscribe newsletter</h4>
          <h2 style={{fontSize: "clamp(0.875rem, 0.4306rem + 1.7778vw, 1.875rem)"}}>Get the latest update by <br /> Subscribing our newsletter</h2>
        </div>
        <div className='d-flex'>
          <input type="email" style={{height:"40px"}} placeholder='Enter Email Address' value={subscribe.sub} onChange={(e)=>setSubscribe({sub:e.target.value})}/>
          <Button className='' style={{backgroundColor:"#172464f2", borderRadius:"0"}} onClick={handleSubscribe}>Subscribe</Button>
        </div>
      </div>
      <div style={{ backgroundColor: "#172464f2", height: "100%" }} >
        {/* <div style={{ backgroundColor: "#d4faef", height: "100%" }} > */}
        {/* <div style={{ backgroundColor: "#e0e0e0", height: "100%" }} > */}
        <Row style={{ height: "100%" }} className='gx-0 '>
          <Col md={6} style={{ borderBottom: "2px solid #d9efe9" }} className='d-flex justify-content-center align-items-center flex-column p-5'>
            <img src={hospitalLogo} alt="" width={150} />
            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png" alt="" width={100}/>  */}
            <h1 style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "4px", fontSize: "50px", color: "#fff" }} className='mb-0'>HOPE WELL</h1>
            <h5 style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "3px", color: "#fff" }}>Trust Us , We Are With You</h5>
            <div>
              <img src={WhatsAppIcon} alt="" width={28} className='mx-2' />
              <img src={facebookIcon} alt="" width={20} className='mx-2' />
              <img src={xIcon} alt="" width={20} className='mx-2' />
              <img src={instagramIcon} alt="" width={25} className='mx-2' />
            </div>
          </Col>
          <Col md={6} style={{ borderBottom: "2px solid #d9efe9" }}>
            <Row>
              <Col xs={4} style={{ borderRight: "1px solid #d9efe9" }} className='ps-3'>
                <div className='d-grid justify-content-center  mb-5' style={{ marginTop: "80px" }}>
                  <h6 className='fw-bolder' style={{ color: "#fff", fontSize: "clamp(0.75rem, 0.55rem + 0.8vw, 1rem)" }}>PATIENTS AND VISITORS</h6>
                  <ul className='ps-3' style={{ listStyleType: "circle", color: "#fff" }}>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>What to expect</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>MyAdmission</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Patients FAQs</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Pay my bill</li>
                  </ul>
                </div>
              </Col>
              <Col xs={4} style={{ borderRight: "1px solid #d9efe9" }}>
                <div className='d-grid justify-content-center mb-5' style={{ marginTop: "80px" }}>
                  <h6 className='fw-bolder' style={{ color: "#fff", fontSize: "clamp(0.75rem, 0.55rem + 0.8vw, 1rem)" }}>FEATURED SERVICES</h6>
                  <ul className='ps-3' style={{ listStyleType: "circle", color: "#fff" }}>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Maternity services</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Medical and surgical</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Mental health and therapy</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Rehabilitation services</li>
                  </ul>
                </div>
              </Col>
              <Col xs={4} className='pe-3'>
                <div className='d-grid justify-content-center mb-5' style={{ marginTop: "80px" }}>
                  <h6 className='fw-bolder' style={{ color: "#fff", fontSize: "clamp(0.75rem, 0.55rem + 0.8vw, 1rem)" }}>WORKING WITH US</h6>
                  <ul className='ps-3' style={{ listStyleType: "circle", color: "#fff" }}>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>MyPay</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Caregiver resources</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Job search</li>
                    <li className='fw-bold' style={{ fontSize: " clamp(0.75rem, 0.65rem + 0.4vw, 0.875rem)" }}>Employee benefits</li>
                  </ul>
                </div>
              </Col>
              <Col md={12} className='mt-3'>
                <p className='text-center fw-bold' style={{ color: "#fff", fontSize: 'clamp(0.75rem, 0.55rem + 0.8vw, 1rem)' }}>Thalappara velimukku P.O, Malappuram Distict.,Kerala - 676317</p>
              </Col>
            </Row>
          </Col>
          <div style={{ backgroundColor: "#172464f2", color: "#fff" }} className='d-flex w-100'>
            {/* <div style={{ backgroundColor: "#23b3b4", color: "black" }} className='d-flex w-100'> */}
            <h6 className='mb-0 text-center py-3 ' style={{ width: "85%", fontSize: 'clamp(0.75rem, 0.55rem + 0.8vw, 1rem)' }}>Copyright © Hope Well Hospital LLP. All Rights Reserved.</h6>
            <div className='d-grid flex-column justify-content-end p-2' style={{ width: "15%" }}>
              <h6 className='mb-0 ' style={{ fontSize: "clamp(0.6875rem, 0.4375rem + 1vw, 0.9rem)" }}>{time}</h6>
              <h6 className='mb-0' style={{ fontSize: "clamp(0.5625rem, 0.2125rem + 1.4vw, 0.9rem)" }}>{datenow}</h6>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Footer