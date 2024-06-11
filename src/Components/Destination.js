import React from "react";
import dubaiImage from '../images/dubai.png';
import indonesiaImage from '../images/indonesia.jpg';
import thailandImage from '../images/thailand.png';
import parisImage from '../images/paris.png';
import balloon from '../images/balloon.png';
import '../Styles/dest.css';

function Destination() {
    return(
        <>
            <div className = "destination">
                <h2>Our Destinations</h2>
                <div className="dest-row">
                    <div className="dest">
                        <h3>Dubai</h3>
                        <img src ={dubaiImage} alt="dubai destination"/>
                        <div className="dest-text">
                            <p>Experience Dubai: soaring skyscrapers, desert adventures, and luxury shopping. Marvel at the iconic Burj Khalifa, cruise the Dubai Marina, and explore the vibrant souks. Indulge in world-class dining, relax on pristine beaches, and immerse yourself in the dynamic culture of this cosmopolitan city.</p>
                        </div>
                    </div>

                    <div className="dest">
                        <h3>Indonesia</h3>
                        <img src = {indonesiaImage} alt="paris destination"/>
                        <div className="dest-text">
                            <p>Embark on an adventure in Indonesia: pristine beaches, lush rainforests, and vibrant culture. Dive into crystal-clear waters, trek to volcanic peaks, and encounter diverse wildlife. Immerse yourself in the enchanting traditions and flavors of the Emerald of the Equator.</p>
                        </div>
                    </div>

                    <div className="dest">
                        <h3>Thailand</h3>
                        <div className="dest-img">
                            <img src = {thailandImage} alt="thailand destination"/>
                        </div>
                        <div className="dest-text">
                            <p>Explore Thailand's diverse delights: pristine beaches, ornate temples, bustling markets, vibrant street food, lush jungles, ancient ruins, warm hospitality, and rich culture.</p>
                        </div>
                    </div>

                    <div className="dest">
                        <h3>Paris </h3>
                        <img src = {parisImage} alt="paris  destination"/>
                        <div className="dest-text">
                            <p>Discover Paris: Eiffel Tower views, Louvre treasures, and Montmartre charm. Indulge in Le Marais' gourmet delights and explore Saint-Germain-des-Prés' allure. Experience the magic of the City of Light.</p>
                        </div>
                    </div>

                </div>

                
                <a href ="/contact" className="btn" >Contact Us</a>
            </div>
            <div className = 'balloon-img'>
                <img className='air_balloon' src = {balloon} alt="Air Balloon" />
            </div>

        </>
    );
}

export default Destination;