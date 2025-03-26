import { useState } from "react";

export default function Update(props){
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onUpdate(title, body);
            }}>
                <p><input type="text" name="title" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }} placeholder="title"></input></p>
                <p><textarea name="body" value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }} placeholder="body"></textarea></p>
                <p><input type="submit" value="Update"></input></p>
            </form>
        </article>
    );
};
// props.title = e.target.value; 밸류 수동작업
// const [title, setTitle] = useState(props.title); props의 상태값을 변경 하기
// const [body, setBody] = useState(props.body); props의 상태값을 변경 하기
// setTitle(e.target.value); setTitle을 변경