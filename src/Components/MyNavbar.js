import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../styles/myStyles.css'

function MyNavbar() {

    const navigate = useNavigate();

    return (
        <Container fluid>
            <Row style={{backgroundColor: 'grey'}}>
                <Col lg={3} md={3} xs={3}>
                    <h1>MyBlog</h1>
                </Col>
                <Col lg={6} md={6} xs={6}>
                    <Row style={{paddingTop: 10}}>
                        <Col id='nvl-block' md={3} xs={3}>
                            <h4 id='nvl' onClick={() => navigate('/home')}>Home</h4>
                        </Col>
                        <Col id='nvl-block' md={3} xs={3}>
                            <h4 id='nvl' onClick={() => navigate('/addpost')}>Add Post</h4>
                        </Col>
                        <Col id='nvl-block' md={3} xs={3}>
                            <h4 id='nvl' onClick={() => navigate('/about')}>About</h4>
                        </Col>
                        <Col id='nvl-block' md={3} xs={3}>
                            <h4 id='nvl' onClick={() => navigate('/random')}>Random</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MyNavbar