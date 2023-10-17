import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

function App() {
  return (
    <Container
      className='
                text-center
                d-flex
                flex-column
                justify-content-start
                align-items-strech
                '
      style={{
        height: "500vh"
      }}
      fluid
    >
      <Row
        className='
                  position-fixed
                  w-100
                  h-100
                  '
        style={{
          flex: "1",
          backgroundImage: "url('assets/Landing (web) - 1-image3.png')",
          backgroundSize: "cover",
        }}><Col style={{zIndex: "100"}}><NavBar /></Col></Row>
      <Row style={{ flex: "3" }}>
        <Col
          className='d-flex flex-column justify-content-start alidn-items-strech'
          style={{
            backgroundImage: "url(background/final-background-web-png.png)",
            backgroundSize: "cover",
            position: "relative",
            marginTop: "19%"
          }}>
          <Row style={{ flex: "1" }}><Col>asd</Col></Row>
          <Row style={{ flex: "1" }}><Col>asd</Col></Row>
          <Row style={{ flex: "1" }}><Col>asd</Col></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;