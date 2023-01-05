import './portfolio.scss'
import img1 from '../Portfolio/img1.jpg'
import img2 from '../Portfolio/img2.jpg'
import img3 from '../Portfolio/img3.jpg'
import img6 from '../Portfolio/img6.jpg'
import img4 from '../Portfolio/img4.jpg'
import img7 from '../Portfolio/img7.jpg'
import img8 from '../Portfolio/img8.jpg'
import img9 from '../Portfolio/img9.jpg'
import img10 from '../Portfolio/img10.jpg'
import img11 from '../Portfolio/img11.jpg'
import img12 from '../Portfolio/img12.jpg'
import img13 from '../Portfolio/img13.jpg'
import img14 from '../Portfolio/img14.jpg'
import img16 from '../Portfolio/img16.jpg'
import img17 from '../Portfolio/img17.jpg'
import img18 from '../Portfolio/img18.jpg'
import img19 from '../Portfolio/img19.jpg'
import img22 from '../Portfolio/img22.jpg'
import img23 from '../Portfolio/img23.jpg'
import img24 from '../Portfolio/img24.jpg'
import img25 from '../Portfolio/img25.jpg'
import img26 from '../Portfolio/img26.jpg'
import img27 from '../Portfolio/img27.jpg'
import img28 from '../Portfolio/img28.jpg'
import img29 from '../Portfolio/img29.jpg'
import img32 from '../Portfolio/img32.jpg'
import img34 from '../Portfolio/img34.jpg'
import img35 from '../Portfolio/img35.jpg'
import img36 from '../Portfolio/img36.jpg'
import img37 from '../Portfolio/img37.jpg'
import { Footers } from '../footer/footer'

export const Portfolio=()=>{
    return(
<div className="container">
        <div className="portfolio"> 
            <div className='col'>
            <li>Portraits</li>
           
            <img src={img2} alt=""></img>
            <img src={img1} alt=""></img>
            <img src={img3} alt=""></img>
            
            </div>
            <div className='col'>
            <img src={img26} alt=""></img>
            <img src={img3} alt=""></img>
            <img src={img6} alt=""></img>
            </div>
        </div>

        <div className="portfolio"> 
            <div className='col'>
            <li>Family</li>
            <img src={img8} alt=""></img>
            <img src={img7} alt=""></img>
            <img src={img9} alt=""></img>
            
            </div>
            <div className='col'>
            <img src={img10} alt=""></img>
            <img src={img11} alt=""></img>
            <img src={img12} alt=""></img>
            </div>
        </div>

        
        <div className="portfolio"> 
            <div className='col'>
            <li>Couples</li>
            <img src={img14} alt=""></img>
            <img src={img23} alt=""></img>
            <img src={img16} alt=""></img>
            
            </div>
            <div className='col'>
            <img src={img17} alt=""></img>
            <img src={img24} alt=""></img>
            <img src={img13} alt=""></img>

            </div>
        </div>

        <div className="portfolio"> 
            <div className='col'>
            <li>Wedding</li>
            <img src={img28} alt=""></img>
            <img src={img25} alt=""></img>
            <img src={img29} alt=""></img>
            
            </div>
            <div className='col'>
            <img src={img18} alt=""></img>
            <img src={img32} alt=""></img>
            <img src={img34} alt=""></img>

            </div>
        </div>


         
         <Footers/>
         </div>

    )
}