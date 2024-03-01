export default function ContactForm() {
    return (
        <form className="m-5">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea id="message" name="message" className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    );
};