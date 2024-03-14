import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

import ScrollToTopLink from "../../ScrollToTopLink";


import RecentArticles from "../../blog/recentArticles/recentArticles";

const ExchangeServerHAvailability = () => {
    const [exchangeServerHAvailability, setExchangeServerHAvailability] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3333/detail-course');
                // Trouver l'objet avec le titre "Exchange Server"
                const exchangeServerHAvailability = response.data.data.find(item => item.title === 'Exchange Server High Availability');
                // Mettre à jour l'état seulement si l'objet est trouvé
                if (exchangeServerHAvailability) {
                    setExchangeServerHAvailability(exchangeServerHAvailability);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (!exchangeServerHAvailability) {
        return <p>Loading...</p>; 
    }

    const { title, description, subjects, text, updatedAt, important } = exchangeServerHAvailability;

    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div key={exchangeServerHAvailability.id} className='col-8'>
                    <h1>{title}</h1>
                    <p className='lead'>{description.text} <ScrollToTopLink to={`/courses/${description.link}`}>{description.textLink}</ScrollToTopLink> </p>
                    {subjects.map((subject) => (
                        <div key={subject.id} className="my-4"> 
                            <h4>{subject.title}</h4>
                            <ul className="mt-4">
                                {subject.list.map((li) => (
                                    <li key={li.id}><ScrollToTopLink to={li.link}>{li.title}</ScrollToTopLink></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="my-4"> 
                        <p>{text}</p>
                        <p>{updatedAt}</p>
                        <div className="alert alert-info lead" role="alert">
                            <strong>{important.title}</strong>: <a href={important.link}>{important.textLink}</a> {important.text}
                        </div>
                    </div>
                </div>
                <RecentArticles/>
            </div>
        </div>
    );
}

export default ExchangeServerHAvailability;
