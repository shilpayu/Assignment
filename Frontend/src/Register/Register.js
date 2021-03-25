import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.css';
import axios from 'axios';

function Register(){
   let [userid,setUserId] = useState('');
   let [username,setUsername] = useState('');
   let [email,setEmail] = useState('');
   let [password,setPassword] = useState('');
   const url = 'http://localhost:5000/users/'
   
   async function userRegister() {
     let obj = {
        userid:userid,
        username:username,
        email:email,
        password:password
     };
     console.log(obj);
     let results = await axios.post(url+'register',obj);
     console.log(results);
     if(results.data.message === "Registeration Successfull!"){
        setUserId('');
        setUsername('');
        setEmail('');
        setPassword('');
     }
   }
   return (
       <div>
            <h1>Register</h1>
            <form className='' noValidate autoComplete="off">
                <div>
                    <TextField 
                     id="standard-basic" 
                     type="text" 
                     label="UserId" 
                     value={userid} 
                     onChange={event=>setUserId(event.target.value)}/>
                </div>
                <div>
                    <TextField 
                     id="standard-basic" 
                     type="text" 
                     label="Username" 
                     value={username} 
                     onChange={event=>setUsername(event.target.value)}/>
                </div>
                <div>
                    <TextField 
                    id="standard-basic" 
                    type="email" 
                    label="Email" 
                    value={email} 
                    onChange={event=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <TextField 
                    id="standard-basic" 
                    type="password" 
                    label="Password" 
                    value={password} 
                    onChange={event=>setPassword(event.target.value)}/>
                </div>
                <div className="btn">
                    <Button variant="contained" color="primary" onClick={userRegister}>Register</Button>
                </div>
            </form>
       </div>
   );
}
export default Register;