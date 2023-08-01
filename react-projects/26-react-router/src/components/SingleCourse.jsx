import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// import NotFound from "./NoteFound.jsx";
import courses from "../data/courses.js";

const SingleCourse = () => {
    // params является объектом со свойством courseSlug, прописанном в адрессе
    const params = useParams();

    // при ошибки пути будет переходить на список свех курсов
    // при вызове navigate хук useNavigate() возвращает функцию, позволяющ возврощать указанную локацию
    const navigate = useNavigate();

    // организовываем поиск карточки конкретного курса
    const course = courses.find( (course) => course.slug === params.courseSlug);

    // if(!course) {return <NotFound />}

    useEffect(() => {
        if(!course) { navigate( '..', {relative: 'path'} ) }
    }, [course, navigate]);
    
    // ниже приведен прямой путь к корневому пути
    // рекомендуется задавать относительный путь <Link to=".." relative="patch">
    // значок ? позволяет не выполяняться этому коду если результат course = undefined
    return (
        <>
            <h1>Single Course Info</h1>
            <h2>{course?.title}</h2>
            <h3>{course?.slug}</h3>
            <h4>{course?.id}</h4>

            <Link to="/courses">
                <p>All Courses</p>
            </Link>   
        </>
    );
};

export default SingleCourse;