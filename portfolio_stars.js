

const homepg = document.getElementById("home");

if(window.location.href="#home"){
  homepg.classList.add("animate");
} else {
  homepg.classList.remove("animate");
}