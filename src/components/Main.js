

function Main() {
    return (
        <div className="main_page">
            <div className="main_text">
                <div className="first_text">
                    <div className="big_text">Pilates Retreats</div>
                    <div className="big_text info_text">*В Январе скидка 10%</div>
                </div>
                <div className="second_text">
                    <div className="text_span">Приглашаем</div>
                    <div>вас окунуться в волшебный мир</div>
                    <div>жественности и гармонии</div>
                    <div>на нашей новой трехдневной программе</div>
                    <div className="text_span">"Femme Fatale"</div>
                </div>
                <div className="third_text">
                    <div>Январь 24-25-26</div>
                    {/*<div>*осталось 3 места</div>*/}
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
