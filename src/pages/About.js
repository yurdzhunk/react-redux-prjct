import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import img from '../assets/image.png'

function About() {
    return (
        <Container style={{ marginTop: 10}}>
            <Row>
                <Col lg={4} md={4} xs={4}>
                    <Image style={{ borderRadius: 16}} fluid src={img}/>
                </Col>
                <Col lg={8} md={8} xs={8}>
                    <h1 style={{color: 'gray', textAlign: 'center'}}>My Blog</h1>
                    <p>
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText TextTextTextTextText 
                        
                    </p>
                </Col>
            </Row>
        </Container>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="left" src={img} />
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the
        //         bulk of the card's content.
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
    )
}

export default About