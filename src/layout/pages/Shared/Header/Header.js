import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { IoLogoDesignernews } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../components/Context/AuthProvider/AuthProvider';
import LeftSideNav from '../Left-side-nav/LeftSideNav';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => (console.error('Error: ', error)));
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='mb-4' bg="dark" variant="dark" sticky="top" navbarScroll>
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none'><h1>Dragon News <IoLogoDesignernews /></h1></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link ><Link to='/login' className='text-decoration-none'>Login</Link> </Nav.Link> */}

                        </Nav>

                        <div className='d-lg-none'>
                            <LeftSideNav />
                        </div>
                        <Nav>
                            {user ? user.photoURL ? <Image className='fluid rounded-circle' src={user.photoURL} style={{ height: '50px' }}></Image> : <FaUserCircle className='text-danger mt-3' /> : ''}
                            <Nav.Link href="#deets">{user ? user.displayName :
                                <>
                                    <button className='rounded btn btn-outline-info me-3'><Link to='/login' className='text-decoration-none '>Login</Link>
                                    </button>
                                    <button className='rounded btn btn-outline-info'><Link to='/register' className='text-decoration-none'>Signup</Link></button>

                                </>}
                            </Nav.Link>
                        </Nav>
                        {user ? <button onClick={handleSignOut} className='rounded btn btn-outline-info'>Sign out</button> : ''}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;