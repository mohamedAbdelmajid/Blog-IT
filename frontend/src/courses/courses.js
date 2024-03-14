import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import ScrollToTopLink from '../ScrollToTopLink';

const Courses = () => {
    const [coursesCard, setCoursesCard] = useState([]);

    const cardStyle = { height: '100%' }; // Ajoutez la hauteur fixe souhaitée

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3333/courses");
                setCoursesCard(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container text-center mb-5 pt-5">
            <p className='my-5 h1'>Browse through useful IT courses</p>
            <div className="row">
                {/* Carte 1 */}
                {coursesCard.map((card) => (
                    <div key={card.id} className="col-xl-4 col-lg-6 col-md-12 mb-4">
                        <div className="card" style={cardStyle}>
                            <img src={card.image.src} className="card-img-top w-25 mx-auto mt-3" alt={card.image.alt} />
                            <div className="card-body">
                                <h5 className="card-title mb-4">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <ScrollToTopLink to={`/courses/${card.link}`} className="btn btn-outline-primary">Learn more</ScrollToTopLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses