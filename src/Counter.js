
import {useState} from "react";

function Counter(){
    // 0을 초기값으로 하는 state와 setState() 함수 생성
    const [state,setState] = useState(0);

    return(
        <div>
            <h1>State 값 : {state}</h1>
            {/* setState() 함수를 사용하여 state의 값을 1씩 증가시킴 */}
            <button onClick={()=> setState(state + 1)}>1씩 증가</button>
        </div>
    );
};

export default Counter;