import React from 'react'
import { Link } from 'react-router-dom'

import RecentArticles from './recentArticles/recentArticles';

const Blog = () => {
    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div class="card mb-3 col-8">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/server error.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="#">
                                    <h5 className="card-title">How to Remove (Demote) a Domain Controller</h5>
                                </a>
                                <p class="card-text">
                                    <small class="text-body-secondary"><i class="bi bi-clock"></i> Updated on January 20, 2024</small>
                                    <span className='ms-3'>
                                        <small class="text-body-secondary"><i class="bi bi-folder"></i> Windows Server</small>
                                    </span><br />
                                    <small class="text-body-secondary"><i class="bi bi-chat"></i> 0 Comments</small>
                                </p>
                                <p class="card-text">Now that you have a new Domain Controller running in Active Directory, it's time to demote the old Domain Controller. There are two options to remove a Domain Controller. It depends on whether the Domain Controller is accessible or not.…</p>
                                <Link to="/remove-domain-controller"><button type="button" class="btn btn-secondary">Read more</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <RecentArticles />
            </div>
            <div className='row'>
                <div class="card mb-3 col-8">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/server error.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="#">
                                    <h5 className="card-title">How to Remove (Demote) a Domain Controller</h5>
                                </a>
                                <p class="card-text">
                                    <small class="text-body-secondary">Updated on January 20, 2024</small>
                                    <span className='ms-3'>
                                        <small class="text-body-secondary">Windows Server</small>
                                    </span><br />
                                    <small class="text-body-secondary">0 Comments</small>
                                </p>
                                <p class="card-text">Now that you have a new Domain Controller running in Active Directory, it's time to demote the old Domain Controller. There are two options to remove a Domain Controller. It depends on whether the Domain Controller is accessible or not.…</p>
                                <button type="button" class="btn btn-secondary">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div class="card mb-3 col-8">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/server error.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="#">
                                    <h5 className="card-title">How to Remove (Demote) a Domain Controller</h5>
                                </a>
                                <p class="card-text">
                                    <small class="text-body-secondary">Updated on January 20, 2024</small>
                                    <span className='ms-3'>
                                        <small class="text-body-secondary">Windows Server</small>
                                    </span><br />
                                    <small class="text-body-secondary">0 Comments</small>
                                </p>
                                <p class="card-text">Now that you have a new Domain Controller running in Active Directory, it's time to demote the old Domain Controller. There are two options to remove a Domain Controller. It depends on whether the Domain Controller is accessible or not.…</p>
                                <button type="button" class="btn btn-secondary">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div class="card mb-3 col-8">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/server error.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="#">
                                    <h5 className="card-title">How to Remove (Demote) a Domain Controller</h5>
                                </a>
                                <p class="card-text">
                                    <small class="text-body-secondary">Updated on January 20, 2024</small>
                                    <span className='ms-3'>
                                        <small class="text-body-secondary">Windows Server</small>
                                    </span><br />
                                    <small class="text-body-secondary">0 Comments</small>
                                </p>
                                <p class="card-text">Now that you have a new Domain Controller running in Active Directory, it's time to demote the old Domain Controller. There are two options to remove a Domain Controller. It depends on whether the Domain Controller is accessible or not.…</p>
                                <button type="button" class="btn btn-secondary">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog