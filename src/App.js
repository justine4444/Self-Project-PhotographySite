import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import {Navigations} from "./components/navigation/navigation";

const App=()=> {
 


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
        <Navigations/>
      


    </div>
  );
}

export default App;
