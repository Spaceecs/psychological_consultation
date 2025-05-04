import Header from "@/components/Header";
import CertificateCard from "@/components/CertificateCard";
import Footer from "@/components/Footer";

const certificates = [
    {
        title: "Робота психолога під час військового стану",
        image: "/images/robota-psykholoha-pid-chas-viysʹkovoho-stanu.jpg"
    },
    {
        title: "Когнітивно-поведінкова модель у психологічному консультуванні дорослих та дітей",
        image: "/images/kohnityvno-povedinkova-model-u-psykholohichnomu-konsultuvanni-doroslykh-ta-ditey.jpg"
    },
    {
        title: "Психологічна допомога особистості при переживанні травматичного досвіду",
        image: "/images/psykholohichna-dopomoha-osobystosti-pry-perezhyvanni-travmatychnoho-dosvidu.jpg"
    },
    {
        title: "Військова психологія",
        image: "/images/viysʹkova-psykholohiya.jpg"
    },
    {
        title: "Дитяча психологія",
        image: "/images/dytyacha-psykholohiya.jpg"
    },
    {
        title: "Практична психологія в умовах війни",
        image: "/images/praktychna-psykholohiya-v-umovakh-viyny.jpg"
    },
    {
        title: "Курс практичної психології",
        image: "/images/kurs-praktychnoyi-psykholohiyi.jpg"
    },
    {
        title: "Психологічне консультування",
        image: "/images/psykholohichne-konsulʹtuvannya.jpg"
    },
    {
        title: "Про що мовчать у родинах військових та ветеранів",
        image: "/images/pro-shcho-movchatʹ-u-rodynakh-viysʹkovykh-ta-veteraniv.jpg"
    }
];

