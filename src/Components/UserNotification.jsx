import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getDoctersAcceptedNotificationListApi } from '../Services/allApis'

function UserNotification() {
    const [notification, setNotification] = useState("")
    const [currentUserId, setCurrentUserId] = useState("")
    const [ss, setSs] = useState("")

    useEffect(() => {
        handleNotifications()
        setCurrentUserId(JSON.parse(localStorage.getItem("currentUser"))._id)
        
    }, [localStorage.getItem("token")])

    const handleNotifications = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getDoctersAcceptedNotificationListApi(reqHeader)
        if (res.status === 200) {
            setNotification(res.data)
        }
    }
    useEffect(()=>{
        setSs(notification &&
            notification.filter(item => item.userId === currentUserId).length)
    },[notification])
    
    console.log(notification);
    console.log(currentUserId);
    console.log(ss);
    
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#fff", height: "", paddingTop: "110px" }} className='px-5 pb-5'>
                <h1 className='text-center my-5 fw-bold' style={{ fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)" }}>Notifications</h1>
                {
                    notification ?
                        notification.filter(item => item.userId === currentUserId).map(item => (
                            <div className='rounded shadow ps-5 d-flex align-items-center mb-3' style={{ width: "100%", height: "100px" }}>
                                <h4>* {item.firstname} {item.lastname} Docter Vacancy Application for {item.department.slice(0,-24)} {item.messages}</h4>
                            </div>
                        ))
                        :""        
                }
            </div>
        </div>
    )
}

export default UserNotification