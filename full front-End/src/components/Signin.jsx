import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { login } from './api/api';
import CustomButton from './CustomButton';

function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
    try {
      const token = (await login(username, password)).data;
      if (token) {
        localStorage.setItem("token", token);
        navigate('/find-jobs');
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      // Handle login error, e.g., display error message to the user
    }
  };

  return (
    <>
      <div className="card"> 
        <form className='form' onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          
          <div className="container">
            <label className="labelcss">
              <b>Username</b>
            </label>
            <div>
              <input 
                placeholder="Enter Email" 
                name="email" 
                value={username} 
                onChange={(e) => setEmail(e.target.value)} 
                className='inputcss' 
                required 
              />
            </div>
            <label className="labelcss">
              <b>Password</b>
            </label>
            <div>
              <input 
                type="password" 
                placeholder="Enter Password (Min. 6 characters)" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                pattern=".{6,}" 
                title="Password must be at least 6 characters long" 
                className='inputcss
                ' 
                required 
              />
            </div>
            <p className="new-user">New User? <Link to="/signup" className="signup-link">Sign Up</Link></p>
            <hr className="divider" />
            <div className='mt-2'>
            <CustomButton type="submit" className="button" title="Login" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
