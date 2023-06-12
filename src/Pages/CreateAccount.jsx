import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const CreateAccount = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [Cpassword,setCPassword] = useState("");
  const [error,seterror] = useState("");
  const Navigate = useNavigate();
  const CreateAccount = async () =>{
    try{

      if(password !== Cpassword){
        seterror("Password and Confirm Password in not matched");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(),email,password);
      Navigate('/articles');
    } catch(e){
      seterror(e.message);
    }
  }
return (
  <>
    <h1>Create Account Page</h1>
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
       <input 
      type="password"
      placeholder="Enter Your Confirm Passoword"
      value={Cpassword}
      onChange={(e)=>setCPassword(e.target.value)}
      />
      <button onClick={CreateAccount}>Create Account</button>
      <Link to="/login">Already have an account? Login Here</Link>
  </>
)
}

export default CreateAccount
