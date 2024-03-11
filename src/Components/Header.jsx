import React, { useContext, useEffect, useState } from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { getDoctersAcceptedApi } from '../Services/allApis'
import { message } from 'antd'
import { BASE_URL } from '../Services/baseUrl'
import { docterEditResContext } from '../Context/ContextShares'
function Header() {
  const {docterEditRes,setDocterEditRes}=useContext(docterEditResContext)

  const [logout, setLogout] = useState('')
  const [open, setOpen] = useState(false);
  const [preview,setPreview]=useState("")



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
  const [search,setSearch]=useState("")


  useEffect(() => {
    handleDocterList()
  }, [localStorage.getItem("token"),search,docterEditRes])

  const handleDocterList = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getDoctersAcceptedApi(reqHeader,search)
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
      <div style={{ backgroundColor: "#d9efe9", width: "100%", position: "fixed", zIndex: "1" }} className=''>
      {/* <div style={{ backgroundColor: "#e0e0e0", width: "100%", position: "fixed", zIndex: "1" }} className=''> */}
        <Navbar expand="lg" className="">
          <Container className=''>
            <Navbar.Brand href="#home">
              <div className='d-flex justify-content-center'>
                <img src={hospitalLogo} alt="hospital-logo" width={100} height={100} />
                <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                  <h3 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "4px", color:"black"}}>HOPE WELL</h3>
                  <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "3px", color:"black",fontSize: "clamp(0.875rem, 0.7083rem + 0.6667vw, 1.25rem)"}}>TRUST US , WE ARE WITH YOU</p>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0", marginRight: "30px" }}>
              <Nav className="me-auto">
                <Nav.Link   className='mx-2 ps-1'><Link to={'/home'} style={{ textDecoration: "none", color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500" }}>Home</Link></Nav.Link>
                <Nav.Link   className='mx-2 ps-1'><Link to={"/home#about"} style={{ textDecoration: "none", color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500" }}>About Us</Link></Nav.Link>
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
                    <span style={{ color: "#000",fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500" }}> Our Docters</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ backgroundColor: "#fff", border: "none" }}>
                    {
                      docterList ?
                        docterList.map(item => (
                          <Dropdown.Item  key={item._id}  id='dropdown-item'><Link to={`/${item._id}/booking`} style={{ color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500", textDecoration:"none"}}>{item.firstname} {item.lastname}</Link></Dropdown.Item>
                          // <Dropdown.Item href={`/${item.lastname}/booking`} key={item._id} style={{ color: "#000", fontSize: "large", fontWeight: "500" }} id='dropdown-item'>{item.firstname} {item.lastname}</Dropdown.Item>

                        ))
                        : ""
                    }
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant='' id="dropdown-basic" className='  border-0 pt-2'>
                    <span style={{ color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500" }}> Appoinments</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ backgroundColor: "#fff", border: "none" }}>
                    <Dropdown.Item   id='dropdown-item'><Link to={"/drapplication"} style={{ color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500", textDecoration:"none"}}>Application For Docter Vacancy</Link></Dropdown.Item>
                    <Dropdown.Item   id='dropdown-item'><Link to={"/booking"} style={{ color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500", textDecoration:"none"}}>Book New Appoinment</Link></Dropdown.Item>
                    <Dropdown.Item  id='dropdown-item'><Link to={"/appoinmentlist"} style={{ color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500", textDecoration:"none"}}>Your Appoinments</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link  className='mx-2 ps-1'><Link style={{ textDecoration: "none", color: "#000", fontSize: "clamp(0.75rem, 0.5833rem + 0.6667vw, 1.125rem)", fontWeight: "500" }}>24*7 Service</Link></Nav.Link>
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