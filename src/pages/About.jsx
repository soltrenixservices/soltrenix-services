import { Container, Row, Col } from 'react-bootstrap'
import { PageHeader, SectionTitle, Steps, Stats } from '../components/Common'
import { principles, pillars } from '../data'

export default function About() {
  return (
    <>
      <PageHeader title="About Soltrenix" text="A software company that turns ideas into working products." />
      <section className="st-sec">
        <Container>
          <Row className="g-5">
            <Col md={6}>
              <h2 className="st-h2">Who we are</h2>
              <p className="lead-mut">Soltrenix designs and builds software for growing businesses. We cover web interfaces, backend systems, AI voice agents, SEO and digital marketing, and we take projects from first idea to live launch with one team.</p>
              <p className="lead-mut">Our name reflects how we work: we pair fresh thinking with solid engineering, so what we build is both new and dependable.</p>
            </Col>
            <Col md={6}>
              {principles.map((p) => (
                <div key={p.t} className="st-bar-left"><h3>{p.t}</h3><p>{p.d}</p></div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="st-sec st-alt">
        <Container>
          <SectionTitle title="Our expertise" text="Four ideas guide every project we take on." />
          <Row className="g-4">
            {pillars.map((p) => (
              <Col key={p.t} xs={12} sm={6} lg={3}>
                <div className="st-pillar"><h3>{p.t}</h3><p>{p.d}</p></div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="st-sec">
        <Container>
          <SectionTitle title="How we work" text="A clear process keeps your project on time and on budget." />
          <Steps />
        </Container>
      </section>
      <Stats />
    </>
  )
}
