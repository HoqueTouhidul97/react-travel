import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotelData from '../FakeData/hotelData';
import './Room.css'
import TopBar from '../TopBar/TopBar';
import { Button } from 'react-bootstrap';
import { userContext } from '../../App';


const Room = () => {
    const roomData = hotelData;
    const {location} = useContext(userContext);
    const[locationInfo,setLocationInfo] = location;
    
    return (
        <div className="hotel-wrapper">
            <TopBar></TopBar>
            <div className="container hotel-container">
                <div className="row">
                    <div className="col-md-6">
                        {
                            roomData.map(room =>
                                <div className="room-container d-flex mt-4">
                                    <img src={room.img} alt="" />
                                    <div className="room-details">
                                        <h6>{room.hotelName}</h6>
                                        <p>{room.roomDetails}</p>
                                        <p>$ {room.price}</p>
                                        <Button variant="warning">Book Now</Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="col-md-6">
                         {locationInfo==1 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24477498478!2d91.93286091260438!3d21.45104335625322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2z4KaV4KaV4KeN4Ka44Kas4Ka-4Kac4Ka-4Kaw!5e0!3m2!1sbn!2sbd!4v1600436399611!5m2!1sbn!2sbd" style={{marginTop:"80px",borderRadius:"10px", width:"570px", height:"400px", frameborder:"0"}}></iframe>}

                         {locationInfo==2 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29087.55786229269!2d91.70753464074963!3d24.313562805573984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2z4Ka24KeN4Kaw4KeA4Kau4KaZ4KeN4KaX4Kay!5e0!3m2!1sbn!2sbd!4v1600440231378!5m2!1sbn!2sbd" style= {{marginTop:"80px",borderRadius:"10px", width:"570px", height:"400px", frameborder:"0"}} ></iframe>}

                         {locationInfo==3 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946889.905953199!2d88.72646238525243!3d22.019405957982798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004caac2c7b315%3A0x4716abcfbb16c93c!2z4Ka44KeB4Kao4KeN4Kam4Kaw4Kas4Kao!5e0!3m2!1sbn!2sbd!4v1600441282336!5m2!1sbn!2sbd" style= {{marginTop:"80px",borderRadius:"10px", width:"570px", height:"400px", frameborder:"0"}}></iframe>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Room;