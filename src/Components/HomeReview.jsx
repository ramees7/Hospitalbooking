import { Flex, Rate, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { addReviewApi } from '../Services/allApis';


const desc = ['terrible 😤 ', 'bad 😕', 'normal 😊', 'good 👍', 'wonderful 🤩'];

function HomeReview() {
    // const [ratingStar, setRatingStar] = useState(null)
    // const [hoverStar, setHoverStar] = useState(null)
    const [value, setValue] = useState(3);
    const [token,setToken]=useState("")
    const [reviewDetails,setReviewDetails] =useState({
        username:"",email:"",ratingcontent:"",reviewmessage:"",userId:""
    })

    useEffect(()=>{
        const existingUser=JSON.parse(localStorage.getItem("currentUser"))
        if(existingUser){
            setReviewDetails({...reviewDetails,userId:existingUser._id,username:existingUser.username,email:existingUser.email,ratingcontent:desc[value - 1]})
            setToken(localStorage.getItem("token"))
        }
    },[token,value])

    const handleAddReview =async ()=>{
        const {username,email,ratingcontent,reviewmessage,userId}=reviewDetails
        if(!username || !email || !ratingcontent || !reviewmessage || !userId){
            message.warning("Enter Valid Details")
        }
        else{
            const reviewData= new FormData()
            reviewData.append("username",username)
            reviewData.append("email",email)
            reviewData.append("ratingcontent",ratingcontent)
            reviewData.append("reviewmessage",reviewmessage)
            reviewData.append("userId",userId)
            console.log(reviewData)
            const reqHeader ={
                "Content-Type":"application/json","Authorization":`bearer ${token}`
            }
            const res=await addReviewApi(reviewData,reqHeader)
            console.log(reqHeader)
            console.log(res);
            if(res.status===200){
                message.success("Review Added")
                handleClear()
            }
            else{
                message.error("Failed")
            }
        }
    }

    const handleClear=()=>{
        setReviewDetails({...reviewDetails,reviewmessage:""})
    }

    console.log(reviewDetails);

    console.log(value);

    return (
        <div className='py-5 ' style={{ backgroundColor: "#23b3b4" }}>
            <div>
                <h1 className='text-center '>Review</h1>
                <div className='d-flex justify-content-center p-5'>
                    <Form >
                        <div className='d-flex px-5'>
                            <Flex gap="middle" vertical>
                                <Rate tooltips={desc} onChange={setValue } value={value}  className='mx-3' style={{fontSize:"40px"}}/>
                                {value ? <span className='text-center fw-bolder' style={{fontSize:"25px"}} >{desc[value - 1]}</span> : null}
                            </Flex>
                        </div>

                        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}> Your openion</Form.Label>
                            <Form.Control as="textarea" rows={5} value={reviewDetails.reviewmessage} onChange={(e)=>setReviewDetails({...reviewDetails,reviewmessage:e.target.value})}/>
                        </Form.Group>
                        <Button className='d-flex float-end mb-3' onClick={handleAddReview}>Submit</Button>
                    </Form>
                </div>
            </div>

            {/* <Row>
            <Col md={2} className='p-5 d-flex justify-content-center'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/doctor-nurse-treating-patient-severe-260nw-1768533362.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>Name</Card.Title>
                            <Card.Text className='px-4'>
                                <h6><span className='fw-bold'>Department</span> : jdksjk</h6>
                                <h6><span className='fw-bold'>Time</span> : 9.00 AM to 5.00 PM</h6>
                            </Card.Text>
                            <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                <Button variant="outlined">More About</Button>
                                <Button variant="contained">For Booking</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}


        </div>
    )
}

export default HomeReview