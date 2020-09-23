import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import locationInfo from '../FakeData/FakeData';
import './Place.css'
import { Link } from 'react-router-dom';

const Place = () => {
    return (
        <div>
            <div>
                <div className="row">
                    {
                        locationInfo.map(location =>
                            <div className="col-md-4 location-info">
                            <Link to={`/booking/${location.id}`}>
                                <img src={location.img} alt="" />
                                <h4>{location.name}</h4>
                                </Link>
                            </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Place