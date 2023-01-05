import './contact.scss'
import { Footers } from '../footer/footer'

export const Contact = () => {
    return (
        <div>
        <div className='contactContainer'>
            <div className="contact">

             <li>Lets start here</li>
             <li>Get in touch with India's finest story telling based wedding photographers and videographers!</li>
             <li>Justine Photography , Leela Palace Rd, MRC Nagar, Raja Annamalai Puram, Chennai,
                
                 Tamil Nadu 600028</li>
             <li>justinealoysius444@gmail.com</li>
             <li>9786515481</li>

            </div>
            <div className='enquiry'>
            <form className='form'>
                <li>Make an Enquiry</li>
                <div className='label'>
                    <div className='input'></div>
                    <label>Name</label>
                    <div className='input' > <input type="text" ></input></div>
                </div>
                <div className='label'>
                    <label>Email*</label>
                    <div className='input' > <input type="text" ></input></div>
                </div>
                <div className='label'>
                    <label>Phone Number</label>
                    <div className='input' > <input type="text" ></input></div>
                </div>
                <div className='label'>
                    <label>Comment</label>
                    <div className='input' > <textarea type="textarea" ></textarea></div>
                </div>
                <button className='button' placeholder ='Send'>Send</button>
            </form>
            </div>
           
        </div>
         <Footers/>
        </div>
    )
}