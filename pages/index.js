import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Insights from '../components/Insights'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Payakula Tarun Chandra - Freelance AI Engineer & Full-Stack Developer</title>
        <meta name="description" content="Payakula Tarun Chandra - Freelance AI Engineer, Data Analyst & Full-Stack Developer specializing in Python, Machine Learning, React.js, and Data Analytics. 100+ datasets analyzed. Available for freelance projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Process />
      <Projects />
      <Insights />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}