import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import { getAppoinmentsListApi, getAppoinmentsListDocterApi } from '../Services/allApis'
import { docterEditResContext } from '../Context/ContextShares'


function AdminDrAppoinmentList({drItem}) {
    const [appoinments, setAppoinments] = useState("")
    // const docterName={drFirstname,drLastname}
    const {docterEditRes,setDocterEditRes}=useContext(docterEditResContext)


    useEffect(() => {
        handleAppoinmentsList()
    },[localStorage.getItem("token"),docterEditRes])

    const handleAppoinmentsList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        // const res = await getAppoinmentsListDocterApi(reqHeader)
        const res = await getAppoinmentsListApi(reqHeader)
        if (res.status === 200) {
            setAppoinments(res.data)
        }
    }
    console.log(appoinments);
    // console.log(docterName.drFirstname,docterName.drLastname,"ddfdddd");
    return (
        <div>
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#23b3b4" }}>
                    <div style={{ backgroundColor: "#23b3b4", paddingTop: "110px" }} className='px-3'>
                        <h1 className='text-center py-5'>Dr.{drItem.firstname} {drItem.lastname} bookings</h1>
                        <Table responsive striped hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>Patiant Name</th>
                                    <th className='py-3'>Date of Booked</th>
                                    <th className='py-3'>Phone Number</th>
                                    <th className='py-3'>D.O.B</th>
                                    <th className='py-3'>Token No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appoinments ?
                                        appoinments.filter(item=>item.docter===drItem._id).map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index+1}</td>
                                                <td>{item.firstname} {item.lastname}</td>
                                                <td>{item.dateofbooked.slice(0,10)}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.dob.slice(0,10)}</td>
                                                <td>{item.tokenNo}</td>
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