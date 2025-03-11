// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').textContent = 'Light Mode';
} else {
    document.getElementById('themeToggle').textContent = 'Dark Mode';
}