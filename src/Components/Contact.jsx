import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="top">
        <h2>Contact With Us</h2>
      </div>
      <div className="bottom">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter Your Good Name" />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter Your Email" name="email" />
        <label htmlFor="">Item Name</label>
        <input type="email" placeholder="Item name" />
        <label htmlFor="">Write Your Message Here</label>

        <textarea
          name="message"
          rows="6"
          placeholder="For any Query Tell us"
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};
export default Contact;
