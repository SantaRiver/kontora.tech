# kontora.tech

Персональный сайт-портфолио. Одностраничное приложение на Vue 2.

[![vue](https://img.shields.io/badge/vue-2.6.11-brightgreen)](https://github.com/vuejs/vue)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## Установка и запуск

**Зависимости:** Node.js, npm, git

```bash
# Установить зависимости
npm install

# Dev-сервер с hot-reload
npm run serve

# Production-сборка в dist/
npm run build

# Линтинг
npm run lint
```

---

## Структура проекта

```
info.js          # Весь контент сайта (имя, опыт, проекты, навыки и т.д.)
config.js        # Ключи emailjs — не коммитить! (в .gitignore)
src/
  main.js        # Точка входа, регистрация плагинов
  App.vue        # Корневой компонент, night mode, навигация
  components/    # Секции сайта и вспомогательные компоненты
  assets/        # Изображения, PDF-резюме
public/          # index.html, favicon
```

Компоненты секций: `Home`, `About`, `Skills`, `Portfolio`, `Recommendation`, `Contact`, `Footer`.

---

## Как обновить контент

Весь контент сайта хранится в одном файле — **`info.js`** в корне проекта.

| Ключ | Что редактировать |
|---|---|
| `name`, `logo_name` | Имя и аббревиатура в логотипе |
| `flat_picture` | Путь к фото (`src/assets/`) |
| `description` | Текст-представление (поддерживает HTML-теги) |
| `links` | LinkedIn, GitHub, AngelList, Resume |
| `education[]` | Образование |
| `experience[]` | Опыт работы |
| `skills[]` | Навыки по категориям |
| `portfolio[]` | Проекты (с галереей скриншотов) |
| `portfolio_design[]` | Дизайн-проекты |
| `recommendations[]` | Рекомендации |

Изображения для проектов кладутся в `src/assets/portfolio/<название>/` и подключаются через `require()` в `info.js`.

---

## Настройка контактной формы (emailjs)

Форма отправляет письма через [emailjs](https://www.emailjs.com/) без бэкенда (200 писем/месяц бесплатно).

1. Зарегистрируйтесь на [emailjs.com](https://www.emailjs.com/) и подключите почтовый сервис (например, Gmail).
2. Создайте шаблон письма с переменными `{{from_name}}`, `{{user_email}}`, `{{{message_html}}}`.
3. Создайте файл `config.js` в корне проекта:

```js
let config = {
  emailjs: {
    serviceID: '<serviceID>',    // Email Services
    templateID: '<templateID>',  // Email Templates
    userID: '<userID>'           // Account > API Keys
  }
}

export default config;
```

`config.js` добавлен в `.gitignore` — не коммитить ключи в репозиторий.

---

## Технологии

- [Vue 2](https://v2.vuejs.org/) + Vue Router + Vue CLI
- [AOS](https://michalsnik.github.io/aos/) — анимации при скролле
- [emailjs-com](https://www.emailjs.com/) — контактная форма
- [v-tooltip](https://v-tooltip.netlify.app/), vue-cookie, vue-parallax-js, vue-scrollto

---

## Лицензия

[MIT](LICENSE)
