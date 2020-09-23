import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Booking.css';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData'
import { userContext } from '../../App';
const Booking = () => {

    const placeData = fakeData;
    const { locationId } = useParams();
    const locationData = placeData.filter(place => place.id == locationId);
    const { location } = useContext(userContext);
    const [locationInfo, setLocationInfo] = location;
    const handleSubmit = () => {
        setLocationInfo(locationId);
    }
    console.log(locationId)
    return (
        <div className="home-container">
            <Header></Header>
            <div className="container place-detail-container">
                <div className="row">
                    <div className="col-md-6 place-detail">
                        <h1>{locationData[0].name}</h1>
                        <p>{locationData[0].description}</p>
                    </div>

                    <div className="col-md-6 form-container">
                        <form>
                            <fieldset className="form-group">
                                <div className="form-group">
                                    <label className="form-control-label">Origin</label>
                                    <input required className="form-control" type="text" name="origin" placeholder="Origin" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Destination</label>
                                    <input required className="form-control" type="text" name="destination" placeholder="Destination" />
                                </div>
                            </fieldset>
                            <div className="date-container">
                                <div className="from">
                                    <label htmlFor="from">From</label>
                                    <br />
                                    <input required type="date" name="from" id="" />
                                </div>
                                <div className="to">
                                    <label htmlFor="from">To</label>
                                    <br />
                                    <input required type="date" name="to" id="" />
                                </div>
                            </div>
                            <br /><br />
                            <Link to="/destination"><button type="submit" onClick={handleSubmit} className="btn btn-warning  mt-3 d-block w-100 mx-auto ">Start Booking</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;