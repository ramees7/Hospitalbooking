import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Form } from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/baseUrl';
import { message } from 'antd';
import { userUpdateApi } from '../Services/allApis';

function EditProfile() {
    const [preview, setPreview] = useState('')
    const navigate = useNavigate()
    // const [selectedDob, setSelectedDob] = useState('');
    const [profile, setProfile] = useState({
        // username:"", email:"", password:"", phone:"", firstname:"", lastname:"", dob:"", gender:"", address:"", user_image:""
        username: JSON.parse(localStorage.getItem("currentUser")).username, email: JSON.parse(localStorage.getItem("currentUser")).email, password: JSON.parse(localStorage.getItem("currentUser")).password,
        phone: JSON.parse(localStorage.getItem("currentUser")).phone, firstname: JSON.parse(localStorage.getItem("currentUser")).firstname, lastname: JSON.parse(localStorage.getItem("currentUser")).lastname,
        gender: JSON.parse(localStorage.getItem("currentUser")).gender, address: JSON.parse(localStorage.getItem("currentUser")).address, user_image: JSON.parse(localStorage.getItem("currentUser")).user_image
    })

    useEffect(() => {
        if (profile.user_image != JSON.parse(localStorage.getItem("currentUser")).user_image) {
            setPreview(URL.createObjectURL(profile.user_image))

        }
        else if(JSON.parse(localStorage.getItem('currentUser')).user_image){
            setPreview(`${BASE_URL}/upload/${profile.user_image}`)

        }
        else{
            setPreview("")
        }
    }, [profile.user_image])
    console.log(preview);

    const handleProfileUpdate = async () => {
        const { username, email, password, phone, firstname, lastname, gender, address, user_image } = profile
        // console.log(profile);
        const today = new Date(); // Current date
        // // const dobObject=new Date(selectedDob)
        // // console.log(dobObject,"dobObject");
        // if(profile.dob < today){
        //     console.log("succcess");
        //     setProfile({ ...profile, dob: profile.dob })
        //     document.getElementById("dobid").innerHTML = ""
        // }
        // else  {
        //     console.log("Error");
        //     setProfile({ ...profile, dob: "" })
        //     document.getElementById("dobid").innerHTML = "Wrong Date Selection"

        // }
        if (!username || !email || !password || !phone || !firstname || !lastname || !gender || !address || !user_image) {
            message.warning("Enter Valid Data")
        }
        else {
            const reqBody = new FormData()
            reqBody.append('username', username)
            reqBody.append('email', email)
            reqBody.append('password', password)
            reqBody.append('phone', phone)
            reqBody.append('firstname', firstname)
            reqBody.append('lastname', lastname)
            // reqBody.append('dob', dob )
            reqBody.append('gender', gender)
            reqBody.append('address', address)
            reqBody.append('user_image', user_image)
            console.log(reqBody)
            const id = JSON.parse(localStorage.getItem('currentUser'))._id
            console.log(id)
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data", "Authorization": `bearer ${localStorage.getItem("token")}`
                }
                const result = await userUpdateApi(reqBody, reqHeader, id)
                if (result.status === 200) {
                    message.success("Profile Updated")
                    navigate('/')
                }
                else {
                    message.error("Updation Failed")
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
                }
                const result = await userUpdateApi(reqBody, reqHeader, id)
                if (result.status === 200) {
                    message.success("Profile Updated")
                    navigate('/')
                }
                else {
                    message.error("Updation Failed")
                }
            }
        }
    }



    console.log(profile);
    return (
        <>
            <Header />
            {/* <h1 style={{ paddingTop: "180px" }} className='text-center'>Edit Profile</h1> */}
            <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "#23b3b4", paddingTop: "140px" }}>
                <div style={{ height: " ", width: "350px", backgroundColor: "white", margin: "50px 0 100px 0", borderRadius: "10px" }}>
                    <div style={{ height: "250px", backgroundColor: "white", borderRadius: "10px 10px 0 0" }} className='d-grid justify-content-center align-items-center'>
                        <Link to={"/home"}><span style={{ fontSize: "25px", position: "relative", right: "90px", color: "black" }}><IoIosArrowBack /></span></Link>
                        <h3 className='text-center' style={{ position: "relative", bottom: "30px" }}>Edit Profile</h3>
                        <label htmlFor="profile">
                            <input type="file" id='profile' style={{ display: "none" }} onChange={(e) => setProfile({ ...profile, user_image: e.target.files[0] })} />
                            <img src={preview ? preview : "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg"} alt="" width={130} height={130} style={{ position: "relative", bottom: "25px", borderRadius: "50%" }} />
                        </label>
                    </div>
                    <div className='w-100 d-grid px-4 py-5' style={{ backgroundColor: "black", borderRadius: "30px 30px 10px 10px" }}>
                        <h6 style={{ color: "white" }}>First Name :</h6>
                        <input type="text" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, firstname: e.target.value })} defaultValue={profile.firstname} />
                        <h6 style={{ color: "white" }}>Last Name :</h6>
                        <input type="text" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, lastname: e.target.value })} defaultValue={profile.lastname} />
                        <h6 style={{ color: "white" }}>Username :</h6>
                        <input type="text" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, username: e.target.value })} defaultValue={profile.username} />
                        {/* <h6 style={{ color: "white" }} >D.O.B :</h6>
                        <input type="date" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} defaultValue={profile.dob} /> */}
                        {/* <h6 className='text-danger' id='dobid'></h6> */}
                        <h6 style={{ color: "white" }}>Gender :</h6>
                        <Form.Select aria-label="" style={{ height: "40px" }} className='rounded px-3 border-0 mb-2 ' onChange={(e) => setProfile({ ...profile, gender: e.target.value })} defaultValue={profile.gender}>
                            <option value={""}>Select Your Gender</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Other"}>Other</option>
                        </Form.Select>
                        <h6 style={{ color: "white" }}>Email</h6>
                        <input type="text" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, email: e.target.value })} defaultValue={profile.email} />
                        <h6 style={{ color: "white" }}>Phone :</h6>
                        <input type="number" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} defaultValue={profile.phone} />
                        <h6 style={{ color: "white" }}>Address :</h6>
                        <input type="text" className='rounded px-3 border-0 mb-2' style={{ height: "40px" }} onChange={(e) => setProfile({ ...profile, address: e.target.value })} defaultValue={profile.address} />
                        <div className='d-flex justify-content-center mt-3'>
                            <Button className='border-0 ms-2' onClick={handleProfileUpdate}>Update</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EditProfile