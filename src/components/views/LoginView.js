import React, { useEffect, useState, useContext} from 'react';
import '../../styles/Login.scss'
import {Grid, Paper, Container, Avatar,TextField, Link, Alert} from '@mui/material'
import Button from '../Button';
import UseFetchPOST from '../../utils/useFetchPOST';
import getRequests from '../../utils/useFetchGET';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/DataContext';


function LoginView() {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState({submit : false});
    const [auth, setAuth] = useState({auth : false});
    const [error, setError] = useState({error : false});
    const {userToken,setUserToken,user,setUser }= useContext(AuthContext);
    
    const url = 'http://localhost:8080/v1/auth';

    useEffect(() =>{
        try {
            if (auth.auth){ 
                navigate('/home');
            }  
        } catch(e){
            console.log(e);
        }
    },[auth]);

    const getUser = async (tk) => {
        const urlGetByEmail = 'http://localhost:8080/api/v1/user/mail/'+ mail;
        const request = {'url': urlGetByEmail, 'token': tk};
        const response = getRequests.UseFetchGETUsingToken(request)
            .then(res => (res.data.hasOwnProperty('id') ? (setUser(res.data), setAuth({auth : true})) : setError({error:true})));          
        
    }

    const loginSuccess = async (tk) =>{
        setUserToken(tk); 
        getUser(tk);
    }

    useEffect(() =>{
        const request = {'url': url, body:{"email":mail,"password":password}}
        try {
            if (submit.submit){ 
                const resp = UseFetchPOST(request)
                .then(res => (res.data.hasOwnProperty('token') ? loginSuccess(res.data.token) : setError({error:true})));
                
            }  
        } catch(e){
            console.log(e);
            setError(true);
            setAuth({auth : false});
        }
    },[submit]);


    return (
        <Grid container id="GridLogin" component="main"  >
            <Container align='center' className="Paper" component={Paper}  elevation={10} maxWidth={'xs'} >
                    <Avatar id="AvatarLogin"   ></Avatar>
                    <h2>Login Account</h2>
                    {error.error && <Alert severity="warning">Incorrect email or password</Alert>}
                    <form>
                    <TextField  id="mail" label="email" value={mail} variant="standard" placeholder='Enter your user email'  
                                onChange={(e) => {setMail(e.target.value);
                                }} 
                                fullWidth required />
                    <TextField  id="passwd" label="password" value={password} variant="standard"  placeholder='Enter your password'  type='password' 
                                onChange={(e) => {setPassword(e.target.value);
                                }} 
                            fullWidth required  />
                    </form>
                    <Button id="login" content='Log in' type='submit' onClick={ () => {
                            setSubmit({submit : true})}} ></Button><br></br>
                    <Link href='#' id="forgotPasswd" >Forgot Password?</Link><br></br>
                    <Link href='#' id="newAccount" >Create new account! </Link>                    
            </Container>
        </Grid>    
    )

}


export default LoginView;