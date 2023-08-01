import { useState } from "react";
import generateRundomNum from "../utils/generateRundomNum.js";

function RundomNumber(props) {
    const { maxNum } = props;

    const [randomNum, setRandomNum] = useState(generateRundomNum(maxNum) );

    const changeRandomNum = () => {
        setRandomNum( generateRundomNum(maxNum) );
    };

    return (
        <div>
            <h1>{ randomNum }</h1>
            {/* передаем сюда только название функции changeRandomNum, вызываться она будет при нажании на кнопку */}
            <button onClick={ changeRandomNum }>Generate new number!</button>
        </div>
    );
}

export default RundomNumber;