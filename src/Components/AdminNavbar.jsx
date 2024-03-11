import React from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'


function AdminNavbar() {
    return (
        <div className='d-flex justify-content-center w-100 gx-0' style={{ backgroundColor: "#d9efe9", position: 'fixed', zIndex: "1" }}>
            <img src={hospitalLogo} alt="hospital-logo" width={100} height={100} />
            <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                <h3 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "4px", color: "black" }}>HOPE WELL</h3>
                <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "3px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>

            </div>
        </div>
    )
}

export default AdminNavbar