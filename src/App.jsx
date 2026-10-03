import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Faqs from './pages/Faqs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const pages = { home: Home, about: About, services: Services, faq: Faqs, blog: Blog, contact: Contact }
const titles = {
  home: 'Soltrenix | Software Development and AI Voice Agents',
  about: 'About | Soltrenix',
  services: 'Services | Soltrenix',
  faq: 'FAQs | Soltrenix',
  blog: 'Blog | Soltrenix',
  contact: 'Contact | Soltrenix',
}

const getKey = () => {
  const k = window.location.hash.replace('#/', '')
  return pages[k] ? k : 'home'
}

export default function App() {
  const [page, setPage] = useState(getKey())

  useEffect(() => {
    const onHash = () => setPage(getKey())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[page]
  }, [page])

  const Page = pages[page]
  return (
    <>
      <Header page={page} />
      <main><Page /></main>
      <Footer />
    </>
  )
}
