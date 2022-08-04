import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './image/alexander-kovacs-GMGdhtYeROY-unsplash.jpg';
import Image1 from './image/clothes-shop-shirt-hanged-stand-43380502.jpg';
import Image2 from './image/photo-1612423284934-2850a4ea6b0f.jfif';
import Image3 from './image/nikola-duza-TSh8D8KutWU-unsplash.jpg';
function Task3() {
    return (
        <div>
        <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E-TAIL SX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
<Container>
<Row className='mt-5'>
<Col>

<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Image} width={500} height={220}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Image1} width={500} height={220}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Image2} width={500} height={220}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3} width={500} height={220}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Col>
    <Col>
    <h2 className='text-center' style={{color:'blue', fontstyle: 'oblique'}}>ETAIL</h2>
    <p style={{color:'blueviolet', fontstyle: 'oblique'}}>
    React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


    </p>
    <Button variant="primary">Click here</Button>{' '}
    </Col>
    
    </Row>
    </Container>
    <Container>
    <h2 className='bg-secondary text-green p-4 container text-center'style={{color:'green', borderRadius:'10px ', fontstyle: 'oblique',marginTop:40}}>Welcome to E-TAIL SX</h2>
    </Container>
    <Container>
    <Row className='mt-5'>
        <Col>
        <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go the page</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go the page</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go the page</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      <h2 className='bg-secondary text-green p-5 mt-5 container text-center'style={{color:'red', borderRadius:'10', fontstyle: 'oblique'}}>Copyright @ your website 2022</h2>
      </div> 
    );
}

export default Task3;