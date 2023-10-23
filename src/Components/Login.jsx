import React ,{useState}from 'react'
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const handleEmail= (e)=>{
    setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value);
    }
        const onSubmit=async()=>{
          alert("login adno....")
          let obj = {email:email,password:password}
          // console.log(obj)
          // await props.signIn(obj)
          // if(props.auth.uid!=null){
          // }
        }
  return (
    <>
  <div className="container d-flex justify-content-start flex-column my-5 align-items-center logincont">
    <h2 className="my-5">Enter Login Details</h2>
      <div className="form-floating mb-5 emailinput">
        <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" name="email" value={email || ''}  onChange={handleEmail}/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-5 emailinput">
      <input type="password" className="form-control " id="floatingPassword" placeholder="Password"  name="password"  value={password || ''} onChange={handlePassword}/>
      <label for="floatingPassword">Password</label>
     </div>
     <Link className="btn btn-primary loginbtn mb-3" onClick={onSubmit} to="/Landingpage">Sign In</Link>
     <p>Not a member? <Link to="/Register"> Register</Link></p>
  </div>
    </>
  )
}

export default Login
