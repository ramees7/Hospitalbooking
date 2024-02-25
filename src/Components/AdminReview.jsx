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
            message.success("Docter Application Deleted")
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
                <Col md={10} xs={8} style={{ backgroundColor: "#23b3b4" }}>
                    <div style={{ backgroundColor: "#23b3b4", paddingBottom: "300px", paddingTop: "110px" }} className='px-5'>
                        <h1 className='text-center py-5'>Users Review</h1>
                        <Table responsive striped hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>Username</th>
                                    <th className='py-3'>User Email</th>
                                    <th className='py-3'>Rating content</th>
                                    <th className='py-3'>Review Message</th>
                                    <th className='py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviewList ?
                                        reviewList.map((item, index) => (
                                            <tr  key={item._id}>
                                                <td>{index+1}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.ratingcontent}</td>
                                                <td>{item.reviewmessage}</td>
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