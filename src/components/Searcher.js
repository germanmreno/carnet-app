import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Searcher() {
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
        <Container style={{width: "300px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
            <h4>Buscar Personal</h4>
            Ingrese los datos del personal
        </Container>
        <Form style={{width: "200px", display: "flex",flexGrow: 2, flexDirection: "column"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "center"}}>
                    <Form.Label >Cédula</Form.Label>
                    <Container style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                        <Form.Select style={{width: "auto"}}>
                            <option value="V" default>V</option>
                            <option value="E">E</option>
                        </Form.Select>
                        <Form.Control type="email" placeholder="Ingrese el número de cédula" />
                        <Button variant="primary" type="submit" style={{width: 150, backgroundColor: "#27425a", border: "1px solid #27425a"}}>
                        Buscar
                    </Button>
                    </Container>
                </Form.Group>
            </Form>
    </Container>
    </Container>

  );
}

export default Searcher;