import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import { Col, Row } from 'react-bootstrap'
import AdminBody from '../Components/AdminBody'
import './admin.css'
import AdminNavbar from '../Components/AdminNavbar'


function Admin() {
    return (
        <div>
            <AdminNavbar/>
            <Row className='gx-0'>
                <Col md={2} xs={4} style={{backgroundColor:"black"}}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{backgroundColor:"#fff"}}>
                    <AdminBody/>
                </Col>
            </Row>

        </div>
    )
}

export default Admin