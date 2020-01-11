import axios from 'axios';
import {
    ADD_MESSAGE_ACTION,
    GET_MESSAGE_ACTION,
    GET_MESSAGE_SUCCESS_ACTION,
    GET_MESSAGE_FAILED_ACTION,
    LOAD_MESSAGE_PENDING,
    LOAD_MESSAGE_SUCCESS,
    LOAD_MESSAGE_ERROR
} from "../constants/action";


export const addMessage = (message, username) => {
    return {
        type: ADD_MESSAGE_ACTION,
        message: message,
        username: username
    };
};

/*export const addMessage = (message) => {
    const action = {
        type        : ADD_MESSAGE_ACTION,
        message     : message.message,
        username    : message.username,
        sentAt      : new Date(),
    };
    ws.send(JSON.stringify(action));

    return action;
};*/

export const loadMessages = () => {
    return dispatch => {
        dispatch({ type: LOAD_MESSAGE_PENDING});
        return axios
            .get("http://www.mocky.io/v2/5914c6af100000ae0f9a5c1a")
            .then(response => {
            dispatch({
                type: LOAD_MESSAGE_SUCCESS,
                message: response.data.messages
                });
            })
            .catch(error => {
                dispatch({type: LOAD_MESSAGE_ERROR, error})
            });
    };

};

export const getMessageAction = (loading) => {
    return {
        type: GET_MESSAGE_ACTION,
        loading
    };
};

export const getMessageSuccessAction = (message, loading) => {
    return {
        type: GET_MESSAGE_SUCCESS_ACTION,
        message,
        loading
    };
};

export const getMessageFailedAction = (error, loading) => {
    return {
        type: GET_MESSAGE_FAILED_ACTION,
        error,
        loading
    };
};