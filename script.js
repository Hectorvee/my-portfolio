// Initialize Typed.js for typing effect on specified element
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
        strings: [
            "A Data Scientist in the making",
            "Passionate about Machine Learning",
            "Exploring the world of Artificial Intelligence",
            "Software Engineer and Problem Solver",
            "Lifelong Learner in Data Science",
            "Turning Data into Insight",
            "Aspiring Quant Developer",
            "Statistics Enthusiast",
            "Coding with Purpose"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle'); // Mobile menu toggle button
const navMenu = document.querySelector('nav ul'); // Navigation menu

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle active class on menu
    });
}

// Skill Progress Bars - Update the width based on data-skill-level attribute
window.onload = function () {
    const progressBars = document.querySelectorAll('.skill-bar'); // Skill bars elements
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill-level'); // Get skill level
        bar.style.width = value; // Set width based on skill level
    });
};

// Back to Top Button - Create and manage a back to top button
const backToTopButton = document.createElement('button'); // Create button element
backToTopButton.innerText = '↑ Back to Top'; // Set button text
backToTopButton.id = 'back-to-top'; // Set button ID
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.position = 'fixed'; // Fixed position
backToTopButton.style.bottom = '20px'; // Position from bottom
backToTopButton.style.right = '20px'; // Position from right
backToTopButton.style.padding = '10px 15px'; // Button padding
backToTopButton.style.border = 'none'; // No border
backToTopButton.style.borderRadius = '5px'; // Rounded corners
backToTopButton.style.backgroundColor = '#387478'; // Background color
backToTopButton.style.color = '#E2F1E7'; // Text color
backToTopButton.style.cursor = 'pointer'; // Pointer cursor on hover

document.body.appendChild(backToTopButton); // Add button to the body

// Show/hide back to top button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Scroll to top when button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth behavior
};

// Select modal and close button
const modal = document.getElementById("projectModal"); // Modal element
const closeModalBtn = document.querySelector(".close"); // Close button for modal

// Function to open modal with project details
function openModal(projectTitle, projectDescription) {
    const modalTitle = modal.querySelector(".modal-title");
    const modalContent = modal.querySelector(".modal-content");

    modalTitle.textContent = projectTitle; // Set modal title
    modalContent.textContent = projectDescription; // Set modal content

    modal.style.display = "block"; // Show the modal
}

// Function to close modal
function closeModal() {
    modal.style.display = "none"; // Hide the modal
}

// Event listener for project links to open modal
const projectLinks = document.querySelectorAll(".project a");
projectLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const projectTitle = link.parentElement.querySelector("h3").textContent; // Get project title
        const projectDescription = link.parentElement.querySelector("p").textContent; // Get project description
        openModal(projectTitle, projectDescription); // Open modal with details
    });
});

// Event listener for closing modal
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal(); // Close modal if clicked outside
    }
});

// Function to copy email to clipboard
function copyEmail() {
    const email = "your-email@example.com"; // Replace with your actual email
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copied to clipboard: " + email); // Confirmation alert
        })
        .catch(err => {
            console.error("Failed to copy: ", err); // Log error if copying fails
        });
}

// Adding event listener to email link for copying email
document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector('.contact-item a[data-type="email"]');
    emailLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        copyEmail(); // Call the copy function
    });
});

// Toggle details visibility for education items
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const educationItem = button.closest('.education-item'); // Find the closest education item
            const content = educationItem.querySelector('.education-content'); // Find content to toggle

            // Toggle visibility of the content
            if (content.style.display === 'block') {
                content.style.display = 'none'; // Hide content
                button.textContent = 'More';  // Change button text to "More"
            } else {
                content.style.display = 'block'; // Show content
                button.textContent = 'Less';  // Change button text to "Less"
            }

            // Smooth transition for content visibility
            content.style.transition = 'all 0.3s ease'; // Set transition for smooth effect
        });
    });
});

// Toggle details visibility for certification items
document.addEventListener("DOMContentLoaded", function () {
    const toggleCertificationButtons = document.querySelectorAll('.toggle-certification');

    toggleCertificationButtons.forEach(button => {
        button.addEventListener('click', function () {
            const certificationItem = button.closest('.certification-item'); // Find the closest certification item
            const details = certificationItem.querySelector('.certification-details'); // Find details to toggle

            // Toggle visibility of the content
            if (details.style.display === 'block') {
                details.style.display = 'none'; // Hide details
                button.textContent = 'More';  // Change button text to "More"
            } else {
                details.style.display = 'block'; // Show details
                button.textContent = 'Less';  // Change button text to "Less"
            }

            // Smooth transition for content visibility
            details.style.transition = 'all 0.3s ease'; // Set transition for smooth effect
        });
    });
});

// Change navbar background color on scroll
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const heroHeight = document.getElementById("hero").offsetHeight; // Get height of hero section

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroHeight) {
            navbar.style.backgroundColor = "#243642"; // Change to solid color when scrolled past hero
        } else {
            navbar.style.backgroundColor = "rgba(36, 54, 66, 0.5)"; // Change back to transparent
        }
    });
});
