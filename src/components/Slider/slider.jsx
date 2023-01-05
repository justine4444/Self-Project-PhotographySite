import { useState, useEffect } from 'react'
import './slider.scss';
import img11 from '../Slider/img11.jpg'
import img12 from '../Slider/img12.jpg'
import img14 from '../Slider/img14.jpg'
import img15 from '../Slider/img15.jpg'
import img13 from '../Slider/img13.jpg'
import img17 from '../Slider/img17.jpg'
import img20 from '../Slider/img20.jpg'
import img21 from '../Slider/img21.jpg'
import img23 from '../Slider/img23.jpg'
import img24 from '../Slider/img24.jpg'
import img33 from '../Slider/img33.jpg'
import img32 from '../Slider/img32.jpg'
import img30 from '../Slider/img30.jpg'
import img28 from '../Slider/img28.jpeg'
import { Footers } from '../footer/footer'
export const Slider = () => {


  return (
    <div className="sliderContainer">

      <div className="slider">
        <ul>
          <li className='text'>Welcome! to Justine Photography</li>
          <li className='text1'>GOD BLESS I HOPE YOU'RE DOING WELL.</li>
          <li className='text1'>TELLING YOUR STORY THROUGH BEAUTIFUL AND MEANINGFUL IMAGERY</li>
          <li className='text1'>ACCLAIMED INDIA AND DESTINATION WEDDING VIDEOGRAPHER - PHOTOGRAPHER</li>
        </ul>
      </div>

      <div className="specialites">
        <li className='text2'>OUR SPECIALITES</li>
        <li className='text3'>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</li>

        <div className='user'>
          <div className='content'>
            <img src={img17} alt=""></img>
            <p className='content'>Fashion Photography</p>

          </div>

          <div className='content'>
            <img src={img20} alt=""></img>
            <p className='content'>Wedding Photography</p>
          </div>
          <div className='content'>
            <img src={img21} alt=""></img>
            <p className='content'>Lifestyle Photography</p>
          </div>
          <div className='content'>
            <img src={img12} alt=""></img>
            <p className='content'>Nature Photography</p>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className='content1'>
          <li className='text2'>About Us</li>
          <li className='text4'>Hello,
            Our work reflects the beauty of this city and its gorgeous people.
            We first picked up a camera in 2016. Since then, God’s grace has led us to the passion and enthusiasm .
            We hope you see reflected in our shots. Capturing the beauty and poise that surrounds each human being in their very own,
            distinct individuality drives me out the door in the mornings.
            Our next big goal is to follow the light that travels around the globe each day.
            We plan to capture smiles all over the world, creating memories for my subjects and images for the rest of the world to enjoy!</li>
        </div>
        <div className='content1'>
          <img src={img14} alt=""></img>
        </div>
      </div>
      <div className='services'>
        <div className='content1'>
        <img src={img28} alt=""></img>
        
        {/* <img src={img32} alt=""></img> */}
        {/* <img src={img33} alt=""></img> */}
        </div>

        <div className='content1'>
        {/* <li className='text4'>
        Hi friend, thanks for stopping by. If you're in the market for a someone to capture you doin' you, someone who will hype 
        you up, and most importantly someone who will document all those tear jerking moments? you're in the right place... keep scrollin'
        </li> */}
        
        <li className='text4'> Thanks for making your way over to my page, We owe you a slice of pizza or a beer on ours. 
        If our loud/funny personality didn't scare you away over on our instagram stories, 
        than welcome and thanks for following along with us, 
        We can't wait to be friends!

We're a photographer for many reasons and one of those reasons is most likely why you found yourself on our page.

We're here to capture all the things !! Keep scrolling!!!
  {/* <img src={img32} alt=""></img>
        <img src={img33} alt=""></img> */}
</li>
        
        </div>
      </div>
      <div className="creators">
        <li className='text2'>HERE WE ARE</li>

        <div className='user'>
          <div className='content'>
            <img src={img11} alt=""></img>
            <p className='content'>Jane Robinson</p>
            <p1 className='content'>Founder</p1>
          </div>
          <div className='content'>
            <img src={img13} alt=""></img>
            <p className='content'>Jonathan Burns</p>
            <p1 className='content'>Founder</p1>
          </div>
          <div className='content'>
            <img src={img15} alt=""></img>
            <p className='content'>Helen Dean</p>
            <p1 className='content'>Editor</p1>
          </div>
          <div className='content'>
            <img src={img12} alt=""></img>
            <p className='content'>William Graham</p>
            <p1 className='content'>Photographer</p1>
          </div>
          <div className='content'>
            <img src={img12} alt=""></img>
            <p className='content'>William Graham</p>
            <p1 className='content'>Photographer</p1>
          </div>

        </div>

      </div>


      {/* <div className='footer'>

        <div className='logo'>
          JUSTINE
          <div className='text3'>Photography</div>
          <div className='text4'>We create possibilities for the connected world .</div>
          <p>Keep Smiling .</p>
        </div>
        <div className='explore'>Explore
          <div>
            <li >About</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>Home</li>
            <li>Services</li>
          </div>
        </div>
        <div className='visit'>Visit
          <div className='text4'>Leela Palace Rd, MRC Nagar,
            Raja Annamalai Puram, Chennai, Tamil Nadu 600028</div>
          <div className='visit1'>New Business
            <div className='text4'>justinealoysius44@gmail.com</div>
            <div className='text4'>9786515481</div>
          </div>

        </div>
        <div className='follow'>Follow
          <div className='text4'>Instagram</div>
          <div className='text4'>Facebook</div>
          <div className='text4'>Twitter</div>
          <div className='text4'>LinkedIn</div>
        </div>
        <div className='legal'>Legal
          <div className='text4'>Terms</div>
          <div className='text4'>Privacy</div>
        </div>

      </div>
      <div className='footer1'>Copyright © 2023 | Justine , All rights reserved . Photography by Justine Aloysius</div> */}
 <Footers/>
    </div>




  )
}