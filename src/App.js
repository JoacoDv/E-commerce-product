import React, {useState} from "react";
import NavBar from "./NavBar"
import ImgContainer from "./ImgContainer"
import Content from "./Content"


const Cart = ({cartClass}) => {
    return (<div className={cartClass}>
        <section className="header">
            <h3>Cart</h3>
        </section>
        <section className="content-cart">
            <p>Your cart is empty</p>
        </section>
    </div>)
}

const App = () => {
        const [cartClass, setCartClass] = useState("cart-container hidden")
    return ( <>

        <NavBar setCartClass={setCartClass} cartClass={cartClass}/>
        <Cart cartClass={cartClass} />

        <main>
            <ImgContainer />
            <Content/>
        </main>
        
                
        </>
    );
};

export default App;


