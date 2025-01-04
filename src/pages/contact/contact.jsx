import React, { useState } from "react";
import "./contact.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/navBar/navBar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق الإرسال (يمكن ربطه بخادم أو API)
    console.log("Form submitted: ", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" }); // إعادة ضبط الحقول
  };

  return (
    <div id="contact-page">
      <Nav />
      <main className="contact-main">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feel free to contact us via email or by
          filling the form below.
        </p>

        <div className="contact-info">
          <h3>Email:</h3>
          <p>
            <a href="mailto:info@sonnex.uk">info@sonnex.uk</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Your Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </main>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default Contact;
