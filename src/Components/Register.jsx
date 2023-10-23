import React ,{useState}from 'react'
import { Link } from "react-router-dom";

const Register = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const handleEmail= (e)=>{
    setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value);
    }
 
const onSubmit=async()=>{
  alert("hello bhai")
  // const res = await props.register({email:email, password:password});
  // if(props.authMine.error==''){
  //   history.push('/');
  // }
  // if(props.auth!=null){
  //   history.push('/')
  // }
  
}

  return (
    <>
     <div className="container d-flex justify-content-start flex-column my-5 align-items-center logincont">
    <h2 className="my-5">Enter Your Details</h2>
      <div className="form-floating mb-5 emailinput">
        <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" name="email" value={email||''}  onChange={handleEmail}/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-5 emailinput">
      <input type="password" className="form-control " id="floatingPassword" placeholder="Password" name="password"  value={password||''} onChange={handlePassword}/>
      <label for="floatingPassword">Password</label>
     </div>
     <Link className="btn btn-primary loginbtn2 mb-3"onClick={onSubmit}>Sign In</Link>
     <p>ALready a member? <Link to="/Login"> Login</Link></p>
  </div>
    </>
  )
}

export default Register
