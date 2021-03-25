import React, {useState} from 'react';
import { useHistory } from 'react-router'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import axios from 'axios';

function Login(props){
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    const history = useHistory();
    const url = 'http://localhost:5000/users/'

    async function userLogin(){
      let obj = {
        email:email,
        password:password
      }
      let results = await axios.post(url+'login',obj);
      console.log(results);
      if(results){
        localStorage.setItem('token', results.data.token);
        localStorage.setItem('userId', results.data.userId);
        history.push("/home");
      }
    }
    return (
       <div>
           <h1>Login</h1>
           <form className='' noValidate autoComplete="off">
                <div>
                    <TextField 
                     id="standard-basic" 
                     type="email" 
                     label="Email"
                     value={email}
                     onChange={event=>setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <TextField 
                     id="standard-basic" 
                     type="password" 
                     label="Password"
                     value={password}
                     onChange={event=>setPassword(event.target.value)}
                     />
                </div>
                <div className="btn">
                     <Button variant="contained" color="primary" onClick={userLogin}>Login</Button>
                </div>
           </form>
           
       </div>
    );
}
export default Login;