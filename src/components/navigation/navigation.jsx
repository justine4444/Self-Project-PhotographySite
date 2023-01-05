import './navigation.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom';
console.log(window.location);
// replace a by Link and href by to
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
         <li ><Link to="#" className='logo'></Link></li>
         <CustomLink to="/home"  onClick={handleClick}>Home</CustomLink>
         <CustomLink to="/portfolio"  onClick={handleClick}>Portfolio</CustomLink>
         <CustomLink  to="/gallery"  onClick={handleClick} >Gallery</CustomLink>
         <CustomLink to="/contact"  onClick={handleClick}>Contact</CustomLink>
         <CustomLink to="/services"  onClick={handleClick}>Pricing </CustomLink>
        
          {/* <li ><a href="/home" className='active1'>Home</a></li> */}
          {/* <li ><a href="/gallery">Gallery</a></li>
          <li ><a href="/about">About</a></li>
          <li ><a href="/contact">Contact</a></li>  */}
         </ul>
         </nav>
        </div>

 );
}

// const CustomLink=({href,children,...props})=>

const CustomLink=({to,children,...props})=>
{
  const path=window.location.pathname;
 

  return(
    <li  ><Link className={path===to ? "active1" : ""} to={to} {...props}>{children}</Link></li>
    // <li  ><Link className={path===href ? "active1" : ""} href={href} {...props}>{children}</Link></li>
  )
}
