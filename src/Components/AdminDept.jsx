import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import { message } from 'antd'
import { addDepartmentApi } from '../Services/allApis'

function AdminDept() {
    const [previewImg, setPreviewImg] = useState("")
    const [deptName, setDeptName] = useState({
        dept_name: "", dept_image: "", description: ""
    })

    useEffect(() => {
        if (deptName.dept_image) {
            setPreviewImg(URL.createObjectURL(deptName.dept_image))
        }
    }, [deptName.dept_image])

    const handleAddDept = async (e) => {
        e.preventDefault()
        if (!deptName.dept_name || !deptName.dept_image || !deptName.description) {
            message.warning("Enter Valid Details")
        }
        else {
            const deptData=new FormData()
            deptData.append("dept_name",deptName.dept_name)
            deptData.append("dept_image",deptName.dept_image)
            deptData.append("description",deptName.description)
            const reqHeader = {
                "Content-Type": "multipart/form-data", "Authorization": `bearer ${localStorage.getItem("token")}`
            }
            console.log(deptData);
            const res = await addDepartmentApi(deptData, reqHeader)
            console.log(res, "res")
            if (res.status === 200) {
                message.success("New Department Added")
                handleClear()
            }
            else {
                message.error("Department Add Failed")
            }
        }
    }
    const handleClear=()=>{
        setDeptName({ dept_name: "" ,description:"" })
        setPreviewImg("https://e7.pngegg.com/pngimages/750/513/png-clipart-physician-computer-icons-surgeon-doctor-of-medicine-doctor-appointment-thumbnail.png")
    }
    console.log(deptName);
    return (
        <div>
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#fff", paddingTop: "150px" }}>
                    <h1 className='text-center fw-bold mb-4' style={{ fontSize: "clamp(1.25rem, 0.25rem + 4vw, 2.5rem)" }}>Add Docter Department</h1>
                    <div className='d-flex justify-content-center align-items-center ' style={{ height: "60%"}}>
                        <div className='mx-auto p-4 rounded' style={{ backgroundColor:"#000", color:"#fff"}}>
                            <label htmlFor="profile" className='text-center mx-auto w-100 mb-4'>
                                <input type="file" id='profile' style={{ display: "none" }} onChange={(e) => { setDeptName({ ...deptName, dept_image: e.target.files[0] }) }} />
                                <img src={previewImg ? previewImg : "https://e7.pngegg.com/pngimages/750/513/png-clipart-physician-computer-icons-surgeon-doctor-of-medicine-doctor-appointment-thumbnail.png"} alt="profile img" style={{ borderRadius: "50%" }} width={"150px"} height={"150px"} />
                            </label>
                            <h5 className='' style={{ fontSize: " clamp(0.75rem, 0.35rem + 1.6vw, 1.25rem)" }}>Department Name: </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px", width: "250px" }} value={deptName.dept_name} onChange={(e) => setDeptName({ ...deptName, dept_name: e.target.value })} />
                            <h5 className='' style={{ fontSize: " clamp(0.75rem, 0.35rem + 1.6vw, 1.25rem)" }}>Description: </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px", width: "250px" }} value={deptName.description} onChange={(e) => setDeptName({ ...deptName, description: e.target.value })} />
                            <Button className='mt-4 px-4' onClick={handleAddDept}>Add</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AdminDept