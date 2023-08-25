import { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confPassword };
    console.log(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfPassword('');
  };

  const firstNameValidation = () => {
    if (firstName.trim() === '') {
      return null; 
    }
    if (firstName.length < 3) {
      return 'First Name should be at least 2 characters long';
    }
    return null; 
  };


  const lastNameValidation = () => {
    if (lastName.trim() === '') {
      return null; 
    }
    if (lastName.length < 3) {
      return 'Last Name should be at least 2 characters long';
    }
    return null; 
  };

  const emailValidation = () => {
    if (email.trim() === '') {
      return null; 
    }
    if (email.length < 3) {
      return 'Email should be at least 2 characters long';
    }
    return null; 
  };

  const passwordValidation = () => {
    if (password.trim() === '') {
      return null; 
    }
    if (password.length < 9) {
      return 'Password should be at least 8 characters long';
    }
    return null; 
  };

  const confPasswordValidation = () => {
    if (confPassword.trim() === '') {
      return null; 
    }
    if (password !== confPassword) {
      return 'Password must match.';
    }
    if(password==confPassword){
      return 'Password matches'
    }
  };

  return (
    <>
    <div className="container">
      <form onSubmit={createUser}>
        <div className="firstname">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
          />
          <p>{firstNameValidation()}</p>
        </div>
        <div className="lastname">
        <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last Name"
          />
          <p>{lastNameValidation()}</p>
        </div>

        <div className="email">
        <label htmlFor="email">Email:</label>
          <input
          type="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          placeholder='Email'
          />
          <p>{emailValidation()}</p>
        </div>

        <div className="password">
        <label htmlFor="pasword">Password:</label>
          <input
          type="password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          placeholder='Password'
          />
          <p>{passwordValidation()}</p>
        </div>

        <div className="password_conf">
        <label htmlFor="confPass">Confirm Password:</label>
          <input
          type="password"
          value={confPassword}
          onChange={(e)=>{
            setConfPassword(e.target.value);
          }}
          placeholder=' Confirm Password'
          />
          <p>{confPasswordValidation()}</p>
        </div>
        <button type="submit">Create User</button>
      </form>
      </div>
    </>
  );
};

export default App;
