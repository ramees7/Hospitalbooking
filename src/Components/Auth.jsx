import { TextField } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Auth({ register }) {

    const navigate=useNavigate()

    const registration=()=>{
        navigate('/home')
        toast.success("success")
    }

    const registerForm = register ? true : false

    return (
        // <div>
        <div className='d-flex justify-content-center flex-column' style={{ position: "relative", top: "", zIndex: "1", width: "" }}>
            <div className='d-flex justify-content-center pt-4'>

                {
                    registerForm ?
                        <h2>Sign Up</h2>
                        :
                        <h2>Sign In</h2>
                }
            </div>
            <div className='d-flex justify-content-center '>
                <div className='d-flex flex-column'>
                    {
                        registerForm &&
                        <>
                            <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" className='mt-4' style={{ width: "400px" }} />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" className='mt-3' />
                        </>
                    }

                    <TextField id="outlined-basic" label="Email Address" variant="outlined" className='my-3' style={{ width: "400px" }}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" className='mb-3' />
                    <div className='mb-5'>
                    {
                        registerForm ?
                            <div>
                                <Button className='me-3' onClick={registration}>Sign Up</Button>
                                <Link to={'/login'} style={{ textDecoration: "none" }}>Already a User? Sign In...</Link>
                            </div> :
                            <div>
                                <Button className='me-3' onClick={registration}>Sign In</Button>
                                <Link to={'/'} style={{ textDecoration: "none" }} >New User? Sign Up...</Link>
                            </div>
                    }
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Auth