import { useState } from 'react';
import styles from './card_grid.module.css';

const CurdFunc = ( {card, addBasket} ) => {
    const [imageError, setImageError] = useState(false);

    const {images, rating, price, title, category, brand} = card;
    
    const handlyImageError = () => { 
        setImageError(true); 
    };

    return (
        <main className={styles['wrapper-card']}>

            <section className={styles["block-img"]}>
                {imageError ? 
                <img src='./imgDefaultNew.jpg' alt={`${category} : ${brand}`} /> :

                <img src={images[0]} alt={`${category} : ${brand}`} onError={handlyImageError} />
                }
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
                                                                
            <section className={styles["block-button-add"]} onClick={ () => addBasket(card)}  >
                <p>Add To Cart</p>
            </section>

        </main>
    );
}

export default CurdFunc;