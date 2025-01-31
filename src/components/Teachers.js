import natalia from '../images/natalia.jpeg'
import lana from '../images/lana.jpeg'
import natali from '../images/natali.jpg'
import natali_new from '../images/natali_new.jpg'

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
                    <img src={natali_new} alt="Наталья" className="coordinator_image" />
                    <h2>Наталья</h2>
                    <p>Организатор</p>
                    <p>Vocal coach</p>
                </div>
            </div>
            <div className="quote_section">
                <blockquote>
                    <ol className="quote_ol">
                            Программа пилатеса “Femme Fatal”: Раскрытие Женственности и Сексуальности.<br />
                            Добро пожаловать в мир Femme Fatal, где каждая тренировка — это шаг к пробуждению вашей внутренней силы и красоты. Каждое занятие этой программы направлено на раскрытие женственности, укрепление здоровья и усиление чувственности.<br/>
                            Позвольте себе погрузиться в пространство, где ваше тело станет источником энергии и вдохновения.
                        <li className="quote_li">
                            <span className="quote_span">Занятие “Сила Внутреннего Очищения” (Тренировка с мячом)</span><br />
                            В этом упражнении мы будем работать с мышцами малого таза — источником нашей внутренней силы и чувственности. Сочетание силы и расслабления позволит вам почувствовать связь с вашим внутренним центром, ощутить себя по-настоящему женщиной.<br/>
                            <span className='quote_span-end'>Цель: укрепление и подвижность глубоких мышц, раскрытие скрытой чувственности и уверенности.</span>
                            </li>

                       <li className="quote_li">
                           <span className="quote_span">Занятие “Чувственное Пробуждение” (Тренировка на роле)</span> <br />
                           Рол станет вашим проводником к внутреннему миру. Прикоснитесь к нему, почувствуйте, как тело расслабляется и открывается, позволяя энергии циркулировать по всем каналам. Мы проработаем каждую зону, начиная от поясницы и заканчивая шейным отделом. Почувствуйте, как в вас просыпается женская природа, как мышцы и нервы начинают дышать с новой силой.<br/>
                           <span className='quote_span-end'>Цель: пробуждение и расслабление тела, улучшение подвижности позвоночника, активация сексуальной энергии.</span>
                       </li>

                        <li className="quote_li">
                            <span className="quote_span">Занятие “Магия Круга” (Тренировка с рингом)</span> <br />
                            Ринг — ваш магический круг, который поможет разбудить самые глубокие женские мышцы с мягким напряжением. Каждое движение с ним усиливает внутренние мышцы и одновременно раскрепощает. Вы научитесь соединять силу и расслабление, пробуждая чувственную природу вашего тела.<br/>
                            <span className='quote_span-end'>Цель: активация и тонизация внутренних мышц, поддержание лёгкости и уверенности.</span>
                        </li>
                        <li className="quote_li">
                            <span className="quote_span">Занятие “Поток Жизни” (Тренировка с массажным мячом)</span><br />
                            Массажный мячик станет вашим верным спутником, стимулируя кровообращение и насыщая мышцы и женские органы кислородом. Вы почувствуете, как каждая клеточка наполняется жизнью и энергией, а глубокие мышцы расслабляются, открывая доступ к новым ощущениям. Это время, чтобы отпустить все заботы и посвятить внимание только себе.<br/>
                            <span className='quote_span-end'>Цель: стимуляция кровообращения, насыщение тканей кислородом, глубокая проработка и расслабление.</span>
                        </li>
                        <li className="quote_li">
                            <span className="quote_span">Занятие “Чарующая Гибкость” (Стрейчинг)</span><br />
                            Финальное занятие этой программы — раскрытие женственности через растяжку. Позвольте своему телу обрести лёгкость, плавность и гибкость, что столь естественны для каждой женщины. Мягкие и элегантные движения помогут обрести правильную осанку, откроют внутреннюю сексуальность и привнесут в каждый день уверенность и гармонию.<br/>
                            <span className='quote_span-end'>Цель: развитие гибкости, гармонизация осанки, активация женственной энергии и сексуальности.</span>
                           </li>
                    </ol>
                    Откройте для себя новый уровень женственности, нежности и силы. Femme Fatal — это ваш путь к глубокому пониманию себя и вашей женской энергии. Пусть каждая тренировка станет шагом к раскрытию истинной магии вашего тела!
                     </blockquote>
            </div>
        </div>
    );
}

export default CoordinatorsPage;