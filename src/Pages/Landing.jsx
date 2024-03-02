import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import Footer from '../Components/Footer';
import nurseLogo from '../Assets/nurse.png'
import hospitalLogo from '../Assets/hospital_logo.png'
// import { TextField } from '@mui/material';
import Auth from '../Components/Auth';
// import '../Components/AuthMQ.css'

function Landing({ login }) {

  const registerForm = login ? true : false


  return (
    <div style={{ backgroundColor: "#23b3b4", height: "100%" }}>
      <Row className='gx-0 w-100'>
        <Col md={5} className='d-flex justify-content-center align-items-center mt-5'>
          <img src={nurseLogo} alt="img nurse" style={{ height: "745px" }} className='img-fluid' id='nurse-logo' />
        </Col>
        <Col className='p-5' md={7} >
          {/* <div className='d-flex justify-content-center align-items-center  p-5 'style={{backgroundImage:"url(https://t4.ftcdn.net/jpg/02/45/51/51/360_F_245515156_h2nHzDquKJxygpkOkG4UsMV5So5uh3LF.jpg)", backgroundSize:"800px ", backgroundRepeat:"no-repeat", height:"500px"}} >      */}
          {/* <input type="text"  className='' style={{position:"relative", top:"50px", zIndex:"1", width:"300px"}}/>    */}
          {/* <div className='d-flex justify-content-center mb-5'>
            <div>
              <img src={hospitalLogo} alt="hospital-logo" width={105} />
            </div>
            <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
              <h1 className='d-flex justify-content-center mb-0' >HOPE WELL</h1>
              <h6 className='d-flex justify-content-center'>TRUS US , WE ARE WITH YOU</h6>
            </div>
          </div> */}
          {/* <div className='d-flex justify-content-center'>
            <img src={hospitalLogo} alt="hospital-logo" width={110} height={110} />
            <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
              <h1 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "4px", color: "black" }}>HOPE WELL</h1>
              <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "3px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>
            </div>
          </div> */}
          <div style={{ backgroundColor: "" }} className='' id='auth'>
            {
              registerForm ?
                <Auth />
                :
                <Auth login />
            }

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Landing
