// Это импорт логотипа React
// import logo from './logo.svg';

// Импорт стилей
// import './App.css';

import Card from './components/card';
import Pagination from './components/pagination';

const product = {
    "id": "76w0hz7015kkr9kjkav",
    "images": 
      "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
      
    "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
    "rating": 2.89,
    "price": 15999,
    "category": "laptops",
    "brand": "acer"
}

const App = () => {
  const pageSize = 9;
  
  //totalPages необходимо расчитовать динамично по X-Total-Count, получаемом при первом запросе на бэкэнд
  const totalPages = 12;

  return (
    <div className="App">
      "Anyta!"
      <Card product={product}/>
      <Pagination totalPages={totalPages} activePageIndex={3} />
    </div>
  );
}

export default App;
