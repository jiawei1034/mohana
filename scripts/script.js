document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.main-image .slide');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Set the interval for the slideshow (e.g., 3000 milliseconds = 3 seconds)
  setInterval(nextSlide, 3000);
});

$(document).ready(function() {
    $('#open-popup').click(function() {
        $('#popup').removeClass('hidden');
    });
    
    $('.popup-overlay, .close-button').click(function() {
        $('#popup').addClass('hidden');
    });
});
