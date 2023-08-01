const buttonStyle = {backgroundColor: 'lightgreen'};

const ResetButton = ({count, setCount}) => {
    const resetCount = () => {
        setCount(0);
    };
      
    return (
        <div>
            {count > 0 && (
                <div>
                <button style={buttonStyle} onClick={resetCount}>Reset</button>
                </div>
                )
            }
        </div>
    );
};

export default ResetButton;