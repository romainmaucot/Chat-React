import { combineReducers } from "redux";
import {messages} from "./messages";
import {userName} from "./log";

export default combineReducers({
    messages,
    userName
});