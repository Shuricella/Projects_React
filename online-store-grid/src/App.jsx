import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';
import FiltersList from './components/FiltersList/FiltersList.jsx';
import CardsList from './components/CardsList/CardsList.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import CartsList from './components/CartsList/CartsList.jsx';


const BACKEND_URL = `https://online-store.bootcamp.place/api/`;
const PAGESIZE = 9;


const App = () => {
  
  const [data, setData] = useState( {
    products: [],
    categorys: [],
    brands: [], 
    totalPages: 12, 
    pageNumber: 1,
  } );

  const [error, setError] = useState ( {
    productsError: '',
    categoryError: '',
    brandError: '',
  } );

  const [search, setSearch] = useState( {
    category: [],
    brand: [],
    priceGte: '',
    priceLte: '',
    ratingGte: '',
    ratingLte: '',
    searchText: '',
  } );

  const [basket, setBasket] = useState( {
    carts: [],
    cartsId: {}
  } );

  const [totalProducts, setTotalProducts] = useState(0);
       

  useEffect( () => {
      const urlProducts = new URL("products", BACKEND_URL);

      urlProducts.searchParams.set("_limit", PAGESIZE);
      urlProducts.searchParams.set("_page", data.pageNumber);

      search.category.map(item =>{
          urlProducts.searchParams.append('category', item);
      });

      search.brand.map(item =>{
        urlProducts.searchParams.append('brand', item);
      });

      if (search.priceGte !== '') {
          urlProducts.searchParams.set("price_gte", search.priceGte);
          urlProducts.searchParams.set("price_lte", search.priceLte);
      }

      if (search.ratingGte !== '') {
          urlProducts.searchParams.set("rating_gte", search.ratingGte);
          urlProducts.searchParams.set("rating_lte", search.ratingLte); 
      }

      if (search.searchText !== '') {
          urlProducts.searchParams.set("q", search.searchText);
      }

      async function loadDataProducts() {
          try {
            const response = await fetch(urlProducts);
            const data = await response.json();
            
            setData( (prevState) => ( { ...prevState, products: data } )  );
            
            // сервер выдес текстовый формат данных, поэтому преобразуем строку в число с помощью parseInt()
            const totalCount = parseInt(response.headers.get('X-Total-Count'));
            const totalPages = Math.ceil(totalCount / PAGESIZE);
                  
            setData( (prevState) => ( { ...prevState, totalPages: totalPages } )  );
          } catch (error) {
            setError( (prevError) => ( { ...prevError, productsError: error.message } )  );
            console.log("productsError=", error.message);
          }
      };
      loadDataProducts();
  }, [data.pageNumber, search]);



  useEffect( () => {
      const urlCategorys = new URL("categories", BACKEND_URL);
      const urlBrands = new URL("brands", BACKEND_URL);

      async function loadDataCategorys() {
          try {
            const response = await fetch(urlCategorys);
            const dataCategorys = await response.json();
                
            setData( (prevState) => ( { ...prevState, categorys: dataCategorys } )  );
          } catch (error) {
            setError( (prevError) => ( { ...prevError, categoryError: error.message } )  );
          
            console.log("categoryError=", error.message);
          }
      };
      loadDataCategorys();
      

        async function loadDataBrands() {
          try {
            const response = await fetch(urlBrands);
            const dataBrands = await response.json();
                
            setData( (prevState) => ( { ...prevState, brands: dataBrands } )  );
          } catch (error) {
            setError( (prevError) => ( { ...prevError, brandError: error.message } )  );

            console.log("brandError=", error.message);
          }
        };
        loadDataBrands();
  }, []);
  

  const updatePageNumber = ( pageIndex ) => {
      setData( (prevState) => ( { ...prevState, pageNumber: (pageIndex + 1) } )  );
  };
  
  
  const listenerFilters = ({nameBlock, filters, state}) => {
      setData( (prevState) => ( { ...prevState, pageNumber: 1 } )  ); 

      if (state) {
        const addBlockFilters = [...search[nameBlock], filters];
        setSearch( (prevState) => ( { ...prevState, [nameBlock]: addBlockFilters } )  );
      } else { 
        const deleteBlockFilters = [...search[nameBlock]].filter(item => item !== filters);
        setSearch( (prevState) => ( { ...prevState, [nameBlock]: deleteBlockFilters } )  );
      }
  };

  const listenerFiltersSlider = ( {minValue, maxValue, nameSlider} ) => {
      setData( (prevState) => ( { ...prevState, pageNumber: 1 } )  );

      if (nameSlider === "price") {
        setSearch( (prevState) => ( { ...prevState, priceGte: minValue, priceLte: maxValue} )  );
      }

      if (nameSlider === "rating") {
        setSearch( (prevState) => ( { ...prevState, ratingGte: minValue, ratingLte: maxValue} )  );
      }
  }

  const listenerFiltersSearch = ( searchText ) => {
      setData( (prevState) => ( { ...prevState, pageNumber: 1 } )  );

      setSearch( (prevState) => ( { ...prevState, searchText: searchText} )  );
  }

  const clearFilters = () => {
      setData( (prevState) => ( { ...prevState, pageNumber: 1 } )  );

      setSearch(
        {category: [],
        brand: [],
        priceGte: '',
        priceLte: '',
        ratingGte: '',
        ratingLte: '',
        searchText: ''}
    );

    const filtersInput = document.querySelectorAll("input[type=checkbox]");
    for(const item of filtersInput) { item.checked = false; };
  };

  // show dialog window
  const dialog = document.querySelector("dialog");
  const showModalWindow =() => { dialog.showModal(); };
  const closeModalWindow =() => { dialog.close(); };


  const calcTotalProducts = (newCartsId) => {
      let newTotalProducts = 0;
      const totalCarts = newCartsId;
      
      for (const index in totalCarts) {
        newTotalProducts += totalCarts[index];
      }
      setTotalProducts( newTotalProducts  );
  };

  const addBasket = ( itemCard ) => {
      const searchId = itemCard.id;
      const resaltSearch = basket.carts.find(item => item.id === searchId);

      if(resaltSearch) {
          const newCartsId = {...basket.cartsId};
          newCartsId[searchId] += 1;

          calcTotalProducts(newCartsId);
          setBasket( (prevState) => ( { ...prevState, cartsId: newCartsId } )  );
          }
      else{
          const newCarts = [...basket.carts, itemCard];
          const newCartsId = {...basket.cartsId};

          newCartsId[searchId] = 1;

          calcTotalProducts(newCartsId);
          setBasket( { carts: newCarts, cartsId: newCartsId }  );
      }
  }
   

  return (
    <div className="wrapper-grid">
      <CartsList 
        closeModalWindow={closeModalWindow} 
        basket={basket}
        setBasket={setBasket} 
        calcTotalProducts={calcTotalProducts}
      />

      <Header 
        totalProducts={totalProducts} 
        showModalWindow={showModalWindow} 
      />

      <Search 
        listenerFiltersSearch={listenerFiltersSearch} 
        searchText={search.searchText} 
      />
      
      <FiltersList 
        categorys={data.categorys} 
        brands={data.brands} 
        listenerFilters={listenerFilters} 
        listenerFiltersSlider={listenerFiltersSlider}
        clearFilters={clearFilters}
      />

      <CardsList 
        products={data.products} 
        productsError={error.productsError}
        addBasket={addBasket}
      />

      <Pagination 
        totalPages={data.totalPages} 
        activePageIndex={data.pageNumber - 1} 
        updatePageNumber={updatePageNumber} 
      />
    </div>
  );
};
       
export default App;