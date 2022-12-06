import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../components/Context/AuthProvider/AuthProvider';
import { BsEye } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';
import { Player } from '@lottiefiles/react-lottie-player';


const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUser(name, photoURL)
                handleEmailVerification()
                toast.success('Email with verification link send to your email address!')
                navigate('/login');
            })
            .catch(error => {
                console.error('Error: ', error);
                setError(error.message);


            });


        const handleUpdateUser = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(e => setError(e));
        }

        const handleEmailVerification = () => {
            emailVerification()
                .then(() => { })
                .catch(e => console.error(e))
        }

    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Player
                src='https://assets7.lottiefiles.com/packages/lf20_kdCeeh2u4M.json'
                className="player" style={{ width: '400px', height: '400px' }}
                loop
                autoplay />
            <h1 className='text-primary'>Please Signup</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type={showPass ? 'text' : 'password'} name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <BsEye onClick={handleShowPass} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept out terms and condition" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Signup
            </Button>  <small>Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link></small>
            <div className='text-danger mt-3'>{error}</div>
        </Form>
    );
};

export default Register;