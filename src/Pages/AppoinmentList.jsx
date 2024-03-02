import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Table } from 'react-bootstrap'
import { appoinmentDeleteListApi, getappoinmentListUser } from '../Services/allApis'
import { message } from 'antd'
import { MdDeleteOutline } from 'react-icons/md'

function AppoinmentList() {
    const [appoinmentListUser, setAppoinmentListUser] = useState("")

    useEffect(() => {
        handleAppoinmentListUser()
    }, [localStorage.getItem("token")])

    const handleAppoinmentListUser = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getappoinmentListUser(reqHeader)
        if (res.status === 200) {
            setAppoinmentListUser(res.data)
        }
    }

    const handleDeleteAppoinemntList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await appoinmentDeleteListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Appoinment Deleted")
            handleAppoinmentListUser()
        }
        else{
            message.error("Failed")
        }
    }
    console.log(appoinmentListUser);

    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#23b3b4", height: "", paddingTop: "110px" }} className='px-5 pb-5'>
                <h1 className='text-center my-5 fw-bold'>Your Appoinments</h1>
                <Table responsive striped bordered hover variant="dark" className='mb-5'>
                    <thead >
                        <tr >
                            <th className='py-3'>#</th>
                            <th className='py-3'>Date of Booked</th>
                            <th className='py-3'>Docter Name</th>
                            <th className='py-3'>Phone Number</th>
                            <th className='py-3'>D.O.B</th>
                            <th className='py-3'>Token No</th>
                            <th className='py-3'>Cancel </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinmentListUser ?
                                appoinmentListUser.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index+1}</td>
                                        <td>{item.dateofbooked.slice(0,10)}</td>
                                        <td>{item.docter}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.dob.slice(0,10)}</td>
                                        <td>{item.tokenNo}</td>
                                        <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteAppoinemntList(item)}><MdDeleteOutline /></Button></td>

                                        {/* <td onClick={handleDeleteAppoinemntList()}></td> */}
                                    </tr>
                                ))
                                : ""
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AppoinmentList