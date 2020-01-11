import {LOG_USER} from "../constants/action";

export const logUser = (username) => ({
    type    : LOG_USER,
    username,
});