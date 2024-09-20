document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.getElementById('eventType').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && eventType && message) {
        alert(`Thank you, ${name}! We will contact you soon regarding your ${eventType}.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
