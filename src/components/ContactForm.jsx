const ContactForm = (props) => {
    return(
        <form action="mailto:cliff.duffey@pm.me" method="GET">
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" />
            <label htmlFor="message">Message</label>
            <textarea name="body"></textarea>
            <input className="mail-button" type="submit" value="Send" />
        </form>
    );
} 

export default ContactForm;         