const apps = document.querySelector(".apps-card");
const appsIcon = document.querySelector(".apps-icon"); 

function showApps() {
  if(apps.style.display === "block") {
    apps.style.display = "none";
    appsIcon.classList.remove("apps-icon-clicked");
  }
  else {
    apps.style.display = "block";
    appsIcon.classList.add("apps-icon-clicked");
  }
}