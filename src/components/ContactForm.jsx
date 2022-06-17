const ContactForm = (props) => {  

    return(
        <form>
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" />
            <label htmlFor="message">Message</label>
            <textarea name="body"></textarea>
            <button 
                className="mail-button"
                data-action='submit'>Submit
            </button>
        </form>
    );
} 

export default ContactForm;         