// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Skill Progress Bars
window.onload = function () {
    const progressBars = document.querySelectorAll('.skill-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill-level');
        bar.style.width = value; // Set width based on skill level
    });
};

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Back to Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.backgroundColor = '#387478';
backToTopButton.style.color = '#E2F1E7';
backToTopButton.style.cursor = 'pointer';

document.body.appendChild(backToTopButton);

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
};

// Select modal and close button
const modal = document.getElementById("projectModal");
const closeModalBtn = document.querySelector(".close");

// Function to open modal
function openModal(projectTitle, projectDescription) {
    const modalTitle = modal.querySelector(".modal-title");
    const modalContent = modal.querySelector(".modal-content");

    modalTitle.textContent = projectTitle;
    modalContent.textContent = projectDescription;

    modal.style.display = "block"; // Show the modal
}

// Function to close modal
function closeModal() {
    modal.style.display = "none"; // Hide the modal
}

// Event listener for project links
const projectLinks = document.querySelectorAll(".project a");
projectLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const projectTitle = link.parentElement.querySelector("h3").textContent;
        const projectDescription = link.parentElement.querySelector("p").textContent;
        openModal(projectTitle, projectDescription);
    });
});
// Event listener for closing modal
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Function to copy email to clipboard
function copyEmail() {
    const email = "your-email@example.com"; // Replace with your actual email
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copied to clipboard: " + email);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

// Adding event listener to email link
document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector('.contact-item a[data-type="email"]');
    emailLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        copyEmail(); // Call the copy function
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const educationItem = button.closest('.education-item');
            const content = educationItem.querySelector('.education-content');

            // Toggle visibility of the content
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.textContent = 'More';  // Change button text to "More"
            } else {
                content.style.display = 'block';
                button.textContent = 'Less';  // Change button text to "Less"
            }

            // Smooth transition for content visibility
            content.style.transition = 'all 0.3s ease';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleCertificationButtons = document.querySelectorAll('.toggle-certification');

    toggleCertificationButtons.forEach(button => {
        button.addEventListener('click', function () {
            const certificationItem = button.closest('.certification-item');
            const details = certificationItem.querySelector('.certification-details');

            // Toggle visibility of the content
            if (details.style.display === 'block') {
                details.style.display = 'none';
                button.textContent = 'More';  // Change button text to "More"
            } else {
                details.style.display = 'block';
                button.textContent = 'Less';  // Change button text to "Less"
            }

            // Smooth transition for content visibility
            details.style.transition = 'all 0.3s ease';
        });
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = navbar.querySelector('ul');

    // Toggle the mobile menu
    mobileMenu.addEventListener("click", function () {
        navList.classList.toggle('show'); // Toggle the "show" class
    });

    // Scroll event to change navbar transparency
    const heroHeight = document.getElementById("hero").offsetHeight; // Get height of hero section

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroHeight) {
            navbar.style.backgroundColor = "#243642"; // Change to solid color when scrolled past hero
        } else {
            navbar.style.backgroundColor = "rgba(36, 54, 66, 0.5)"; // Change back to more transparent
        }
    });
});





