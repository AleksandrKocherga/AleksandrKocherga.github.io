const { jsPDF } = window.jspdf;

function downloadPDF() {
  const element = document.body;

  html2canvas(element, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const pdf = new jsPDF();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const pdfWidth = 210; // Стандартная ширина A4 в мм
    const pdfHeight = 297; // Стандартная высота A4 в мм

    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgWidthFinal = imgWidth * ratio;
    const imgHeightFinal = imgHeight * ratio;

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    pdf.addImage(imgData, "JPEG", 0, 0, imgWidthFinal, imgHeightFinal);

    pdf.save("resume.pdf");
  });
}

document
  .querySelector(".download-button")
  .addEventListener("click", downloadPDF);
