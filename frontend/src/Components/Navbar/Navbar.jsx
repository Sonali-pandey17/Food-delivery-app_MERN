import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../contexts/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt='' className='logo'/> */}
        <Link to='/'><div className='logo'>
          <h1>ThelaBites</h1>
          <p>Street Flavors to Your Doorstep!</p>
        </div></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <Link to='menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</Link>
            <Link to='services' onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</Link>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
                <img src={assets.search_icon} alt=''/>
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
                    <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                {!token ? 
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
                :<div className='navbar-profile'>
                  <img src={assets.profile_icon} alt="" />
                  <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr/>
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  </ul>
                </div>
                }
                
            </div>
    </div>
  )
}

export default Navbar