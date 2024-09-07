// ? Milestone 1

let toogle_button = document.getElementById("toogle_button");
let general_skills = document.getElementById("general_skills");

toogle_button?.addEventListener("click", () => {
  if (general_skills && toogle_button) {
    if (toogle_button.innerText === "Hide General Skills") {
      console.log("hello Pakistan");
      general_skills.style.display = "none";
      toogle_button.innerText = "Show General Skills";
    } else if (toogle_button.innerText === "Show General Skills") {
      console.log("hello Pakistan");
      general_skills.style.display = "block";
      toogle_button.innerText = "Hide General Skills";
    }
  }
});
