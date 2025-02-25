window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*----------Page Loader --------------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display="none";
    }, 600);
});

// Email validation
const form = document.getElementById('myForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (e) => {
    if (!validateEmail(emailInput.value)) {
        e.preventDefault(); // Prevent form submission
        emailError.style.display = 'block'; // Show error message
    } else {
        emailError.style.display = 'none'; // Hide error message
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailError.style.display = 'none'; // Hide error message
    }
});

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
// email validation

// Downloading resume
function downloadResume() {
    const fileName = 'Satya_Mouli_Nikhila_Vadlamani_Resume.pdf'; // Use your actual resume file name
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Downloading resume

/*----------------------- Toggle Navbar------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

/*----------- Active Section ------------*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

/* ---------- About Tabs ----------------*/
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");
tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Portfolio Item Details Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Personal Information Section (Portfolio Content) Example
const aboutMeSection = document.querySelector(".about-me");

const myDetails = {
    name: "Satya Mouli Nikhila Vadlamani",
    profession: "Electronics Engineer & Intern",
    education: "B.Tech in Electronics and Communication Engineering",
    skills: ["JavaScript", "Python", "C", "Electronics Circuit Design", "Embedded Systems"],
    contact: "your.email@example.com",
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/satyamouli",
        github: "https://github.com/yourgithub",
    }
};

// Fill about section dynamically
document.querySelector(".about-me-name").innerText = myDetails.name;
document.querySelector(".about-me-profession").innerText = myDetails.profession;
document.querySelector(".about-me-education").innerText = myDetails.education;

const skillsContainer = document.querySelector(".about-me-skills");
myDetails.skills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsContainer.appendChild(skillItem);
});

document.querySelector(".about-me-contact").innerText = myDetails.contact;
document.querySelector(".about-me-linkedin").href = myDetails.socialLinks.linkedin;
document.querySelector(".about-me-github").href = myDetails.socialLinks.github;
