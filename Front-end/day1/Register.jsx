import './Login.css';

function Register() {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h1 style={{ margin: '0', color: 'white' }}>My Awesome App</h1>
    
    <div className="container">
      <div className="paper">
        <div className="column">
        <label htmlFor="firstname" className="gradient-text">First Name:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Firstname" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="lastname" className="gradient-text">Last Name:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Lastname" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="Age" className="gradient-text">Age:</label>
         <input type='number' id="username" name="username" placeholder="Enter your Age" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="E-mail" className="gradient-text">E-Mail:</label>
         <input type="text" id="username" name="username" placeholder="Enter your E-mail" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="contact" className="gradient-text">Mobile Number:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Phone-NO" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="contact" className="gradient-text">Nationality:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Country" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
         <label htmlFor="contact" className="gradient-text">Highest Qualification:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Degree" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
        <label htmlFor="contact" className="gradient-text">Specification:</label>
         <input type="text" id="username" name="username" placeholder="Enter your Domain" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
         <label htmlFor="contact" className="gradient-text">Year of Experience :</label>
         <input type="text" id="username" name="username" placeholder="Enter your Experience" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} /> 
        <button id="loginBtn" style={{ 
  backgroundImage: 'linear-gradient(to right, #6f00ff, #d5198d)',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'serif',
  fontSize: '20px',
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
}}>REGISTER</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
