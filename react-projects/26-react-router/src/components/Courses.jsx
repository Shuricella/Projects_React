import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses.js";

// перечисляется допустимые значения для поиска (сортировки списка), из массива исходных данных
const sortKeys = ['title', 'slug', 'id'];

// на вход функции нобор курсов courses, и ключ по которому искать key
function sortCourses(courses, key) {
    // выполним разделение массива на элементы
    const sortCourses = [...courses];

    // проверка на наличие ключа для поиска и сортировки, при отсутствии не будет сортировки списка курсов
    // проверяем также наличия ключа в списке допустимых ключей sortKeys
    if(!key || !sortKeys.includes(key)) {return sortCourses};

    // метод sort мутирует массив, отсортировав по списку
    sortCourses.sort( (a, b) => (a[key] > b[key] ? 1 : -1) );

    return sortCourses;
};


const Courses = () => {
    const location = useLocation();
        
    const query = queryString.parse(location.search);

    const navigate = useNavigate();
    
    // если в объекте query есть свойство sort то можем отсортировать массив
    const [sortKey, setSortKey] = useState(query.sort);

    // создаем массив с отсортированным списком
    const [sortedCourses, setSortedCourses] = useState( sortCourses(courses, sortKey) );

    // в случаии отсутствия поисковой стороки в sortKeys перенаправляем пользователя на страницу всех курсов
    useEffect( () => {
        if(!sortKeys.includes(sortKey)) { 
            navigate( '.', {relative: 'path'} ); 
            setSortKey('');
            // при отсутствии строки поиска вернуть не отсортированный массив
            setSortedCourses( [...courses] );
        }
    }, [sortKey, navigate])
     
    // здесь ссыдка ведется относительно пути courses/, по этому необходимо сдесь прописыать конечный путь to={course.slug}
    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            {sortedCourses.map( (course) => {
                return (
                        <div key={course.id}>
                            <Link to={course.slug} className="courseLink" >
                                {course.title}
                            </Link>
                        </div>
                );
            } ) }        
        </>
    );
};

export default Courses;