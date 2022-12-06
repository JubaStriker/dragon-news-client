import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../components/Context/AuthProvider/AuthProvider';
import { BsEye } from 'react-icons/bs'
import toast from 'react-hot-toast';
import { Player } from '@lottiefiles/react-lottie-player';


const Login = () => {

    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [seePass, setSeePass] = useState(false)



    let animation = <Player
        src='https://assets3.lottiefiles.com/private_files/lf30_iraugwwv.json'
        className="player" style={{ width: '400px', height: '400px' }}
        loop
        autoplay
    />


    const handleShowPass = () => {
        setShowPass(!showPass)
        setSeePass(!seePass)
    }
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn } = useContext(AuthContext);
    const handleOnSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Your email is not verified. Please verify your email")
                }


            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
        form.reset();

    }

    return (
        <>
            <Form onSubmit={handleOnSubmit}>
                <h1 className='text-primary'>Please Login</h1>
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

                    {seePass ? <Player
                        src='https://assets3.lottiefiles.com/private_files/lf30_xk1obb80.json'
                        className="player" style={{ width: '100px', height: '100px' }}
                        loop
                        autoplay
                    /> :
                        <Player
                            src='https://assets4.lottiefiles.com/packages/lf20_i1e4j8gy.json'
                            className="player" style={{ width: '100px', height: '100px' }}
                            loop
                            autoplay
                        />}

                </Form.Group>
                <Form.Text className='text-danger mb-4'>{error}</Form.Text>

                <div className='mt-3'>
                    <Button variant="primary" type="submit" className='mb-3'>
                        Login
                    </Button>   <small>New to this website?   <Link to='/register' className='text-decoration-none'>Signup</Link></small>
                </div>
            </Form>
            {animation}
        </>
    );
};

export default Login;