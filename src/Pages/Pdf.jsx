// import React, { useRef } from 'react'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
// import PdfTemplate from '../Components/PdfTemplate'
// import { toast } from 'react-toastify'
// import Header from '../Components/Header'
// // import AppoinmentList from './AppoinmentList'

// function Pdf() {
//     // const reportTemplateRef = useRef(null)
//     // const handleGeneratePdf = async () => {
//     //     const input = reportTemplateRef.current

//     //     try {
//     //         const canvas = await html2canvas(input)
//     //         const imgData = canvas.toDataURL("image/png")
//     //         const pdf = new jsPDF({
//     //             orientation: "portrait",
//     //             unit: "px",
//     //             format: "a4"
//     //         })
//     //         const width = pdf.internal.pageSize.getWidth()
//     //         const height = (canvas.height * width) / canvas.width

//     //         pdf.addImage(imgData, "PNG", 0, 0, width, height)
//     //         pdf.save("document.pdf")
//     //     }
//     //     catch (err) {
//     //         toast.error(err)
//     //     }
//     // }
//     return (
//         <div>
//             {/* <Header />
//             <div style={{ paddingTop:"125px"}}>
//                 <button className='bordered bg-info btn' onClick={handleGeneratePdf}>pdf</button>
//                 <div ref={reportTemplateRef} >
//                     <PdfTemplate />
//                 </div>
//             </div> */}
            
//         </div>
//     )
// }

// export default Pdf