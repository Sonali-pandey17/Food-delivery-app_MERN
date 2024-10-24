import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate();
  const menuList = ()=>{
    navigate('/menu');
    window.scrollTo(0, 0);
  }
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            <button onClick={menuList}>View Menu</button>
        </div>
    </div>
  )
}

export default Header