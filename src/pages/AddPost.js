import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addPost} from '../redux/posts';
import '../styles/myStyles.css'

function AddPost() {

    const dispatch = useDispatch();
    const [text, setText] = useState('');



    const pushPost = () => {
        dispatch(addPost(text));
        setText('');
    }

    return (
        <Container>
            <Row style={{ textAlign: 'center'}}>
                <h1>What's new?</h1>
            </Row>
            <Row style={{ height: 400}}>
                <Col >
                    <textarea id='post-inp' value={text} placeholder='Type in new post...' onChange={(e) => setText(e.target.value)}></textarea>
                </Col>
            </Row>
            <Row >
                <Col lg={{span: 3, offset: 3}} md={6} xs={6}>
                    <Button 
                        style={{ width: '70%'}}
                        variant='success'
                        onClick={pushPost}
                    >
                        Add new post
                    </Button>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <Button 
                         style={{ width: "70%"}}
                        variant='primary'
                        onClick={() => setText('')}
                    >
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AddPost