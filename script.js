// Mobile Navbar Toggle
const navLinks = document.querySelector(".nav-links");
const brand = document.querySelector(".brand");

// Create a menu toggle button for mobile view
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "&#9776;"; // Hamburger icon
navLinks.parentNode.insertBefore(menuToggle, navLinks);

// Toggle the navigation links on menu click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Handle Order Button Clicks
const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thank you for your order! We will contact you shortly.");
  });
});

// Handle Contact Form Submission
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Simple validation can be added here
  alert("Thank you for contacting us! We will get back to you soon.");
  contactForm.reset();
});

// scripts/main.js

document.addEventListener("DOMContentLoaded", function () {
  const classTypeSelect = document.getElementById("class-type");
  const customDetailsDiv = document.getElementById("custom-class-details");
  const bookingForm = document.getElementById("class-booking-form");

  // Show or hide the custom details textarea based on class type selection
  classTypeSelect.addEventListener("change", function () {
    if (this.value === "custom") {
      customDetailsDiv.style.display = "block";
    } else {
      customDetailsDiv.style.display = "none";
    }
  });

  // Handle form submission
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Simple form validation (can be expanded as needed)
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const classDate = document.getElementById("class-date").value;
    const classTime = document.getElementById("class-time").value;
    const classType = document.getElementById("class-type").value;
    const customDetails = document
      .getElementById("custom-details")
      .value.trim();

    if (
      !fullName ||
      !email ||
      !phone ||
      !classDate ||
      !classTime ||
      !classType
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (classType === "custom" && !customDetails) {
      alert("Please provide details for your custom class.");
      return;
    }

    // Here you can handle the form data, e.g., send it to a server
    // For demonstration, we'll just display a success message
    alert("Thank you for booking a class! We will contact you shortly.");

    // Reset the form
    bookingForm.reset();
    customDetailsDiv.style.display = "none";
  });
});
