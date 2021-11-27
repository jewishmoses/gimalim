import './about.css'
import Image from '../../images/1.jpg';

const About = () => {

    return (

        <div className="about">

            <div className="about-left">
                
                <div className="about-left-wrapper">

                    <div className="about-title">
                        <h1>מעולם לא היה קל יותר להוציא גימלים!</h1>
                    </div>

                    <div className="about-description">
                        <p>
                            צריך גימלים דחוף? וכבר הרגת את כל הסבתות? איתנו תוציא גימלים ללא הגבלה!
                            צריך גימלים דחוף? וכבר הרגת את כל הסבתות? איתנו תוציא גימלים ללא הגבלה!
                        </p>
                    </div>

                    <div className="about-action">
                        <button>התחל עכשיו!</button>
                    </div>
                    
                </div>

            </div>

            <div className="about-right">
                
                <div className="about-right-wrapper">

                    <div className="about-bg"></div>

                    <img src={Image} alt="" className="about-image" />

                </div>

            </div>

        </div>

    );

};

export default About;