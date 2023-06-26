// script.js

// Toggle Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// Smooth Scroll
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(e.target.getAttribute('href'));
    const offset = target.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let activeTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  testimonials[index].classList.add('active');
}

function nextTestimonial() {
  activeTestimonial++;
  if (activeTestimonial === testimonials.length) {
    activeTestimonial = 0;
  }
  showTestimonial(activeTestimonial);
}

function previousTestimonial() {
  activeTestimonial--;
  if (activeTestimonial < 0) {
    activeTestimonial = testimonials.length - 1;
  }
  showTestimonial(activeTestimonial);
}

// Initialize the first testimonial
showTestimonial(activeTestimonial);

// Display the next testimonial every 5 seconds
setInterval(nextTestimonial, 5000);
