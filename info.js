let info = {
  name: "Kontora",
  logo_name: "ktora",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Разрабатываем веб-приложения и лендинги под ключ. Работаем с нестандартными задачами — от прототипа до продакшена.<br><br>В команде три специалиста: фронтенд-разработчик, бэкенд-разработчик и дизайнер. Каждый проект ведём от брифа до запуска и поддержки. Работаем прозрачно: показываем промежуточные результаты, не пропадаем, сдаём в срок.",
  description_short:
    "Разрабатываем веб-приложения и лендинги под ключ. Берёмся за нестандартные задачи — решаем быстро.",
  links: {
    telegram: "https://t.me/santariver",
    github: "https://github.com/SantaRiver",
    email: "mailto:santariver@yandex.ru",
    phone: "tel:+79170452301"
  },
  education: [
    {
      name: "Паша",
      place: "Контора",
      date: "с 2019",
      degree: "Фронтенд-разработчик · Основатель",
      description:
        "Собрал команду и основал студию в 2019 году. Занимается фронтендом, архитектурой проектов и общением с клиентами.",
      skills: ["Vue.js", "React", "TypeScript", "Figma", "Vite"]
    },
    {
      name: "Миша",
      place: "Контора",
      date: "с 2020",
      degree: "Бэкенд-разработчик",
      description:
        "Отвечает за серверную часть: API, базы данных, интеграции и деплой. Любит чистую архитектуру и автоматизацию.",
      skills: ["Node.js", "PHP", "Laravel", "MySQL", "Docker", "Linux"]
    },
    {
      name: "Хасан",
      place: "Контора",
      date: "с 2021",
      degree: "UI/UX Дизайнер",
      description:
        "Проектирует интерфейсы от вайрфрейма до финального дизайна. Следит за тем, чтобы сайт не просто работал, но и выглядел.",
      skills: ["Figma", "Adobe XD", "UI/UX", "Wireframing", "Брендинг"]
    }
  ],
  experience: [
    {
      name: "Разработка сайтов",
      place: "под ключ",
      date: "2019 — настоящее время",
      position: "Лендинги · Корпоративные сайты · Интернет-магазины",
      description:
        "Разрабатываем сайты любой сложности: от одностраничных лендингов до многостраничных корпоративных порталов с личным кабинетом.",
      skills: ["HTML/CSS", "Vue.js", "WordPress", "Tilda", "SEO"]
    },
    {
      name: "Веб-приложения",
      place: "фронтенд + бэкенд",
      date: "2020 — настоящее время",
      position: "SPA · CRM · Личные кабинеты",
      description:
        "Разрабатываем веб-приложения с нуля: SPA на Vue/React, REST API, интеграции с CRM и платёжными системами.",
      skills: ["Vue.js", "React", "Node.js", "Laravel", "MySQL", "REST API"]
    },
    {
      name: "Поддержка и доработка",
      place: "действующие проекты",
      date: "2019 — настоящее время",
      position: "Доработка · Оптимизация · Хостинг",
      description:
        "Берём на поддержку существующие проекты: доработки, исправление багов, оптимизация скорости, настройка хостинга и CI/CD.",
      skills: ["Git", "Docker", "Nginx", "Linux", "CI/CD"]
    }
  ],
  skills: [
    {
      title: "frontend",
      info: [
        "Vue.js",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SCSS"
      ],
      icon: "fas fa-laptop-code"
    },
    {
      title: "backend",
      info: [
        "Node.js",
        "PHP",
        "Laravel",
        "Python",
        "Express",
        "REST API",
        "GraphQL"
      ],
      icon: "fa fa-server"
    },
    {
      title: "базы данных",
      info: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      icon: "fa fa-database"
    },
    {
      title: "инструменты",
      info: [
        "Git",
        "Docker",
        "Nginx",
        "Linux",
        "Webpack",
        "Vite",
        "Figma",
        "Adobe XD"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "cms & платформы",
      info: ["WordPress", "Bitrix", "Tilda", "Shopify"],
      icon: "fa fa-cubes"
    }
  ],
  portfolio: [
    {
      name: "Степная история",
      pictures: [
        { img: require("./src/assets/portfolio/fest/one.png") }
      ],
      technologies: ["Vue.js", "GSAP", "Node.js", "Nginx"],
      category: "Лендинг · Ивент",
      date: "2024",
      github: "",
      visit: "https://fest.stepiveter.ru/",
      description:
        "Лендинг ежегодного фестиваля еды и напитков «Степная история» в Оренбурге. Продажа билетов онлайн, программа мероприятий, интерактивные анимации. Сайт обслуживает тысячи посетителей в день продаж."
    },
    {
      name: "Entomosphera",
      pictures: [
        { img: require("./src/assets/portfolio/entomo/one.png") }
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3"],
      category: "Интернет-магазин",
      date: "2023",
      github: "",
      visit: "https://entomosphera.com/",
      description:
        "Интернет-магазин для коллекционеров насекомых и жуков. Каталог с фильтрацией, карточки товаров с подробными характеристиками, корзина и оформление заказа. Работает на международную аудиторию."
    },
    {
      name: "Мерч Степь и Ветер",
      pictures: [
        { img: require("./src/assets/portfolio/merch/one.png") }
      ],
      technologies: ["Vue.js", "Node.js", "MySQL", "SDEK API"],
      category: "Интернет-магазин",
      date: "2024",
      github: "",
      visit: "https://merch.stepiveter.ru/catalog",
      description:
        "Магазин мерча для медоварни «Степь и Ветер». Каталог товаров с доставкой СДЭК по всему миру. Интеграция с логистической системой для расчёта стоимости и оформления отправлений."
    },
    {
      name: "Тапрум",
      pictures: [
        { img: require("./src/assets/portfolio/taprum/one.png") }
      ],
      technologies: ["Vue.js", "PHP", "MySQL", "Nginx"],
      category: "Лендинг · Каталог",
      date: "2023",
      github: "",
      visit: "https://xn--80ayiehj.xn--p1ai/",
      description:
        "Сайт крафтовой медоварни «Тапрум»: витрина заведения, каталог мерча (футболки, браслеты, бокалы), информация о мероприятиях и бронирование мест."
    }
  ],
  portfolio_design: [],
  recommendations: [
    {
      title:
        "Команда сделала сайт быстро и качественно. Всё как договаривались — без лишних вопросов и задержек. Уже рекомендовали коллегам.",
      author: "Алексей М.",
      position: "Директор",
      company: "",
      location: "Москва"
    },
    {
      title:
        "Разработали для нас интернет-магазин с нуля. Сроки соблюли, дизайн понравился с первого раза. После запуска сопровождают без вопросов.",
      author: "Марина С.",
      position: "Владелец",
      company: "",
      location: "Санкт-Петербург"
    },
    {
      title:
        "Обращались с задачей доработки старого сайта — взялись, разобрались в чужом коде и сделали всё чисто. Теперь работаем на постоянной основе.",
      author: "Денис К.",
      position: "CTO",
      company: "",
      location: "Екатеринбург"
    }
  ]
};

export default info;
