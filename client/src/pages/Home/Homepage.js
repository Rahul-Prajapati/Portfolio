import React from 'react'
import Header from '../../components/Header'
import Introduction from './Introduction'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import ProfileLinks from './ProfileLinks'
import { useSelector } from 'react-redux'
import ScrollToTop from '../../components/ScrollBotTop'


const Home = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && <div className='bg-primary px-5 lg:px-40'>
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
      }
    </div>
  )
}

export default Home