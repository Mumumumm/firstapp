

// Header컴포넌트 생성
// props 로 데이터 전달 받기
function Header(props){ // {title : "ReAct", onChangeMode:(()=>{alert("Header")})}
    return (
        <header> 
        {/* {이쪽으로 하단 header 속성을 매개변수를 통해 적용} */}
            <h1><a href="/" onClick={(e)=>{ // 함수 정의 자체가 이벤트 핸들러로 들어간다 함수로 들어가기때문에 중괄호에 싸주기
            // preventDefault() 기본기능 제거
            e.preventDefault();
            // elart 기능 실행
            props.onChangeMode();
            }}>{props.desc}</a></h1>
            
            {/* <h1><a href="/">{props.desc}</a></h1>  */}
        </header>
    );
}

export default Header;