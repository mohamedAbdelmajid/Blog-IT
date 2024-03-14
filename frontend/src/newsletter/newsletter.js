import React from 'react'

const Newsletter = () => {
    return (
        <div className="container my-5 pt-4" style={{ maxWidth: "60%"}}>
            <h1 className='my-4'>Newsletter</h1>
            <div className='my-4'>
                <p className="lead">The Anass Kssama newsletters contain practical IT tips and insights that will help you to <b> get your job done</b>:</p>
                <ul>
                    <li>Loads of IT tips and tricks</li>
                    <li>Improve your IT knowledge</li>
                    <li>Automatic access to our free IT courses!</li>
                </ul>
            </div>
            <div className='my-4'>
                <h3>Sign up now!</h3>
                <p className="lead">Never miss an update by subscribing to the newsletter. Get all the valuable information right to your inbox! You will receive at most two newsletters a week. We usually send out just once a week, unless we post very exciting news. You may unsubscribe at any time.                </p>
                <div className='my-3'>
                    <label for="email" className='my-3'>Signup for the newsletter</label>
                    <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" />
                </div>
            </div>
            <div className='my-3'>
                <h3>Anass Kssama Newsletter</h3>
                <p className='lead'>Example of how the newsletter will show up in your inbox.</p>
            </div>
        </div>
    );
}

export default Newsletter;