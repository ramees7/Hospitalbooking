import React from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import { Col, Dropdown, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Header.css'

function Header() {

  const navigate = useNavigate()

  const logout = () => {
    toast.success("Logout Success")
    navigate('/')
  }

  return (
    <div style={{ backgroundColor: "gray", height: "110px", width:"100%", position:"fixed", zIndex:"1"}} className='py-1'>
      <Row className='gx-0' >
        <Col lg={4} md={3} sm={12} style={{ backgroundColor: "" }}>
          <div className='d-flex justify-content-center'>
            <img src={hospitalLogo} alt="hospital-logo" width={80} height={100} />
            <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
              <h3 className='d-flex justify-content-center mb-0' >HOSPITAL NAME</h3>
              <p className='d-flex justify-content-center'>TRUS US , WE ARE WITH YOU</p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} sm={10}>
          <ul className='d-flex justify-content-center align-items-center h-100' style={{ listStyleType: "none" }}>
            <a href="" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }}><li className='mx-2'>Home</li></a>
            <a href="" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }}><li className='mx-2'>About Us</li></a>
            <Dropdown>
              <Dropdown.Toggle variant='' id="dropdown-basic" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} className='mx-2 p-0 border-0'>
                Departments
              </Dropdown.Toggle>

              <Dropdown.Menu style={{backgroundColor:"gray", border:"none" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} >Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} id='dropdown-item'>Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} id='dropdown-item'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant='' id="dropdown-basic" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} className='mx-2 p-0 border-0'>
                Our Docters
              </Dropdown.Toggle>

              <Dropdown.Menu style={{backgroundColor:"gray", border:"none" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} id='dropdown-item'>Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} id='dropdown-item'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant='' id="dropdown-basic" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} className='mx-2 p-0 border-0'>
                Appoinments
              </Dropdown.Toggle>

              <Dropdown.Menu style={{backgroundColor:"gray", border:"none" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "#000", fontSize: "large", fontWeight: "500"}} id='dropdown-item'>Your Appoinments</Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>Book New Appoinment</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }}><li className='mx-2'>24*7 Service</li></a>
          </ul>
        </Col>
        <Col lg={2} md={1} sm={2}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <button className='border-0 py-2 px-4 fw-bold' style={{ color: "#fff", backgroundColor: "red" }} onClick={logout}>Logout <img src="https://cdn-icons-png.flaticon.com/512/56/56805.png" alt="logout-icon" width={25} /></button>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Header