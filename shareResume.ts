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
    user_maritalStatus.innerText = userData.maritalStatus;
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
  } else {
    console.log("UUID not found in URL.");
  }
}

fetchdata();