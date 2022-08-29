import React from 'react';

import {
    useNavigate
} from "react-router-dom";

import { default as Header } from '../Header/Header';

import '../../App.css';

function Error(props) {
    let navigate = useNavigate();

    return (
        <div className='container'>
            <Header headerMessage='Ooops' />
            <span className='dashboard-txt'>Your age is over accepted limit.<br />We are sorry but we cannot insure you now.</span>
            <button className='btn btn-primary' onClick={() => {  navigate("/") }}>Ok :-(</button>
        </div>
    );
}

export default Error;
