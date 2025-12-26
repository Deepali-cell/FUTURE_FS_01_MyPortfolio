import { useState } from "react";
import "../css_files/Contact.css";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("contact data :", data);
    setData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <div id="contact">
        <div className="part1">
          <h2 id="heading">Contact Me</h2>
          <p>
            I am a product-oriented Software Engineer with a business mindset
            from bringing the latest tech to launching successful startups!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
