import React from "react";
import styled from "styled-components";
import {MessageItem} from "./MessageItem";
import {connect, useSelector} from "react-redux";
import {loadMessages} from "../actions/messages";

const ListDiv = styled.div`
background-color: pink
text-align: center
`;

 const MessageList = () => {

    const messages = useSelector(state =>
    state.messages.messages);

    return (
        <ListDiv>
        {messages.map((message, i) => {
                return <MessageItem key={i} index={i} message={message}/>;
            })
        }
        {messages.length === 0 && (
            <p>Aucun message</p>
        )}
        </ListDiv>
    )
};

const mapStateToProps = state => {
    return {
        messages: state.message,
        pending: state.pending
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMessages: () => {
            dispatch(loadMessages());
        }
    };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(MessageList);

