// ? Milestone 1
var _a;
var toogle_button = document.getElementById("toogle_button");
var general_skills = document.getElementById("general_skills");
toogle_button === null || toogle_button === void 0 ? void 0 : toogle_button.addEventListener("click", function () {
    if (general_skills && toogle_button) {
        if (toogle_button.innerText === "Hide General Skills") {
            console.log("hello Pakistan");
            general_skills.style.display = "none";
            toogle_button.innerText = "Show General Skills";
        }
        else if (toogle_button.innerText === "Show General Skills") {
            console.log("hello Pakistan");
            general_skills.style.display = "block";
            toogle_button.innerText = "Hide General Skills";
        }
    }
});
// ? Milestone 2
var listingforexperince = [];
var listingfortechnicalskills = [];
var listingforgeneralskills = [];
var listingforlanguages = [];
var listingforhobbies = [];
document.body.addEventListener("click", function (e) {
    var _a, _b, _c, _d, _e, _f;
    var add_button = e.target;
    if (add_button.classList.contains("add_button")) {
        e.preventDefault();
        console.log(add_button);
        var previousSibling = (_a = add_button === null || add_button === void 0 ? void 0 : add_button.previousSibling) === null || _a === void 0 ? void 0 : _a.previousSibling;
        if (previousSibling.value === "") {
            console.log("Please enter the value");
            previousSibling.placeholder = "Please enther the value";
            previousSibling.style.borderBottom = "2px solid red";
        }
        else {
            console.log("hello Pakistan");
            console.log();
            if (((_b = previousSibling.previousElementSibling) === null || _b === void 0 ? void 0 : _b.innerHTML) == "Experience:") {
                listingforexperince.push(previousSibling.value);
                console.log(listingforexperince);
                previousSibling.value = "";
                previousSibling.placeholder = "Enter your experience";
                previousSibling.style.borderBottom = "2px solid black";
                var newHtml = listingforexperince
                    .map(function (experience, id) {
                    return "<li id=\"experience-".concat(id, "\">").concat(experience, "\n              <button data-id=\"").concat(id, "\" class=\"del_button\">Delete</button>\n            </li>");
                })
                    .join("");
                var divContainer = add_button.nextElementSibling;
                divContainer.innerHTML = "<ul>".concat(newHtml, "</ul>");
            }
            if (((_c = previousSibling.previousElementSibling) === null || _c === void 0 ? void 0 : _c.innerHTML) == "Technical Skills:") {
                listingfortechnicalskills.push(previousSibling.value);
                console.log(listingfortechnicalskills);
                previousSibling.value = "";
                previousSibling.placeholder = "Enter your the value";
                previousSibling.style.borderBottom = "2px solid black";
                var newHtml = listingfortechnicalskills
                    .map(function (item, id) {
                    return "<li id=\"experience-".concat(id, "\">").concat(item, "\n              <button data-id=\"").concat(id, "\" class=\"del_button\">Delete</button>\n            </li>");
                })
                    .join("");
                var divContainer = add_button.nextElementSibling;
                divContainer.innerHTML = "<ul>".concat(newHtml, "</ul>");
            }
            if (((_d = previousSibling.previousElementSibling) === null || _d === void 0 ? void 0 : _d.innerHTML) == "General Skills:") {
                listingforgeneralskills.push(previousSibling.value);
                console.log(listingforexperince);
                previousSibling.value = "";
                previousSibling.placeholder = "Enter your the value";
                previousSibling.style.borderBottom = "2px solid black";
                var newHtml = listingforgeneralskills
                    .map(function (item, id) {
                    return "<li id=\"experience-".concat(id, "\">").concat(item, "\n              <button data-id=\"").concat(id, "\" class=\"del_button\">Delete</button>\n            </li>");
                })
                    .join("");
                var divContainer = add_button.nextElementSibling;
                divContainer.innerHTML = "<ul>".concat(newHtml, "</ul>");
            }
            if (((_e = previousSibling.previousElementSibling) === null || _e === void 0 ? void 0 : _e.innerHTML) == "Hobbies:") {
                listingforhobbies.push(previousSibling.value);
                console.log(listingforhobbies);
                previousSibling.value = "";
                previousSibling.placeholder = "Enter your the value";
                previousSibling.style.borderBottom = "2px solid black";
                var newHtml = listingforhobbies
                    .map(function (item, id) {
                    return "<li id=\"experience-".concat(id, "\">").concat(item, "\n              <button data-id=\"").concat(id, "\" class=\"del_button\">Delete</button>\n            </li>");
                })
                    .join("");
                var divContainer = add_button.nextElementSibling;
                divContainer.innerHTML = "<ul>".concat(newHtml, "</ul>");
            }
            if (((_f = previousSibling.previousElementSibling) === null || _f === void 0 ? void 0 : _f.innerHTML) == "Languages:") {
                listingforlanguages.push(previousSibling.value);
                console.log(listingforlanguages);
                previousSibling.value = "";
                previousSibling.placeholder = "Enter your the value";
                previousSibling.style.borderBottom = "2px solid black";
                var newHtml = listingforlanguages
                    .map(function (item, id) {
                    return "<li id=\"experience-".concat(id, "\">").concat(item, "\n              <button data-id=\"").concat(id, "\" class=\"del_button\">Delete</button>\n            </li>");
                })
                    .join("");
                var divContainer = add_button.nextElementSibling;
                divContainer.innerHTML = "<ul>".concat(newHtml, "</ul>");
            }
        }
    }
});
// Personal Information
var user_name = document.getElementById("name_input");
var profile_picture_input = document.getElementById("profile_picture_input");
var contactNumber = document.getElementById("contact_number_input");
var email = document.getElementById("email_input");
var dob = document.getElementById("dob_input");
// Family Information
var fatherName = document.getElementById("father_name_Input");
var cnic = document.getElementById("cnic_input");
// Professional Information
var careerObjective = document.getElementById("career_objective_input");
var experience = document.getElementById("experience");
var technicalSkills = document.getElementById("technical_skills_input");
var generalSkills = document.getElementById("general_skills_input");
// Additional Information
var languages = document.getElementById("languages_input");
var hobbies = document.getElementById("hobbies_input");
var religion = document.getElementById("religion_input");
var maritalStatus = document.getElementById("marital_status_input");
var name_heading = document.getElementById("name_heading");
var profile_picture = document.getElementById("profile_picture");
var user_contact = document.getElementById("user_contact");
var user_email = document.getElementById("user_email");
var user_Language = document.getElementById("user_Language");
var user_hobbies = document.getElementById("user_hobbies");
var career_objective = document.getElementById("career_objective");
var father_name = document.getElementById("father_name");
var user_DOB = document.getElementById("user_DOB");
var user_cnic = document.getElementById("user_cnic");
var user_maritalStatus = document.getElementById("user_maritalStatus");
var user_relagion = document.getElementById("user_relagion");
var user_experience = document.getElementById("user_experience");
var technical_Skills = document.getElementById("technical_Skills");
var user_generalSkills = document.getElementById("user_generalSkills");
(_a = document.getElementById("submit_button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    // First, update the profile picture (if any)
    var file = (_a = profile_picture_input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profile_picture_input.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            if (profile_picture) {
                profile_picture.src = profile_picture_input.src;
            }
        };
        reader.readAsDataURL(file);
    }
    if (name_heading &&
        user_contact &&
        user_email &&
        user_Language &&
        user_hobbies &&
        career_objective &&
        father_name &&
        user_DOB &&
        user_cnic &&
        user_maritalStatus &&
        user_relagion &&
        user_experience &&
        technical_Skills &&
        user_generalSkills) {
        name_heading.innerText = user_name.value;
        user_contact.innerText = contactNumber.value;
        user_email.innerText = email.value;
        career_objective.innerText = careerObjective.value;
        father_name.innerText = fatherName.value;
        user_DOB.innerText = dob.value;
        user_cnic.innerText = cnic.value;
        user_relagion.innerText = religion.value;
        user_maritalStatus.innerText = maritalStatus.value;
        // Update the list of languages
        user_Language.innerHTML = listingforlanguages
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join("");
        user_experience.innerHTML = listingforexperince
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join("");
        technical_Skills.innerHTML = listingfortechnicalskills
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join("");
        user_generalSkills.innerHTML = listingforgeneralskills
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join("");
        user_hobbies.innerHTML = listingforhobbies
            .map(function (item) { return "<li>".concat(item, "</li>"); })
            .join("");
    }
});
