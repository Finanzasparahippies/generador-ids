import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CreateTemplate = (props) => {
    const [files, setFiles] = useState([]);
    const [numPages, setNumPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pdfsInCurrentPage, setPdfsInCurrentPage] = useState(0);

    const pageWidth = 950; 
    const pageHeight = 850; 
    const maxPDFsPerPage = Math.floor(pageWidth / 433) * Math.floor(pageHeight / 420);

    const handleFileChange = (e) => {
        const fileList = e.target.files;
        const pdfFiles = Array.from(fileList).filter((file) => file.type === "application/pdf");

        if (pdfFiles.length > 0) {

            const selectedFile = pdfFiles[0];
            console.log(pdfFiles.length, pdfFiles[0]);
            if (pdfFiles.length !== fileList.length) {
                
                alert("Por favor, seleccione solo archivos PDF.");
                return;
            } else if ( pdfFiles.length >= maxPDFsPerPage ) {
                alert(`Solo se permiten ${maxPDFsPerPage} archivos por página.`);
                return;
            } 
            setFiles((pdfFiles) => [...pdfFiles, selectedFile]);
            setCurrentPage(
                Math.floor((files.length + pdfFiles.length) / maxPDFsPerPage)
            );
            setPdfsInCurrentPage(
                (files.length + pdfFiles.length) % maxPDFsPerPage
            );
        } else {
            // Si no se seleccionaron archivos PDF, muestra un mensaje de error
            alert("Por favor, seleccione al menos un archivo PDF.");
        }
    };

    console.log("currentPage: " + currentPage,"listaDeArchivos: " + files,"pdfsActuales: " + pdfsInCurrentPage,"maximosPDfs: "+ maxPDFsPerPage);

     const renderPDFPages = () => {
        const maxColumns = 3;
        const maxRows = 2;

        const imageWidth = pageWidth / maxColumns;
        const imageHeight = pageHeight / maxRows;

        const ListaPDFs = [];
        for (let i = 0; i < maxRows; i++) {
            const row = files.slice(i * maxColumns, (i + 1) * maxColumns);
            ListaPDFs.push(row);
        }

        return (
            console.log(imageHeight, imageWidth, ListaPDFs),
            <div id="pdf-pages">
                {ListaPDFs.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", position: "relative", width: `${pageWidth}px`, height: `${pageHeight / maxRows}px`, border: "1px solid black", overflow: "visible" }}>
                        {row.map((file, columnIndex) => (
                            <div key={`${columnIndex}`} style={{ justifyContent:"center", position: "relative", alignItems:"center", border: "1px solid black", borderRadius: "10px" }}>
                                <Document file={file} onLoadSuccess={handleLoadSuccess(rowIndex * maxColumns + columnIndex)}>
                                    {Array.from(new Array(numPages[rowIndex * maxColumns + columnIndex]), (el, columnIndex) => (
                                    <div key={`${columnIndex + 1}`} style={{ border: "1px solid black", borderRadius: "10px", overflow: "hidden" }}>
                                        <Page style= {{ border: "1px solid black", borderRadius: "10px" }}renderAnnotationLayer={false} renderTextLayer={false} key={`${columnIndex + 1}`} pageNumber={columnIndex + 1} />
                                    </div>
                                    ))}
                                </Document>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const handleLoadSuccess = (index) => ({ numPages }) => {
        setNumPages((prevNumPages) => {
            const updatedNumPages = [...prevNumPages];
            updatedNumPages[index] = numPages;
            return updatedNumPages;
        });
    };

    const handleDeleteFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    // const handleSavePDF = () => {
    //     html2canvas(document.getElementById("pdf-pages"), { scale: 3 }).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/pdf");
    //         const pdf = new jsPDF("l", "mm", "letter");
    //         const imgWidth = 475;
    //         const imgHeight = 214;
    //         pdf.addImage(imgData, "PDF", 0, 0, imgWidth, imgHeight);
    //         pdf.save("files.pdf");
    //     });
    // };

    const handleSavePDF = () => {
        html2canvas(document.getElementById("pdf-pages"), {
            scale: 3, // Ajusta la escala para capturar una imagen con mayor resolución
            logging: true, // Habilita el registro para ver cualquier mensaje de advertencia o error
            backgroundColor: null, // Utiliza el fondo predeterminado del área capturada
            useCORS: true // Habilita el uso de CORS para imágenes externas
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("l", "mm", "letter");
            const imgWidth = 475;
            const imgHeight = 214;
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

            const options = {
                compress: true, // Habilita la compresión del PDF
                precision: 0.2, // Ajusta la precisión de la compresión
                optimizeContent: true, // Optimiza el contenido del PDF
                textColor: "#000000" // Color de texto optimizado
            };
    
            pdf.save("files.pdf", options);

        });
    };
    

    return (
        <div>
            <input type="file"  onChange={handleFileChange} />
            <div>
                {files.map((file, index) => (
                    <div key={index}>
                    <div>                                               
                        <button onClick={() => handleDeleteFile(index)}>Eliminar</button>
                    </div>
                        {renderPDFPages(file)}
                    </div>
                ))}
            </div>
            <button onClick={handleSavePDF}>Guardar como PDF</button>
        </div>
    );
};

export default CreateTemplate;
