import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
function Homepage() {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img src="../../assets/images/frontPage/dogandcateating.png" />
                        <Card.Body>
                            <Card.Title>Pet Food</Card.Title>
                            <Card.Text>
                                All the perfect pet food
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img src="../../assets/images/frontPage/dogandcateating.png" />
                        <Card.Body>
                            <Card.Title>Pet Food</Card.Title>
                            <Card.Text>
                                All the perfect pet food
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img src="../../assets/images/frontPage/dogandcateating.png" />
                        <Card.Body>
                            <Card.Title>Pet Food</Card.Title>
                            <Card.Text>
                                All the perfect pet food
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img src="../../assets/images/frontPage/dogandcateating.png" />
                        <Card.Body>
                            <Card.Title>Pet Food</Card.Title>
                            <Card.Text>
                                All the perfect pet food
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Homepage;