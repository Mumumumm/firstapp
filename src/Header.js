

// Header컴포넌트 생성
// props 로 데이터 전달 받기
function Header(props){ // {title : "ReAct", onChangeMode:(()=>{alert("Header")})}
    return (
        <header> 
        {/* {이쪽으로 하단 header 속성을 매개변수를 통해 적용} */}
            <h1><a href="/" onClick={(e)=>{
            // preventDefault() 기본기능 제거
            e.preventDefault();
            // elart 기능 실행
            props.onChangeMode();
            }}>{props.title}</a></h1> 
            <h1><a href="/">{props.desc}</a></h1> 
        </header>
    );
}

export default Header;