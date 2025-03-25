import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

import Head from './Head';
// import Art from './Art';
import Navigator from './Navigator';
import ControlPanel from './Controlpanel';

import Counter from "./Counter";
import { useState } from 'react';
import Create from './Create';

// // Header컴포넌트 생성
// // props 로 데이터 전달 받기
// function Header(props){ // {title : "ReAct", onChangeMode:(()=>{alert("Header")})}
//   return (
//     <header> 
//       {/* {이쪽으로 하단 header 속성을 매개변수를 통해 적용} */}
//       <h1><a href="/" onClick={(e)=>{
//         // preventDefault() 기본기능 제거
//         e.preventDefault();
//         // elart 기능 실행
//         props.onChangeMode();
//         }}>{props.title}</a></h1> 
//       <h1><a href="/">{props.desc}</a></h1> 
//     </header>
//   );
// }

// //-----------------------------------------------------------------------------------------------------------

// // Nav 컴포넌트 생성
// function Nav(props){ // { topics : [...] 배열을 속성으로 갖는 객체로 전달받음 , onChangeMode: ((id)=>{alert(id)})}
//   const lis = []; // 배열의 객체를 받는법 빈배열 먼저 만들기
//   for(let i=0; i < props.topics.length; i++){ // 전달받은 prips의 topics의 길이
//     let t = props.topics[i]; // 객체 하나가 들어간다
//     // t의 title과 body가 배열에 들어간다
//     // <a href={'rede/'+t.id}> t.id id 가 1,2,3 으로 적어놨다
//     lis.push(
//       <li key={t.id}>
//         <a id={t.id} href={'rede/'+t.id} onClick={(e)=>{ // a태그에도 id 생성 {t.id}가 id
//           e.preventDefault();
//           props.onChangeMode(e.target.id); // e의 타겟 의 id a가 타겟 그 id를 지정 -> t.id
//         }}>{t.title}</a> 그리고 {t.body}
//       </li>
//       ); 
//   }

//   return (
//     <nav>
//       <ol>
//         {/* 배열에 들어간 객체를 li태그로 나타낸다  */}
//         {lis}
//       </ol>
//   </nav>
//   )
// }

// //-----------------------------------------------------------------------------------------------------------

// // Article 컴포넌트 생성
// function Article(props){
//   return(
//     <article>
//       <h2>{props.titleName}</h2>
//       <p>{props.body}</p>
//     </article>
//   )
// }

// //-----------------------------------------------------------------------------------------------------------

// 모든 컴포넌트는 명 반드시 대문자로 시작

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(0); // state 생성 useState가 id에 누적
  const [topics, setTopics] = useState([ // 배열을 통으로 만들어주기 state
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."},
  ]);


  let content = null;

  if(mode === "WELCOME"){ // 웰컴에서
    content = <Article articleTitle="Welcome" list="Hello, web"></Article>
  }else if(mode === "READ"){ // 리드에서
    let title, body;
    for(let topic of topics){
      if(topic.id === Number(id)){
        title = topic.title;
        body = topic.body;
        break;
      }
    }
    content = <Article articleTitle={title} list={body}></Article>
  }else if(mode === "CREATE"){  // 크레이트에서
    content = <Create onCreate={(_title, _body)=>{
      let newTopic = {id: topics.length + 1, title: _title, body: _body};
      let newTopics = [...topics, newTopic];
      setTopics(newTopics);
      setId(newTopic.id);
      setMode("READ");
      // newTopics.push(newTopic);
      // for(let t of topics){
      // newTopic.push(t);
      // }
    }}></Create>
  }




  return ( // js와 html이 섞이는 구간 JSX
    <>
      {/* Header 컴포넌트 호출  Header(); 괄호 안 데이터 없이 호출한것과 같음 */}
      {/* 태그에 속성을 넣듯이 하고, 이름과 값은 내맘대로 ???="???" 데이터를 넣어줄 수 있다 */}
      {/* 함수 넣기 onChangeMode 어떤이름이든 상관없다 */}
      <Header title="ReAct" desc="React is ...." onChangeMode={()=>{
        setMode("WELCOME");
      }}></Header>

      {/*Nav 컴포넌트 호출*/}
      {/* 배열을 넘기기 */}
      <Navigator topics={topics} onChangeMode={(_id)=>{
        setId(_id);
        setMode("READ");
        
      }}></Navigator>

      {/* Article 컴포넌트 호출 */}
      {/* 2번 찍힐수 있다 */}

      {/* <Art titleName="Wlecom" body="nice Web"></Art>
      <Art titleName="React" body="Try"></Art> */}
      
      {content}
      {/* <Article articleTitle="my" list="study"></Article> */}
      {/* <Article articleTitle="스스로" list="해보기"></Article> */}

      {/* <Counter />
      <Counter />
      <Counter />
      <Counter /> */}

      <a href="/Create</>" onClick={(e)=>{
        e.preventDefault();
        setMode("CREATE");
        
      }}>Create</a>
    </>
  );
}


//----------------------------------------------------------------------------------------------------------------
  //Event
  // function App(){
    // function handleclick (){
    //   alert("버튼을 눌렀어용");
    // }
    // return <button onClick={handleclick}>버튼클릭</button>


      // return <ControlPanel />;
    // };


  // export default App


//---------------------------------------------------------------------------------

// function App(){
//   let desc='';
//   const loginYn= 'Y'
//   if(loginYn ==='Y'){
//     desc = <div>홍창기 입니다.</div>;
//   }else{
//     desc = <div>비회원 입니다</div>;
//   }

//   return(
//     <>
//       {desc}
//     </>
//   )
// }

//---------------------------------------------------------------------------------
// 삼항연산자

// function App(){
//   const loginYn ='Y';
//   return(
//     <>
//       <div>
//       {loginYn === 'Y' ? (<div>홍창기 입니다.</div>) : (<div>비회원 입니다</div>)}
//       </div>
//     </>
//   );
// }

//---------------------------------------------------------------------------------

// function App(){
//   const loginYn = 'Y';
//   return(
//     <>
//       <div>
//         {loginYn === 'Y' && <div>홍창기입니다</div>}
//       </div>
//     </>
//   )
// }

//---------------------------------------------------------------------------------

// function App(){
//   const loginYn = 'Y'

//   return(
//     <>
//       { // 함수 정의하기
//         (()=>{
//           if(loginYn === 'Y'){
//             return (<div>홍창기 입니다</div>);
//           }else{
//             return (<div>비회워 입니다</div>);
//           }
//         })() // (()=>{})() <- 괄호로 정의를 한뒤 정의한 내용을 호출
//       }
//     </>
//   )
// }

//---------------------------------------------------------------------------------
// - 하이푼으로 사용이 안된다 html 속성 이름 대신 camelCase 프로퍼티 사용

// function App(){
//   const style ={ // 스타일은 함수 정의
//     backgroundColor:'green',
//     fontSize:'12px'
//   }
//   return(
//     <div style={style}>Hello, Jun Hong</div>
//   );
// }

// a 링크 특 무조건 새로고침 이걸 막아줘야합니다

export default App; // 외부에 제공
