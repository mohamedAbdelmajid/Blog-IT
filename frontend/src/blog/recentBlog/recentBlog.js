import React from 'react'
import { Link } from 'react-router-dom'

import ScrollToTopLink from '../../ScrollToTopLink';
import RemoveDomainController from '../removeDomainController/removeDomainController';

const RecentBlog = () => {

    const cardStyle = { height: '100%' }; // Ajoutez la hauteur fixe souhaitée

    return (
        <div className="container mb-5">
            <p className='my-5 h1 text-center'>Recent articles on our IT blog</p>
            <div className="row mb-4">
                {/* Carte 1 */}
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card" style={cardStyle}>
                        <ScrollToTopLink to="/remove-domain-controller" className='bg-dark d-flex justify-content-center align-items-center'>
                            <img src="/images/server error.png" className="card-img-top w-50 my-3" alt="EXCHANGE SERVER" />
                        </ScrollToTopLink>
                        <div className="card-body">
                            <ScrollToTopLink to="/remove-domain-controller">
                                <h5 className="card-title">How to Remove (Demote) a Domain Controller</h5>
                            </ScrollToTopLink>
                            <p className='mb-3'><small>January 20, 2024</small></p>
                            <p className="card-text">Now that you have a new Domain Controller running in Active Directory, it's time to…</p>
                        </div>
                    </div>
                </div>

                {/* Carte 2 */}
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card" style={cardStyle}>
                        <ScrollToTopLink to="/remove-domain-controller" className='bg-dark d-flex justify-content-center align-items-center'>
                            <img src="/images/Secrets expiry report.png" className="card-img-top w-50 my-3" alt="EXCHANGE SERVER HIGH AVAILABILITY" />
                        </ScrollToTopLink>
                        <div className="card-body">
                            <ScrollToTopLink to="/remove-domain-controller">
                                <h5 className="card-title">Export Entra ID app registrations Certificates and Secrets expiry report</h5>
                            </ScrollToTopLink>
                            <p className='mb-3'><small>January 15, 2024</small></p>
                            <p className="card-text">You need a quick way that shows you all the Entra ID app registrations certificates…</p>
                        </div>
                    </div>
                </div>

                {/* Carte 3 */}
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="card" style={cardStyle}>
                        <ScrollToTopLink to="/remove-domain-controller" className='bg-dark d-flex justify-content-center align-items-center'>
                            <img src="/images/clear microsoft teams.png" className="card-img-top w-50 my-3" alt="EXCHANGE HYBRID" />
                        </ScrollToTopLink>
                        <div className="card-body">
                            <ScrollToTopLink to="/remove-domain-controller">
                                <h5 className="card-title">How to clear Microsoft Teams cache</h5>
                            </ScrollToTopLink>
                            <p className='mb-3'><small>January 11, 2024</small></p>
                            <p className="card-text">Microsoft Teams can have stubborn issues and not download all the data correctly. By clearing…</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center mb-5">
                <div class="col-md-auto">
                    <button type="button" className="btn btn-outline-dark btn-lg">Read more great articles on our IT blog</button>
                </div>
            </div>
        </div>
    );
}

export default RecentBlog