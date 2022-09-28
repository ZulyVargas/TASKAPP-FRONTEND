import React, { useEffect, useState } from 'react';
import '../styles/Login.scss'
import {Grid, Paper, Container, Avatar,TextField, Link} from '@mui/material'
import Button from './Button';
import UseFetchPOST from '../utils/useFetchPOST';

function LoginView() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState({submit : false});
    const url = 'http://localhost:8080/v1/auth';

    useEffect(() =>{
        console.log('useEffect',submit);
        const request = {'url': url, body:{"email":mail,"password":password}}
        try {
            if (submit.submit){ 
            UseFetchPOST(request);
            }
        } catch(e){
            console.log(e);
        }
    },[submit]);
    

    return (
        <Grid container id="GridLogin" component="main"  >
            <Container align='center' className="Paper" component={Paper}  elevation={10} maxWidth={'xs'} >
                    <Avatar id="AvatarLogin"   ></Avatar>
                    <h2>Login Account</h2>
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
                            console.log('click');
                            setSubmit({submit : true})}} ></Button><br></br>
                    <Link href='#' id="forgotPasswd" >Forgot Password?</Link><br></br>
                    <Link href='#' id="newAccount" >Create new account! </Link>                    
            </Container>
        </Grid>    
    )

}


export default LoginView;