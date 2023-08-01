import styles from './header.module.css';

const Header = ( {showModalWindow, totalProducts} ) => {

    return (
        <div className='item-header'>

            <section className={styles['header-components']}>

                <h1 className={styles['header-text-onlstore']}>Online Store</h1>
                
                <a href="#" className={styles['header-cart']} onClick={() => showModalWindow()}>
                    <div className={styles['header-cart-bloc']}>
                        <div className={styles['header-cart-bloc-resicle']}><i className="bi bi-cart"></i></div>
                        <p className={styles['header-cart-bloc-text']}>CART</p>
        
                        <p className={styles['header-total-roducts']}>
                            { totalProducts > 0 ? totalProducts: "" }
                        </p>
                    </div>
                </a>
                
            </section>

        </div>
    );
};

export default Header;
    
    
    

    