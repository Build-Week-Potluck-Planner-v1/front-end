import React, { useState } from "react";

import styled from "styled-components";

const ContactStyle = styled.div`
  background-color: #8ac2cf;
  color: black;
  width: 15%;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  & .name {
    margin-left: 1.8rem;
  }
  & .email {
    margin-left: 0.6rem;
  }
`;

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
    <ContactStyle>
      <form onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <div>
          <label>
            Name:
            <input
              className="name"
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
              className="email"
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
    </ContactStyle>
  );
}
