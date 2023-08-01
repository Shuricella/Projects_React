import React from "react";
import styles from './card_grid.module.css';

export default class Card extends React.Component{
    constructor(props) {
        super(props);

        this.addBasket = props.addBasket;
        
        this.card = props.card;
            // console.log ("this.basket=", props)
        this.state = {};
    }

    render() {
        // деструктурируем props.product
        const card = this.card;
        
        const {images, rating, price, title, category, brand} = this.card;
        return (
            <main className={styles['wrapper-card']}>

                <section className={styles["block-img"]}>
                    <img src={images[0]} alt={`${category} : ${brand}`} />
                </section>

                <section className={styles["block-rating-price"]}>

                    <div className={styles["block-rating"]}>
                        <div>
                            {rating}
                        </div>
                        
                        <div>
                            <i className="bi bi-star"></i>
                        </div>
                    </div>

                    <div className={styles["block-price"]}>
                        {price}
                    </div>

                </section>

                <section className={styles["bloсk-description-type"]}>

                <div className={styles["bloсk-description"]}>
                    <h1>
                        {title}
                    </h1>
                </div>

                <div className={styles["block-type"]}>
                    <p>
                        {category}
                    </p>
                </div>

                </section>
                                                                    
                <section className={styles["block-button-add"]} onClick={ () => this.addBasket(card)}  >
                    <p>Add To Cart</p>
                </section>

            </main>
        );
    }
}