import React, { useEffect, useRef, useState } from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom';
import { IoMdDownload } from 'react-icons/io'
import { Button, Col, Row } from 'react-bootstrap'
import Header from './Header'
import hospitalSeal from '../Assets/HOPE_WEll-removebg-preview.png'

function PdfTemplate({ docter }) {

    const docterForm = docter ? true : false
    const [appoinmentRequestList, setAppoinmentRequestList] = useState("")
    const [pdfBooking, setPdfBooking] = useState("")
    const [pdfDocter, setPdfDocter] = useState("")
    const appoinmentBooking = useRef(null)
    const docterApplication = useRef(null)
    const handleAppoinmentBooking = async () => {
        const input = appoinmentBooking.current

        try {
            const canvas = await html2canvas(input)
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4"
            })
            const width = pdf.internal.pageSize.getWidth()
            const height = pdf.internal.pageSize.getHeight()
            pdf.addImage(imgData, "PNG", 0, 0, width, height)
            pdf.save("document.pdf")
        }
        catch (err) {
            toast.error(err)
        }
    }

    useEffect(() => {
        setPdfBooking(JSON.parse(sessionStorage.getItem("bookingToPdf")))
        setPdfDocter(JSON.parse(sessionStorage.getItem("docterToPdf")))
    }, [])



    console.log(pdfBooking, "ffff");
    console.log(pdfDocter, "hhh");


    const handleDocterApplication = async () => {
        const input = docterApplication.current

        try {
            const canvas = await html2canvas(input)
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4"
            })
            const width = pdf.internal.pageSize.getWidth()
            const height = pdf.internal.pageSize.getHeight()

            // const height = (canvas.height * width) / canvas.width

            pdf.addImage(imgData, "PNG", 0, 0, width, height)
            pdf.save("document.pdf")
        }
        catch (err) {
            toast.error(err)
        }
    }

    const dateNew = Date()
    console.log(dateNew);

    console.log(appoinmentRequestList);

    return (
        <>
            <Header />
            <div className='px-5 pb-5' style={{ backgroundColor: "#fff", paddingTop: "150px" }}>
                {
                    docterForm ?

                        <div>
                            <Button className='mx-2 px-3 ' style={{ position: "absolute", right: "5%" ,fontSize: "clamp(0.625rem, 0.4028rem + 0.8889vw, 1.125rem)"}} onClick={handleDocterApplication}><IoMdDownload style={{fontSize:" clamp(1.0625rem, 0.8681rem + 0.7778vw, 1.5rem)"  }} />Downold </Button>
                            <div ref={docterApplication} style={{ backgroundColor: "#fff" }}>

                                <div>
                                    <div className='d-flex justify-content-center py-5 '>
                                        <div>
                                            <img src={hospitalLogo} alt="hospital-logo" width={105} />
                                        </div>
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h1 className='d-flex justify-content-center mb-0 fw-bold' style={{fontSize: "clamp(1.5rem, 1.0556rem + 1.7778vw, 2.5rem)"}}>HOPE WELL</h1>
                                            <h6 className='d-flex justify-content-center fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>TRUS US , WE ARE WITH YOU</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='pe-4'>
                                    <h1 className='text-center mb-5 fw-bold' style={{ textDecoration: "underline" , fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)"}}>Application Form For Docter Vacancy</h1>
                                    <h6 className='text-end fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>Date : {dateNew.slice(4, 15)}</h6>
                                    <h6 className='text-end fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>Time : {dateNew.slice(16, 24)}</h6>
                                </div>
                                <div className='p-5'>
                                    <Row className='d-flex justify-content-center'>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black", fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>First Name : {pdfDocter.firstname}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Last Name : {pdfDocter.lastname}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Phone Number : {pdfDocter.phone}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Email : {pdfDocter.email}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Date of Birth : {pdfDocter.dob}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Address : {pdfDocter.address}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Education : {pdfDocter.education}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Specialised to : {pdfDocter.department}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Work Experience :{pdfDocter.experience}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Consultation fee :  {pdfDocter.fee}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Application Status : {pdfDocter.status}</h6>
                                        </Col>
                                        <Col md={5}>
                                        </Col>
                                    </Row>
                                    <img src={hospitalSeal} alt="hospital seal " style={{ width: "200px", position: "relative", bottom: "150px", left: "64%" }} />

                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <Button className='mx-2 px-3 ' style={{ position: "absolute", right: "5%" ,fontSize: "clamp(0.625rem, 0.4028rem + 0.8889vw, 1.125rem)"}} onClick={handleAppoinmentBooking}><IoMdDownload style={{ fontSize:" clamp(1.0625rem, 0.8681rem + 0.7778vw, 1.5rem)" }} />Downold </Button>

                            <div ref={appoinmentBooking} style={{ backgroundColor: "#fff" }}>
                                <div>
                                    <div className='d-flex justify-content-center py-4 '>
                                        <div>
                                            <img src={hospitalLogo} alt="hospital-logo" width={105} />
                                        </div>
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h1 className='d-flex justify-content-center mb-0 fw-bold'  style={{fontSize: "clamp(1.5rem, 1.0556rem + 1.7778vw, 2.5rem)"}}>HOPE WELL</h1>
                                            <h6 className='d-flex justify-content-center fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>TRUS US , WE ARE WITH YOU</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='pe-4'>
                                    <h1 className='text-center mb-5 fw-bold' style={{ textDecoration: "underline", fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)"}}>Application Form For Appoinment Booking</h1>
                                    <h5 className='text-end fw-bold' style={{fontSize: "clamp(0.75rem, 0.5278rem + 0.8889vw, 1.25rem)"}}>Token No : {pdfBooking.tokenNo}</h5>
                                    <h6 className='text-end fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>Date : {dateNew.slice(4, 15)}</h6>
                                    <h6 className='text-end fw-bold' style={{fontSize: "clamp(0.625rem, 0.4583rem + 0.6667vw, 1rem)"}}>Time : {dateNew.slice(16, 24)}</h6>
                                </div>
                                <div className='p-5'>



                                    <div className='d-grid justify-content-center pb-5 pt-3' >

                                        <Row className='d-flex justify-content-center'>
                                            <div className='d-flex justify-content-evenly'>

                                            </div>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>First Name : {pdfBooking.firstname}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Last Name : {pdfBooking.lastname}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Phone Number : {pdfBooking.phone}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Date of Birth : {pdfBooking.dob}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Address : {pdfBooking.address}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Booked Docter : {pdfBooking.docter}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black",fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Date Of Booked : {pdfBooking.dateofbooked}</h6>
                                            </Col>
                                            <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "#d9efe9", color: "black" ,fontSize: "clamp(0.6875rem, 0.5486rem + 0.5556vw, 1rem)"}}>Payment Status : {pdfBooking.payment}</h6>
                                            </Col>
                                        </Row>
                                        <img src={hospitalSeal} alt="hospital seal " style={{ width: "200px", position: "relative", bottom: "150px", left: "64%" }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default PdfTemplate