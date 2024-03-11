import React, { useEffect, useState } from 'react'
import { viewDepartmentListApi } from '../Services/allApis'
import { Col, Row } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl'
import './HomeDeptView.css'

function HomeDeptView() {
    const [deptList, setDeptList] = useState("")

    useEffect(() => {
        handleDeptList()
    }, [])

    const handleDeptList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await viewDepartmentListApi(reqHeader)
        if (res.status === 200) {
            setDeptList(res.data)
        }
    }
    console.log(deptList);
    return (
        <div className=' p-5'  style={{borderTop:" 2px  solid #d9efe9"}}>
            <h1 className='text-center fw-bold mb-4'>Find Out More About <br />Our Services</h1>
            <Row className=''>
                {
                    deptList ?
                        deptList.map(item => (
                            <Col md={3} className='d-flex justify-content-center mb-3' >
                                <div className='p-3  d-flex justify-content-center align-items-center rounded' style={{ width: "300px", height: "300px" }} id='dept'>
                                    <div>
                                        <div className='w-100 d-flex justify-content-center '>
                                            <img src={`${BASE_URL}/upload/${item.dept_image}`} alt="dept_image" id='dept_image' className='p-2 mb-2' style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor:"#68cdb8"}} />
                                        </div>
                                        <h3 className='text-center fw-bold' style={{ color: "#2167d5" }}>{item.dept_name}</h3>
                                        <p style={{ textAlign: "justify" }}>{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                        : ""
                }
            </Row>

        </div>
    )
}

export default HomeDeptView