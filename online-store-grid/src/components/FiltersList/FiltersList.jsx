import { useState } from 'react';

import MultiRangeSlider from '../../ui/MultiRangeSlider';
import styles from './filters_list.module.css';

const FiltersList = ( {
    categorys, 
    brands, 
    listenerFilters, 
    listenerFiltersSlider, 
    clearFilters
} ) => {

    const [value, setValue] = useState( {
        minValuePrice: 0,
        maxValuePrice: 85000,
        minValueRating: 0,
        maxValueRating: 5,
    } );

    const handleInput = (e) => {
        if (e.nameSlider === "price") {
            setValue( (prevState) => ( { ...prevState, minValuePrice: e.minValue, maxValuePrice: e.maxValue, } )  );
        };

        if (e.nameSlider === "rating") {
            setValue( (prevState) => ( { ...prevState, minValueRating: e.minValue, maxValueRating: e.maxValue, } )  );
        };

        listenerFiltersSlider(e);
    };

    const reset = () => {
        clearFilters();
        
        setValue( {
            minValuePrice: 0,
            maxValuePrice: 85000,
            minValueRating: 0,
            maxValueRating: 5,
        } );
    };

    
    return (
        <div className='item-products'>
            <section>
                <div className={styles['wrapper-filters-list']}>
                    <section className={styles['block-slider']}>
                        <h2 className={styles['block-slider-text']}>Price</h2>

                        <section className="wrapper-slider">
                        <MultiRangeSlider
                            min={0}
                            max={85000}
                            step={2000}
                            ruler={false}
                            label={true}
                            preventWheel={false}
                            minValue={value.minValuePrice}
                            maxValue={value.maxValuePrice}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                            baseClassName={'multi-range-slider'}
                            unit='UAN'
                            nameSlider='price'
                        />
                        </section>
                    </section>
            
            
                    <section className={styles['category-filters-list']}>
            
                        <h2 className={styles['block-category-brand']}>Category</h2>
                
                        <form action="#">
                            <ul className={styles['blocks-cat-list']}>
                                {categorys.map( (item) => {
                                    const nameItem = item.toLowerCase().split(" ").join("_");
                                            
                                    return (
                                        <GetCategoriesTemplate
                                            key={item} 
                                            item={item} 
                                            nameItem={nameItem}
                                            listenerFilters={listenerFilters} 
                                        />
                                    );
                                } )}
                            </ul>
                        </form>
            
                    </section>
            
            
                    <section className={styles['brand']}>
            
                        <h2 className={`${styles['block-category-brand']} ${styles['strip']}`}>Brand</h2>
                
                        <form action="#">
                            <ul className={styles['blocks-cat-list']}>
                                    {brands.map( (item) => {
                                        const nameItem = (item !== "A4Tech") ? item.toLowerCase().split(" ").join("_") : "a4-tech";
                                                
                                        return (
                                            <GetBrandsTemplate
                                                key={item} 
                                                item={item} 
                                                nameItem={nameItem}
                                                listenerFilters={listenerFilters} 
                                            />
                                        );
                                    } )}
                                </ul>
                        </form>
            
                        <div className={styles['block-line']}></div>
            
                    </section>
            
            
                    <div className={styles['block-slider-rating']}>
                        <h2 className={styles['block-slider-text']}>Rating</h2>
                
                        <section className="wrapper-slider">
                            <MultiRangeSlider
                                min={0}
                                max={5}
                                step={0.05}
                                ruler={false}
                                label={true}
                                preventWheel={false}
                                minValue={value.minValueRating}
                                maxValue={value.maxValueRating}
                                onInput={(e) => {
                                    handleInput(e);
                                }}
                                baseClassName={'multi-range-slider'}
                                unit=''
                                nameSlider='rating'
                            />
                        </section>
                    </div>
                </div>
                                                                
                <section className={styles['wrapper-butto-clear']}>
                    <button 
                        type="button" 
                        className={styles['butto-clear']}
                        onClick={reset}>
                            CLEAR ALL FILTERS
                    </button>
                </section>

            </section>
        </div>
    );
};

const GetCategoriesTemplate = ( {item, nameItem, listenerFilters} ) => {
    return (
        <li className={styles['blocks-cat-br']}>                                                                                                                                    
            <input 
                type="checkbox" 
                id={`blocks-category-${nameItem}`} 
                className={styles['cursor-filter-list']} 
                name="category" 
                value={nameItem} 
                onClick={ (event)=> {listenerFilters( {
                    nameBlock: event.target.name, 
                    filters:event.target.value, 
                    state:event.target.checked
                } )} } 
            />
            <label 
                htmlFor={`blocks-category-${nameItem}`} 
                className={`${styles['cursor-filter-list']} ${styles['none-style-filters']} ${styles['text-color-filters']}`}
            >
                {item}
            </label>
        </li>
    );
};

const GetBrandsTemplate = ( {item, nameItem, listenerFilters} ) => {
    return (
        <li className={styles['blocks-cat-br']}>                                                                                                                                    
            <input 
                type="checkbox" 
                id={`blocks-brand-${nameItem}`} 
                className={styles['cursor-filter-list']} 
                name="brand" 
                value={nameItem} 
                onClick={ (event)=> {listenerFilters( {
                    nameBlock: event.target.name, 
                    filters:event.target.value, 
                    state:event.target.checked
                } )} } 
            />
            <label 
                htmlFor={`blocks-brand-${nameItem}`} 
                className={`${styles['cursor-filter-list']} ${styles['none-style-filters']} ${styles['text-color-filters']}`}
            >
                {item}
            </label>
        </li>
    );
};

export default FiltersList;