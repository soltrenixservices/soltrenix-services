import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socials, tagline } from '../data'

export default function Footer() {
  return (
    <footer className="st-footer">
      <Container className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <span>All Rights Reserved &copy; {new Date().getFullYear()} Soltrenix Services.</span>
        <span className="d-flex gap-3 fs-5">
          {socials.map((s) => (
            <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a>
          ))}
        </span>
        <span>{tagline}</span>
      </Container>
    </footer>
  )
}
