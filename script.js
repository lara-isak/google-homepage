const apps = document.querySelector(".apps-card");
const appsIcon = document.querySelector(".apps-icon");
const body = document.querySelector("body");

function toggleApps() {
  if(apps.style.display === "grid") {
    apps.style.display = "none";
    appsIcon.classList.remove("apps-icon-clicked");
  }
  else {
    apps.style.display = "grid";
    appsIcon.classList.add("apps-icon-clicked");
  }
}