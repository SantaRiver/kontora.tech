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
    linkedin: "",
    github: "https://github.com/SantaRiver",
    angellist: "",
    resume: ""
  },
  education: [
    {
      name: "Kontora",
      place: "Россия",
      date: "2019 — настоящее время",
      degree: "Веб-студия полного цикла",
      description:
        "Основана в 2019 году. Специализируемся на разработке корпоративных сайтов, лендингов и веб-приложений. Работаем с малым и средним бизнесом.",
      skills: ["Vue.js", "React", "Node.js", "PHP", "Laravel"]
    },
    {
      name: "Проектирование и дизайн",
      place: "Figma / Adobe XD",
      date: "с 2019",
      degree: "UI/UX и прототипирование",
      description:
        "Проектируем интерфейсы перед разработкой: wireframes, прототипы, дизайн-система. Согласовываем с клиентом до старта кодинга.",
      skills: ["Figma", "Adobe XD", "Wireframing", "UI/UX"]
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
      name: "Корпоративный портал",
      pictures: [
        { img: require("./src/assets/portfolio/nc/one.png") },
        { img: require("./src/assets/portfolio/nc/two.png") },
        { img: require("./src/assets/portfolio/nc/three.png") }
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "REST API", "Nginx"],
      category: "Веб-приложение",
      date: "2023",
      github: "",
      visit: "",
      description:
        "Корпоративный портал с личным кабинетом для сотрудников, системой документооборота и аналитическим дашбордом. Реализована ролевая модель доступа, интеграция с 1С и экспорт отчётов в Excel."
    },
    {
      name: "Интернет-магазин",
      pictures: [
        { img: require("./src/assets/portfolio/noq/one.png") },
        { img: require("./src/assets/portfolio/noq/two.png") },
        { img: require("./src/assets/portfolio/noq/three.png") }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
      category: "E-commerce",
      date: "2022",
      github: "",
      visit: "",
      description:
        "Интернет-магазин с каталогом товаров, фильтрацией, корзиной и онлайн-оплатой. Подключены: Stripe, ЮKassa, автоматические уведомления покупателям. Скорость загрузки — 90+ по PageSpeed."
    },
    {
      name: "Лендинг для застройщика",
      pictures: [
        { img: require("./src/assets/portfolio/smit/one.png") },
        { img: require("./src/assets/portfolio/smit/two.png") },
        { img: require("./src/assets/portfolio/smit/three.png") }
      ],
      technologies: ["Vue.js", "GSAP", "PHP", "MySQL", "Nginx"],
      category: "Лендинг",
      date: "2023",
      github: "",
      visit: "",
      description:
        "Продающий лендинг жилого комплекса с анимациями, интерактивным выбором квартир на плане этажа и встроенной формой заявки. Интегрирован с AmoCRM. Конверсия выросла на 34% по сравнению с предыдущим сайтом."
    }
  ],
  portfolio_design: [],
  recommendations: [
    {
      title:
        "Команда сделала сайт быстро и качественно. Всё как договаривались — без лишних вопросов и задержек. Уже рекомендовали коллегам.",
      author: "Алексей Миронов",
      position: "Директор",
      company: "СтройГрупп",
      location: "Москва"
    },
    {
      title:
        "Разработали для нас интернет-магазин с нуля. Сроки соблюли, дизайн понравился с первого раза. После запуска сопровождают без вопросов.",
      author: "Марина Соколова",
      position: "Владелец",
      company: "HomeStyle",
      location: "Санкт-Петербург"
    },
    {
      title:
        "Обращались с задачей доработки старого сайта — взялись, разобрались в чужом коде и сделали всё чисто. Теперь работаем на постоянной основе.",
      author: "Денис Ковалёв",
      position: "CTO",
      company: "Логиком",
      location: "Екатеринбург"
    }
  ]
};

export default info;
