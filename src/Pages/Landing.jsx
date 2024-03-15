import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import nurseLogo from '../Assets/nurse.png'
import Auth from '../Components/Auth';

function Landing({ login }) {

  const registerForm = login ? true : false

  useEffect(()=>{
    let existingUser = JSON.parse(localStorage.getItem("currentUser"))
    if(existingUser){
      localStorage.clear(existingUser)
    }
  },[])


  return (
    <div style={{ height: "100%" }}>
      <Row className='gx-0 w-100'>
        <Col md={5} className='d-flex justify-content-center align-items-center mt-5'>
          <img src={nurseLogo} alt="img nurse" style={{ height: "748px" }} className='img-fluid' id='nurse-logo' />
        </Col>
        <Col className='p-5' md={7} >
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
