import {LOG_USER} from "../constants/action";

const INIT_STATE = {
    username: null
};

export const userName = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOG_USER :
            return  {
                username: action.username
            };
        default :
            return state;
    }
};