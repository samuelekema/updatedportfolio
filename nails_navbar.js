
function menuClick(){
    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click", function(){
        const dropdown = document.querySelector(".dropdown");
        menuBar.classList.toggle("change");
        dropdown.classList.toggle("drop");
    })

}

menuClick();



/****NAVBAR on SCROLL ****/

// Get the element to animate
const element1 = document.getElementById('about');
const element2 = document.getElementById("contact");
const element3 = document.getElementById("services");
const element4 = document.getElementById("photos");
const element5 = document.querySelector(".extra");


// Define the options for the Intersection Observer
const options = {
root: null,
rootMargin: '0px',
threshold: 0.5
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
  // If element is in viewport, add the 'show' class to trigger the animation
  if (entry.isIntersecting) {
    element1.classList.add('fadeAnimation');
    element2.classList.add('fadeAnimation');
    element3.classList.add("fadeAnimation");
    element4.classList.add("fadeAnimation");
    element5.classList.add("fadeAnimation");

  }
  else {
    element1.classList.remove('fadeAnimation');
    element2.classList.remove('fadeAnimation');
    element3.classList.remove('fadeAnimation');
    element4.classList.remove('fadeAnimation');
    element5.classList.remove('fadeAnimation');

  }
});
}, options);

// Start observing the element
observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);
observer.observe(element5);
