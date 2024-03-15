import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import { deleteReviewListApi, getReviewListApi } from '../Services/allApis'
import { message } from 'antd'
import { MdDeleteOutline } from 'react-icons/md'

function AdminReview() {

    const [reviewList, setReviewList] = useState("")

    useEffect(() => {
        handleReviewList()
    }, [localStorage.getItem("token")])

    const handleReviewList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getReviewListApi(reqHeader)
        if (res.status === 200) {
            setReviewList(res.data)
        }
    }

    const handleDeleteReviewList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await deleteReviewListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Review Deleted")
            handleReviewList()
        }
        else{
            message.error("Failed")
        }
    }

    return (
        <div>
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#fff" }}>
                    <div style={{ backgroundColor: "#fff", paddingTop: "110px" }} className='px-5 pb-5'>
                    {/* <div style={{ backgroundColor: "#fff", paddingBottom: "300px", paddingTop: "110px" }} className='px-5'> */}
                        <h1 className='text-center py-5 fw-bold' style={{fontSize: "clamp(0.9375rem, -0.3125rem + 5vw, 2.5rem)"}}>Users Review</h1>
                        <Table responsive striped bordered hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>#</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Username</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>User Email</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Rating content</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Review Message</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviewList ?
                                        reviewList.map((item, index) => (
                                            <tr  key={item._id}>
                                                <td  style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{index+1}</td>
                                                <td  style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.username}</td>
                                                <td  style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.email}</td>
                                                <td  style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.ratingcontent}</td>
                                                <td  style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.reviewmessage}</td>
                                                <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteReviewList(item)}><MdDeleteOutline /></Button></td>
                                            </tr>
                                        ))
                                        :""
                                }

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AdminReview