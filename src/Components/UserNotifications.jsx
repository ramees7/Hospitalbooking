import React from 'react'
import Header from './Header'

function UserNotifications() {
  return (
    <div style={{backgroundColor:"#23b3b4"}}>
        <Header/>
        <div style={{paddingTop:"150px"}}>
        <h1 className='text-center my-4'>Notifications</h1>
        <div className='px-5 pb-5'>
            <div style={{height:"80px", backgroundColor:"gray"}} className='shadow rounded d-flex align-items-center px-5'>
                <p className='mb-0 '>Your Request Has Accepted on appoinmentbooking/doctervacancy</p>
            </div>
        </div>



        </div>

    </div>
  )
}

export default UserNotifications