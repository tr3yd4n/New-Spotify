import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavBar = () => (
    <Navbar variant="dark" expand="lg">
        <Link to='/home'>
            <Navbar.Brand href="">Spotify</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav-link-container"className="ml-auto">
                <Link to='/artists'>
                    <Nav.Link id="Nav-Link" href="#link">Artists</Nav.Link>
                </Link>
                <Link to='/albums'>
                    <Nav.Link id="Nav-Link" href="#link">Ablums</Nav.Link></Link>
                <Link to='/signup'>
                    <Nav.Link id="Nav-Link" href="#link">Sign Up!</Nav.Link></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default MyNavBar