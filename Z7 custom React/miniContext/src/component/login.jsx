import React ,{useState,useContext} from 'react'
import userContext from '../context/UserContext';
function Login() {
 const[username,setUsername]=useState(null);
 const [password,setPassword]=useState(null);
 const {setUser}=useContext(userContext);
    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({username,password});
    }
  return (
    <div>
          <h2>Login</h2>
          <input type='text' placeholder='username' 
          value={username}
          onChange={(e)=>setUsername(e.target.value)} />
          <input type='text' placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
