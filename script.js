document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  const sendMailtoForm = (form) => {
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const subject = values.subject || 'School Enquiry';
    const body = [
      `Parent/Guardian Name: ${values.parentName || ''}`,
      `Student Name: ${values.studentName || ''}`,
      `Phone Number: ${values.phone || ''}`,
      `Email Address: ${values.email || ''}`,
      '',
      `Message:`,
      values.message || ''
    ].join('\n');

    const mailtoUrl = `mailto:zionkingscollegeinternational@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    const successMessage = form.parentElement.querySelector('.success-message');
    if (successMessage) {
      successMessage.textContent = 'Thank you for your message. Your email app has been opened so your enquiry can be sent directly to the school email.';
      successMessage.classList.add('visible');
    }

    form.reset();
  };

  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      sendMailtoForm(contactForm);
    });
  }

  const admissionForm = document.querySelector('#admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (event) => {
      event.preventDefault();
      sendMailtoForm(admissionForm);
    });
  }
});
