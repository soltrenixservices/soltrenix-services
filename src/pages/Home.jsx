import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wave, SectionTitle, WorkGrid, Stats, CallToAction } from '../components/Common'
import { services, tech, tagline } from '../data'

export default function Home() {
  const strip = [...tech, ...tech]
  return (
    <>
      <section className="st-hero">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <p className="st-tag">{tagline}</p>
              <h1>Idea. Build. Launch. We cover all of it.</h1>
              <p className="st-hero-p">Soltrenix Services is a software company that builds web products, backends and AI voice agents, and helps you get found online with SEO and digital marketing.</p>
              <Button href="#/contact" className="btn-gold me-2 mb-2">Book a 15 minute call</Button>
              <Button href="#/services" variant="outline-light" className="st-btn-line mb-2">Our services</Button>
            </Col>
            <Col lg={5}>
              <div className="st-call" aria-label="Example of an AI voice agent call">
                <div className="d-flex justify-content-between small mb-3"><span>AI receptionist, live call</span><b>00:12</b></div>
                <Wave />
                <p className="small mt-3 mb-0"><span>Caller:</span> I need to move my appointment to Friday.<br /><span>Agent:</span> Done. Friday at 3 pm is booked and a confirmation is on its way.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="st-marq" aria-hidden="true"><div>{strip.map((t, i) => <span key={i}>{t}</span>)}</div></div>

      <section className="st-sec">
        <Container>
          <SectionTitle title="What We Do" text="Eight services, one team, from idea to growth." />
          <Row className="g-3">
            {services.map((s) => (
              <Col key={s.name} xs={6} lg={3}>
                <a href="#/services" className="st-mini">
                  <FontAwesomeIcon icon={s.icon} />
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="st-sec st-alt">
        <Container>
          <SectionTitle title="Our Recent Work" text="Live websites we have delivered. Open any of them to see the result." />
          <WorkGrid />
        </Container>
      </section>

      <Stats />
      <CallToAction />
    </>
  )
}
