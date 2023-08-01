function Counter(props) {
    const { count } = props;
    return (
        <div>
            <h1>Total clicks: {count}</h1>
        </div>
    );
}

export default Counter;