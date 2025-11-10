import Head from 'next/head'
import { useState, useEffect } from 'react'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Intersection Observer for smooth animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe elements after loading
    const observeElements = () => {
      const animateElements = document.querySelectorAll('.section-animate')
      animateElements.forEach((el) => observer.observe(el))
    }

    if (!loading) {
      setTimeout(observeElements, 100)
    }

    // Also observe immediately when component mounts
    setTimeout(observeElements, 200)

    // Fallback: Make all sections visible after 3 seconds if intersection observer fails
    setTimeout(() => {
      const animateElements = document.querySelectorAll('.section-animate')
      animateElements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible')
        }
      })
    }, 3000)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [loading])

  return (
    <>
      <Head>
        <title>Payakula Tarun Chandra - Freelance AI Engineer & Full-Stack Developer</title>
        <meta name="description" content="Payakula Tarun Chandra - Freelance AI Engineer, Data Analyst & Full-Stack Developer specializing in Python, Machine Learning, React.js, and Data Analytics. 100+ datasets analyzed. Available for freelance projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {loading && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      
      <Header />
      <div id="home"><Hero /></div>
      <div className="section-animate visible" id="about"><About /></div>
      <div className="section-animate"><Education /></div>
      <div className="section-animate" id="skills"><Skills /></div>
      <div className="section-animate"><Services /></div>
      <div className="section-animate"><Process /></div>
      <div className="section-animate" id="projects"><Projects /></div>
      <div className="section-animate"><Insights /></div>
      <div className="section-animate" id="testimonials"><Testimonials /></div>
      <div className="section-animate"><FAQ /></div>
      <div className="section-animate" id="contact"><Contact /></div>
      <Footer />
    </>
  )
}