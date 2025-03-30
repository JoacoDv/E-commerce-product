import React, {useState} from "react";
import NavBar from "./NavBar"
import ImgContainer from "./ImgContainer"
import Content from "./Content"
import Cart from "./Cart";
import imageProduct from "./images/image-product-1-thumbnail.jpg"


const App = () => {
    const [positionCart, setPositionCart] = useState({left: 0, top: 0})
    const [cartClass, setCartClass] = useState("cart-container hidden")
    const [cartList, setCartList] = useState([])
    return ( <>

        <NavBar setCartClass={setCartClass} cartClass={cartClass} setPositionCart={setPositionCart}/>
        <Cart positionCart= {positionCart} cartClass={cartClass} cartList={cartList} setCartList={setCartList} />

        <main>
            <ImgContainer />
            <Content setCartList={setCartList} cartList={cartList}/>
        </main>
        
                
        </>
    );
};

export default App;


