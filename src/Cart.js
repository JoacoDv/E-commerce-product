import React from "react"
import trash from "./images/icon-delete.svg"


const Cart = ({cartClass, cartList, setCartList}) => {
    return (<div className={cartClass}>
        <section className="header">
            <h3>Cart</h3>
        </section>
        <section className="content-cart">
            {Object.keys(cartList).length === 0 ? <p>Your cart is empty</p> : <ProductCart cartList={cartList} setCartList={setCartList} />}
        </section>
    </div>)
}

const ProductCart = ({cartList, setCartList}) => {
    return (<>
        <section style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", gap: "20px", color: "hsl(219, 9%, 45%)", fontWeight: "400" }}>
            <img src={cartList.image} style={{borderRadius: "8px", height: "60px", width: "60px"}}/>
            <section display="flex">
                <p width="100%">{cartList.title}</p>
                <p>${cartList.price} x {cartList.unit} 
                    <strong style={{fontWeight: "700", color: "hsl(220, 13%, 13%)"}}>$ {cartList.price * cartList.unit}</strong>
                    </p>
            </section>
            <img src={trash} style={{cursor: "pointer"}} width="20px" height="20px" />
        </section>
        <button className="add-to-cart" style={{width: "100%", margin:"20px 0", display: "block", textAlign: "center"
        }}>Checkout</button>
        </>)
}

export default Cart