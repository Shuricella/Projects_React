// import { useState } from 'react'
import styles from '../Home.module.css'

function CarItem ( {car} ) {
    return (
        <div key={car.id} className={styles.item}>
              <div
                className={styles.image}
                style={
                  { backgroundImage: `url(${car.image})` }
                } 
              />

              <div className={styles.info}>
                <h2>{car.name}</h2>

                <p>{
                  new Intl.NumberFormat('ua-UA', { style: 'currency', currency: 'USD' }).format(car.price)
                  }
                </p>

                <button>Reade more</button>
              </div>
            </div>
    )
}

export default CarItem