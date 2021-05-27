const apps = document.querySelector(".apps-card");

let showApps = () => {
  if(apps.style.display === "none") {
    apps.style.display = "block";
    console.log(apps.style.display);
  }
  else {
    apps.style.display = "none";
  }
}