import React, { useEffect, useState } from 'react';
import './Signup.scss';
import { Calendar, Clock, Tag, Share2, Star } from 'react-feather'; // Importing react-feather icons

const Signup = () => {
    const [seatType, setSeatType] = useState('general');
    const [duration, setDuration] = useState('4hr');
    const [formData, setFormData] = useState({ name: '', mobile: '' });

    const [landmark, setLandmark] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                        const data = await response.json();

                        if (data && data.display_name) {
                            setLandmark(data.display_name);
                        } else {
                            setLandmark("No address found.");
                        }
                    } catch (err) {
                        setError("Error fetching address.");
                    }
                },
                (err) => {
                    setError("Error getting location.");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);
    const [reviews, setReviews] = useState([
        { name: 'John D.', review: 'Best concert ever! The sound was incredible!' },
        { name: 'Jane S.', review: 'Had a great time, the venue was awesome.' },
    ]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.mobile) {
            alert(`Ticket purchased for ${seatType.toUpperCase()} with ${duration} duration!`);
            setFormData({ name: '', mobile: '' }); // Clear form data
        } else {
            alert('Please fill out all fields.');
        }
    };

    const addReview = () => {
        // Your review addition logic
    };



    return (
        <div className="ticket-container container box_shadow flex-wrap">
            <div className="ticket-info">
                <div className="ticket-header">
                    <h1>OMG, Good Choice To Join US📢</h1>
                </div>

                <div className="ticket-details">
                    <div className="ticket-date-venue">
                        <p><Calendar size={18} /> <strong>Date: </strong>{new Date().toLocaleDateString()}</p>
                        <div className='d-flex flex-column w-auto p-2 mb-3 custome_radius box_shadow' style={{maxWidth:"600px"}}>
                            <span>Venue</span>
                            <p>{ landmark}</p>

                        </div>

                        {/* <p><Clock size={18} /> <strong>Venue:</strong> {landmark ? landmark : (
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        )}</p> */}
                    </div>

                    <div className="ticket-availability">
                        <p><Tag size={18} /> <strong>Available Seats:</strong> 15+</p>
                    </div>

                    <div className="ticket-seating">
                        <h3>Select Your Role</h3>
                        <select className=' select box_shadow custome_radius' required onChange={(e) => setSeatType(e.target.value)} value={seatType}>
                            <option value="vip">Student</option>
                            <option value="premium">Working Profesional</option>
                            <option value="general">Hiring Freelancer</option>
                        </select>
                    </div>

                    <div className="ticket-duration">
                        <h3>Select Address</h3>
                        <select className=' select box_shadow custome_radius' required onChange={(e) => setDuration(e.target.value)} value={duration} style={{width:'300px'}}>
                            <option selected value="Choose Address">Choose Address</option>
                            <option value="4hr">{ landmark}</option>
                            
                        </select>
                    </div>
                </div>

                <div className="ticket-reviews">
                    <h3>User Reviews</h3>
                    <p className="d-flex gap-2 align-items-center mt-1">
                        <span className="text-warning f24 star"><Star /></span>
                        <span className="star f12">4.3
                            (13.7K)</span>
                    </p>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}><strong>{review.name}</strong>: {review.review}</li>
                        ))}
                    </ul>
                    <button className="add-review-btn" onClick={addReview}>Add a Review</button>

                </div>
            </div>

            <div className="form-container box_shadow custome_radius">
                <form onSubmit={handleFormSubmit}>
                    <h2>Enter Your Details</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className='box_shadow custome_radius'
                    />
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        placeholder="Your Mobile Number"
                        className='box_shadow custome_radius'
                    />
                    <button type="submit" className="submit-form-btn box_shadow">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
