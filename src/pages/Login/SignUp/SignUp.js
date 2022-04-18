import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if (loading || updating) {
        return  <Spinner animation="border" variant="warning" />
    }

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       navigate('/home');
    }

    const navigateLogin = event => {
        navigate('/login')
    }

    // if(user){
    //     navigate('/home');
    // }

    return (
        <div className='w-50 mx-auto mb-5'>
        <h2 className='text-warning text-center mt-2'>Please Sign Up</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
              <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="warning" type="submit">
              Sign Up
          </Button>
      </Form>
      <p>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-danger pe-auto text-decoration-none' >Please Login</Link> </p>

      <SocialLogin></SocialLogin>
      
  </div>
    );
};

export default SignUp;