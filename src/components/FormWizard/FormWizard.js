import React, { useEffect, useState } from 'react';

import {
    useNavigate
  } from "react-router-dom";

import { default as Header } from '../Header/Header';

import '../../App.css';
import './FormWizard.css';

function FormWizard() {
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('HKD');
    const [selectedPlan, setSelectedPlan] = useState('Standard');
    const [premium, setPremium] = useState(1);
    const [isSummaryScreen, setSummaryScreen] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
        calculatePremium();
    }
    
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        calculatePremium();
    }

    const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
    }

    const calculatePremium = () => {
        let rate = (selectedPlan === 'Standard') ? 1 : (selectedPlan === 'Safe') ? 0.5 : 0.75
        let planRate = (rate !== 1) ? ((10 * age) * rate) : 0;
        let premium = (10 * age) + planRate;
        setPremium(premium)
    }

    useEffect(() => {
        calculatePremium();
    }, [age, selectedPlan]);

    const handleSubmit = () => {
        if (age > 100) {
            navigate("/error")
        } else {
            setSummaryScreen(true)
        }
    }
    return (
        <div className='form-wizard'>
            {!isSummaryScreen && <>
                <Header headerMessage='Tell us about yourself!' />
                <div className="form-element">
                    <label>Name</label>
                    <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}} />
                </div>
                
                <div className="form-element">
                    <label>Age</label>
                    <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
                </div>
                
                <div className="form-element">
                    <label>Where do you live</label>
                    <select name="cars" id="cars" onChange={(e) => {handleCountryChange(e)}} value={country}>
                        <option value="HKD">Hong Kong</option>
                        <option value="USD">USA</option>
                        <option value="AUD">Australia</option>
                    </select>
                </div>
                    
                <div className='form-element'>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Standard" checked={selectedPlan === "Standard"} onChange={(e) => handlePlanChange(e)} />
                            Standard
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Safe" checked={selectedPlan === "Safe"} onChange={(e) => handlePlanChange(e)} />
                            Safe (+{10 * age * 0.5}{country}, 50%)
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="SuperSafe" checked={selectedPlan === "SuperSafe"} onChange={(e) => handlePlanChange(e)} />
                            Super Safe (+{10 * age * 0.75}{country}, 75%)
                        </label>
                    </div>
                    <div className='form-element'>
                        <h2>Your premium is: {premium}{country}</h2>
                    </div>
                    <div>
                        <button className='btn btn-secondary m-10' onClick={() => {  navigate("/") }}>Back</button>
                        <button className='btn btn-primary m-10' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </>}
            {isSummaryScreen && <div className='container container-height'>
                <Header headerMessage='Summary' />
                <span className='dashboard-txt'>Name: {name}</span>
                <span className='dashboard-txt'>Age: {age}</span>
                <span className='dashboard-txt'>WHere do you live: {country}</span>
                <span className='dashboard-txt'>Package: {selectedPlan}</span>
                <span className='dashboard-txt'>Premium: {premium}</span>
                <div>
                    <button className='btn btn-secondary m-10' onClick={() => { setSummaryScreen(false) }}>Back</button>
                    <button className='btn btn-primary m-10' onClick={() => { navigate("/") }}>Buy</button>
                </div>
            </div>}
        </div>
    );
}

export default FormWizard;
