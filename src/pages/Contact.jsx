import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { socials } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: connect this form to your email service or backend API.
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="st-contact">
      <Container>
        <Row className="g-5">
          <Col md={6}>
            <h1 className="st-h2">Ready to talk about your project?</h1>
            <p>Send a short note. We reply within one working day and suggest a time for a 15 minute call.</p>
            <ul className="st-pts">
              <li><FontAwesomeIcon icon={faCircleCheck} /> Free discovery call</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> Written scope before any work</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> One team from idea to launch</li>
              <li><FontAwesomeIcon icon={faClock} /> Reply within one working day</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Add your email address here</li>
            </ul>
            <p className="mt-4 mb-2">Follow us</p>
            <div className="st-social">
              {socials.map((s) => (
                <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="n"><Form.Label>Full name</Form.Label><Form.Control required autoComplete="name" /></Form.Group>
              <Form.Group className="mb-3" controlId="e"><Form.Label>Email</Form.Label><Form.Control type="email" required autoComplete="email" /></Form.Group>
              <Form.Group className="mb-3" controlId="p"><Form.Label>Phone</Form.Label><Form.Control type="tel" autoComplete="tel" /></Form.Group>
              <Form.Group className="mb-3" controlId="m"><Form.Label>Project details</Form.Label><Form.Control as="textarea" rows={4} required /></Form.Group>
              <Button type="submit" className="btn-gold">Send message</Button>
              {sent && <p className="mt-3 st-ok" role="status">Thanks. Your message is ready to send once the contact form is connected.</p>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
