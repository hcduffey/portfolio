import { ReCAPTCHA } from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const ContactForm = (props) => {
    const onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }
    
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    
    return(
        <form onSubmit={onSubmit} method="POST">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeNaXYgAAAAAGkpBuXg241nNmporHJZbq2ilNVn"
                onChange={onChange}
            />
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" />
            <label htmlFor="message">Message</label>
            <textarea name="body"></textarea>
            <input className="mail-button" type="submit" value="Send" />
        </form>
    );
} 

export default ContactForm;         