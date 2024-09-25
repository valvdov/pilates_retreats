import standard_room from '../images/standard_room.jpg';
import comfort_room from '../images/comfort_room.jpg';
import kitchen from '../images/kitchen.jpg';
import living_room from '../images/living_room.jpg';
import fireplace from '../images/fireplace.jpg';
import bathroom from '../images/bathroom.jpg';
import closet from '../images/closet.jpg';
import spa1 from '../images/spa1.JPG';
import spa2 from '../images/spa2.jpg';
import outside1 from '../images/outside1.JPG';
import outside2 from '../images/outside2.jpg';

function Accommodation() {
    return (
        <div className='accommodation_page'>
            <h1 className="page_title">ПРОЖИВАНИЕ</h1>
            <div className="accommodation_options">
                <div className="option_card">
                    <img src={standard_room} alt="Стандартный номер" className="room_image" />
                    <h2>СТАНДАРТ</h2>
                    <p>Комната с двумя отдельными кроватями</p>
                    <p className="price">&pound;850 per person</p>
                </div>
                <div className="option_card">
                    <img src={comfort_room} alt="Комфорт номер" className="room_image" />
                    <h2>КОМФОРТ</h2>
                    <p>Отдельная комната с кроватью King size</p>
                    <p className="price">&pound;1200 per person</p>
                </div>
            </div>

            <div className="additional_images">
                <img src={kitchen} alt="Кухня" />
                <img src={living_room} alt="Гостиная" />
                <img src={fireplace} alt="Камин" />
                <img src={bathroom} alt="Ванная комната" />
                <img src={spa1} alt="Спа 1" />
                <img src={spa2} alt="Спа 2" />
                <img src={outside1} alt="На улице 1" />
                <img src={outside2} alt="На улице 2" />
            </div>
        </div>
    );
}

export default Accommodation;