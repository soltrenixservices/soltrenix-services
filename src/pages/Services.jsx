import { Container, Row, Col, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PageHeader } from '../components/Common'
import { services } from '../data'

export default function Services() {
  return (
    <>
      <PageHeader title="Our services" text="From a phone-answering AI to a full SaaS product, and from SEO to marketing campaigns, one team handles the design, the code and the growth." />
      <section className="st-sec">
        <Container>
          {services.map((s, i) => (
            <Row key={s.name} className="st-svc align-items-center g-5">
              <Col md={6} className={i % 2 ? 'order-md-2' : ''}>
                <h2>{s.name}</h2>
                <p className="st-sub">{s.sub}</p>
                <p className="lead-mut">{s.desc}</p>
                <a className="st-link" href="#/contact">Explore this service</a>
              </Col>
              <Col md={6}>
                <div className={`st-vis ${s.image ? 'has-img' : ''} ${s.light ? 'light' : ''}`}>
                  {s.image
                    ? <img src={s.image} alt={s.name} className="st-vis-img" style={{ objectPosition: s.pos }} />
                    : <FontAwesomeIcon icon={s.icon} className="st-vis-icon" />}
                  <div className="st-chips d-flex flex-wrap gap-2">
                    {s.tools.map((t) => <Badge key={t} pill className="st-chip">{t}</Badge>)}
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  )
}
