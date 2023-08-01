import React, { useState } from "react";
import styles from './pagination.module.css';


const Pagination = ({totalPages = 0, activePageIndex = 0, updatePageNumber}) => {
        
    const [pageIndex, setPageIndex] = useState(activePageIndex);

    if (activePageIndex !== pageIndex) {setPageIndex(activePageIndex)}

    const pageChange = (newPageIndex) => {
        setPageIndex(newPageIndex);
        updatePageNumber(newPageIndex);
        
    };

        const prevPage =() => {
            if(pageIndex <= 0) return;

            pageChange(pageIndex - 1);
            
        };

        const nextPage =() => {
            if(pageIndex >= totalPages - 1) return;

            pageChange(pageIndex + 1);
            
        };

    return (
        <div className="item-pagination">
            <div className={styles.osnova}>
                <nav className={styles.ramka}>
                    <div>
                        <a href="#" className={`${styles.krug} ${styles['krug-left']}`} onClick = { () => prevPage()} data-element="nav-prev">
                            <i className="bi bi-chevron-left"></i>
                        </a>
                    </div>
                        
                    <ul className={ `${styles['page-list']} ${styles['non-styles']}` } data-element="pagination">

                        {new Array(totalPages).fill(1).map((_, index) =>{
                            
                            return <PaginationItem 
                                        key={index}
                                        onClickPage = { () => pageChange(index)}
                                        pageIndex={index} 
                                        isActive={pageIndex === index}
                            />;
                        })}
                        
                    </ul>
                                    
                    <div>
                        <a href="#" className={`${styles.krug} ${styles['krug-right']}`} onClick = { () => nextPage()} data-element="nav-next">
                            <i className="bi bi-chevron-right"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

const PaginationItem = ({pageIndex, isActive, onClickPage}) => {
    const activeClass = isActive ? styles.active : '';
                                                    
    return (
        <li onClick={onClickPage} >
            <a href="#" data-element="page-link" className={`${styles.krug} ${styles['non-styles']} ${activeClass}`}  data-page-index="${pageIndex}">
                {pageIndex + 1} 
            </a>
        </li>
    );
};

export default Pagination;