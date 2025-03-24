// Article 컴포넌트 생성
export default function Article(props){
    return(
    <article>
        <h2>{props.articleTitle}</h2>
        <p>{props.list}</p>
    </article>
    );
}