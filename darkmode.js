// Select the theme buttons
const themeButtons = document.querySelectorAll('.theme-btn');

// Function to switch themes
function switchTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    
    // Save the selected theme in localStorage
    localStorage.setItem('theme', theme);
    
    // Update button active state
    themeButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-theme') === theme);
    });
}

// Add click event listeners to buttons
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchTheme(button.getAttribute('data-theme'));
    });
});

// Set the initial theme based on user's preference or default to 'auto'
const savedTheme = localStorage.getItem('theme') || 'auto';
switchTheme(savedTheme);

// Listen for changes to localStorage (if opened in multiple tabs)
window.addEventListener('storage', () => {
    const theme = localStorage.getItem('theme') || 'auto'; // Default to 'auto' if not found
    switchTheme(theme);
});
