import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,seterror] = useState("");
    const Navigate = useNavigate();
    const login = async () =>{
        try{

            await signInWithEmailAndPassword(getAuth(),email,password);
            Navigate('/articles');
        }
        catch(e){
            seterror(e.message);
        }
    }
  return (
    <>
      <h1>Login Page</h1>
      {error && <p className="error">{error}</p>}
      <input 
        value={email}
        placeholder="Enter Your Email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Enter Your Passoword"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={login}>Log In</button>
        <Link to="/createaccount">Don`t have an account? Create One</Link>
    </>
  )
}

export default Login
