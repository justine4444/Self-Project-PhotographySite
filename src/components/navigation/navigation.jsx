import './navigation.scss'
import {useState} from 'react';
export const Navigations=()=>
{
    const [isActive, setIsActive] = useState("navBar");
    const handleClick = () => {
        setIsActive(current=>!current);
      };

 return(
        <div className={isActive ? 'navBar' : 'navBar active'}>
            <nav>
          <ul className="mobileNav">
           <li>
            <div className="menuContainer "  onClick={handleClick} >
                <div className="menuIcon">
                    <span className="line1"></span>
                    <span className="line2"></span>
                </div>
            </div>
           </li>
           <li className="logo"></li>

          </ul>
         <ul className='desktopNav'>
         <li ><a href="#" className='logo'></a></li>
          <li><a href="#">Services</a>
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
          <li ><a href="#">Gallery</a></li>
          <li ><a href="#">About</a></li>
          <li ><a href="#">Contact</a></li>
         </ul>
         </nav>
        </div>

 );
}
