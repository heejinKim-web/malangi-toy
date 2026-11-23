import { useState } from 'react';

const Malangi = () => {
    const [count, setCount] = useState(0);
    const [pressed, setPressed] = useState(false);
    
    let faceClass;
    let conversation;
    let convClass;

    if(count > 30){
        faceClass = "malangi_angry";
        conversation = "아니, 그만 눌러!!!!";
        convClass = "angry";
    }else if(count > 20){
        faceClass = "malangi_annoyed";
        conversation = "왜 계속 누르는데?";
        convClass = "annoyed";
    }else if(count > 10){
        faceClass = "malangi_surprised";
        conversation = "뭐야, 계속 누르잖아?";
        convClass = "surprised";
    }else{
        faceClass = "malangi_face";
        conversation = "헤헷ㅎㅎ";
        convClass = "";
    }

    const handlePress = () => {
        setPressed(true);
        setCount(prev =>  prev + 1);
    }

    return(
        <>
        <div className={pressed ? "malangi_body pressed" : "malangi_body"} onPointerDown={handlePress} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}>
            <div className="malangi_belly"></div>
            <div className="malangi_sprout"></div> 
            <div className={`${faceClass} ${pressed ? "pressed" : ""}`}></div>
            <div className={`malangi_blush ${faceClass}`}></div>
        </div>
        <div className={`${convClass} malangi_state`}>
            {conversation}
        </div>
        </>
    )
}

export default Malangi;