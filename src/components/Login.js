import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  return (
    <Container fluid style={{margin: 0, height: "100vh", backgroundColor: '#F2F3F4', display: "flex", justifyContent: "center", alignItems: "center"}} >
        <Card style={{width: 600, display: "flex", flexDirection: "column"}}>
            <Card.Img variant="top" src="https://placehold.jp/400x70.png " />
            <Card.Body style={{display: "flex"}}>
            <Form style={{width: "100%", display: "flex", flexDirection: "column"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su nombre de usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>
                <Container style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                    <Button variant="primary" type="submit" style={{width: 150, backgroundColor: "#27425a", border: "1px solid #27425a"}}>
                        Iniciar sesión
                    </Button>
                </Container>
            </Form>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default Login;