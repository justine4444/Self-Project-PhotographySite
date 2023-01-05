import { useState, useEffect } from 'react'
import './slider.scss';
import img11 from '../Slider/img11.jpg'
import img12 from '../Slider/img12.jpg'
import img14 from '../Slider/img14.jpg'
import img15 from '../Slider/img15.jpg'
import img13 from '../Slider/img13.jpg'
export const Slider = () => {


    return (
        <div className="sliderContainer">

            <div class="slider">
            <ul>
                <li className='text'>JUSTINE PHOTOGRAPHY</li>
                <li className='text1'>TELLING YOUR STORY THROUGH BEAUTIFUL AND MEANINGFUL IMAGERY</li>
                <li className='text1'>ACCLAIMED INDIA AND DESTINATION WEDDING VIDEOGRAPHER - PHOTOGRAPHER</li>
            </ul>
            </div>

            <div class="specialites">
                <li className='text2'>OUR SPECIALITES</li>
                <li className='text3'>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</li>
                
                <div className='user'>
               <img src={img11} alt=""></img>
               <img src={img12} alt=""></img>
               <img src={img13} alt=""></img>
               <img src={img14} alt=""></img>
               <img src={img15} alt=""></img>
                </div>
            </div>

        </div>


    )
}