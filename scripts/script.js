const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imgSlides = document.querySelectorAll(".slider");

let counter = 0;

function addActiveClass() {
  // Remove active classes
  imgSlides.forEach((item) => {
    item.classList.remove("active");
  });

  // Add active class to current element
  imgSlides[counter].classList.add("active");
}

// Add click event to each element

nextBtn.addEventListener("click", () => {
  if (counter < imgSlides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  addActiveClass();
});

prevBtn.addEventListener("click", () => {
    if (counter > 0) {  
      // Decrement if counter is not already at 0
      counter--; 
    } else {
      // Reset to start over at beginning
      counter = imgSlides.length - 1; 
    }
  
    addActiveClass();
  });
  