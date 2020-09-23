import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Place from '../Place/Place';
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <div className="container place-detail-container">
                <div className="row">
                    <div className="col-md-6 place-detail">
                        <h1>Cox's Bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to="/booking/1"><Button variant="warning">Booking &rarr;</Button></Link>
                    </div>
                    <div className="col-md-6">
                        <Place></Place>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;