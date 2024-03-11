import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Button, Card, Col, Row } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import { MdDeleteForever } from 'react-icons/md'
import { deleteDepartmentApi, viewDepartmentListApi } from '../Services/allApis'
import { message } from 'antd'
import { Link } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";

function AdminDeptView() {
    const [deptName, setDeptName] = useState("")

    useEffect(() => {
        handleDeptNameList()
    }, [])

    const handleDeptNameList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await viewDepartmentListApi(reqHeader)
        if (res.status === 200) {
            setDeptName(res.data)
        }
    }
    const handleDeleteDepartmentList = async (item) => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader, "dfsdfsdgsg");
        console.log(item._id);
        const res = await deleteDepartmentApi(item._id, reqHeader)
        console.log(res);
        if (res.status === 200) {
            message.success("Department Deleted")
            handleDeptNameList()

        }
        else {
            message.error("Department Delete Failed")
        }
    }
    console.log(deptName);
    return (
        <div>
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#fff", paddingTop: "110px" }}>
                    <h1 className='text-center pt-5 fw-bold' style={{ fontSize: "clamp(1.25rem, 0.25rem + 4vw, 2.5rem)" }}>Docter Vacancy Department</h1>
                    <div className='w-100 d-flex justify-content-end pe-5 pt-4'>
                        <Link to={'/adddepartment'}><IoMdAddCircle style={{ color: "#000", fontSize: "30px" }} /></Link>
                    </div>
                    <Row className='d-flex justify-content-start gx-0 '>
                        {/* <Col xs={12} className='d-flex justify-content-center my-3 '>
                    <input type="text" className='mx-5 w-50 form-control' style={{backgroundColor:"#e0e0e0"}} placeholder='Search Docter or Department' onChange={(e)=>{setSearch(e.target.value)}}/>
                </Col> */}
                        {
                            deptName ?
                                deptName.map(item => (
                                    <Col lg={3} md={4} xs={12} className='d-flex justify-content-center p-5' >
                                        <div className='w-100 d-flex align-items-center justify-content-evenly  rounded' style={{ backgroundColor: "#000",color:"#fff", height: "80px" }}>
                                            <h5 className='fw-bold mb-0'>{item.dept_name}</h5>
                                            <button style={{ background: "none", border: "none" }} onClick={() => handleDeleteDepartmentList(item)}><MdDeleteForever className='mx-2' style={{ fontSize: "28px", color:"#fff"}} /></button>
                                            {/* <h1>{item.docter.map(item=>item.firstname)}</h1> */}
                                        </div>
                                    </Col>
                                ))
                                : ""
                        }

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AdminDeptView