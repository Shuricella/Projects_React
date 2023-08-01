function Wrapper(props) {
    
    const wrapStyles ={
        backgroundColor: props.color,
        width: '250px',
        padding: '20px',
        margin: '20px auto'
    };

    return (
        <div style={wrapStyles}>
            {props.children}
        </div>
    );
};

export default Wrapper;