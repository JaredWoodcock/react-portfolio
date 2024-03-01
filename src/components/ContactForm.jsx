import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors({ ...errors, [name]: 'This field is required' });
        } else {
            setErrors({ ...errors, [name]: false });
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailBlur = (e) => {
        const { value } = e.target;
        if (!value) {
            setErrors({ ...errors, email: 'This field is required' });
        } else if (!validateEmail(value)) {
            setErrors({ ...errors, email: 'Not a valid email' });
        } else {
            setErrors({ ...errors, email: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setErrors({
                name: !name ? 'This field is required' : false,
                email: !email ? 'This field is required' : false,
                message: !message ? 'This field is required' : false,
            });
            return;
        }

        if (!validateEmail(email)) {
            setErrors({ ...errors, email: 'Not a valid email' });
            return;
        }

        console.log('Form submitted successfully');
        setShowSuccess(true);
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    return (
        <form className="m-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && <span className="text-danger">*</span>}
                {errors.name && <span className="text-danger ml-1">{errors.name}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                />
                {errors.email && <span className="text-danger">*</span>}
                {errors.email && <span className="text-danger ml-1">{errors.email}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></textarea>
                {errors.message && <span className="text-danger">*</span>}
                {errors.message && <span className="text-danger ml-1">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {showSuccess && <p className="mt-3 text-success">Form submitted successfully!</p>}
        </form>
    );
}