import { faMicrophone, faCode, faServer, faLayerGroup, faCloud, faBullhorn, faMagnifyingGlass, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import aiVoiceImg from './assets/ai-voice.webp'
import frontendImg from './assets/frontend.webp'
import backendImg from './assets/backend.webp'
import fullstackImg from './assets/fullstack.webp'
import cloudImg from './assets/cloud.webp'
import marketingImg from './assets/marketing.webp'
import seoImg from './assets/seo.webp'
import brandingImg from './assets/branding.webp'
import mindmetaShot from './assets/work-mindmeta.webp'
import seasonalShot from './assets/work-seasonal.webp'
import fourcShot from './assets/work-4c.webp'
import fruitaShot from './assets/work-fruita.webp'

export const tagline = 'Innovation. Technology. Growth. Digitalize.'

export const navLinks = [
  { key: 'home', label: 'Home', href: '#/' },
  { key: 'about', label: 'About', href: '#/about' },
  { key: 'services', label: 'Services', href: '#/services' },
  { key: 'faq', label: 'FAQs', href: '#/faq' },
  { key: 'blog', label: 'Blog', href: '#/blog' },
  { key: 'contact', label: 'Contact', href: '#/contact' },
]

export const tech = ['Next.js', 'React', 'Angular', 'Node.js', 'Python', 'FastAPI', 'LiveKit', 'Twilio', 'Vonage', 'AWS', 'GCP', 'Azure']

export const services = [
  { icon: faMicrophone, image: aiVoiceImg, name: 'AI Voice Agents', short: 'Answer calls and book leads automatically.', sub: 'Answer every call. Book every lead.', desc: 'We add AI voice to your CRM, app or phone system, or build a complete voice agent from scratch. Think AI receptionists, phone answering, IVR replacement and call automation.', tools: ['LiveKit', 'Twilio', 'Vonage', 'Pipecat', 'Vapi', 'Retell', 'FastAPI'] },
  { icon: faCode, image: frontendImg, pos: 'center 42%', name: 'Frontend Development', short: 'Fast web apps, dashboards and landing pages.', sub: 'Fast, clean interfaces people enjoy using.', desc: 'Web apps, dashboards, landing pages and SaaS interfaces built to load quickly, work for everyone and rank well on search engines. We also build Adobe Experience Manager components and Figma-to-code design systems.', tools: ['Next.js', 'React', 'Angular', 'AEM', 'Figma to code', 'Core Web Vitals'] },
  { icon: faServer, image: backendImg, pos: 'center 30%', name: 'Backend and APIs', short: 'Secure systems and integrations.', sub: 'Reliable systems behind every screen.', desc: 'Secure REST, GraphQL and WebSocket APIs with testing and logging built in. We connect payments, CRMs, telephony and messaging so your tools work together.', tools: ['Node.js', 'Python', 'FastAPI', 'Express', 'NestJS', 'REST', 'GraphQL', 'WebSockets'] },
  { icon: faLayerGroup, image: fullstackImg, pos: 'center', name: 'Full Stack Products', short: 'MVPs and SaaS products end to end.', sub: 'From idea to live with one team.', desc: 'MVPs, SaaS platforms, internal tools and dashboards. One scope, one quote and one delivery date, with no handoffs between separate teams.', tools: ['SaaS', 'Dashboards', 'Internal tools', 'Web apps'] },
  { icon: faCloud, image: cloudImg, pos: 'center 30%', name: 'Cloud and Deployment', short: 'Deployment on AWS, GCP and Azure.', sub: 'Launch smoothly. Scale without worry.', desc: 'We deploy your product on AWS, GCP or Azure with automated CI/CD, monitoring and documentation, so updates go live safely.', tools: ['AWS', 'GCP', 'Azure', 'CI/CD', 'Monitoring'] },
  { icon: faBullhorn, image: marketingImg, pos: 'center', name: 'Digital Marketing', short: 'Social, ads, email and content that bring leads.', sub: 'Reach the right people. Turn clicks into customers.', desc: 'We plan and run campaigns across social media, paid ads, email and content, then report what works so your budget goes further.', tools: ['Social media', 'Paid ads', 'Content', 'Email', 'Analytics'] },
  { icon: faMagnifyingGlass, image: seoImg, pos: 'center', name: 'SEO', short: 'Rank higher and get found on search.', sub: 'Get found when customers search.', desc: 'Keyword research, technical fixes, on-page optimisation and content that help your site rank higher and bring steady organic traffic.', tools: ['Keyword research', 'Technical SEO', 'On-page SEO', 'Content', 'Local SEO', 'Reporting'] },
  { icon: faPalette, image: brandingImg, pos: 'center 35%', light: true, name: 'Branding and Design', short: 'Logos, UI and visuals that build trust.', sub: 'A look that people remember.', desc: 'Logos, brand guidelines, UI and UX design and marketing visuals that make your business look professional everywhere your customers find you.', tools: ['Logo', 'Brand guidelines', 'UI and UX', 'Social creatives'] },
]

export const work = [
  { name: 'Mind Meta AI', img: mindmetaShot, url: 'https://www.mindmeta.co.uk/', domain: 'mindmeta.co.uk', bg: '#e6e1f4', featured: true, desc: 'An AI voice bot for care homes that holds warm daily conversations with elderly residents, supports memory training and shows care teams real-time wellbeing insights on a dashboard.', tags: 'AI voice agent, SaaS platform, GDPR and HIPAA focused' },
  { name: 'FRUITA VEGETA', img: fruitaShot, url: 'https://fruitavegeta.com/', domain: 'fruitavegeta.com', bg: '#e3efd6', desc: 'Fresh fruit and vegetable business website.' },
  { name: 'Seasonal Sips LHR', img: seasonalShot, url: 'https://seaonalsipslhr.com/', domain: 'seaonalsipslhr.com', bg: '#fbe3c2', desc: 'Drinks brand website based in Lahore.' },
  { name: '4C Digital', img: fourcShot, url: 'https://www.4cdigital.com/', domain: '4cdigital.com', bg: '#dfe6ee', desc: 'Printing services website: business cards, flyers, banners and signs.' },
]

export const stats = [
  { n: '15 Min', t: 'Discovery call before work starts' },
  { n: 'Days', t: 'To ship a voice agent integration' },
  { n: '3 Clouds', t: 'AWS, GCP and Azure' },
  { n: '1 Team', t: 'Design, code and deployment' },
]

export const steps = [
  { t: 'Discovery', d: 'We learn your goals and current setup.' },
  { t: 'Design', d: 'Flows and screens you approve first.' },
  { t: 'Development', d: 'Clean code with regular demos.' },
  { t: 'Testing', d: 'Every feature checked as it is built.' },
  { t: 'QA', d: 'Final review on devices and load.' },
  { t: 'Release', d: 'Go live with monitoring in place.' },
]

export const principles = [
  { t: 'Clear scope', d: 'You know what you get, when, and for how much before work starts.' },
  { t: 'Honest communication', d: 'Regular demos and straight answers, with no jargon.' },
  { t: 'Code that lasts', d: 'Tested, documented and easy for the next developer to pick up.' },
]

export const pillars = [
  { t: 'Innovation', d: 'We pick fresh, practical ideas such as AI voice, then turn them into working products.' },
  { t: 'Technology', d: 'Modern, proven tools chosen for your needs, not for trends.' },
  { t: 'Growth', d: 'Software built to bring in leads, save time and scale with your business.' },
  { t: 'Digitalize', d: 'We move manual work online, from phone calls to dashboards.' },
]

export const faqs = [
  ['What services does Soltrenix offer?', 'We build AI voice agents, frontend web apps, backend systems and APIs, full stack products and cloud deployments. We also offer digital marketing, SEO, and branding and design.'],
  ['What is an AI voice agent?', 'It is software that talks to your customers on the phone or on the web. It can answer questions, book appointments and pass details to your CRM, any hour of the day.'],
  ['Can you add voice to our existing phone system or CRM?', 'Yes. We connect voice to your current APIs, telephony and tools, such as Twilio, Vonage or direct SIP, so you do not have to replace what already works.'],
  ['How long does a project take?', 'A voice agent integration can ship in days. Larger products such as SaaS platforms take longer. After a short call we give you a timeline in writing.'],
  ['How do you price projects?', 'We start with a free 15 minute call, then send a written scope and quote. You see the price before any work begins.'],
  ['Which technologies do you use?', 'Next.js, React and Angular on the frontend. Node.js, Python, FastAPI, Express and NestJS on the backend. LiveKit, Twilio and Vonage for voice. Standard analytics and ad platforms for marketing and SEO.'],
  ['Do you help after launch?', 'Yes. We deploy with monitoring and documentation, and we can stay on for updates and improvements.'],
  ['What kind of work do you not take on?', 'Our core is software, AI voice and digital growth. We do not build pure WordPress, Wix or Squarespace sites, or native-only mobile apps.'],
  ['How do I get started?', 'Send us a message on the contact page. We reply within one working day and suggest a time for a 15 minute call.'],
]

export const posts = [
  { tag: 'AI Voice', time: '5 min read', title: 'Five signs your business is ready for an AI voice agent', intro: 'Missed calls, long hold times and repeat questions are the clearest signals.', body: 'You are probably ready if you miss calls after hours, staff spend their day answering the same questions, bookings are made by phone, leads go cold while waiting for a callback, or your phone system cannot talk to your CRM. A voice agent can handle these calls and pass clean data to your tools.' },
  { tag: 'Frontend', time: '4 min read', title: 'Next.js or React: which should your product use?', intro: 'The answer depends on whether search traffic and speed matter on day one.', body: 'If your site needs to rank on search engines and load fast, Next.js gives you server rendering and routing out of the box. For an internal dashboard behind a login, plain React is often enough. We pick based on who will use the product and how.' },
  { tag: 'Backend', time: '4 min read', title: 'What a good backend handover looks like', intro: 'Documentation and tests matter more than clever code.', body: 'A good handover includes API documentation, a clear data model, automated tests, logging and a short guide to deploying. The test is simple: could a new developer ship a change on their first day? That is the standard we build to.' },
]

export const socials = [
  { icon: faFacebook, label: 'Facebook', url: 'https://www.facebook.com/SoltrenixServices' },
  { icon: faInstagram, label: 'Instagram', url: 'https://www.instagram.com/soltrenixservices/' },
  { icon: faGithub, label: 'GitHub', url: 'https://github.com/soltrenixservices' },
]
