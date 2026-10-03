import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { stats, steps, work } from '../data'

export function Wave({ n = 18, h = 90 }) {
  return (
    <div className="wave" style={{ height: h }} aria-hidden="true">
      {Array.from({ length: n }, (_, k) => (
        <i key={k} style={{ animationDelay: `-${((k * 0.37) % 1.3).toFixed(2)}s`, animationDuration: `${(0.8 + ((k * 7) % 9) / 10).toFixed(2)}s` }} />
      ))}
    </div>
  )
}

export function PageHeader({ title, text }) {
  return (
    <section className="st-ph">
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
      </Container>
    </section>
  )
}

export function SectionTitle({ title, text }) {
  return (
    <div className="mb-5">
      <h2 className="st-h2">{title}</h2>
      {text && <p className="lead-mut mb-0">{text}</p>}
    </div>
  )
}

export function Stats() {
  return (
    <div className="st-band">
      <Container>
        <Row className="g-4">
          {stats.map((s) => (
            <Col key={s.n} xs={6} md={3}>
              <b>{s.n}</b>
              <span>{s.t}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export function Steps() {
  return (
    <Row className="g-4">
      {steps.map((s, i) => (
        <Col key={s.t} xs={6} lg={2}>
          <div className="st-step">
            <small>Step {i + 1}</small>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export function WorkGrid() {
  return (
    <Row className="g-4">
      {work.map((w) => (
        <Col key={w.name} xs={12} md={w.featured ? 12 : 4}>
          <Card as="a" href={w.url} target="_blank" rel="noopener noreferrer" className={`st-work h-100 ${w.featured ? 'feat' : ''}`}>
            <div className="shot" style={{ background: w.bg }}>
              {w.img
                ? <img src={w.img} alt={`${w.name} website`} className="shot-img" loading="lazy" />
                : <><div className="bar"><i /><i /><i />{w.domain}</div><div className="nm">{w.name}</div></>}
            </div>
            <Card.Body>
              <Card.Title as="h3">{w.name}</Card.Title>
              <Card.Text>{w.desc}</Card.Text>
              {w.tags && <Card.Text className="small lead-mut">{w.tags}</Card.Text>}
              <span className="st-link">Visit website <FontAwesomeIcon icon={faArrowRight} /></span>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export function CallToAction() {
  return (
    <section className="st-sec text-center">
      <Container>
        <h2 className="st-h2">Have a project in mind?</h2>
        <p className="lead-mut mb-4">Tell us what you need. We will reply within one working day.</p>
        <Button href="#/contact" className="btn-gold">Book a 15 minute call</Button>
      </Container>
    </section>
  )
}
