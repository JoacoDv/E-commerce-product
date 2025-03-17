import React, {useState, useRef} from "react"
import closeIcon from "./images/icon-close.svg"
import previous from "./images/icon-previous.svg"
import next from "./images/icon-next.svg"
import product1 from "./images/image-product-1.jpg"
import product2 from "./images/image-product-2.jpg"
import product3 from "./images/image-product-3.jpg"
import product4 from "./images/image-product-4.jpg"
import productThumbnail1 from "./images/image-product-1-thumbnail.jpg"
import productThumbnail2 from "./images/image-product-2-thumbnail.jpg"
import productThumbnail3 from "./images/image-product-3-thumbnail.jpg"
import productThumbnail4 from "./images/image-product-4-thumbnail.jpg"
const thumbnail = [productThumbnail1, productThumbnail2, productThumbnail3, productThumbnail4]
const product = [product1, product2, product3, product4]


const Thumbnail = ({setSelectedImg}) => {
    return (<section className="thumbnail-container">{thumbnail.map((img, index) => {
            return <button className="thumbnail-button" onFocus={e => setSelectedImg(product[index])}><img src={img} alt="thumbnail" className="img-thumbnail" key={img}></img></button>
    })}</section> )
}


const ImgContainer = () => {
    const popup = useRef(null)
    const [selectedImg, setSelectedImg] = useState(product[0])
    return (<section className="img-container">
        <section className="popup hidden" ref={popup} >
            <img src={closeIcon} alt="close" className="close-icon" onClick={e => {
                popup.current.classList.toggle("hidden")
                document.body.style.overflow = "auto"
            }}></img>
            <div className="img-popup-container">
                <img src={selectedImg} alt="product1" className="img-product-popup"></img>
                <button className="change-photo left"><img src={previous} alt="previous" className="previous" ></img></button>
                <button className="change-photo right"><img src={next} alt="next" className="next"></img></button>
            </div>
            <Thumbnail setSelectedImg={setSelectedImg} />
        </section>
        <img src={selectedImg} alt="product1" className="img-product" onClick={e =>{ 
            popup.current.classList.toggle("hidden")
            document.body.style.overflow = "hidden"
            }}></img>

        <Thumbnail setSelectedImg={setSelectedImg} />
        
    </section>)
}
export default ImgContainer