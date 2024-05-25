document.addEventListener('DOMContentLoaded', function () {
    // Add dynamic animations
    const skills = document.querySelectorAll('.skills-icons i');
    skills.forEach((skill, index) => {
        skill.style.animation = `fadeIn 0.5s ${index * 0.2}s forwards`;
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        // Change button text on click
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = "☀️"; 
        } else {
            darkModeToggle.textContent = "🌙"; 
        }
    });

    // Check if dark mode is enabled on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = "Light Mode"; 
    }
});

// CSS Animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`, styleSheet.cssRules.length);
