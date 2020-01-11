import React, {useState} from "react";
import MessageList from "./MessageList";
import {MessageBar} from "./MessageBar";
import styled from"styled-components";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {loadMessages} from "../actions/messages";


const ChatDiv = styled.div`   
    text-align: center
    width: 80%
    margin-left: 10%
    margin-right: 10%
    border: solid pink 2px
    border-radius: 5%`;

export const Chat = () => {


    const [messages, setMessages] = useState([]);

    const handleFirstMessage = () => {
        console.log(loadMessages.message);
        setMessages([...messages, ]);
    };


    const handleMessageSubmit = (message) => {
        console.log(message);
        setMessages([...messages, message]);
    };

    const username = useSelector( state => state.userName.username);
    if (username === null) {
        return <Redirect to="/" />;
    }
    return(
        <ChatDiv align="center">
            <MessageList message = {messages}/>
            <MessageBar handleMessageSubmit = {handleMessageSubmit} />
        </ChatDiv>
    )
};