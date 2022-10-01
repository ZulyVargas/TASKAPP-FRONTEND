import React, { useEffect, useState, useContext} from 'react';
import '../../styles/Login.scss'
import {Grid, Paper, Container, Avatar,TextField, Link, Alert} from '@mui/material'
import Button from '../Button';
import UseFetchPOST from '../../utils/useFetchPOST';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/DataContext';


function LoginView() {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState({submit : false});
    const [auth, setAuth] = useState({auth : false});
    const [error, setError] = useState({error : false});
    const {token, setUserToken }= useContext(AuthContext);
    
    const url = 'http://localhost:8080/v1/auth';

    const loginSuccess = async (tk) =>{
        setAuth({auth : true});
        setUserToken(tk);
        navigate('/home');
    }

    useEffect(() =>{
        const request = {'url': url, body:{"email":mail,"password":password}}
        try {
            if (submit.submit){ 
                UseFetchPOST(request)
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