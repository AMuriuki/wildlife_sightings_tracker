import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar bg='light' sticky='top' className='Header'>
            <Container fluid>
                <Navbar.Brand>Wildlife Sightings Tracker</Navbar.Brand>
            </Container>
        </Navbar>
    );
}