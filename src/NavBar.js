import React from 'react'
import cart from "./images/icon-cart.svg"
import avatar from "./images/image-avatar.png"
const navItems = ["Collections","Men", "Women" ,"About" ,"Contact"]

const NavBar = () => {
    return (<nav>
        <h2>sneakers</h2>
        {navItems.map(a => {
            return <a key={a} href='#'>{a}</a>
        })}
        <img src={cart} className='cart' alt='cart'></img>
        <img src={avatar} className='avatar' alt='avatar'></img>
    </nav>)
}

export default NavBar;