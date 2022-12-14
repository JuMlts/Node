import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";

import "./App.css";

function App() {

  var data = new FormData();

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');

  const [confPassword , setConfPassword] = useState('');

  // function to update state of email with value

  // enter by user in form

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }

    // function to update state of password with 

    // value enter by user in form

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }

    // function to update state of confirm password 

    // with value enter by user in form

  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }

  // below function will be called when user 

  // click on submit button .

  const handleSubmit=(e)=>{
    e.preventDefault();
    data.append('email', JSON.stringify(email));
    data.append('password', JSON.stringify(password)); 
    console.log(data.get(email));
  }

  React.useEffect(() => {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data[email]),
    })
    .then((response) => response.json())
  }, []);
  
  return (
    <form>
      <label>
        Email :
        <input type="text" name="email" onChange={handleEmailChange}/>
      </label>
      <label>
        Mot de passe :
        <input type="text" name="password" onChange={handlePasswordChange} />
      </label>
      <input type="submit" value="Envoyer" onClick={handleSubmit} />
    </form>
  );
    

}



export default App;