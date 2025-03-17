import React from 'react'
import Header from './Components/Header'
import WeDo from './Components/WeDo'
import MYworks from './Components/MYworks'
import Brands from './Components/Brands'
import PeopleTalk from './Components/PeopleTalk'
import ContactUs from './Components/ContactUs'
// import Testimonials from "./Components/Testimonials";


const App = () => {
  return (
    <div>
      <Header />
      <WeDo/>
      <Brands/>
      <MYworks/>
      {/* <Testimonials/> */}
      <PeopleTalk/>
      <ContactUs/>
    </div>
  )
}

export default App
