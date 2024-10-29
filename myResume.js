"use strict";
function DownloadResume() {
    //Download button functionality
    const downloadButton = document.getElementById("download_btn");
    const cv = document.getElementById("main_resume");
    // Function to temporarily apply desktop size and return a restore function
    const applyDesktopStyles = () => {
        const originalWidth = document.body.style.width;
        document.body.style.width = "1100px";
        return () => (document.body.style.width = originalWidth);
    };
    downloadButton === null || downloadButton === void 0 ? void 0 : downloadButton.addEventListener("click", (e) => {
        e.preventDefault();
        const restoreStyles = applyDesktopStyles();
        html2canvas(cv, { scale: 2, useCORS: true })
            .then((canvas) => {
            const pdf = new window.jspdf.jsPDF("p", "mm", "a4");
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("cv.pdf");
            restoreStyles();
        })
            .catch((error) => {
            console.error("Error generating PDF:", error);
            restoreStyles();
        });
    });
}
DownloadResume();
