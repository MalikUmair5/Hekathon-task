var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readData, updateData } from "./databaseService.js";
const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get("uuid");
// Personal Information
let name_heading = document.getElementById("name_heading");
let user_contact = document.getElementById("user_contact");
let user_email = document.getElementById("user_email");
let father_name = document.getElementById("father_name");
let user_DOB = document.getElementById("user_DOB");
let user_cnic = document.getElementById("user_cnic");
let user_maritalStatus = document.getElementById("user_maritalStatus");
let user_relagion = document.getElementById("user_relagion");
// Career Objective
let career_objective = document.getElementById("career_objective");
// Skills and Experiences
let technical_Skills = document.getElementById("technical_Skills");
let user_generalSkills = document.getElementById("user_generalSkills");
let user_Language = document.getElementById("user_Language");
let user_hobbies = document.getElementById("user_hobbies");
let user_experience = document.getElementById("user_experience");
let share_resume = document.getElementById("share_resume");
function fetchdata() {
    return __awaiter(this, void 0, void 0, function* () {
        if (uuid) {
            console.log("Retrieved UUID:", uuid);
            let userData = (yield readData(uuid));
            console.log(userData);
            name_heading.innerText = userData.name;
            user_contact.innerText = userData.contactNumber;
            user_email.innerText = userData.email;
            father_name.innerText = userData.fatherName;
            user_DOB.innerText = userData.dob;
            user_cnic.innerText = userData.cnic;
            user_maritalStatus.innerText = userData.cnic;
            user_relagion.innerText = userData.religion;
            career_objective.innerText =
                userData.careerObjective.length > 5
                    ? userData.careerObjective
                    : career_objective.innerText;
            technical_Skills.innerText = userData.technicalSkills;
            user_generalSkills.innerText = userData.generalSkills;
            user_Language.innerText = userData.languages;
            user_hobbies.innerText = userData.hobbies;
            user_experience.innerText = userData.experience;
            const destinationUrl = `shareResume.html?uuid=${encodeURIComponent(uuid)}`;
            const baseUrl = `${window.location.origin}${window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1)}`;
            share_resume.value = baseUrl + destinationUrl;
        }
        else {
            console.log("UUID not found in URL.");
        }
    });
}
fetchdata();
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
            const pdf = new jspdf.jsPDF("p", "mm", "a4");
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
document.addEventListener("click", (e) => {
    let targetedElement = e.target;
    console.log(targetedElement);
    if (targetedElement.classList.contains("editable_section")) {
        let input = document.createElement("input");
        targetedElement.replaceWith(input);
        input.value = targetedElement.innerText;
        input.focus();
        // Blur when Enter
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                input.blur();
            }
        });
        // Change the value on Blur
        input.addEventListener("blur", (e) => __awaiter(void 0, void 0, void 0, function* () {
            targetedElement.innerText = input.value;
            input.replaceWith(targetedElement);
            const databaseKey = targetedElement.dataset.dbKey;
            if (!databaseKey)
                return;
            if (uuid) {
                let sentData = yield updateData(uuid, { [databaseKey]: input.value });
                if (sentData) {
                    console.log("data updated");
                    console.log(databaseKey, "||", uuid);
                }
                else {
                    console.log("error");
                }
            }
        }));
    }
});
// share rusume functionality
let share_btn = document.getElementById("share_btn");
share_btn === null || share_btn === void 0 ? void 0 : share_btn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(share_resume.value).then(() => {
        share_btn.innerText = "Coppied";
    });
});
