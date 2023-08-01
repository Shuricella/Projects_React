import styles from './CreateCarForm.module.css'
import { useMemo, useState } from 'react'
// import {cars} from "../cars.data"

const clearData = {name:'', price:'', image:''}

const CreateCarForm = ({setCars}) => {
    const [ data, setData] = useState( {name:'', price:'', image:''} );
    // const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');

    const createCar = (event) => {
        // отключим чтобы кнопка не отправляла форму на сервер
        event.preventDefault();
        
        setCars(prev => [
            ...prev,
            { id: (prev.length + 1), ...data, }
        ])

        setData(clearData);
    }

    return (
        <form className={styles.form}>
            {/* событие onChange происходит когда пропадет фокус, появляетс зачение одновременно со вводом текста */}
            <input type="text" placeholder="Name" value={data.name} 
                onChange={
                    event =>{ setData(prev => ( {...prev, name: event.target.value} ) ) }
                } 
            />

            <input type="text" placeholder="Price" value={data.price} 
                onChange={
                    event =>{ setData(prev => ( {...prev, price: event.target.value} ) ) }
                } 
            />

            <input type="text" placeholder="Image" value={data.image} 
                onChange={
                    event =>{ setData(prev =>( {...prev, image: event.target.value} ) ) }
                } 
            />

            <button className='btn' onClick={event => createCar(event)}>
                Create!
            </button>
        </form>
    )
}

export default CreateCarForm;