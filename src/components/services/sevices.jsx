import './services.scss'
import img2 from '../services/img2.jpg'
import img3 from '../services/img3.jpg'
import img4 from '../services/img4.jpg'
import img5 from '../services/img5.jpg'
import img6 from '../services/img6.jpg'
import img8 from '../services/img8.jpg'
import img9 from '../services/img9.jpg'
import { Footers } from '../footer/footer'

export const Services=()=>{
    return(
        <div className="service">
        <div className='header'>
            Services
            <img src={img2} alt=""></img>
        </div>
        <div className='mini'>
            <div className='mini1'> <img src={img3} alt=""></img></div>
            <div className='mini2'>
            <ul><li>Mini $450 </li>
            <li>-1 location</li>

             <li>-30min (up to 5 people)</li>

            <li>- 15 Detailed edits in high resolution.</li>

            <li>-Print release for personal use</li>
            </ul>


            </div>
        </div>

        <div className='standard'>
            
            <div className='standard1'>
            <ul><li>Standard $550 </li>
            <li>-1 location</li>

             <li>-Outfit change</li>

            <li>-45min</li>
           <li> -25 Detailed edits in high resolution.</li>


            <li>-Print release for personal use</li>
            </ul>
            </div>


            <div className='standard2'> <img src={img9} alt=""></img></div>

        </div>

        <div className='mini'>
            <div className='mini1'> <img src={img8} alt=""></img></div>
            <div className='mini2'>
            <ul><li>Ultimate $650</li>
            <li>-2 locations</li>
            <li>-outfit change</li>
             <li>-60min</li>

            <li>- 35 Detailed edits in high resolution.</li>

            <li>-Print release for personal use</li>
            </ul>


            </div>
        </div>

        <div className='standard'>
            
            <div className='standard1'>
            <ul><li>Pro $700</li>
            <li>-unlimited locations</li>
            <li>-outfit change</li>
             <li>-1 Day</li>

            <li>- 100 Detailed edits in high resolution.</li>

            <li>-Print release for personal use</li>
            </ul>
            </div>


            <div className='standard2'> 
            {/* <img src={img4} alt=""></img>  */}
         {/* <img src={img5} alt=""></img> */}
         <img src={img6} alt=""></img>
         {/* <img src={img7} alt=""></img> */}
         </div>
        </div>
        <Footers/>
        </div>
    )
}