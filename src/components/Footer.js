import { FaPhoneAlt, FaEnvelope, } from 'react-icons/fa'; // Import icons

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_contact">
                    <h3>Контактная информация</h3>
                    <p><FaPhoneAlt /> +447340684330 Лана</p>
                    <p><FaPhoneAlt /> +447852964015 Наталия</p>
                    <p><FaEnvelope /> lanatalebzadeh@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;