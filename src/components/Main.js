

function Main() {
    return (
        <div className="main_page">
            <div className="main_text">
                <div className="first_text">
                    <div className="big_text">Pilates Retreats</div>
                    {/*<div className="big_text info_text">Новая программа</div>*/}
                </div>
                <div className="second_text">
                    <div className="text_span">Приглашаем</div>
                    <div>вас окунуться в волшебный мир</div>
                    <div>жественности и гармонии</div>
                    <div>на нешей новой трехдневной программе</div>
                    <div className="text_span">"Femme Fatale"</div>
                </div>
                <div className="third_text">
                    <div>Январь 10-11-12</div>
                    <div>Февраля 7-8-9</div>
                </div>
            </div>
            <div className="additional_text">
                <p>*в часе езды от Лондона</p>
            </div>
            <div className="main_buttons">
                <a href="#coordinators">
                    <button className="button_main">Узнать подробнее</button>
                </a>
            </div>
        </div>
    );
}

export default Main;
