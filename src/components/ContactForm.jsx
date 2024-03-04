import { useState } from 'react';

export default function ContactForm() {
    // Define state variables for form data, errors, and success message
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

    // Define event handles for form inputs
    const handleChange = (e) => {
        // Extract name and value from input field
        const { name, value } = e.target;
        // Update form data state with new value
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = (e) => {
        // Extract name and value from input field
        const { name, value } = e.target;
        // Check if field is empty, if so, set the error state to show that field is required
        if (!value) {
            setErrors({ ...errors, [name]: 'This field is required' });
        // Clear the error if the field is not empty
        } else {
            setErrors({ ...errors, [name]: false });
        }
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Event handler for email input blur
    const handleEmailBlur = (e) => {
        // Extract value from email field
        const { value } = e.target;
        // Check if the email field is empty or if not a valid email
        if (!value) {
            setErrors({ ...errors, email: 'This field is required' });
        } else if (!validateEmail(value)) {
            setErrors({ ...errors, email: 'Invalid email' });
        } else {
            // Clear error state if email is valid
            setErrors({ ...errors, email: false });
        }
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        // Check if any required fields are empty
        if (!name || !email || !message) {
            // Set the error state for each required field
            setErrors({
                name: !name ? 'This field is required' : false,
                email: !email ? 'This field is required' : false,
                message: !message ? 'This field is required' : false,
            });
            return;
        }
        // Check if email is valid
        if (!validateEmail(email)) {
            setErrors({ ...errors, email: 'Not a valid email' });
            return;
        }

        console.log('Form submitted successfully');
        // Show success message
        setShowSuccess(true);
        // Clear form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        // Reset success message after 2 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    return (
        <form className="m-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                {/* Input field for name */}
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {/* Displays error message if name field is empty */}
                {errors.name && <span className="text-danger">*</span>}
                {errors.name && <span className="text-danger ml-1">{errors.name}</span>}
            </div>
            <div className="mb-3">
                {/* Input field for email */}
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
                {/* Display error message if email field is empty or invalid */}
                {errors.email && <span className="text-danger">*</span>}
                {errors.email && <span className="text-danger ml-1">{errors.email}</span>}
            </div>
            <div className="mb-3">
                {/* Input field for message */}
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
                {/* Displays error message if message field is empty */}
                {errors.message && <span className="text-danger">*</span>}
                {errors.message && <span className="text-danger ml-1">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* Displays success message if form submits successfully */}
            {showSuccess && <p className="mt-3 text-success">Form submitted successfully!</p>}
        </form>
    );
}