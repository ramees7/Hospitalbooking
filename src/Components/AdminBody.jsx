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


    useEffect(() => {
        handleDocterList()
    }, [localStorage.getItem("token"),docterEditRes])

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
            message.success("Docter Application Deleted")
            handleDocterList()

        }
        else {
            message.error("Failed")
        }
    }


    return (
        <div style={{ height: "", backgroundColor: "#23b3b4", width: "100%" }}>
            <div style={{ marginTop: "100px" }} className=''>
                <h1 className='text-center pt-5'>Docters List</h1>
                <Row className='d-flex justify-content-start gx-0 '>
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
                                        <Card.Body>
                                            <Card.Title className='text-center'>{item.fistname} {item.lastname}</Card.Title>
                                            <Card.Text className='px-4'>
                                                <h6><span className='fw-bold'>Department : </span>{item.department}</h6>
                                                <h6><span className='fw-bold'>Fee : </span>{item.fee}</h6>
                                            </Card.Text>
                                            <div className='d-flex justify-content-center my-4'>
                                                <Link to={`/${item.lastname}/appoinmentlist`}><Button variant="primary" className=''>Appoinment List</Button></Link>
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