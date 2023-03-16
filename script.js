// const shareBtn = document.getElementById("profile-share-button");

// const active = document.getElementById("active");

// const shareBtn2 = document.getElementById("profile-share-button-2");

// console.log("hello");


// shareBtn.addEventListener('click', ()=> {
//     active.classList.toggle('active-state');
// })

// shareBtn2.addEventListener('click', ()=> {
//     active.classList.toggle('active-state');
// })





// Select the share buttons and the element to toggle
const shareButtons = document.querySelectorAll(".profile-share-button");
const activeElement = document.getElementById("active");

// Add a click event listener to each share button
shareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeElement.classList.toggle("active-state");
  });
});


