import styles from "./page.module.css"

const page = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Политика конфиденциальности</h1>
            <h2>Введение</h2>
            <p>
                Ваше право на конфиденциальность имеет первостепенное значение для нас. В настоящей Политике
                конфиденциальности описываются способы сбора, использования и защиты ваших данных при использовании
                нашего приложения для доставки еды (далее &quot;Сервис&quot;).
            </p>
            <h2>1. Какие данные мы собираем</h2>

            <h3>1.1. Личные данные</h3>
            <p>Мы можем собирать личные данные, такие как:</p>
            <ul>
                <li>Имя и фамилия;</li>
                <li>Адрес доставки;</li>
                <li>Адрес электронной почты;</li>
                <li>Номер телефона;</li>
                <li>Информация о заказах (например, состав заказа и предпочтения);</li>
                <li>Любая другая информация, предоставленная вами добровольно.</li>
            </ul>

            <h3>1.2. Неперсональные данные</h3>
            <p>Мы также можем собирать неперсональные данные, такие как:</p>
            <ul>
                <li>IP-адрес;</li>
                <li>Тип устройства и операционной системы;</li>
                <li>История использования приложения (например, частота заказов, популярные блюда);</li>
                <li>Поведенческие данные (например, клики и взаимодействия).</li>
            </ul>

            <h2>2. Как мы используем ваши данные</h2>
            <p>Мы используем собранные данные для следующих целей:</p>
            <ul>
                <li>Предоставление услуг по доставке еды;</li>
                <li>Улучшение работы Сервиса;</li>
                <li>Обработка и выполнение ваших заказов;</li>
                <li>Информирование о статусе заказа;</li>
                <li>Обеспечение поддержки клиентов;</li>
                <li>Анализ и улучшение пользовательского опыта;</li>
                <li>Отправка специальных предложений, скидок и новостей (с вашего согласия).</li>
            </ul>

            <h2>3. Раскрытие данных третьим лицам</h2>
            <p>Мы не продаем и не передаем ваши личные данные третьим лицам, за исключением следующих случаев:</p>
            <ul>
                <li>Если это требуется по закону;</li>
                <li>Для предоставления услуг, связанных с нашим Сервисом (например, курьеры, платежные системы);</li>
                <li>С вашего согласия.</li>
            </ul>

            <h2>4. Хранение данных</h2>
            <p>
                Мы храним ваши данные только в течение необходимого времени для выполнения целей, указанных в данной
                Политике, если иное не предусмотрено законом.
            </p>

            <h2>5. Безопасность данных</h2>
            <p>
                Мы принимаем разумные меры для защиты ваших данных от несанкционированного доступа, утраты, изменения
                или раскрытия. Однако никакие методы передачи данных через интернет или их хранения не могут быть
                гарантированно безопасными.
            </p>

            <h2>6. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul>
                <li>Узнать, какие данные о вас хранятся;</li>
                <li>Исправить или обновить свои данные;</li>
                <li>Удалить свои данные (в пределах закона);</li>
                <li>Отозвать согласие на обработку данных.</li>
            </ul>

            <h2>7. Файлы cookie</h2>
            <p>
                Мы используем файлы cookie для улучшения работы нашего Сервиса. Вы можете управлять настройками cookie
                через настройки своего браузера.
            </p>

            <h2>8. Обновления политики конфиденциальности</h2>
            <p>
                Мы можем обновлять настоящую Политику конфиденциальности. Все изменения вступают в силу с момента
                публикации новой версии в приложении.
            </p>

            <h2>Контакты</h2>
            <p>Если у вас есть вопросы или замечания, свяжитесь с нами:</p>
            <ul>
                <li>Электронная почта: <a href="mailto:info@hotydogysite.uz">info@hotydogysite.uz</a></li>
                <li>Телефон: <a href="tel:+998908091414">+998(90)-809-14-14</a></li>
            </ul>

            <p>Мы благодарим вас за доверие и стремимся обеспечить максимальную защиту ваших данных.</p>
        </div>
    )
}

export default page