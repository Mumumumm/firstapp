

export default function Navigator(props){
    const list =[];
    for(let i =0; i < props.topics.length; i++){
        let t = props.topics[i]
        list.push(
            <li key={i}>
                <a id={t.id} href={"rede/"+ t.id} onClick={(e)=>{
                    e.preventDefault();
                    props.onChangeMode(e.target.id);
                }}>{t.title} </a> and {t.body}
            </li>
        );
    }

    return (
    <>
        <ol>
        {list}
        </ol>
    </>
    );
}