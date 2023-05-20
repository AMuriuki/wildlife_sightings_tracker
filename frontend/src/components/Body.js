import Container from '../components/Container';
import Navbar from '../components/Navbar/Navbar';
import NavbarBrand from '../components/Navbar/NavbarBrand';
import Content from "../components/Content"

export default function Body({ children }) {
    return (
        <Container>
            <Navbar>
                <NavbarBrand />
            </Navbar>
            <Content>
                {children}
            </Content>
        </Container>
    );
}