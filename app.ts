// ? Milestone 1

let toogle_button = document.getElementById("toogle_button");
let general_skills = document.getElementById("general_skills");

toogle_button?.addEventListener("click", (e) => {
  e.preventDefault();
  if (general_skills && toogle_button) {
    if (toogle_button.innerText === "Hide General Skills") {
      general_skills.style.display = "none";
      toogle_button.innerText = "Show General Skills";
    } else if (toogle_button.innerText === "Show General Skills") {
      general_skills.style.display = "block";
      toogle_button.innerText = "Hide General Skills";
    }
  }
});

// ? Milestone 2

let listingforexperince: string[] = [];
let listingfortechnicalskills: string[] = [];
let listingforgeneralskills: string[] = [];
let listingforlanguages: string[] = [];
let listingforhobbies: string[] = [];

document.body.addEventListener("click", (e) => {
  let add_button = e.target as HTMLElement;
  if (add_button.classList.contains("add_button")) {
    e.preventDefault();
    console.log(add_button);
    let previousSibling = add_button?.previousSibling
      ?.previousSibling as HTMLInputElement;
    if (previousSibling.value === "") {
      console.log("Please enter the value");
      previousSibling.placeholder = "Please enther the value";
      previousSibling.style.borderBottom = "2px solid red";
    } else {
      console.log("hello Pakistan");
      console.log();
      if (previousSibling.previousElementSibling?.innerHTML == "Experience:") {
        listingforexperince.push(previousSibling.value);
        console.log(listingforexperince);
        previousSibling.value = "";
        previousSibling.placeholder = "Enter your experience";
        previousSibling.style.borderBottom = "2px solid black";
        const newHtml = listingforexperince
          .map(
            (experience, id) =>
              `<li id="experience-${id}">${experience}
              <button data-id="${id}" class="del_button">Delete</button>
            </li>`
          )
          .join("");
        let divContainer = add_button.nextElementSibling as HTMLDivElement;
        divContainer.innerHTML = `<ul>${newHtml}</ul>`;
      }
      if (
        previousSibling.previousElementSibling?.innerHTML == "Technical Skills:"
      ) {
        listingfortechnicalskills.push(previousSibling.value);
        console.log(listingfortechnicalskills);
        previousSibling.value = "";
        previousSibling.placeholder = "Enter your the value";
        previousSibling.style.borderBottom = "2px solid black";
        const newHtml = listingfortechnicalskills
          .map(
            (item, id) =>
              `<li id="experience-${id}">${item}
              <button data-id="${id}" class="del_button">Delete</button>
            </li>`
          )
          .join("");
        let divContainer = add_button.nextElementSibling as HTMLDivElement;
        divContainer.innerHTML = `<ul>${newHtml}</ul>`;
      }
      if (
        previousSibling.previousElementSibling?.innerHTML == "General Skills:"
      ) {
        listingforgeneralskills.push(previousSibling.value);
        console.log(listingforexperince);
        previousSibling.value = "";
        previousSibling.placeholder = "Enter your the value";
        previousSibling.style.borderBottom = "2px solid black";
        const newHtml = listingforgeneralskills
          .map(
            (item, id) =>
              `<li id="experience-${id}">${item}
              <button data-id="${id}" class="del_button">Delete</button>
            </li>`
          )
          .join("");
        let divContainer = add_button.nextElementSibling as HTMLDivElement;
        divContainer.innerHTML = `<ul>${newHtml}</ul>`;
      }
      if (previousSibling.previousElementSibling?.innerHTML == "Hobbies:") {
        listingforhobbies.push(previousSibling.value);
        console.log(listingforhobbies);
        previousSibling.value = "";
        previousSibling.placeholder = "Enter your the value";
        previousSibling.style.borderBottom = "2px solid black";
        const newHtml = listingforhobbies
          .map(
            (item, id) =>
              `<li id="experience-${id}">${item}
              <button data-id="${id}" class="del_button">Delete</button>
            </li>`
          )
          .join("");
        let divContainer = add_button.nextElementSibling as HTMLDivElement;
        divContainer.innerHTML = `<ul>${newHtml}</ul>`;
      }
      if (previousSibling.previousElementSibling?.innerHTML == "Languages:") {
        listingforlanguages.push(previousSibling.value);
        console.log(listingforlanguages);
        previousSibling.value = "";
        previousSibling.placeholder = "Enter your the value";
        previousSibling.style.borderBottom = "2px solid black";
        const newHtml = listingforlanguages
          .map(
            (item, id) =>
              `<li id="experience-${id}">${item}
              <button data-id="${id}" class="del_button">Delete</button>
            </li>`
          )
          .join("");
        let divContainer = add_button.nextElementSibling as HTMLDivElement;
        divContainer.innerHTML = `<ul>${newHtml}</ul>`;
      }
    }
  }
});

