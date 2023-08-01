import { useEffect, useMemo, useState } from 'react'
// as используется дли импортирвания под другими именами, в данном примере в место cars использовать имя carsData
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem.jsx'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'

function Home() {
  // кэшируем данные, т.е чтобы рендиролось только после изменения значеия фильтрации, используем хук useMemo()
  // const filteredcars = useMemo(
  //   () => cars.filter(car => car.price > 20000), []
  // )
  
  // carsData
  const [cars, setCars] = useState([]);

  useEffect( () => {
    // здесь оформляется получение данных с сервера
    const carsCatalog = carsData;
    setCars(carsCatalog);
  }, [] )

  console.log("cars=", cars);
  return (
      <div>
        <h1>Hello, Cars catalog!!!</h1>
          <CreateCarForm setCars={setCars} />
        <div>

          {cars.length ? cars.map(car =>(
            <CarItem key={car.id} car = {car}/>
          )) : <p>There a no cars</p>}
          
        </div>
      </div>
    
  )
}

export default Home;
