import './Post.css';

function Post(props) {
    
    const{ userId, title, body } = props;

    return (
        <section className="post">
            <h1>This is post</h1>
            <ul>
                <li>
                    <b>UserId:</b>  {userId}
                </li>
                <li>
                    <b>Title:</b> {title}
                </li>
                <li>
                    <b>Body:</b> {body}
                </li>
            </ul>
        </section>
    );
};

export default Post;