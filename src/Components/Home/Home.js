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
                        <p>Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike. The beach gets busy from November to early March...</p>
                        <Link to="/booking/1"><Button variant="warning">Booking -> </Button></Link>
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