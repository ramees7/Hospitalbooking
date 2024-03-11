import { message } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { doctersRejectAcceptUpdateApi } from '../Services/allApis';
import { Button, Modal } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseUrl';
import { docterEditResContext } from '../Context/ContextShares';


function EditDocter({docters}) {
    const [show, setShow] = useState(false);
    const {docterEditRes,setDocterEditRes}=useContext(docterEditResContext)
    const [preview,setPreview]=useState("")
    const [updateDocter, setUpdateDocter] = useState({
        firstname:docters.firstname, lastname:docters.lastname, email:docters.email, phone:docters.phone, dob: docters.dob, address:docters.address, department:docters.department, experience: docters.experience, fee:docters.fee, userId:docters.userId,dr_image:docters.dr_image,education:docters.education, status:docters.status
    })



    useEffect(()=>{
        if(updateDocter.dr_image != docters.dr_image){
            setPreview(URL.createObjectURL(updateDocter.dr_image))
        }
    },[updateDocter.dr_image])

    const handleUpdateDocter = async () => {
        // setUpdateDocter({ firstname: item.firstname, lastname: item.lastname, email: item.email, phone: item.phone, dob: item.dob, address: item.address, education: item.education, department: item.department, experience: item.experience, fee: item.fee, time: item.time, userId: item.userId, status: item.status })
        const { firstname, lastname, email, phone, dob, address, education, department, experience, fee,dr_image, userId, status } = updateDocter
        console.log(updateDocter,"gtgggg");
        if (!firstname || !lastname || !email || !phone || !dob || !address || !education || !department || !experience || !fee || !dr_image || !userId || !status) {
            message.warning("Enter Valid Data")
        }
        else {
            const reqBody = new FormData()
            reqBody.append("firstname", firstname)
            reqBody.append("lastname", lastname)
            reqBody.append("email", email)
            reqBody.append("phone", phone)
            reqBody.append("dob", dob)
            reqBody.append("address", address)
            reqBody.append("education", education)
            reqBody.append("department", department)
            reqBody.append("experience", experience)
            reqBody.append("fee", fee)
            reqBody.append("dr_image", dr_image)
            reqBody.append("userId", userId)
            reqBody.append("status", status)
            console.log(reqBody);
            if(updateDocter.dr_image === docters.dr_image){
            const reqHeader = {
                "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
            }
            const res = await doctersRejectAcceptUpdateApi(reqBody, reqHeader, docters._id)
            console.log(res);
            if (res.status === 200) {
                setDocterEditRes(res.data)
                message.success("Docter Data Updated")
                handleClose()
            }
            else {
                message.error("Failed")
            }
        }
        else{
            const reqHeader = {
                "Content-Type": "multipart/form-data", "Authorization": `bearer ${localStorage.getItem("token")}`
            }
            const res = await doctersRejectAcceptUpdateApi(reqBody, reqHeader, docters._id)
            console.log(res);
            if (res.status === 200) {
                setDocterEditRes(res.data)
                message.success("Docter Data Updated")
                handleClose()
            }
            else {
                message.error("Failed")
            }
        }
        }
    }
    console.log(updateDocter);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button style={{ background: "none", border: "none" }} onClick={handleShow}><CiEdit className='' style={{ fontSize: "28px" }} /></button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>{docters.lastname}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form >
                        <div className='row'>
                            <div className='col-lg-5 d-flex align-items-center'>
                                <label htmlFor="project-img" className='text-center '>
                                    <input type="file" id='project-img' style={{ display: "none" }} onChange={(e)=>setUpdateDocter({...updateDocter,dr_image:e.target.files[0]})}/>
                                    <img src={preview?preview:`${BASE_URL}/upload/${docters.dr_image}`} alt="project-img" className='img-fluid' />
                                    Edit Image
                                </label>
                            </div>
                            <div className='col-lg-7'>
                                Fee : <input type="text " placeholder='Docter Fee' defaultValue={docters.fee}  onChange={(e)=>setUpdateDocter({...updateDocter,fee:e.target.value})} className='form-control mb-3 rounded' />
                                Education : <input type="text " placeholder='Education' defaultValue={docters.education}  onChange={(e)=>setUpdateDocter({...updateDocter,education:e.target.value})} className='form-control mb-3 rounded ' />
                                Phone : <input type="text " placeholder='Phone Number' defaultValue={docters.phone}  onChange={(e)=>setUpdateDocter({...updateDocter,phone:e.target.value})} className='form-control mb-3 rounded ' />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateDocter}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditDocter