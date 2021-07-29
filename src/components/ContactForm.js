import React, { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};
export default function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <div>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            E-Mail:
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button name="submit" type="submit">
            Submit
          </button>
          <button name="clear" onClick={() => setFormValues(initialFormValues)}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
