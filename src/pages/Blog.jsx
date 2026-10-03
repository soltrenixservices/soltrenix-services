import { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { PageHeader } from '../components/Common'
import { posts } from '../data'

export default function Blog() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageHeader title="Blog" text="Practical notes on software, AI voice and building digital products." />
      <section className="st-sec">
        <Container>
          <Row className="g-4">
            {posts.map((p, i) => (
              <Col key={p.title} md={4}>
                <Card className="st-post h-100">
                  <Card.Body>
                    <small className="st-sub">{p.tag} &middot; {p.time}</small>
                    <Card.Title as="h3" className="mt-2">{p.title}</Card.Title>
                    <Card.Text className="lead-mut">{p.intro}</Card.Text>
                    {open === i && <Card.Text>{p.body}</Card.Text>}
                    <Button variant="link" className="st-link p-0" onClick={() => setOpen(open === i ? null : i)}>
                      {open === i ? 'Show less' : 'Read more'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}
