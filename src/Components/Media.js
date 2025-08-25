import React from 'react';
import img1 from '../assets/images/img1.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img16 from '../assets/images/img16.jpg';
import img17 from '../assets/images/img17.jpg';
import img18 from '../assets/images/img18.jpg';
import img19 from '../assets/images/img19.jpg';



const Media = () => {
    return (
        <section id="media" className="media">
            <h3 className="title">Media</h3>
            <div className="img-area">
                <div className="single-img">
                    <img src={img1} alt="original captcha" className="original"/>
                    <img src={img10} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={img18} alt="original captcha" className="original"/>
                    <img src={img8} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={img19} alt="original-captcha" className="original"/>
                    <img src={img13} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={img11} alt="original captcha" className="original"/>
                    <img src={img17} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={img7} alt="original captcha" className="original"/>
                    <img src={img16} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={img12} alt="original captcha" className="original"/>
                    <img src={img9} alt="Hover captcha" className="hover"/>
                </div>                                
                
            </div>
        </section>
    )
}

export default Media;