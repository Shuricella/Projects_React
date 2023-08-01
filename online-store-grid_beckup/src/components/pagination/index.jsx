import React, { useState } from "react"

const PaginationItem = ({pageIndex, isActive, onClick}) => {
    const activeClass = isActive ? 'active' : '';

    return (
        <li onClick={onClick}>
            <a href="#" data-element="page-link" className={`krug non-styles ${activeClass}`}  data-page-index="${pageIndex}">
                {pageIndex + 1} 
            </a>
        </li>
    );
}


const Pagination = ({totalPages = 0, activePageIndex = 0}) => {    
    // хуки живут в самом верху компонента

    //тоже самое что и this.state.activePageIndex = activePageIndex;
    // useState возварашает массив и мы с него забираем pageIndex, и функцию setPageIndex которая будет менять pageIndex
    // названия [pageIndex, setPageIndex] не зарезервированные но логика обозначений должна быть соответствующей
    const [pageIndex, setPageIndex] = useState(activePageIndex);
    // при вызове setPageIndex происходит асинхронное действие по смене pageIndex
    
    const pageChange = (newPageIndex) => {
        setPageIndex(newPageIndex);

        console.log("newPageIndex=", newPageIndex);
    };
    
    return (
        <div className="osnova">
                <nav className="ramka">
                    <div>
                        <a href="#" className="krug krug-left" data-element="nav-prev">
                            <i className="bi bi-chevron-left"></i>
                        </a>
                    </div>
                                        
                    <ul className="page-list non-styles" data-element="pagination">
                        {/* в JSX нужно вставлять выражения, которая возвращает результат (как ниже) а не константы,
                        потому что оглашение переменной не возвращает результат  */}
                        {new Array(totalPages).fill(1).map((item, index) =>{
                            return <PaginationItem 
                                        onClick = { () => pageChange(index)}
                                        pageIndex={index} 
                                        isActive={pageIndex === index}
                            />;
                        })}
                        
                    </ul>
                    
                    <div>
                        <a href="#" className="krug krug-right" data-element="nav-next">
                            <i className="bi bi-chevron-right"></i>
                        </a>
                    </div>
                </nav>
            </div>
    );
};

export default Pagination;





// это реализация компонента Pagination через классы
// export default class Pagination extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {};
//     }

//     render() {
//         return (
//             <div>Anyta. Hello, from Pagination</div>
//         );
//     }
// }




// реализация на классовом компоненте запоменания состояния
// class Component extends React.Component {
//     constructor() {
//         super(props);

//         this.state = {activePageIndex: this.props.activePageIndex};
//     }

// метод setPageIndex возьмет prevState (предыдушее состояние) и подставит новое состояние { activePageIndex: value }
//     setPageIndex(value) {
//         this.setState(prevState => {
//             return {...prevState, ...{ activePageIndex: value }}
//         });
//     }
// }