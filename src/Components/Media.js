import React from 'react';
const Media = () => {
    return (
        <section id="media" className="media">
            <h3 className="title">Media</h3>
            <div className="img-area">
                <div className="single-img">
                    <img src={"https://res.cloudinary.com/djidnusq7/image/upload/v1756194107/cam2_nvxwpn.jpg"} alt="original captcha" className="original"/>
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715628698/Fashion%20app/image9.jpg"} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1716850059/Fashion%20app/image21.jpg"} alt="original captcha" className="original"/>
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715628695/Fashion%20app/image10.jpg"} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1716850059/Fashion%20app/image23.jpg"} alt="original-captcha" className="original"/>
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715628686/Fashion%20app/image7.jpg"} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715628681/Fashion%20app/image15.jpg"} alt="original captcha" className="original"/>
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715616691/cld-sample-5.jpg"} alt="Hover captcha" className="hover"/>
                </div>

                <div className="single-img">
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715628679/Fashion%20app/image2.jpg"} alt="original captcha" className="original"/>
                    <img src={"https://res.cloudinary.com/dh549anka/image/upload/v1715616691/cld-sample-4.jpg"} alt="Hover captcha" className="hover"/>
                </div>

                {/*<div className="single-img">
                    <img src={img12} alt="original captcha" className="original"/>
                    <img src={img9} alt="Hover captcha" className="hover"/>
                </div>*/}                                
                
            </div>
        </section>
    )
}

export default Media;