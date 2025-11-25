
// Resume download
document.getElementById('resumeBtn').addEventListener('click', downloadResume);
document.getElementById('resumeBtnMain').addEventListener('click', downloadResume);

function downloadResume() {
    window.location.href = 'resume.pdf'; // Replace with actual resume file path
}

// Projects page
document.getElementById('projectsBtn').addEventListener('click', openProjects);
document.getElementById('projectsBtnMain').addEventListener('click', openProjects);

function openProjects() {
    window.location.href = 'projects.html'; // Create this page with your projects
}

// Contact page
document.getElementById('contactBtn').addEventListener('click', openContact);
document.getElementById('contactBtnMain').addEventListener('click', openContact);

function openContact() {
    window.location.href = 'contact.html'; // Create this page with your contact info
}
