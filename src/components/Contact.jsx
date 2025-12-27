import "../css_files/Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="part1">
        <h2 id="heading">Contact Me</h2>
        <p>
          Feel free to connect with me on social media or reach me directly via
          email/phone.
        </p>
      </div>

      <div className="contact_info">
        <h3>Connect with me:</h3>
        <div className="social_links">
          <a
            href="https://www.linkedin.com/in/deepali-singal-5b1a0a28a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Deepali-cell"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:deepalisingal19@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a href="tel:+919255504828">Phone</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
