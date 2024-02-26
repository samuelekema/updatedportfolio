
alert("This is a nail saloon site. Built with HTML CSS and JS. Has modern pages such as login pages and appointment pages")
//BACKGROUND SLIDE//
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "inline-block";
  setTimeout(displayImages, 2000); 
}
//END..//