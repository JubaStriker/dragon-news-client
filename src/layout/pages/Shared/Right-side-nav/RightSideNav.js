import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaYoutube, FaTwitch, FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../../assets/brands/Brand1.png';
import Brand2 from '../../../../assets/brands/Brand2.png';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../../components/Context/AuthProvider/AuthProvider';
import { RiPhoneFindLine } from 'react-icons/ri';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dragon-news-server-red-one.vercel.app/news')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} variant="outline-primary" className='mb-2'><FcGoogle /> Login with Google</Button>{' '}
                <Button variant="outline-primary"><FaGithub /> Login with Github</Button>{' '}
            </ButtonGroup>

            <div>
                <h1 className='mb-1 mt-4'>Find us on  <RiPhoneFindLine /></h1>
                <ListGroup>
                    <ListGroup.Item className='mb-2' ><FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaDiscord /> Discord</ListGroup.Item>

                </ListGroup>
            </div>


            <div className='mb-5'>
                <Carousel>
                    {data?.map(img => <Carousel.Item key={img._id} img={img}>
                        <img
                            className="d-block w-100"
                            src={img.image_url}
                            alt="First slide"
                        />
                    </Carousel.Item>)}
                </Carousel>
            </div>
            <div className='mb-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;