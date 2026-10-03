import { Container, Accordion } from 'react-bootstrap'
import { PageHeader } from '../components/Common'
import { faqs } from '../data'

export default function Faqs() {
  return (
    <>
      <PageHeader title="Frequently asked questions" text="Quick answers before we talk." />
      <section className="st-sec">
        <Container style={{ maxWidth: 820 }}>
          <Accordion defaultActiveKey="0" className="st-acc">
            {faqs.map(([q, a], i) => (
              <Accordion.Item eventKey={String(i)} key={q}>
                <Accordion.Header>{q}</Accordion.Header>
                <Accordion.Body>{a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <p className="mt-4">Still have a question? <a className="st-link" href="#/contact">Contact us</a></p>
        </Container>
      </section>
    </>
  )
}
