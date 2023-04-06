import React from "react";

const Popup = ({ close }) => {
  return (
    <div onBlur={close}>
      <h1>Register here</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Adress" />
        <input type="text" placeholder="Password" />
      </form>
      <div>
        <button type="button">Login</button>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Popup;
