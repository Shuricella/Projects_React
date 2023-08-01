import { useEffect, useState } from "react";
import Post from "./Post.js";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function PostsList() {
    const [posts, setPosts] = useState( [] );

    // организуем вывод ошибки для пользователя
    const [error, setError] = useState("");

    // организуем вывод процесса загрузки данных с сервера
    // передаем начальное значение true
    const [isloading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch( (error) => setError(error.message) )
            .finally( () => setIsLoading(false) )
        }, []
    );

    if(error) {
        return (
            <h1>Error:{error}</h1>
        );
    };
    
    return (
        <>
            <h1>POSTS LIST</h1>
            <hr />

            { isloading ? (
                <h1>Loading...</h1>
                ) : (
                    posts.map( (item) => {return <Post key={item.id} {...item} />} )
                ) 
            }
        </>
    );
};

export default PostsList;