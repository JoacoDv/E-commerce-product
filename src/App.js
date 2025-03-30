import React, {useState} from "react";
import NavBar from "./NavBar"
import ImgContainer from "./ImgContainer"
import Content from "./Content"
import Cart from "./Cart";
import imageProduct from "./images/image-product-1-thumbnail.jpg"


const App = () => {
        const [cartClass, setCartClass] = useState("cart-container hidden")
        const [cartList, setCartList] = useState({price: 125, title: "Fall Limited Edition Sneakers", unit: 3, image: imageProduct})
    return ( <>

        <NavBar setCartClass={setCartClass} cartClass={cartClass}/>
        <Cart cartClass={cartClass} cartList={cartList} setCartList={setCartList} />

        <main>
            <ImgContainer />
            <Content setCartList={setCartList}/>
        </main>
        
                
        </>
    );
};

export default App;


