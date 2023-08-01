import React from "react"

export default class Card extends React.Component{
    constructor(props) {
        super(props);

        this.product = props.product;
        // console.log("this.product=", this.product);

        this.state = {};
    }

    render() {
        // деструктурируем props.product
        const {images, rating, price, title, category} = this.product;
        return (
            <main className="wrapper-card">

                <section className="block-img">
                    <img src={images} alt={category} />
                </section>

                <section className="block-rating-price">

                    <div className="block-rating">
                        <div>
                            {rating}
                        </div>
                        
                        <div><i className="bi bi-star"></i></div>
                    </div>

                    <div className="block-price">
                        {price}
                    </div>

                </section>

                <section className="bloсk-description-type">

                <div className="bloсk-description">
                    <h1>
                        {title}
                    </h1>
                </div>

                <div className="block-type">
                    <p>
                        {category}
                    </p>
                </div>

                </section>

                <section className="block-button-add">
                    <p>Add To Cart</p>
                </section>

            </main>
        );
    }
}