

// Nav 컴포넌트 생성
export default function Nav(props){ // { topics : [...] 배열을 속성으로 갖는 객체로 전달받음 , onChangeMode: ((id)=>{alert(id)})}


  const lis = []; // 배열의 객체를 받는법 빈배열 먼저 만들기
  for(let i=0; i < props.topics.length; i++){ // 전달받은 prips의 topics의 길이
    let t = props.topics[i]; // 객체 하나가 들어간다
    // t의 title과 body가 배열에 들어간다
    // <a href={'rede/'+t.id}> t.id id 가 1,2,3 으로 적어놨다
    lis.push(
        <li key={t.id}>
            <a id={t.id} href={'rede/'+t.id} onClick={(e)=>{ // a태그에도 id 생성 {t.id}가 id
            e.preventDefault();
            props.onChangeMode(e.target.id); // e의 타겟 의 id a가 타겟 그 id를 지정 -> t.id
            }}>{t.title}</a> 그리고 {t.body}
        </li>
        ); 
    }

    return (
    <nav>
        <ol>
        {/* 배열에 들어간 객체를 li태그로 나타낸다  */}
        {lis}
        </ol>
    </nav>
    )
}