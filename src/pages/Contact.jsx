import ContactForm from "../components/ContactForm";
import IconList from "../components/IconList";

const Contact = () => {
    return(
    <div className="contact-container">
        <div className="page-container">
            <ContactForm />
            <IconList />
        </div>
    </div>
    );
}

export default Contact;