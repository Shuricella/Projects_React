import styles from "./carts_list.module.css";
import Cart from "../Cart/Cart.jsx";


const CartsList = ( {closeModalWindow, basket, setBasket, calcTotalProducts} ) => {

    const carts = basket.carts;
    const cartsID = basket.cartsId;

    let totalPrice = 0;

    const updateAmountCurts = (name, id) => {
        const newCartsId = {...basket.cartsId};
  
        if(name === "next") { newCartsId[id] += 1; };
        if(name === "prev" && newCartsId[id] > 1) { newCartsId[id] -= 1; };

        calcTotalProducts(newCartsId);
        setBasket( (prevState) => ( { ...prevState, cartsId: newCartsId } )  );
    }

    const deleteCart = (id) => {
        const newCarts = basket.carts.filter(item => item.id !== id);;
        const newCartsId = {...basket.cartsId};
  
        delete newCartsId[id];

        calcTotalProducts(newCartsId);
        setBasket( { carts: newCarts, cartsId: newCartsId }  );
    };

    const calcTotalPrice = () => {
        carts.map( (item) => {
            const searchId = item.id;
            const searchPrice = item.price;
            const searchAmount = cartsID[searchId];
    
            const cartTotalPrice = searchPrice * searchAmount;
            
            totalPrice += cartTotalPrice;
        } );
    }
    calcTotalPrice();
    
    
    return (
        <dialog className="modal">
            
            <section className={styles["wrapper-cart-list"]}>

                <header className={styles["header-close"]}>
                    <a href="#" data-element="close-carts-list" onClick={() => closeModalWindow()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </a>
                </header>
                
                <main>
                    <ul className={styles["carts-list"]}>
                        
                        {carts.map( (item) => {
                            const amount = cartsID[item.id]; 
                            return (<Cart key={item.id} itemCart={item} amount={amount} updateAmountCurts={updateAmountCurts} deleteCart={deleteCart} />) 
                        } ) }
                                   
                    </ul>
                </main>
                
                <footer>
                    <div className={styles["cart-total"]}>
                        <h2 className={styles["text-cart-list"]}>Total:</h2>
                        <p className={styles["text-cart-list"]} data-element="total">

                            {totalPrice}

                        </p>
                    </div>
                
                    <div className={styles["order-button"]}>
                        <button className={styles["text-cart-list"]}>ORDER</button>
                    </div>
                </footer>

            </section>

        </dialog>
    );
};

export default CartsList;