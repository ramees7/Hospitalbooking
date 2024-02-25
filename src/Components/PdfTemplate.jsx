import React, { useEffect, useRef, useState } from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
// import PdfTemplate from '../Components/PdfTemplate'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdDownload } from 'react-icons/io'
import { Button, Col, Row } from 'react-bootstrap'
import Header from './Header'
import hospitalSeal from '../Assets/HOPE_WEll-removebg-preview.png'
import { BASE_URL } from '../Services/baseUrl'

function PdfTemplate({ docter }) {

    const docterForm = docter ? true : false

    const navigate = useNavigate()
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
            const height = (canvas.height * width) / canvas.width

            pdf.addImage(imgData, "PNG", 0, 0, width, height)
            pdf.save("document.pdf")
        }
        catch (err) {
            toast.error(err)
        }
    }
    // const docterDob=pdfDocter.dob.slice(0,10)

    const dateNew = Date()
    console.log(dateNew);

    console.log(appoinmentRequestList);

    return (
        <>
            <Header />
            <div className='px-5 pb-5' style={{ backgroundColor: "#23b3b4", paddingTop: "150px" }}>
                {
                    docterForm ?

                        <div>
                            <Button className='mx-2 px-3 ' style={{ position: "absolute", right: "5%" }} onClick={handleDocterApplication}><IoMdDownload style={{ fontSize: "24px" }} />Downold </Button>
                            <div ref={docterApplication} style={{ backgroundColor: "#23b3b4" }}>

                                <div>
                                    <div className='d-flex justify-content-center py-5 '>
                                        <div>
                                            <img src={hospitalLogo} alt="hospital-logo" width={105} />
                                        </div>
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h1 className='d-flex justify-content-center mb-0' >HOPE WELL</h1>
                                            <h6 className='d-flex justify-content-center'>TRUS US , WE ARE WITH YOU</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='pe-4'>
                                    <h1 className='text-center mb-5' style={{ textDecoration: "underline" }}>Application Form For Docter Vacancy</h1>
                                    <h6 className='text-end fw-bold'>Date : {dateNew.slice(4, 15)}</h6>
                                    <h6 className='text-end fw-bold'>Time : {dateNew.slice(16, 24)}</h6>
                                </div>
                                <div className='p-5'>
                                    <Row className='d-flex justify-content-center'>
                                        {/* <Col md={12} className='text-center mb-4'>
                                            <img src={`${BASE_URL}/upload/${pdfDocter.dr_image}`} alt="" width={200} height={200} style={{borderRadius:"50%"}}/>
                                        </Col> */}
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>First Name : {pdfDocter.firstname}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Last Name : {pdfDocter.lastname}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Phone Number : {pdfDocter.phone}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Email : {pdfDocter.email}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Date of Birth : {pdfDocter.dob}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Address : {pdfDocter.address}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Education : {pdfDocter.education}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Specialised to : {pdfDocter.department}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Work Experience :{pdfDocter.experience}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Consultation fee :  {pdfDocter.fee}</h6>
                                        </Col>
                                        <Col md={5}>
                                            <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Application Status : {pdfDocter.status}</h6>
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
                            <Button className='mx-2 px-3 ' style={{ position: "absolute", right: "5%" }} onClick={handleAppoinmentBooking}><IoMdDownload style={{ fontSize: "24px" }} />Downold </Button>

                            <div ref={appoinmentBooking} style={{ backgroundColor: "#23b3b4" }}>
                                <div>
                                    <div className='d-flex justify-content-center py-4 '>
                                        <div>
                                            <img src={hospitalLogo} alt="hospital-logo" width={105} />
                                        </div>
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h1 className='d-flex justify-content-center mb-0' >HOPE WELL</h1>
                                            <h6 className='d-flex justify-content-center'>TRUS US , WE ARE WITH YOU</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='pe-4'>
                                    <h1 className='text-center mb-5' style={{ textDecoration: "underline" }}>Application Form For Appoinment Booking</h1>
                                    <h5 className='text-end fw-bold' >Token No : {pdfBooking.tokenNo}</h5>
                                    <h6 className='text-end fw-bold'>Date : {dateNew.slice(4, 15)}</h6>
                                    <h6 className='text-end fw-bold'>Time : {dateNew.slice(16, 24)}</h6>
                                </div>
                                <div className='p-5'>



                                    <div className='d-grid justify-content-center pb-5 pt-3' >

                                        <Row className='d-flex justify-content-center'>
                                            <div className='d-flex justify-content-evenly'>

                                            </div>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>First Name : {pdfBooking.firstname}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Last Name : {pdfBooking.lastname}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Phone Number : {pdfBooking.phone}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Date of Birth : {pdfBooking.dob}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Address : {pdfBooking.address}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Booked Docter : {pdfBooking.docter}</h6>
                                            </Col>
                                            <Col md={5}>
                                                <h6 className='p-4 rounded' style={{ backgroundColor: "gray", color: "black" }}>Date Of Booked : {pdfBooking.dateofbooked}</h6>
                                            </Col>
                                            <Col md={5}>
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