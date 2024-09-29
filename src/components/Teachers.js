import natalia from '../images/natalia.jpg'
import lana from '../images/lana.jpg'
import natali from '../images/natali.jpg'

function CoordinatorsPage() {
    return (
        <div id="coordinators" className='coordinator_page'>
            <h1 className="page_title">Создатели ретрита</h1>
            <div className="coordinator_section">
                <div className="coordinator_card">
                    <img src={natalia} alt="Наталия" className="coordinator_image" />
                    <h2>Наталья</h2>
                    <p>Инструктор Polestar Pilates</p>
                    <p>Проводник гвоздестояния</p>
                </div>
                <div className="coordinator_card">
                    <img src={lana} alt="Лана" className="coordinator_image" />
                    <h2>Лана</h2>
                    <p>Консультант по здоровому питанию</p>
                    <p>Beauty-специалист</p>
                    <p>Шеф-повар</p>
                </div>
                <div className="coordinator_card">
                    <img src={natali} alt="Наталья" className="coordinator_image" />
                    <h2>Наталья</h2>
                    <p>Организатор</p>
                    <p>Vocal coach</p>
                </div>
            </div>
            <div className="quote_section">
                <blockquote>
                    Наша программа составлена так, чтобы помочь Вашему телу, душе и разуму максимально перезагрузиться и наполниться вдохновением, позитивом и найти внутренний баланс.
                </blockquote>
            </div>
        </div>
    );
}

export default CoordinatorsPage;