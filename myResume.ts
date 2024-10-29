import { readData, updateData } from "./databaseService.js";

declare var html2canvas: any;
declare var jspdf: any;

const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get("uuid");

// Parse the URL parameters

interface UserProfile {
  careerObjective: string;
  cnic: string;
  contactNumber: string;
  dob: string;
  email: string;
  experience: string;
  fatherName: string;
  generalSkills: string;
  hobbies: string;
  languages: string;
  maritalStatus: string;
  name: string;
  religion: string;
  technicalSkills: string;
  userId: string;
}

// Personal Information
let name_heading = document.getElementById("name_heading") as HTMLHeadElement;
let user_contact = document.getElementById(
  "user_contact"
) as HTMLParagraphElement;
let user_email = document.getElementById("user_email") as HTMLParagraphElement;
let father_name = document.getElementById(
  "father_name"
) as HTMLTableCellElement;
let user_DOB = document.getElementById("user_DOB") as HTMLTableCellElement;
let user_cnic = document.getElementById("user_cnic") as HTMLTableCellElement;
let user_maritalStatus = document.getElementById(
  "user_maritalStatus"
) as HTMLTableCellElement;
let user_relagion = document.getElementById(
  "user_relagion"
) as HTMLTableCellElement;

// Career Objective
let career_objective = document.getElementById(
  "career_objective"
) as HTMLParagraphElement;

// Skills and Experiences
let technical_Skills = document.getElementById(
  "technical_Skills"
) as HTMLUListElement;
let user_generalSkills = document.getElementById(
  "user_generalSkills"
) as HTMLUListElement;
let user_Language = document.getElementById(
  "user_Language"
) as HTMLUListElement;
let user_hobbies = document.getElementById("user_hobbies") as HTMLUListElement;
let user_experience = document.getElementById(
  "user_experience"
) as HTMLUListElement;
let share_resume = document.getElementById("share_resume") as HTMLInputElement;

async function fetchdata() {
  if (uuid) {
    console.log("Retrieved UUID:", uuid);
    let userData = (await readData(uuid)) as UserProfile;
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
    share_resume.value = destinationUrl;
  } else {
    console.log("UUID not found in URL.");
  }
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
  downloadButton?.addEventListener("click", (e) => {
    e.preventDefault();
    const restoreStyles = applyDesktopStyles();

    html2canvas(cv, { scale: 2, useCORS: true })
      .then((canvas: any) => {
        const pdf = new jspdf.jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("cv.pdf");

        restoreStyles();
      })
      .catch((error: any) => {
        console.error("Error generating PDF:", error);
        restoreStyles();
      });
  });
}

DownloadResume();

document.addEventListener("click", (e) => {
  let targetedElement = e.target as HTMLElement;
  console.log(targetedElement);
  if (targetedElement.classList.contains("editable_section")) {
    let input = document.createElement("input") as HTMLInputElement;
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
    input.addEventListener("blur", async (e) => {
      targetedElement.innerText = input.value;
      input.replaceWith(targetedElement);
      const databaseKey = targetedElement.dataset.dbKey;
      if (!databaseKey) return;

      if (uuid) {
        let sentData = await updateData(uuid, { [databaseKey]: input.value });
        if (sentData) {
          console.log("data updated");
          console.log(databaseKey, "||", uuid);
        } else {
          console.log("error");
        }
      }
    });
  }
});

// share rusume functionality

let share_btn = document.getElementById("share_btn") as HTMLButtonElement

share_btn?.addEventListener("click", (e) => {
  navigator.clipboard.writeText(share_resume.value).then(()=>{
    share_btn.innerText = "Coppied"
  });
});
