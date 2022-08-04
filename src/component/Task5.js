import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Im from './image/pexels-william-mattey-3768005.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from './image/lovepik-technical-data-table-background-image_400079828.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Image from './image/alexander-kovacs-GMGdhtYeROY-unsplash.jpg';
import Image1 from './image/clothes-shop-shirt-hanged-stand-43380502.jpg';
import Image2 from './image/photo-1612423284934-2850a4ea6b0f.jfif';
import Image3 from './image/nikola-duza-TSh8D8KutWU-unsplash.jpg';
import Imm from './image/men-clothing-store-interior-s-mannequins-fashion-55762579.jpg';
import "./task5.css";
const pa={
    width:"200px",
    height:"200px",
    marginTop: "40px",
    borderRadius:"120px"
}
function Task5() {
    return (
        <div>
            <Navbar bg="danger" expand="lg" sticky="top">
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
      <div>
        <img src={Im} width={"100%"} alt= "" height={"400px"}/>
        <h1 style={{fontStyle:"oblique",color:"yellow",position:"absolute",bottom:"400px",left:"500px"}}>Welcome To E-TAIL SX</h1>
      </div>
      <div>
        <Container className='text-center'>
      <Row>
        <Col >
        <img src={Img} className="img" alt='' style={pa}/>
        <h5>style</h5>
        <p style={{textAlign:"justify"}}>Amazon. amazon. Amazon Fashion has stepped up its fashion game lately, constantly adding affordable purses, leggings and dresses. ...</p>
        </Col>
        <Col> <img src={Img} className="img" alt='' style={pa}/>
        <h5>fashion</h5>
        <p style={{textAlign:"justify"}}>Amazon. amazon. Amazon Fashion has stepped up its fashion game lately, constantly adding affordable purses, leggings and dresses. ...</p>
        </Col>
        <Col> <img src={Img} className="img" alt='' style={pa}/>
        <h5>design</h5>
        <p style={{textAlign:"justify"}}>Amazon. amazon. Amazon Fashion has stepped up its fashion game lately, constantly adding affordable purses, leggings and dresses. ...</p>
        </Col>
        <Col> <img src={Img} className="img" alt='' style={pa}/>
        <h5>colors</h5>
        <p style={{textAlign:"justify"}}>Amazon. amazon. Amazon Fashion has stepped up its fashion game lately, constantly adding affordable purses, leggings and dresses. ...</p>
        </Col>
      </Row>
      </Container>
      <Container className='mt-5'>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Image} width={500} height={520}
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
          src={Image1} width={500} height={520}
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
          src={Image2} width={500} height={520}
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
          src={Image3} width={500} height={520}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
      </div>
      <Container className='mt-5'>
      <div>
<h2 style={{display:"inline-block",backgroundColor:"royalblue",fontFamily:"fantasy", padding:"6px",marginTop:"10px"}}>products</h2>
<Row>
    <Col>
    <h4 style={{color:"greenyellow",fontFamily:"cursive"}} >brands</h4><br/>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
<h4 style={{color:"greenyellow",fontFamily:"cursive"}}>brands</h4>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
<h4 style={{color:"greenyellow",fontFamily:"cursive"}}>brands</h4>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
      
 </Col>
    <Col>
    <h4 style={{color:"greenyellow",fontFamily:"cursive"}}>brands</h4><br/>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
<h4 style={{color:"greenyellow",fontFamily:"cursive"}}>brands</h4>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
<h4 style={{color:"greenyellow",fontFamily:"cursive"}}>brands</h4>
<p style={{color:"blueviolet",textAlign:"justify"}}>Amazon.com is leading the global e-commerce market, with a revenue of US$ 120,968 million in 2020 Worldwide, followed by Jd.com with US$ 83,058 million.</p>
       
        </Col>
        <Col>
            <img src={Imm} alt='' width={"430px"} height={"450px"}/>
        </Col>
</Row>

      </div>
      </Container>
      <Container>
        <h3 style={{display:"inline-block",backgroundColor:"royalblue",fontFamily:"fantasy", padding:"10px",marginTop:"30px"}}>check there card</h3>
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

      
      <h2 style={{color:'red',backgroundColor:"green", textAlign:"center",padding:"30px",marginTop:"30px",fontstyle: 'oblique'}}>Copyright @ your website 2022</h2>
      
        </div>
    );
}

export default Task5;