import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <div className='m-5'>
            <h2>Leave Me a Message</h2>
            <ContactForm />
            <div className='text-center'>
                <p>I can also be contacted at:</p>
                <a style={{ color: '#0077b6'}} href="mailto:jared.woodcock@yahoo.com">jared.woodcock@yahoo.com</a>
            </div>
        </div>
    );
};