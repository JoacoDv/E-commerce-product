import React, {useEffect} from "react"
import trash from "./images/icon-delete.svg"


const Cart = ({cartClass, cartList, setCartList, positionCart}) => {

    useEffect(() => {
        console.log("cartList ha cambiado:", cartList);
    }, [cartList]);

    // Procesar el array antes de renderizar
    const processedCartList = cartList.map((cartContent, index) => (
        <ProductCart
            index={index}
            key={index}
            cartContent={cartContent}
            cartList={cartList}
            setCartList={setCartList}
        />
    ));

    return (<div style={{...positionCart}} className={cartClass}>
        <section className="header">
            <h3>Cart</h3>
        </section>
        <section className="content-cart">
            {Object.keys(cartList).length === 0 ? <p>Your cart is empty</p> : cartList.map((cartContent, index) => {
                return <ProductCart index={index} key={index} cartContent={cartContent} cartList={cartList} setCartList={setCartList}/>
            })}
        </section>
    </div>)
}

const ProductCart = ({cartList, cartContent, setCartList, index}) => {
    return (<>
        <section style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", gap: "20px", color: "hsl(219, 9%, 45%)", fontWeight: "400" }}>
            <img src={cartContent.image} style={{borderRadius: "8px", height: "60px", width: "60px"}}/>
            <section display="flex">
                <p width="100%">{cartContent.title}</p>
                <p>${cartContent.price} x {cartList.unit} 
                    <strong style={{fontWeight: "700", color: "hsl(220, 13%, 13%)"}}>$ {cartContent.price * cartContent.unit}</strong>
                    </p>
            </section>
            <img onClick={e => {
                const newCartList = cartList.filter((_, i) => i !== index);
                setCartList(newCartList)
                }} src={trash} style={{cursor: "pointer"}} width="20px" height="20px" />
        </section>
        <button className="add-to-cart" style={{width: "100%", margin:"20px 0", display: "block", textAlign: "center"
        }}>Checkout</button>
        </>)
}

export default Cart