// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentLocation === linkHref || (currentLocation === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // In a real implementation, you would send this to Formspree
            // This is a placeholder for the Formspree submission
            // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
            fetch('YOUR_FORMSPREE_ENDPOINT', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    contactForm.innerHTML = `
                        <div class="success-message" style="text-align: center; padding: 2rem;">
                            <h3>Thank you for your message!</h3>
                            <p>We'll get back to you soon.</p>
                        </div>
                    `;
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                // Show error message
                submitBtn.innerHTML = 'Try Again';
                submitBtn.disabled = false;
                alert('There was a problem sending your message. Please try again.');
                console.error('Error:', error);
            });
        });
    }
});
