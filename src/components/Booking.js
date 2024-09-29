import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Создаем объект с нужными переменными
        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            reply_to: formData.email
        };

        // Логируем передаваемые данные
        console.log("Отправляемые параметры:", templateParams);

        // Отправка письма через EmailJS
        emailjs.send('Retreat', 'template_ser5vyo', templateParams, 'GUN8TDEFkVgb2t0dW')
            .then((result) => {
                alert("Бронирование успешно! Информация об оплате отправлена на email.");
            }, (error) => {
                alert("Ошибка при отправке. Пожалуйста, попробуйте снова.");
                console.log(error.text);
            });

        // Очистить форму после отправки
        setFormData({
            name: '',
            phone: '',
            email: ''
        });
    };

    return (
        <div className="booking_page">
            <h1 className="form_title">Оплата 100%</h1>
            <p className="form_description">
                После бронирования инструкция по транспортировке будет выслана на email
            </p>

            <form className="booking_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="name">ФИО</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите ваше ФИО"
                        required
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Введите ваш телефон"
                        required
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Введите ваш email"
                        required
                    />
                </div>

                <button type="submit" className="submit_button">Забронировать</button>
            </form>
        </div>
    );
}

export default BookingForm;