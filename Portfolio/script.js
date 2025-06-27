  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

// Telegram Bot Form Submission
const botToken = '7107806025:AAF1VrJXHgtRDNKsr59xdg4qPwts0Tjpp-0';
const chatId = '855288082';

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    const text = `
📝 *New Contact Form Submission*:
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Failed to send message.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  });
}
