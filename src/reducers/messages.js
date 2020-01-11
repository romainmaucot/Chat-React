import {
    ADD_MESSAGE_ACTION,
    GET_MESSAGE_ACTION,
    GET_MESSAGE_SUCCESS_ACTION,
    GET_MESSAGE_FAILED_ACTION,
    LOAD_MESSAGE_PENDING
} from "../constants/action";


const INITIAL_STATE = {
    messages: [],
    loading: false,
    error: null
};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION:
            return {
                messages: [
                    ...state.messages,
                    { message: action.message, username: action.username}
                ]
            };

        case LOAD_MESSAGE_PENDING :
            return state;

        case GET_MESSAGE_ACTION:
            return {
                ...state,
                loading: true
            };

        case GET_MESSAGE_SUCCESS_ACTION:
            return {
                ...state,
                messages: action.messages,
                loading: false
            };

        case GET_MESSAGE_FAILED_ACTION:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        default:
            return state;
    }
};




