import { useState } from 'react';
import styles from './cart.module.css';

const Cart = (  {itemCart, amount, updateAmountCurts, deleteCart} ) => {
    const [imageErrorCart, setImageErrorCart] = useState(false);

    const {id, images, category, title, price} = itemCart;

    const calcPrice = amount * price;

    const handlyImageErrorCart = () => { 
        setImageErrorCart(true); 
    };
    
    return (
        <li className={styles.cart} data-element-id={id}>
                
            <div className={styles["cart-img"]}>
                {imageErrorCart ? 
                    <img src='./imgDefaultNew.jpg' alt={category} height="40" /> :
                    <img src={images[0]} alt={category} height="40" onError={handlyImageErrorCart} />
                }
            </div>
            
            <div className={styles["block-cart-title"]}>
                <h1 className={ `${styles['cart-title']} ${styles['text-cart-list']}` }>{title}</h1>
            </div>
            
            <section className={styles["cart-block"]}>
            <div className={styles["amount-product"]}>

                <button 
                    type="button" 
                    onClick={ () => {updateAmountCurts("prev" ,id)}} 
                    data-element="prevbutton"
                >
                    <i className="bi bi-dash-circle"></i>
                </button>      
        
                <p className={styles["text-cart-list"]}>
                    {amount}
                </p>
        
                <button 
                    type="button" 
                    onClick={ () => {updateAmountCurts("next" ,id)}} 
                    data-element="nextbutton"
                >
                    <i className="bi bi-plus-circle"></i>
                </button>

            </div>
            
            <div className={styles["price-title"]}>
                {calcPrice}
            </div>
            
            <div className={styles["delete-title"]}>
                <button type="button" onClick={ () => {deleteCart(id)}}>    
                <i className="bi bi-trash-fill"></i>
                </button>
            </div>
            </section>
            
        </li>
    );

};

export default Cart;