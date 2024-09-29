import { FaPhoneAlt, FaEnvelope, } from 'react-icons/fa'; // Import icons

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_contact">
                    <h3>По всем вопросам обращайтесь</h3>
                    <p>
                        <a href="tel:+447340684330">
                            <FaPhoneAlt/> +447340684330 Лана
                        </a>
                    </p>
                    <p>
                        <a href="tel:+447852964015">
                            <FaPhoneAlt/> +447852964015 Наталия
                        </a>
                    </p>
                    <p>
                        <a href="mailto:lanatalebzadeh@gmail.com">
                            <FaEnvelope/> retreatspilates@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;