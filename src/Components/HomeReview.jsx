import { Flex, Rate, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { addReviewApi } from '../Services/allApis';


const desc = ['terrible 😤 ', 'bad 😕', 'normal 😊', 'good 👍', 'wonderful 🤩'];

function HomeReview() {

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
        <div className='py-5 ' style={{ backgroundColor: "#fff", borderBottom:"2px solid #e0e0e0"}}>
            <div>
                <h1 className='text-center fw-bold'>Review</h1>
                <div className='d-flex justify-content-center py-4'>
                    <Form >
                        <div className='d-flex px-5'>
                            <Flex gap="middle" vertical>
                                <Rate tooltips={desc} onChange={setValue } value={value}  className='mx-3' style={{fontSize:"40px"}}/>
                                {value ? <span className='text-center fw-bolder' style={{fontSize:"25px"}} >{desc[value - 1]}</span> : null}
                            </Flex>
                        </div>

                        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}> Your openion</Form.Label>
                            <Form.Control as="textarea" rows={5} value={reviewDetails.reviewmessage} style={{backgroundColor:"#d9efe9"}} onChange={(e)=>setReviewDetails({...reviewDetails,reviewmessage:e.target.value})}/>
                        </Form.Group>
                        <Button className='d-flex float-end mb-3' onClick={handleAddReview}>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default HomeReview