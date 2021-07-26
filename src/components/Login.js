import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  width: 80%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;

  & .control {
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;

    & label {
        font-weight: bold;
        flex: 1;
        color: #464646;
        margin-bottom: 1.0rem;
      }
    & input {
        flex: 3;
        font: inherit;
         padding: 0.35rem 0.35rem;
        border-radius: 6px;
        border: 1px solid #ccc;
      }
      & input:focus {
        outline: none;
        border-color: #4f005f;
        background: #f6dbfc;
      }
`;

function Login() {
  const initialLogIn = { email: "", password: "" };
  const [loginInput, setLoginInput] = useState(initialLogIn);

  const onChangeHandler = (evt) => {
    const { name, value } = evt.target;

    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    setLoginInput(initialLogIn);
    console.log(loginInput);
  };

  return (
    <FormStyle onSumbit={onSubmitHandler}>
      <div className="control">
        <label>E-Mail</label>
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={loginInput.email}
        />
      </div>
      <div className="control">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={loginInput.password}
        />
      </div>
      <button onClick={onSubmitHandler}>Submit</button>
    </FormStyle>
  );
}

export default Login;
