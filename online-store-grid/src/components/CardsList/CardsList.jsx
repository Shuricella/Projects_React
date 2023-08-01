import CardFunc from "../Card/CardFunc.jsx";

const CardsList = ({products, productsError, addBasket}) => {
    
    return (
        <div className="item-main">
            <div className="item-main-cards">
                {productsError ? <h2>Error products:{productsError}</h2> : ''}

                { products.map( (card) => {
                    return (
                        <CardFunc 
                            key={card.id} 
                            card={card} 
                            addBasket={addBasket}
                        />
                    );
                } ) }
                    
            </div>
        </div>
    );
};

export default CardsList;