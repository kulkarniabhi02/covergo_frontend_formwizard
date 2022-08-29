import React from 'react';

import {
    useNavigate
} from "react-router-dom";

import { default as Header } from '../Header/Header';

import '../../App.css';
import './Dashboard.css'

function Dashboard() {
    let navigate = useNavigate();

    return (
        <div className='container'>
            <Header headerMessage='Hello There!' />
            <span className='dashboard-txt'>Let's buy some insurance. It is going to take only few steps</span>
            <button className='btn btn-primary' onClick={() => {  navigate("/formwizard") }}>Start</button>
        </div>
    );
}

export default Dashboard;
