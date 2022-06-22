import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {  
    const _reCaptchaRef = useRef();
    const [captchaValue, updateCaptchaValue] = useState(null);
    const [submitSuccess, updateSubmitSuccess] = useState(null);
    const [submitFail, updateSubmitFail] = useState(null);
    const [submitEnabled, updateSubmitEnabled] = useState(false);
    const [validationError, updateValidationError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        updateSubmitFail(false);
        updateSubmitSuccess(false);
        updateValidationError(false);

        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;
        
        const captcha = captchaValue;

        if(name.length !== 0 && email.length !== 0 && message.length !== 0 ) {
            try {
                let response = await fetch(process.env.REACT_APP_API_URL, 
                    {
                        method: "post",
                        body: JSON.stringify({name: name, email: email, message: message, captcha: captcha})
                    });
                if(response.ok) {
                    updateSubmitSuccess(true);
                    updateSubmitFail(false);
                    updateSubmitEnabled(false);
                    e.target[0].value = ""
                    e.target[1].value = ""
                    e.target[2].value = ""
                }
                else {
                    updateSubmitFail(true);
                    updateSubmitSuccess(false);
                }
            }
            catch(err) {
                updateSubmitFail(true);
                updateSubmitSuccess(false);
            }
        }
        else {
            updateValidationError(true);
        }
    }

    const handleChange = (value) => {
        updateCaptchaValue(value);
        if(value === null) {
            updateSubmitEnabled(false);
        }
        else {
            updateSubmitEnabled(true);
        }
    }

    const handleClick = () => {
        updateSubmitFail(false);
        updateSubmitSuccess(false);
        updateValidationError(false);
    }

    return(
        <>
        <h1 id="contact" className="title">Contact Me</h1>
        {
            submitFail &&
            <div className="notification is-danger">
                <button onClick={handleClick} className="delete"></button>
                There was an error in your contact submission. Maybe try again?
            </div>
        }
        {
            submitSuccess &&
            <div className="notification is-primary">
                <button onClick={handleClick} className="delete"></button>
                Thank you for reaching out! You'll hear back from me soon!
            </div>
        }
        {
            validationError &&
            <div className="notification is-warning">
                <button onClick={handleClick} className="delete"></button>
                Make sure all of the fields are completed.
            </div>
        }
        <form onSubmit={handleSubmit} className="contact-form">
            <input className="input is-medium" name="name" type="text" placeholder="Your name" required />
            <input className="input is-medium" name="email" type="email" placeholder="You e-mail address" required />
            <textarea className="textarea is-medium" name="body" placeholder="Your message for me..."></textarea>
            <ReCAPTCHA
                style={{ display: "block" }}
                theme="light"
                ref={_reCaptchaRef}
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={handleChange}
            />
            {
                submitEnabled ?

                <button
                    className="button is-medium"
                    data-action='submit'>Submit
                </button>

                :

                <button
                    disabled
                    className="button is-medium"
                    data-action='submit'>Submit
                </button>
            }
            
        </form>
        </>
    );
} 

export default ContactForm;         