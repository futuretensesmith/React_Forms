import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    //remember to set input value to state variable
    // in this case name. so that there is one source
    // of truth. *** check out React doc on Controlled Components ***
    // use event.preventDefault(); to prevent form submit from reloading
    // the page.
    setName(event.target.value);
  }

  function handleClick(event) {
    setFullName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullName} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
