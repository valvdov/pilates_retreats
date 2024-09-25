function BookingForm() {
    return (
        <div className="booking_page">
            <h1 className="form_title">Оплата 100%</h1>
            <p className="form_description">
                После бронирования инструкция по транспорту будет выслана на email
            </p>

            <form className="booking_form">
                <div className="form_group">
                    <label htmlFor="name">ФИО</label>
                    <input type="text" id="name" name="name" placeholder="Введите ваше ФИО" required />
                </div>

                <div className="form_group">
                    <label htmlFor="phone">Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder="Введите ваш телефон" required />
                </div>

                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Введите ваш email" required />
                </div>

                <button type="submit" className="submit_button">Забронировать</button>
            </form>
        </div>
    );
}

export default BookingForm;