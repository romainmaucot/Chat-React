import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {logUser} from "../actions/log";

const DivLog  = styled.div`
    border      : 1px;
    padding     : 5px;
`;

const Log = () => {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();

    const history = useHistory() ;

    const catchLogin = (e) => {
        e.preventDefault();

        if (username) {
            dispatch(logUser(username));
            history.push("/chat");
        }
    };

    return (
        <DivLog className={ "card container" }>
            <label>
                <small>Username :</small>
            </label>

            <input
                type    = {"text"}
                value   = {username}
                onChange= {(e) => setUsername (e.target.value)}
            />

            <input
                type        = {"submit"}
                className   = {""}
                onClick     = {catchLogin}
                value       = {"Login"}
            />
        </DivLog>
    );
};

export default Log;