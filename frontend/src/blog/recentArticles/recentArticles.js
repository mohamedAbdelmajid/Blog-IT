import React from 'react'
import { Link } from 'react-router-dom'

const RecentArticles = ({ ...props }) => {
    return (
        <div className="card col-xl-3 col-md-12 border-2 mx-auto" {...props}>
            <div className="card-body">
                <h5 className="card-title">Recent Articles</h5> 
                <hr />
                <Link to="#"><h6 className="card-subtitle mb-2 text-body-secondary">How to Install and Update PowerShell 7</h6></Link>
                <hr />
                <Link to="#"><h6 className="card-subtitle mb-2 text-body-secondary">How to Clean up stale DNS records with PowerShell</h6></Link>
                <hr />
                <Link to="#"><h6 className="card-subtitle mb-2 text-body-secondary">How to Remove (Demote) a Domain Controller</h6></Link>
                <hr />
                <Link to="#"><h6 className="card-subtitle mb-2 text-body-secondary">Export Entra ID app registrations Certificates and Secrets expiry report</h6></Link>
                <hr />
                <Link to="#"><h6 className="card-subtitle mb-2 text-body-secondary">Export Entra ID app registrations Certificates and Secrets expiry report</h6></Link>
            </div>
        </div>
    );
}

export default RecentArticles