export default function Home() {
    return (
        <div>
            <Header />
            <div className="image-container">
                <div className="overlay">
                    <h1>Практичний психолог, психотерапевт</h1>
                    <p>Гаврилюк Тетяна Іванівна</p>
                    <p>Громадська організація &quot;Українська асоціація педагогів та психологів&quot;</p>
                </div>
            </div>

            <div className="container">
                <h1>Онлайн - формат</h1>
                <div className="text-container">
                    <p>Формат, який став особливо актуальний у сучасних реаліях.</p>
                    <p>Я можу запропонувати вам для консультацій онлайн формат, він також буде цікавий.</p>
                </div>
            </div>

            <div className="container" id="about">
                <h1>Гаврилюк Тетяна</h1>
                <div className="text-container">
                    <p>Практичний психолог, психотерапевт</p>
                    <p>
                        Я практикуючий психолог, психотерапевт. Магістерський ступінь з практичної психології.
                        Маю 3 роки досвіду як практикуючий психолог. У своїй практиці я використовую перевірені
                        часом і власним досвідом методи терапії, що дають змогу усвідомити причини і глибоко
                        змінити життя.
                    </p>
                </div>

                <div className="collapsible-wrapper mt-6">
                    <details className="cert-details">
                        <summary>
                            Сертифікати <span className="arrow">&#x25BC;</span>
                        </summary>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {certificates.map((cert, i) => (
                                <CertificateCard key={i} title={cert.title} image={cert.image} />
                            ))}
                        </div>
                    </details>
                </div>

                <div className="question-container mt-6">
                    <p>У вас є питання? Звертайтеся прямо зараз.</p>
                    <a href="#contacts" className="mt-2 rounded bg-[#452539] px-4 py-2 text-white">
                        Зв&apos;язатися
                    </a>
                </div>
            </div>

            <div className="container">
                <div className="text-container">
                    <h2 className="section-title">Причини для звернення</h2>
                    <ul className="reason-list">
                        <li className="reason-item">Хронічна тривога</li>
                        <li className="reason-item">Хронічний біль</li>
                        <li className="reason-item">Тривожність</li>
                        <li className="reason-item">Травма та ПТСР</li>
                        <li className="reason-item">Суїцидальні ідеї</li>
                        <li className="reason-item">Стрес</li>
                        <li className="reason-item">Страхи і фобії</li>
                        <li className="reason-item">Розлучення</li>
                        <li className="reason-item">Переживання горя чи втрати</li>
                        <li className="reason-item">Ампутація</li>
                        <li className="reason-item">Залежність</li>
                    </ul>
                </div>
            </div>

            <div className="container-service" id="services">
                <h1>Формат роботи і вартість консультації</h1>
                <div className="text-container">
                    <h1>Консультація Олайн</h1>
                    <p>Онлайн зустріч будь-яким зручним способом.</p>
                    <h2>700 грн</h2>
                </div>
                <div className="text-container">
                    <h1>Пакет з 5 консультацій онлайн</h1>
                    <p>5 зустрічей, 100% передоплата</p>
                    <h2>2800 грн</h2>
                </div>
            </div>

            <div className="container">
                <h1>Чому не варто відкладати своє психічне здоров&apos;я на потім?</h1>
                <div className="question-container mt-6 px-4 py-2">
                    <a href="#contacts" className="mt-2 rounded bg-[#452539] px-4 py-2 text-white">
                        Зв&apos;язатися
                    </a>
                </div>
                <div className="text-container">
                    <p>
                        У нашій культурі &quot;прийнято&quot; роками життя з психологічними проблемами,
                        відкладаючи турботу про себе і своє емоційне здоров&apos;я.
                        Несвоєчасне звернення по допомогу, у 100% випадків веде до погіршення психологічного стану,
                        підвищення тривоги, дратівливістю, невдоволенням життям та навіть фізичним нездужанням.
                    </p>
                    <h3>Знайдіть всього 30 хвилин для себе - запишіться на першу зустріч та отримайте кваліфіковану допомогу вже зараз</h3>
                </div>
            </div>

            <div className="container">
                <h1>Часті запитання</h1>
                <div className="collapsible-wrapper mt-6">
                    <details className="text-details">
                        <summary>
                            Що відбувається під час першої зустрічі?
                            <span className="arrow">&#x25BC;</span>
                        </summary>
                        <div className="text-container">
                            <p>
                                Перша зустріч - це зустріч нашого знайомства.
                                Вона необхідна, щоб краще зрозуміти вас, ваш запит і ваші очікування,
                                відповісти на питання та обговорити умови (терапевтичний контракт) нашої співпраці.
                            </p>
                        </div>
                    </details>

                    <details className="text-details">
                        <summary>
                            Скільки часу триває терапевтична сесія?
                            <span className="arrow">&#x25BC;</span>
                        </summary>
                        <div className="text-container">
                            <p>
                                Зустріч не визначається чітко встановленою тривалістю, а скоріше — ефектом, який досягається в процесі зустрічі.
                            </p>
                            <p>
                                Саме тому, тривалість зустрічі може бути різною, в середньому — 50 хв/сесія, іноді більше.
                            </p>
                        </div>
                    </details>

                    <details className="text-details">
                        <summary>
                            Скільки сесій вам потрібно?
                            <span className="arrow">&#x25BC;</span>
                        </summary>
                        <div className="text-container">
                            <p>
                                Кількість зустрічей спрогнозувати неможливо. Все залежить від запиту який ви для себе визначаєте і вашого бажання.
                            </p>
                            <p>
                                Якщо ви налаштовані на зміни — робота може тривати декілька тижнів і місяців. Якщо ви бажаєте розібратись в конкретній ситуації, яка викликає напруження, то 3–5 зустрічей може бути достатньо.
                            </p>
                            <p>
                                Варто зазначити, що якщо ви бажаєте дійсно глибоких змін, то необхідно розуміти, що швидко навчитися &quot;жити по-новому&quot; — буде складно. Адже буде необхідна систематична терапія. Також ви завжди маєте пам&apos;ятати, що тривалість терапії визначається виключно вами і вашим власним бажанням.
                            </p>
                        </div>
                    </details>

                    <details className="text-details">
                        <summary>
                            Яка має бути частота терапевтичних сесій?
                            <span className="arrow">&#x25BC;</span>
                        </summary>
                        <div className="text-container">
                            <p>
                                Це визначається індивідуально. Мінімальна кількість — один раз на тиждень, але можливо і частіше.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
            <Footer />
        </div>
    );
}
