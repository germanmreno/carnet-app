import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

function Profile() {
  return (
    <Container fluid style={{boxSizing: "border-box", margin: 0, padding: 0, height: "100vh", width: "100%", backgroundColor: '#F2F3F4'}} >
    <Navbar style={{margin: 0, padding: 0, backgroundColor: "#0d4dae", width: "100%", height: "70px"}}>
      <Container fluid style={{margin: 0, padding: 0, display: "flex", flexDirection:"row", justifyContent: "space-between", width: "100%"}}>
        <Navbar.Brand href="#home"><Navbar.Text style={{color: "white", padding: "10px"}}>Vicepresidencia de Venezuela</Navbar.Text></Navbar.Brand>
        <Container fluid style={{margin: 0, width: "auto"}}>
            <Navbar.Text style={{padding: "10px"}}>
                <a style={{color: "white"}} href="#login">Admin</a>
            </Navbar.Text>
        </Container>
      </Container>
    </Navbar>
    <Container fluid style={{margin: 0, padding: 0, height: "70px", backgroundColor: "white", display: "flex", alignItems: "center"}}>
        <h4 style={{margin: 0, padding: "10px"}}>Gestión de Personal</h4>
    </Container>
    <Container fluid style={{margin: "0px auto", borderRadius: "10px", marginTop: "40px", width: "95%", padding: 20, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
        <Container style={{width: "300px", flexGrow: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: '#F2F3F4'}}>
            <Container style={{width: "300px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h4>Información Personal</h4>
                Datos personales del empleado.
            </Container>
            <Form style={{backgroundColor: "white", borderRadius: "10px", padding: "15px", margin: "15px", width: "200px", display: "flex",flexGrow: 2, flexDirection: "column"}}>
                <Row style={{textAlign: "left"}}>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Nombre</Form.Label>
                            <Form.Control type="email" placeholder="Nombre del empleado" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Apellido</Form.Label>
                            <Form.Control type="email" placeholder="Apellido del empleado" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row style={{textAlign: "left"}}>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Cédula</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el número de cédula" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Fecha de Nacimiento</Form.Label>
                            <Form.Control type="email" placeholder="YYYY-MM-DD" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row style={{textAlign: "left"}}>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Estado</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el número de cédula" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Municipio</Form.Label>
                            <Form.Control type="email" placeholder="YYYY-MM-DD" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Parroquia</Form.Label>
                            <Form.Control type="email" placeholder="YYYY-MM-DD" />
                    </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    </Container>
    </Container>

  );
}

export default Profile;