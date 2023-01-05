import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import {Navigations} from "./components/navigation/navigation";
import { Slider } from './components/Slider/slider';
import { Gallery } from './components/gallery/gallery';
import { Services } from './components/services/sevices';
import { Route,Routes } from 'react-router-dom';
import { Portfolio } from './components/Portfolio/portfolio';
import { Contact } from './components/contact/contact';


const App=()=> {
 
// console.log(window.location);
// let component
// switch(window.location.pathname)
// {
//   case "/":
//     component=<Slider/>
//     break
//     case "/services":
//       break
//       case "/home":
//         component=<Slider/>
//         break
//         case "/gallery":
//           component=<Gallery/>
//         break
//         case "/contact":
//           break
// }

  return (
    <div className='App'>
     
        {/* <ul>
          <li className='active'><a href="#">Services</a>
            <div className='submenu'>
              <ul>
                <li>Marriage</li>
                <li>Business</li>
                <li>Birthday</li>
                <li>FreeStyle</li>
              </ul>
            </div>
          </li>
          <li ><a href="#">Home</a></li>
          <li ><a href="#">Pages</a></li>
          <li ><a href="#">Gallery</a></li>
          <li ><a href="#">Contact</a></li>
        </ul> */}
        <div ><Navigations/></div>
        {/* <div> <Slider/></div> */}
        {/* {component} */}

        <Routes>
          <Route path="/" element={<Slider/>}/>
          <Route path="/home" element={<Slider/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      


    </div>
  );
}

export default App;
