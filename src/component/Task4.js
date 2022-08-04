import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1398,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1700,
    amt: 1488,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];
      
function Task4() {
    return (
        <div>
        <Navbar bg="danger" expand="lg" style={{position:'sticky',top:0,bottom:0,zIndex:1}}>
        <Container>
          <Navbar.Brand href="#home"style={{color:'antiquewhite',fontSize:'30px'}}>E-TAIL SX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"style={{color:'antiquewhite',fontSize:'20px'}}>Home</Nav.Link>
              <Nav.Link href="#link"style={{color:'antiquewhite',fontSize:'20px'}}>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{fontSize:'20px'}}>
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
<Row style={{marginTop:'20px'}}>
<Col>
<ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
    </Col>
    <Col>
    <h2 className='text-center'style={{color:'burlywood',  fontstyle: 'oblique'}}>ETAIL</h2>
    <p style={{color:'green',  fontstyle: 'oblique'}}>
    React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


    </p>
    <Button variant="primary">Click here</Button>{' '}
    </Col>
    
    </Row>
    </Container>
    <Container>
    <h2 className='bg-secondary text-green p-4 container text-center'style={{color:'yellow', marginTop:'45px', borderRadius:'10px', fontstyle: 'oblique'}}>Welcome to E-TAIL SX</h2>
    </Container>
    <Container>
    <Row className='mt-5'>
    
        <Col>
        
        <Card style={{ width: '22rem'}}>
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
      <h2 className='bg-secondary text-green p-5 mt-5 container text-center'style={{color:'pink', borderRadius:'10px', fontstyle: 'oblique'}}>Copyright @ your website 2022</h2>
      </div> 
    );
}



export default Task4;