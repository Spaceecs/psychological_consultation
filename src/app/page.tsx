import Head from 'next/head';
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
            <Head>
                <link rel="icon" type="image/png" href="/mental-health.png" />
                <title>Гаврилюк Тетяна – Психолог онлайн</title>
                <meta name="description" content="Практичний психолог, психотерапевт. Онлайн-консультації, сертифікати, напрямки роботи, відповіді на поширені запитання." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />

            {/* Головна секція */}
            <div className="image-container">
                <div className="overlay">
                    <h1>Практичний психолог, психотерапевт</h1>
                    <p>Гаврилюк Тетяна Іванівна</p>
                    <p>Громадська організація &quot;Українська асоціація педагогів та психологів&quot;</p>
                </div>
            </div>

            {/* Онлайн формат */}
            <section className="container">
                <h1>Онлайн - формат</h1>
                <div className="text-container">
                    <p>Формат, який став особливо актуальний у сучасних реаліях.</p>
                    <p>Я можу запропонувати вам для консультацій онлайн формат, він також буде цікавий.</p>
                </div>
            </section>

            {/* Про мене + Сертифікати */}
            <section className="container" id="about">
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
            </section>

            {/* Причини звернення */}
            <section className="container">
                <div className="text-container">
                    <h2 className="section-title">Причини для звернення</h2>
                    <ul className="reason-list">
                        <li>Хронічна тривога</li>
                        <li>Хронічний біль</li>
                        <li>Тривожність</li>
                        <li>Травма та ПТСР</li>
                        <li>Суїцидальні ідеї</li>
                        <li>Стрес</li>
                        <li>Страхи і фобії</li>
                        <li>Розлучення</li>
                        <li>Переживання горя чи втрати</li>
                        <li>Ампутація</li>
                        <li>Залежність</li>
                    </ul>
                </div>
            </section>

            {/* Вартість */}
            <section className="container-service" id="services">
                <h1>Формат роботи і вартість консультації</h1>
                <div className="text-container">
                    <h1>Консультація онлайн</h1>
                    <p>Онлайн зустріч будь-яким зручним способом.</p>
                    <h2>700 грн</h2>
                </div>
                <div className="text-container">
                    <h1>Пакет з 5 консультацій онлайн</h1>
                    <p>5 зустрічей, 100% передоплата</p>
                    <h2>2800 грн</h2>
                </div>
            </section>

            {/* Чому не варто відкладати */}
            <section className="container">
                <h1>Чому не варто відкладати своє психічне здоров&apos;я на потім?</h1>
                <div className="question-container mt-6 px-4 py-2">
                    <a href="#contacts" className="mt-2 rounded bg-[#452539] px-4 py-2 text-white">
                        Зв&apos;язатися
                    </a>
                </div>
                <div className="text-container">
                    <p>
                        У нашій культурі &quot;прийнято&quot; роками жити з психологічними проблемами,
                        відкладаючи турботу про себе. Несвоєчасне звернення по допомогу веде до погіршення
                        стану, підвищеної тривоги, дратівливості, незадоволення життям та навіть фізичного нездужання.
                    </p>
                    <h3>Знайдіть всього 30 хвилин для себе — запишіться на першу зустріч</h3>
                </div>
            </section>

            {/* Часті запитання */}
            <section className="container">
                <h1>Часті запитання</h1>
                <div className="collapsible-wrapper mt-6">
                    {[
                        {
                            question: "Що відбувається під час першої зустрічі?",
                            answer: (
                                <>
                                    <p>
                                        Перша зустріч — це зустріч нашого знайомства. Вона потрібна, щоб зрозуміти вас, ваш запит,
                                        відповісти на питання та обговорити умови співпраці.
                                    </p>
                                </>
                            )
                        },
                        {
                            question: "Скільки часу триває терапевтична сесія?",
                            answer: (
                                <>
                                    <p>Зустріч може тривати 50 хвилин або більше, залежно від ходу терапії.</p>
                                </>
                            )
                        },
                        {
                            question: "Скільки сесій вам потрібно?",
                            answer: (
                                <>
                                    <p>Кількість залежить від вашого запиту та цілей. Іноді достатньо 3–5, іноді — кілька місяців.</p>
                                </>
                            )
                        },
                        {
                            question: "Яка має бути частота терапевтичних сесій?",
                            answer: (
                                <>
                                    <p>Мінімум — один раз на тиждень, можливе індивідуальне налаштування.</p>
                                </>
                            )
                        }
                    ].map((faq, i) => (
                        <details key={i} className="text-details">
                            <summary>{faq.question}<span className="arrow">&#x25BC;</span></summary>
                            <div className="text-container">{faq.answer}</div>
                        </details>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
