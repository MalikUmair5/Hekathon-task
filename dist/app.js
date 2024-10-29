var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { writeData } from "./databaseService.js";
// Input onchange functionality to show realtime updates
const inputs = document.querySelectorAll("input");
// Function to handle input change
function handleInputChange(event) {
    const inputElement = event.target; // Type assertion to HTMLInputElement
    console.log(inputElement.value);
    let elementTochange = inputElement.dataset.targetedElement;
    if (!elementTochange) {
        return;
    }
    let element = document.getElementById(elementTochange);
    if (element) {
        element.textContent = inputElement.value;
    }
}
// Iterate through each input element and add an event listener
inputs.forEach((input) => {
    input.addEventListener("input", handleInputChange); // Use 'input' event for real-time updates
});
// Validate all inputs and submit butotn funcationality
const submit_btn = document.getElementById("submit_btn");
let name_input = document.getElementById("name_input");
let contact_number_input = document.getElementById("contact_number_input");
let email_input = document.getElementById("email_input");
let dob_input = document.getElementById("dob_input");
let father_name_Input = document.getElementById("father_name_Input");
let cnic_input = document.getElementById("cnic_input");
let career_objective_input = document.getElementById("career_objective_input");
let user_experience = document.getElementById("experience");
let technical_skills_input = document.getElementById("technical_skills_input");
let general_skills_input = document.getElementById("general_skills_input");
let languages_input = document.getElementById("languages_input");
let hobbies_input = document.getElementById("hobbies_input");
let religion_input = document.getElementById("religion_input");
let marital_status_input = document.getElementById("marital_status_input");
submit_btn === null || submit_btn === void 0 ? void 0 : submit_btn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const name = name_input.value;
    const contactNumber = contact_number_input.value;
    const email = email_input.value;
    const dob = dob_input.value;
    const fatherName = father_name_Input.value;
    const cnic = cnic_input.value;
    const careerObjective = career_objective_input.value;
    const experience = user_experience.value;
    const technicalSkills = technical_skills_input.value;
    const generalSkills = general_skills_input.value;
    const languages = languages_input.value;
    const hobbies = hobbies_input.value;
    const religion = religion_input.value;
    const maritalStatus = marital_status_input.value;
    const phoneRegex = /^[\d\s()+-]+$/;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const cnicRegex = /^\d{13}$/;
    if (name.length < 3) {
        console.log("Valid name is required");
        name_input.placeholder = "Valid name is required";
        name_input.classList.add("error");
    }
    else if (!phoneRegex.test(contactNumber)) {
        console.log("Valid contact number is required");
    }
    else if (!emailRegex.test(email)) {
        console.log("Valid email is required");
    }
    else if (!dob) {
        console.log("Date of birth is required");
    }
    else if (fatherName.length < 3) {
        console.log("Valid father's name is required");
    }
    else if (!cnicRegex.test(cnic)) {
        console.log("Valid CNIC is required (13 digits)");
    }
    else if (experience.length < 3) {
        console.log("Experience details are required");
    }
    else if (technicalSkills.length < 3) {
        console.log("At least one technical skill is required");
    }
    else if (generalSkills.length < 3) {
        console.log("At least one general skill is required");
    }
    else if (languages.length < 2) {
        console.log("Languages cannot be empty");
    }
    else if (hobbies.length < 2) {
        console.log("Hobbies cannot be empty");
    }
    else if (religion.length < 3) {
        console.log("Religion is required");
    }
    else if (maritalStatus.length < 3) {
        console.log("Marital status is required");
    }
    else {
        const userId = crypto.randomUUID(); // Generate a unique ID
        const data = {
            userId,
            name,
            contactNumber,
            email,
            dob,
            fatherName,
            cnic,
            careerObjective,
            experience,
            technicalSkills,
            generalSkills,
            languages,
            hobbies,
            religion,
            maritalStatus,
        };
        const datawrite = yield writeData(userId, data);
        if (datawrite) {
            console.log("Data sent successfully");
            const destinationUrl = `myResume.html?uuid=${encodeURIComponent(userId)}`;
            window.location.href = destinationUrl;
        }
        else {
            console.log("Some error occurred");
        }
    }
}));
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
//edit elements after creating cv
