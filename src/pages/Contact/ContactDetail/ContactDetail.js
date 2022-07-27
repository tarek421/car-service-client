import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelopeOpenText, faLocationPin, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const ContactDetail = () => {
    return (
        <div id='contact-detail' className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            <h3>Email Address</h3>
                            <p>info@webmail.com</p>
                            <p>jobs@webexample.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            <h3>Phone Number</h3>
                            <p>+0123-456789</p>
                            <p>+987-6543210</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="card bordered">
                            <div className="p-5 text-center">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <h3>Office Address</h3>
                            <p>18/A, New Born Town Hall</p>
                            <p>New York, US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;