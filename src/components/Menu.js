// import dish1 from '../images/dish1.JPG';
// import dish2 from '../images/dish2.jpg';
// import dish3 from '../images/dish3.JPG';
// import dish4 from '../images/dish4.JPG';
// import dish5 from '../images/dish5.JPG';
// import dish6 from '../images/dish6.JPG';
// import dish7 from '../images/dish7.jpg';
// import dish8 from '../images/dish8.jpg';
import dish1 from '../images/winterDishes/dish1.jpg';
import dish2 from '../images/winterDishes/dish2.jpg';
import dish3 from '../images/winterDishes/dish3.jpg';
import dish4 from '../images/winterDishes/dish4.jpg';
import dish5 from '../images/winterDishes/dish5.jpg';
import dish6 from '../images/winterDishes/dish6.jpg';
import dish7 from '../images/winterDishes/dish7.jpg';
import dish8 from '../images/winterDishes/dish8.jpg';

function RetreatMenu() {
    return (
        <div className='menu_page'>
            <h1 className="menu_title">Меню</h1>
            <div className="menu_content">
                <div className="menu_text">
                    <div className="menu_day">
                        <h2>Пятница</h2>
                        <p><strong>Ужин:</strong></p>
                        <ul>
                            <li>Томатный суп с базеликом и фисташками</li>
                            <li>Пряная тыква с лабне и мятой</li>
                            <li>Чиа тарт с манго и кедровыми орехами</li>
                        </ul>
                        <p><strong>Чаепитие:</strong></p>
                        <ul>
                            <li>Зеленый или Ягодный чай</li>
                            <li>Орехи, фрукты, канапе</li>
                        </ul>
                    </div>
                    
                    <div className="menu_day">
                        <h2>Суббота</h2>
                        <p><strong>Завтрак:</strong></p>
                        <ul>
                            <li>Овсяная каша с киноа на кокосовых сливках</li>
                            <li>Авокадо тост с рокетом и лимоном</li>
                        </ul>
                        <p><strong>Обед:</strong></p>
                        <ul>
                            <li>Овощной суп с перловой крупой</li>
                            <li>Запеченый картрфель с шампиньонами и в сливочном соусе</li>
                            <li>Яблочный пирог с лимонным сорбетом</li>
                        </ul>
                        <p><strong>Ужин:</strong></p>
                        <ul>
                            <li>Свежий салат из капусты ,моркови и кедровыми орехами</li>
                            <li>Овощи на гриле</li>
                            <li>Черничное суфле</li>
                        </ul>
                        <p><strong>Чаепитие:</strong></p>
                        <ul>
                            <li>Имбирно-ромашковый чай с медом</li>
                            <li>Канапе</li>
                        </ul>
                    </div>

                    <div className="menu_day">
                        <h2>Воскресенье</h2>
                        <p><strong>Завтрак:</strong></p>
                        <ul>
                            <li>Тофу омлет с луком парей на свежем тосте</li>
                            <li>Тапиока с лесными ягодами</li>
                        </ul>
                        <p><strong>Обед:</strong></p>
                        <ul>
                            <li>Бакложановая лазанья с ореховым соусом</li>
                            <li>Веган оладьи с запечеными грушами и кокосовым соусом</li>
                        </ul>
                        <h3>В ассортименте свежевыжатые соки:</h3>
                        <ul>
                            <li>Яблоко</li>
                            <li>Морковь</li>
                            <li>Сельдирей</li>
                            <li>Имбирь</li>
                        </ul>
                    </div>
                </div>

                <div className="menu_images">
                    <img src={dish6} alt="Dish 6"/>
                    <img src={dish4} alt="Dish 4"/>
                    <img src={dish2} alt="Dish 2"/>
                    <img src={dish7} alt="Dish 7"/>
                    <img src={dish5} alt="Dish 5"/>
                    <img src={dish8} alt="Dish 8"/>
                    <img src={dish1} alt="Dish 1"/>
                    <img src={dish3} alt="Dish 3"/>

                </div>
            </div>
        </div>
    );
}

export default RetreatMenu;