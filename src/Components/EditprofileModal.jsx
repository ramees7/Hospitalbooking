// import React, { useEffect, useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'
// import { CiEdit } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
// import { BASE_URL } from '../Services/baseUrl';
// function EditprofileModal() {
//     const [show, setShow] = useState(false);
//     const [updatedProfile, setUpdatedprofile] = useState(true)
//     const [userDetails, setUserDetails] = useState("")
//     const [preview,setPreview]=useState("")
//     // const [userUpdatedDetails, setUserUpdatedDetails] = useState("")


//     useEffect(() => {
//         handleUserProfile()
//     }, [])



//     const handleUserProfile = () => {
//         const userData = JSON.parse(localStorage.getItem("currentUser"))
//         if(userData.lastname===""){
//             setUpdatedprofile(true)
//             setUserDetails(userData)
//         }
//         else{
//             setUpdatedprofile(false)
//             setUserDetails(userData)
//         }
//     }

//     // console.log(userDetails);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <div>
//             <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" width={50} className='' onClick={handleShow} />
//             {
//                 userDetails &&
//                 <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//                     <Modal.Header closeButton >
//                         <Modal.Title className='ms-auto'>{userDetails.username}</Modal.Title>
//                         <Link to={'/editprofile'} style={{ position: "relative", left: "140px" }}><button style={{ background: "none", border: "none" }} ><CiEdit style={{ fontSize: "24px" }} /></button></Link>
//                     </Modal.Header>
//                     <Modal.Body className='px-5'>
//                         {
//                             updatedProfile ?
//                                 <>
//                                     <h5>User Name : {userDetails.username}</h5>
//                                     <h5>Email : {userDetails.email}</h5>
//                                     <h5>Phone Number : {userDetails.phone}</h5>
//                                 </>
//                                 :
//                                 <>
//                                     <img src={userDetails.user_image} alt="" width={150} style={{ margin: "0 32% ", borderRadius: "50%" }} className='mb-3' />
//                                     <h5>first Name :{userDetails.firstname} </h5>
//                                     <h5>Last Name : {userDetails.lastname}</h5>
//                                     <h5>UserName : {userDetails.username}</h5>
//                                     <h5>D.O.B : {userDetails.dob}</h5>
//                                     <h5>Gender : {userDetails.gender}</h5>
//                                     <h5>Email : {userDetails.email}</h5>
//                                     <h5>Phone Number : {userDetails.phone}</h5>
//                                     <h5>Address :{userDetails.address} </h5>
//                                 </>
//                         }
//                     </Modal.Body>
//                 </Modal>
//             }

//         </div>
//     )
// }

// export default EditprofileModal