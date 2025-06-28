document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');

    if (dropdown) {
        const toggle = dropdown.querySelector('a'); // The 'Služby' link
        const menu = dropdown.querySelector('.dropdown-content');

        toggle.addEventListener('click', (event) => {
            // Prevent link navigation and stop event from closing menu immediately
            event.preventDefault();
            event.stopPropagation();
            menu.classList.toggle('show');
        });
    }

    // Close the dropdown if clicking anywhere else on the page
    window.addEventListener('click', (event) => {
        const openDropdown = document.querySelector('.dropdown-content.show');
        if (openDropdown) {
            openDropdown.classList.remove('show');
        }
    });
});
