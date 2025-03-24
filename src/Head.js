

export default function Head (props){
    return(
        <> {/*한 상자에 묶어두기*/}
            <h1>
                <a href="/" onClick={(e)=>{
                e.preventDefault();
                props.onChangeMode();
                }}>{props.title}</a> 
            </h1>
            <h1><a href="/">{props.desc}</a></h1>
        </>
    );
}


// 컴포넌트를 만들때 규칙
// 1. 첫글자는 대문자로
// 2. 정의를 할때는 한 상자에 묶어서<> </>
// 3. return 을 적고 () 안에 정의 하기
// 4. JSX js와 html 이 섞여쓰인다 {}중괄호 안에 태그와 내용넣기