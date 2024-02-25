import React, { useEffect, useState } from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { getDoctersAcceptedApi } from '../Services/allApis'
import { message } from 'antd'
import EditprofileModal from './EditprofileModal'
import { BASE_URL } from '../Services/baseUrl'
function Header() {
  const [logout, setLogout] = useState('')
  const [open, setOpen] = useState(false);
  const [preview,setPreview]=useState("")
  // const [profileDetails,setProfileDetails]=useState({
  //   username:"", email:"", password:"", phone:"" ,firstname:"" ,lastname:"" ,dob:"" ,gender:"" ,address:"" ,user_image:""
  // })


  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("currentUser"))
    if (localStorage.getItem("role") === "user") {
      setUserName(existingUser.username)
      setPreview(`${BASE_URL}/upload/${JSON.parse(localStorage.getItem("currentUser")).user_image}`)
    }
    else {
      message.error("Login First")
      navigate('/')
    }
  }, [])


  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('currentUser')).user_image){
      setPreview(`${BASE_URL}/upload/${JSON.parse(localStorage.getItem('currentUser')).user_image}`)

  }
  else{
      setPreview("")
  }
  },[])

  const [docterList, setDocterList] = useState("")

  useEffect(() => {
    handleDocterList()
  }, [localStorage.getItem("token")])

  const handleDocterList = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getDoctersAcceptedApi(reqHeader)
    if (res.status === 200) {
      setDocterList(res.data)
    }
  }

  console.log(docterList);


  const handleLogout = () => {
    let existingUser = JSON.parse(localStorage.getItem("currentUser"))
    if (existingUser) {
      setLogout(localStorage.clear(existingUser))
      message.success("Logout Success")
      navigate('/')
    }
  }

  return (
    <>
      <div style={{ backgroundColor: "gray", width: "100%", position: "fixed", zIndex: "1" }} className=''>
        <Navbar expand="lg" className="">
          <Container className=''>
            <Navbar.Brand href="#home">
              <div className='d-flex justify-content-center'>
                <img src={hospitalLogo} alt="hospital-logo" width={100} height={100} />
                <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                  <h3 className='d-flex justify-content-center mb-0' >HOPE WELL</h3>
                  <p className='d-flex justify-content-center'>TRUST US , WE ARE WITH YOU</p>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0", marginRight: "30px" }}>
              <Nav className="me-auto">
                <Nav.Link href="/home" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }} className='mx-2 ps-1'>Home</Nav.Link>
                <Nav.Link href="/home#about" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }} className='mx-2 ps-1'>About Us</Nav.Link>
                {/* <Dropdown>
                <Dropdown.Toggle variant='' id="dropdown-basic" className='  border-0'>
                  <span style={{ color: "#000", fontSize: "large", fontWeight: "500" }}> Departments</span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "gray", border: "none" }}>

                  {
                    docterList ?
                      docterList.map(item => (
                        <h6 style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item' className='px-4 py-2' > {item.department}</h6>

                      ))
                      : ""
                  }
                 </Dropdown.Menu>
              </Dropdown> */}
                <Dropdown>
                  <Dropdown.Toggle variant='' id="dropdown-basic" className='  border-0 pt-2'>
                    <span style={{ color: "#000", fontSize: "large", fontWeight: "500" }}> Our Docters</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ backgroundColor: "gray", border: "none" }}>
                    {
                      docterList ?
                        docterList.map(item => (
                          <Dropdown.Item href={`/${item.lastname}/booking`} key={item._id} style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>{item.firstname} {item.lastname}</Dropdown.Item>

                        ))
                        : ""
                    }
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant='' id="dropdown-basic" className='  border-0 pt-2'>
                    <span style={{ color: "#000", fontSize: "large", fontWeight: "500" }}> Appoinments</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ backgroundColor: "gray", border: "none" }}>
                    <Dropdown.Item href="/drapplication" style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>Application For Docter Vacancy</Dropdown.Item>
                    <Dropdown.Item href="/booking" style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>Book New Appoinment</Dropdown.Item>
                    <Dropdown.Item href="/appoinmentlist" style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>Your Appoinments</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="/home" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }} className='mx-2 ps-1'>24*7 Service</Nav.Link>
                {/* <Nav.Link href="/usernotification" style={{ textDecoration: "none", color: "#000", fontSize: "large", fontWeight: "500" }} className='mx-2 ps-1'><img src="https://cdn-icons-png.flaticon.com/512/565/565422.png" alt="" width={30} /></Nav.Link> */}
                <div className='d-flex justify-content-center align-items-center h-100 '>
                  <button className='border-0 py-2 px-4 fw-bold' style={{ color: "#fff", backgroundColor: "red" }} onClick={handleLogout}>Logout <img src="https://cdn-icons-png.flaticon.com/512/56/56805.png" alt="logout-icon" width={25} /></button>
                </div>
                <div className='btn p-0 border-0' style={{ position: "absolute", right: "70px", top: "40px" }}>
                  {/* <EditprofileModal/> */}
                  <Link to={'/editprofile'}><img src={preview?preview:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} alt="" width={50} height={50} className='' style={{borderRadius:"50%"}} /></Link>

                </div>

              </Nav>
            </Navbar.Collapse>


            {/* <h6 style={{ position: "absolute", right: "40px", top: "100px", color: "black" }}><FaUserCircle style={{ color: "black" }} /> {userName}</h6> */}

          </Container>
        </Navbar>


      </div >

    </>
  )
}

export default Header