import { useState } from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { navLinks } from '../data'

export default function Header({ page }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <Navbar expand="lg" expanded={open} onToggle={setOpen} sticky="top" variant="dark" className="st-nav">
      <Container>
        <Navbar.Brand href="#/" className="st-brand">
          <img src={logo} alt="" /> SOLTRENIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="st-menu" aria-label="Open menu" />
        {/* Large screens: links show inside the navbar. Small screens: they open in a side menu. */}
        <Navbar.Offcanvas id="st-menu" placement="end" onHide={close} className="st-off">
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-lg-center">
              {navLinks.map((l) => (
                <Nav.Link key={l.key} href={l.href} active={page === l.key} onClick={close}>{l.label}</Nav.Link>
              ))}
            </Nav>
            <Button href="#/contact" onClick={close} className="btn-gold ms-lg-3 mt-4 mt-lg-0 py-2 px-4 text-center">Get a quote</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
