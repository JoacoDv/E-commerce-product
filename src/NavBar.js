import React, {useRef, useState} from 'react'
import cart from "./images/icon-cart.svg"
import avatar from "./images/image-avatar.png"
const navItems = ["Collections","Men", "Women" ,"About" ,"Contact"]

const NavBar = ({setCartClass, cartClass}) => {
    const nav = useRef(null)
    const anchorArray = useRef([])
    const anchordPosition = useRef(0)
    function drawMark(index) {
        if (!anchorArray.current[index]) return
        const anchordRect = anchorArray.current[index].getBoundingClientRect()
        const navRect = nav.current.getBoundingClientRect()
        const width = anchordRect.width
        const leftRelativo = anchordRect.left - navRect.left
        return {leftRelativo, width}
    }
    const moveMark = ({leftRelativo, width}) => {
        nav.current.style.setProperty("--width", `${width}px`)
        nav.current.style.setProperty("--border", "3px")
        nav.current.style.setProperty("--left-pos", `${leftRelativo}px`)
    }
    return (<nav ref={nav} >
        <h2>sneakers</h2>
        {navItems.map((a, index)=> {
            return <a key={a} href='#' onBlur={() => {
                nav.current.style.setProperty("--left-pos", `0px`)
                nav.current.style.setProperty("--width", `0px`)
                nav.current.style.setProperty("--border", "0px")
            }} ref={a => anchorArray.current[index] = a} onFocus={(e) => moveMark(drawMark(index))}>{a}</a>
        })}
        <img src={cart} className='cart' alt='cart' onClick={e => setCartClass(cartClass === "cart-container" ? "cart-container hidden" : "cart-container")}></img>
        <img src={avatar} className='avatar' alt='avatar'></img>
    </nav>)
}

export default NavBar;