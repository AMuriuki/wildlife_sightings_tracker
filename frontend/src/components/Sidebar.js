import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Sidebar() {
    return (
        <Navbar sticky='top' className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link href="/">Sightings</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}