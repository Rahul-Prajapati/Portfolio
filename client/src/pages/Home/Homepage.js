import React from 'react'
import Header from '../../components/Header'
import Introduction from './Introduction'
import About from './About'

 const Home = () => {
  return (
    <div>
      <Header/>
      <div className='bg-primary px-40' >
          <Introduction/>
          <About/>
      </div>
    </div>
  )
}

export default Home