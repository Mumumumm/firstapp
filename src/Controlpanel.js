

function ControlButton({message,children}){ //{} 는 구조분해 해서 받겠다 메세지 따로 칠드런 따로
    return <button onClick={()=>{
        alert(message)}}>{children}</button>;
};

function ControlPanel(){
    return(
        <>
            <ControlButton message={"음악을 재생"}> Play</ControlButton>
            <ControlButton message={"음악을 멈춤"}> stop</ControlButton>
        </>
    );
};

export default ControlPanel;