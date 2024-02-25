import React, { useEffect, useState } from 'react'
import { Col, Table, Row, Button } from 'react-bootstrap'
import AdminNavbar from './AdminNavbar'
import AdminHeader from './AdminHeader'
import { deleteAdminListApi, deleteUserListApi, getAdminsListApi, getUsersListApi } from '../Services/allApis'
import { MdDeleteOutline } from 'react-icons/md'
import { message } from 'antd'


function AdminUsersList() {

    const [adminsList, setAdminsList] = useState("")
    const [usersList, setUsersList] = useState("")

    useEffect(() => {
        handleAdminsList()
        handleUsersList()
    }, [localStorage.getItem("token")])

    const handleAdminsList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getAdminsListApi(reqHeader)
        if (res.status === 200) {
            setAdminsList(res.data)
        }
    }

    const handleUsersList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getUsersListApi(reqHeader)
        if (res.status === 200) {
            setUsersList(res.data)
        }
    }

    const handleDeleteAdminList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await deleteAdminListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Docter Application Deleted")
            handleAdminsList()
        }
        else{
            message.error("Failed")
        }
    }
    const handleDeleteUserList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await deleteUserListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Docter Application Deleted")
            handleUsersList()
        }
        else{
            message.error("Failed")
        }
    }

    console.log(adminsList);
    return (
        <div >
            <AdminNavbar />
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#23b3b4" }}>
                    <div style={{ backgroundColor: "#23b3b4", paddingBottom: "300px", paddingTop: "110px" }} className='px-5'>
                        <h1 className='text-center py-5'>Users List</h1>
                        <Table responsive striped bordered hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>User Name</th>
                                    <th className='py-3'>Email</th>
                                    <th className='py-3'>Phone Number</th>
                                    <th className='py-3'>Password</th>
                                    <th className='py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usersList ?
                                        usersList.map((item, index) => (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.password}</td>
                                                <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteUserList(item)}><MdDeleteOutline /></Button></td>
                                            </tr>
                                        ))
                                        : ""
                                }

                            </tbody>
                        </Table>
                        <h1 className='text-center py-5'>Admins List</h1>
                        <Table responsive striped bordered hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>Admin Name</th>
                                    <th className='py-3'>Email</th>
                                    <th className='py-3'>Phone Number</th>
                                    <th className='py-3'>Password</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    adminsList ?
                                        adminsList.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index+1}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.password}</td>
                                                <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteAdminList(item)}><MdDeleteOutline /></Button></td>
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

export default AdminUsersList