// Personal Information
const user_name = document.getElementById("name_input") as HTMLInputElement;
const profile_picture_input = document.getElementById(
  "profile_picture_input"
) as HTMLInputElement;
const contactNumber = document.getElementById(
  "contact_number_input"
) as HTMLInputElement;
const email = document.getElementById("email_input") as HTMLInputElement;
const dob = document.getElementById("dob_input") as HTMLInputElement;

// Family Information
const fatherName = document.getElementById(
  "father_name_Input"
) as HTMLInputElement;
const cnic = document.getElementById("cnic_input") as HTMLInputElement;

// Professional Information
const careerObjective = document.getElementById(
  "career_objective_input"
) as HTMLInputElement;
const experience = document.getElementById("experience") as HTMLInputElement;
const technicalSkills = document.getElementById(
  "technical_skills_input"
) as HTMLInputElement;
const generalSkills = document.getElementById(
  "general_skills_input"
) as HTMLInputElement;

// Additional Information
const languages = document.getElementById(
  "languages_input"
) as HTMLInputElement;
const hobbies = document.getElementById("hobbies_input") as HTMLInputElement;
const religion = document.getElementById("religion_input") as HTMLInputElement;
const maritalStatus = document.getElementById(
  "marital_status_input"
) as HTMLInputElement;

let name_heading = document.getElementById("name_heading");
let profile_picture = document.getElementById(
  "profile_picture"
) as HTMLImageElement;
let user_contact = document.getElementById("user_contact");
let user_email = document.getElementById("user_email");
let user_Language = document.getElementById("user_Language");
let user_hobbies = document.getElementById("user_hobbies");
let career_objective = document.getElementById("career_objective");
let father_name = document.getElementById("father_name");
let user_DOB = document.getElementById("user_DOB");
let user_cnic = document.getElementById("user_cnic");
let user_maritalStatus = document.getElementById("user_maritalStatus");
let user_relagion = document.getElementById("user_relagion");
let user_experience = document.getElementById("user_experience");
let technical_Skills = document.getElementById("technical_Skills");
let user_generalSkills = document.getElementById("user_generalSkills");



document.getElementById("submit_button")?.addEventListener("click", (e) => {
  e.preventDefault();

  // First, update the profile picture (if any)
  const file = profile_picture_input.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profile_picture_input.src = e.target?.result as string;
      if (profile_picture) {
        profile_picture.src = profile_picture_input.src;
      }
    };
    reader.readAsDataURL(file);
  }

  // Validate the text inputs
  const validateInput = (input: HTMLInputElement, placeholder: string) => {
    if (input.value.trim() === "") {
      input.placeholder = `Please enter ${placeholder}`;
      input.style.borderBottom = "2px solid red";
      return false;
    } else {
      input.style.borderBottom = "2px solid black";
      return true;
    }
  };

  // Validate list inputs
  const validateList = (list: string[], listName: string) => {
    if (list.length === 0) {
      alert(`Please add at least one item to ${listName}`);
      return false;
    }
    return true;
  };

  const isPersonalInfoValid =
    validateInput(user_name, "your name") &&
    validateInput(contactNumber, "your contact number") &&
    validateInput(email, "your email") &&
    validateInput(dob, "your date of birth") &&
    validateInput(fatherName, "your father's name") &&
    validateInput(cnic, "your CNIC number") &&
    validateInput(religion, "your religion") &&
    validateInput(maritalStatus, "your marital status");

  const isExperienceValid = validateList(listingforexperince, "Experience");
  const isTechnicalSkillsValid = validateList(listingfortechnicalskills, "Technical Skills");
  const isGeneralSkillsValid = validateList(listingforgeneralskills, "General Skills");
  const isLanguagesValid = validateList(listingforlanguages, "Languages");
  const isHobbiesValid = validateList(listingforhobbies, "Hobbies");

  if (
    isPersonalInfoValid &&
    isExperienceValid &&
    isTechnicalSkillsValid &&
    isGeneralSkillsValid &&
    isLanguagesValid &&
    isHobbiesValid
  ) {
    // Update the UI elements after validation
    name_heading!.innerText = user_name.value;
    user_contact!.innerText = contactNumber.value;
    user_email!.innerText = email.value;
    career_objective!.innerText = careerObjective.value;
    father_name!.innerText = fatherName.value;
    user_DOB!.innerText = dob.value;
    user_cnic!.innerText = cnic.value;
    user_relagion!.innerText = religion.value;
    user_maritalStatus!.innerText = maritalStatus.value;

    // Update the list of languages
    user_Language!.innerHTML = listingforlanguages
      .map((item) => `<li>${item}</li>`)
      .join("");
    user_experience!.innerHTML = listingforexperince
      .map((item) => `<li>${item}</li>`)
      .join("");
    technical_Skills!.innerHTML = listingfortechnicalskills
      .map((item) => `<li>${item}</li>`)
      .join("");
    user_generalSkills!.innerHTML = listingforgeneralskills
      .map((item) => `<li>${item}</li>`)
      .join("");
    user_hobbies!.innerHTML = listingforhobbies
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
});

