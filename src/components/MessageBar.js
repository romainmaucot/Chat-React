import React, {useState} from "react";
import styled from"styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../actions/messages";
import {userName} from "../reducers/log";

const Button = styled.button`   
    background: white;  
    border: 1px solid pink;
    color: pink`;


export const MessageBar = (props) =>{
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(state =>
    state.messages.loading);

    const username = useSelector( state => state.userName.username);

    const catchSubmit = (e) => {
        e.preventDefault();

        if(message){
            //props.handleMessageSubmit(message);
            console.log({userName})
            dispatch(addMessage(message, username));
            setMessage("");
        }
    };

    return(
        <>
                <input
                    type="text"
                    placeholder="message"
                    value={message}
                    onChange={ (e) => setMessage(e.target.value)}
                    disabled={loading}
                />
                <Button
                    type="submit"
                    name="message"
                    onClick={catchSubmit}
                    disabled={loading}
                >Envoyer</Button>
        </>
    )
};