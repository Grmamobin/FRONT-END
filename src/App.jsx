import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Card from './components/card'
import { useState } from 'react'

import mobile from '.././assets/images/image-web-3-mobile.jpg'
import desktop from '.././assets/images/image-web-3-desktop.jpg'
import retro from '.././assets/images/image-retro-pcs.jpg'
import laptops from '.././assets/images/image-top-laptops.jpg'
import gaming from '.././assets/images/image-gaming-growth.jpg'

function App() {
  const [isOpen , setIsopen] = useState(false)
  return (
    <>
    <Header setIsopen = {setIsopen}/>
    <Sidebar isOpen = {isOpen} setIsopen = {setIsopen}/>


    <div className="middle">
      <div className="middle-left">

        <img src={mobile} alt="img-mobile" />

        <img src={desktop} alt="img-desktop" />

      <div className="left-part">
            <p> The Bright Future of Web 3.0?</p>
        <div className="text-and-btn">
            <p>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
            </p>
            <button>Read more</button>
        </div>
      </div>

      </div>

      <div className="middle-right">
      <div className="right-text">
            <h2>New</h2> 
            <h4>Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr/>
            <h4>The Downsides of AI Artistry</h4>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <hr/>
            <h4>Is VC Funding Drying Up?</h4>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
      </div>
    </div>

    <footer className='footer-part'>
      <Card img_Card={retro} h2_Card='01' h3_Card='Reviving Retro PCs' p_Card='What happens when old PCs are given modern upgrades?'/>

      <Card img_Card={laptops} h2_Card='02' h3_Card='Top 10 Laptops of 2022' p_Card='Our best picks for various needs and budgets.'/>

      <Card img_Card={gaming} h2_Card='03' h3_Card='The Growth of Gaming' p_Card='How the pandemic has sparked fresh opportunities.'/>
    </footer>

    </>
  )
}

export default App
