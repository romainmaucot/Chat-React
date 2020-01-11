import React from "react";
import Emoji from "react-emoji-render";

export const MessageItem = (props) =>{
    return(
        <>
            <p>{props.message.username} :
                <Emoji text={props.message.message}/>
            </p><br/><br/>
        </>
    )
};
