import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import { getAppoinmentsListApi } from '../Services/allApis'
import { docterEditResContext } from '../Context/ContextShares'


function AdminDrAppoinmentList({drItem}) {
    const [appoinments, setAppoinments] = useState("")
    const {docterEditRes,setDocterEditRes}=useContext(docterEditResContext)


    useEffect(() => {
        handleAppoinmentsList()
    },[localStorage.getItem("token"),docterEditRes])

    console.log(drItem);
    const handleAppoinmentsList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getAppoinmentsListApi(reqHeader)
        if (res.status === 200) {
            setAppoinments(res.data)
        }
    }
    console.log(appoinments);
    return (
        <div>
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#fff" }}>
                    <div style={{ backgroundColor: "#fff", paddingTop: "110px" }} className='px-3'>
                        <h1 className='text-center py-5 fw-bold'  style={{fontSize: "clamp(0.9375rem, -0.3125rem + 5vw, 2.5rem)"}}>Dr.{drItem.firstname} {drItem.lastname} bookings</h1>
                        <Table responsive striped hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3  text-center'  style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>#</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Patiant Name</th>
                                    <th className='py-3 text-center'  style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Date of Booked</th>
                                    <th className='py-3 text-center'  style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Phone Number</th>
                                    <th className='py-3 text-center'  style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>D.O.B</th>
                                    <th className='py-3 text-center'  style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Token No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appoinments ?
                                        appoinments.filter(item=>item.docterId===drItem._id).map((item, index) => (
                                            <tr key={item._id}>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{index+1}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.firstname} {item.lastname}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.dateofbooked.slice(0,10)}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.phone}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.dob.slice(0,10)}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.tokenNo}</td>
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

export default AdminDrAppoinmentList