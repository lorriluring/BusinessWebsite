/* Select all gallery images so they can be interacted with */
const galleryImages =
    document.querySelectorAll(".gallery img");
/* Select the lightbox overlay used for enlarged images */
const lightbox =
    document.querySelector(".lightbox");
/* Select the image element displayed inside the lightbox */
const lightboxImage =
    document.querySelector("#lightbox-image");
/* Add click functionality to every gallery image */
galleryImages.forEach(image => {
/* Open the lightbox and display the selected image */
    image.addEventListener("click", () => {
/* Make the lightbox visible */
        lightbox.style.display = "flex";
/* Load the clicked image into the lightbox */
        lightboxImage.src = image.src;
    });

});
/* Allow users to close the lightbox by clicking anywhere on it */
lightbox.addEventListener("click", () => {
/* Hide the lightbox when it is no longer needed */
    lightbox.style.display = "none";


});
/* Select all FAQ questions for interactive behavior */
const questions = document.querySelectorAll(".faq-question");
/* Add click functionality to each FAQ question */
questions.forEach(question => {
/* Toggle the visibility of the related FAQ answer */
    question.addEventListener("click", () => {
/* Select the answer associated with the clicked question */
        const answer =
            question.nextElementSibling;
/* Check whether the answer is currently visible
   and switch between visible and hidden states */
        if (answer.style.display === "block") {
            /* Hide the answer if it is already visible */
            answer.style.display = "none";
        } else {
            /* Display the answer when the question is clicked */
            answer.style.display = "block";
        }

    });

});


