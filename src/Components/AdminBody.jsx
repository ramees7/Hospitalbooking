import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";
import { Link} from 'react-router-dom';
import { doctersDeleteListApi, getAppoinmentsListApi, getDoctersAcceptedApi } from '../Services/allApis';
import { message } from 'antd';
import EditDocter from './EditDocter';
import { BASE_URL } from '../Services/baseUrl';
import { docterEditResContext } from '../Context/ContextShares';



function AdminBody() {
    const [docterList, setDocterList] = useState("")
    const {docterEditRes,setDocterEditRes}=useContext(docterEditResContext)
    const [search,setSearch]=useState("")


    useEffect(() => {
        handleDocterList()
    }, [localStorage.getItem("token"),docterEditRes,search])

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

    const [appoinments, setAppoinemnts] = useState("")

    useEffect(() => {
        handleAppoinmentsList()
    }, [localStorage.getItem("token")])

    const handleAppoinmentsList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getAppoinmentsListApi(reqHeader)
        if (res.status === 200) {
            setAppoinemnts(res.data)
        }
    }

    console.log(appoinments);

    const handleDeleteDoctersList = async (item) => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader, "dfsdfsdgsg");
        console.log(item._id);
        const res = await doctersDeleteListApi(item._id, reqHeader)
        console.log(res);
        if (res.status === 200) {
            message.success("Docter Deleted")
            handleDocterList()

        }
        else {
            message.error("Deletion Failed")
        }
    }


    return (
        <div style={{ height: "", backgroundColor: "#fff", width: "100%" }}>
            <div style={{ marginTop: "100px" }} className=''>
                <h1 className='text-center pt-5 fw-bold'  style={{fontSize: "clamp(0.9375rem, -0.3125rem + 5vw, 2.5rem)"}}>Docters List</h1>
                <Row className='d-flex justify-content-start gx-0 '>
                <Col xs={12} className='d-flex justify-content-center my-3 '>
                    <input type="text" className='mx-5 w-50 form-control' style={{backgroundColor:"#d4faef"}} placeholder='Search Docter or Department' onChange={(e)=>{setSearch(e.target.value)}}/>
                </Col>
                    {
                        docterList ?
                            docterList.map(item => (
                                <Col lg={4} md={6} xs={12} className='d-flex justify-content-center p-5'  key={item._id}>
                                    <Card style={{ width: '18rem', zIndex: "0" }}>
                                        <div style={{ position: "absolute", top: "15px", right: "0" }} className='d-flex'>
                                            <EditDocter docters={item}/>
                                            <button style={{ background: "none", border: "none" }} onClick={() => handleDeleteDoctersList(item)}><MdDeleteForever className='mx-2' style={{ fontSize: "28px" }} /></button>

                                        </div>
                                        <Card.Img variant="top" src={`${BASE_URL}/upload/${item.dr_image}`} className='img-fluid' style={{ height: "200px"}} />
                                        <Card.Body style={{backgroundColor:"#000", color:"#fff", borderTop:"2px solid #fff"}}>
                                            <Card.Title className='text-center'>{item.fistname} {item.lastname}</Card.Title>
                                            <Card.Text className='ps-3'>
                                                <h6 style={{ fontSize:"clamp(0.75rem, 0.55rem + 0.8vw, 1rem)"}}><span className='fw-bold' >Department : </span>{item.department.slice(0,-24)}</h6>
                                                <h6 style={{ fontSize:"clamp(0.75rem, 0.55rem + 0.8vw, 1rem)"}}><span className='fw-bold'>Fee : </span>{item.fee}</h6>
                                            </Card.Text>
                                            <div className='d-flex justify-content-center my-4'>
                                                <Link to={`/${item._id}/appoinmentlist`}><Button variant="primary" className=''>Appoinment List</Button></Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                            : ""
                    }

                </Row>
            </div>

        </div>
    )
}

export default AdminBody