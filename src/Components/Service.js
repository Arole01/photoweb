import React from 'react';

const Service = () => {
    return (
        <section id="service" className="service">
            <h3 className="title">Service</h3>
            <ul className="service-content">
                <li>
                    <i className="fas fa-camera-retro"></i>
                    <h4>Portrait Photography</h4>
                    <p>From classic headshots to contemporary lifestyle portraits, we create images that reflect your personality and style. 
                        We work with individuals, families, and professionals, ensuring a comfortable and enjoyable experience.</p>
                </li>

                <li>
                    <i className="fas fa-camera"></i>
                    <h4>Event Photography</h4>
                    <p>We expertly document the energy and excitement of your special events, from weddings and birthdays to corporate gatherings and conferences. We capture the key moments, candid expressions, 
                        and intricate details that make your event unforgettable.</p>
                </li>

                <li>
                    <i className="fas fa-image"></i>
                    <h4>Commercial Photography</h4>
                    <p>We help businesses elevate their brand image with high-quality commercial photography. 
                        Our services include product photography, architectural photography, and corporate headshots, all designed to showcase your business in the best possible light.</p>
                </li>

                <li>
                    <i className="fas fa-video"></i>
                    <h4>Wedding Videography</h4>
                    <p>We craft cinematic wedding films that beautifully capture the emotion, joy, and romance of your special day. 
                        We preserve every precious moment, from the vows to the first dance, allowing you to relive the magic for years to come.</p>
                </li>

                <li>
                    <i className="fas fa-microphone"></i>
                    <h4>Corporate Videography</h4>
                    <p>We produce engaging corporate videos that communicate your brand's message effectively. Our services include promotional videos, training videos, and event coverage, all tailored to meet your specific business objectives.</p>
                </li>
            </ul>
        </section>
    )
}


export default Service;