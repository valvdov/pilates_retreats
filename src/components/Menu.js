import dish1 from '../images/dish1.JPG';
import dish2 from '../images/dish2.jpg';
import dish3 from '../images/dish3.JPG';
import dish4 from '../images/dish4.JPG';
import dish5 from '../images/dish5.JPG';
import dish6 from '../images/dish6.JPG';
import dish7 from '../images/dish7.jpg';
import dish8 from '../images/dish8.jpg';

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
                            <li>Салат из брокколи, киноа, шпинат и авокадо</li>
                            <li>Баклажанная лазанья с помидорами и базиликом</li>
                            <li>Десерт чизкейк с клубникой</li>
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
                            <li>Овсяная каша с киноа, орехами и сухофруктами на кокосовом молоке</li>
                            <li>Тост с авокадо, руколой, маком</li>
                        </ul>
                        <p><strong>Обед:</strong></p>
                        <ul>
                            <li>Суп овощной с ячменной крупой</li>
                            <li>Запеченная цветная капуста с хумусом, гуакомоле</li>
                            <li>Яблочный тарт с лимонным сорбетом</li>
                        </ul>
                        <p><strong>Ужин:</strong></p>
                        <ul>
                            <li>Салат из запеченных груш с тофу и фета сыром</li>
                            <li>Овощи на гриле в медовом соусе с орехами</li>
                            <li>Ягодный пирог</li>
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
                            <li>Тофу десерт с ягодами</li>
                            <li>Тост с омлетом тофу и грибами в сливочном соусе</li>
                        </ul>
                        <p><strong>Обед:</strong></p>
                        <ul>
                            <li>Суп из помидоров с базиликом</li>
                            <li>Запеченная брокколи с песто</li>
                            <li>Тапиока десерт с черникой</li>
                        </ul>
                    </div>
                </div>

                <div className="menu_images">
                    <img src={dish7} alt="Dish 7" />
                    <img src={dish5} alt="Dish 5" />
                    <img src={dish2} alt="Dish 2" />
                    <img src={dish6} alt="Dish 6" />
                    <img src={dish8} alt="Dish 8" />
                    <img src={dish4} alt="Dish 4" />
                    <img src={dish1} alt="Dish 1" />
                    <img src={dish3} alt="Dish 3" />
                </div>
            </div>
        </div>
    );
}

export default RetreatMenu;