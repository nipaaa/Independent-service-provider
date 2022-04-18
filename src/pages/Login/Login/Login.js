import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
      let errorMessage;

    if (error1) {
       
        errorMessage = <div>
            <p className='text-danger'>Error: {error1?.message}</p>
          </div>
     
      }
      
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (loading || sending) {
        return  <Spinner animation="border" variant="warning" />
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        
    }


    const navigateSignUp = event => {
        navigate('/signup')
    }

    if(user){
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='w-50 mx-auto mb-5'>
              <h2 className='text-warning text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='mb-3' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
          
            <p>New to this site? <Link to="/signup" onClick={navigateSignUp} className='text-danger pe-auto text-decoration-none' >Please Sign Up</Link> </p>
            <p>Forget Password?<button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            {errorMessage}
            <SocialLogin></SocialLogin>
            <ToastContainer />
            
        </div>
    );
};

export default Login;