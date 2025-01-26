document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsDiv = document.getElementById('contacts');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const contact = document.getElementById('contact').value;

        // Add the contact info to the div
        const newContact = document.createElement('p');
        newContact.textContent = `Name: ${firstName} ${lastName}, Contact: ${contact}`;
        contactsDiv.appendChild(newContact);
        
        contactForm.reset()
    });
});