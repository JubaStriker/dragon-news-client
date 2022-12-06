import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import LeftSideNav from './pages/Shared/Left-side-nav/LeftSideNav';
import RightSideNav from './pages/Shared/Right-side-nav/RightSideNav';

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav />
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>)

};

export default Main;