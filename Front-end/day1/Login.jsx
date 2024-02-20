 
import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="paper">
        <div className="column">
        <label htmlFor="username" className="gradient-text">Username:</label>
         <input type="text" id="username" name="username" placeholder="Enter your username" style={{ border: '1px solid #ccc',
        borderRadius: '10px',padding: '12px',fontSize: '16px', width: '150%',}} />
          <label htmlFor="username" className="gradient-text">Password:</label>   <input type="password" id="password" name="password" placeholder="Enter your password" style={{ border: '1px solid #ccc',
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
}}>Login</button>
 
        </div>
      </div>
    </div>
  );
}

export default Login;
