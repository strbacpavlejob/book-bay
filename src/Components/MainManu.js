import { Container, Nav } from "react-bootstrap";
import { BrowserRouter, HashRouter,Link } from "react-router-dom";
import '../Css/MainManu.css';

function MainManu() {
    return(
    <Container>
        <Nav variant='tabs'>
            <Nav.Link href="/home/">Home</Nav.Link>
        </Nav>
    </Container>
    );
}
export default MainManu;