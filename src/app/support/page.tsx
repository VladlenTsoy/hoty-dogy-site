"use client"

import React, {useState} from "react"
import styles from "./page.module.css"

const SupportPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Логика отправки данных (например, API вызов или отправка email)
        alert("Сообщение отправлено")
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Служба поддержки</h1>

            <section className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Связаться с нами</h2>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="message">Сообщение</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit" className={styles.submitButton}>
                        Отправить
                    </button>
                </form>
            </section>

            <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
                <div className={styles.faqItem}>
                    <h3>Как удалить аккаунт?</h3>
                    <p>
                        Если вы хотите удалить свой аккаунт, посетите{" "}
                        <a href="/account-deletion">страницу удаления аккаунта</a> и следуйте инструкциям.
                    </p>
                </div>
                <div className={styles.faqItem}>
                    <h3>Где можно ознакомиться с политикой конфиденциальности?</h3>
                    <p>
                        Политика конфиденциальности доступна на <a href="/privacy">этой странице</a>.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default SupportPage
