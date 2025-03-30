import React, {useState} from "react";
import minusIcon from "./images/icon-minus.svg"
import plusIcon from "./images/icon-plus.svg"
import cart from "./images/icon-cart.svg"
import imageProduct from "./images/image-product-1-thumbnail.jpg"


const Content = ({setCartList, cartList}) => {
    const [count, setCount] = useState(0);
    return (<section className="content">
        <h3>Sneaker Company</h3>

        <h1>Fall Limited Edition Sneakers</h1>

        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

        <div className="price-container">
            <div className="actually-price"><h2 className="price">$125.00</h2><p className="discount">50%</p></div>
            <p className="old-price">$250.00</p>
        </div>

        <div className="counter">
            <button onClick={() => setCount(Math.max(count - 1, 0))}>
                <img src={minusIcon} alt="Restar" />
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>
                <img src={plusIcon} alt="Sumar" />
            </button>
        </div>
        <button className="add-to-cart" onClick={e => {
            if (count === 0) return;
            setCartList([...cartList, {price: 125, title: "Fall Limited Edition Sneakers", unit: count, image: imageProduct}])
            setCount(0)
        }}><img src={cart}></img>Add to cart</button>

        </section>
    )
}

export default Content;