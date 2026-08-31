# CLAUDE.md

## Обзор проекта

Персональный сайт-портфолио на Vue 2. Форк шаблона [hrishikeshpaul/portfolio-template](https://github.com/hrishikeshpaul/portfolio-template). Одностраничное приложение (SPA) с секциями: Home, About, Skills, Portfolio, Recommendations, Contact.

## Технологический стек

- **Vue 2** (2.6.11) — фреймворк
- **Vue CLI** (~4.3) — сборка и dev-сервер
- **Vue Router 3** — история браузера, маршруты секций (`/about`, `/skills`, `/portfolio`, `/contact`)
- **AOS** — анимации при скролле
- **vue-parallax-js** — параллакс-эффект
- **vue-scrollto** — плавная прокрутка
- **v-tooltip** — тултипы
- **vue-cookie** — хранение настройки night mode
- **emailjs-com** — отправка писем из формы Contact без бэкенда
- **ESLint** — `plugin:vue/essential` + `eslint:recommended`, парсер `babel-eslint`

## Команды

```bash
npm run serve   # dev-сервер с hot-reload
npm run build   # production-сборка в dist/
npm run lint    # линтинг
```

## Структура файлов

```
info.js                         # ВСЕ персональные данные сайта (главный файл для правок)
config.js                       # Ключи emailjs (в .gitignore, не коммитить!)
public/index.html               # HTML-шаблон
src/main.js                     # Точка входа, регистрация плагинов, роутер
src/App.vue                     # Корневой компонент, night mode, скролл-навигация
src/components/
  Navbar.vue                    # Навбар с переключателем night mode
  Home.vue                      # Главный экран (имя, аватар, ссылки)
  About.vue                     # Образование и опыт (использует Timeline.vue)
  Skills.vue                    # Навыки, сгруппированные по категориям
  Portfolio.vue                 # Портфолио-проекты (Card.vue, Modal.vue, Gallery.vue)
  Recommendation.vue            # Рекомендации
  Contact.vue                   # Форма обратной связи через emailjs
  Footer.vue                    # Подвал
  helpers/
    Timeline.vue                # Компонент временной шкалы (образование/опыт)
    Card.vue                    # Карточка проекта
    Modal.vue                   # Модальное окно с деталями проекта
    Gallery.vue                 # Галерея скриншотов
    Carousel.vue                # Карусель изображений
    DesignModal.vue             # Модалка для дизайн-проектов
    Logo.vue                    # Логотип
    Snackbar.vue                # Уведомление (используется в Contact)
    Wave.vue                    # SVG-волна (декоративный разделитель)
src/assets/
  potrait.jpg / potrait.svg     # Фото/аватар
  logo.png                      # Логотип
  pdfs/Resume.pdf               # Резюме
  portfolio/                    # Скриншоты проектов (по папкам)
  designs/                      # Дизайн-проекты (по папкам)
```

## Как редактировать контент

**Весь контент сайта хранится в `info.js`** в корне проекта. Структура объекта:

| Ключ | Содержимое |
|---|---|
| `name`, `logo_name` | Имя и сокращение для логотипа |
| `flat_picture` | Путь к портрету |
| `config.use_cookies` | Сохранять ли night mode в cookie |
| `config.navbar.blur` | Размытие фона навбара |
| `description` | Текст-представление (поддерживает `<br>`) |
| `links` | LinkedIn, GitHub, AngelList, Resume |
| `education[]` | Образование (name, place, date, degree, gpa, description, skills) |
| `experience[]` | Опыт (name, place, date, position, description, skills) |
| `skills[]` | Навыки по группам (title, info[], icon) |
| `portfolio[]` | Проекты (name, pictures[], technologies[], category, date, github, visit, description) |
| `portfolio_design[]` | Дизайн-проекты (аналогичная структура) |
| `recommendations[]` | Рекомендации (title, author, position, company, location) |

Картинки для проектов кладутся в `src/assets/portfolio/<project>/` и подключаются через `require()` в `info.js`.

## Настройка emailjs (Contact-форма)

`config.js` не коммитится (в `.gitignore`). Структура:

```js
let config = {
  emailjs: {
    serviceID: '<serviceID>',    // из Email Services
    templateID: '<templateID>',  // из Email Templates
    userID: '<userID>'           // из Account > API Keys
  }
}
export default config;
```

## Night Mode

Управляется через `App.vue`. Состояние `nightMode` (boolean) передаётся пропом во все дочерние компоненты. Сохраняется в cookie `nightMode` если `info.config.use_cookies = true`. Классы: `text-dark` (светлая тема) / `text-light` (тёмная тема).

## Стилевые соглашения

- Шрифт: `Montserrat` (Google Fonts)
- Цвета: `#669db3ff` (pblue), `#535a5e` (pgray), `#262c30` (bg-dark2)
- Анимации при появлении: атрибут `data-aos` на элементах (инициализируется в `main.js`)
- Скроллбар кастомный: ширина 5px, стиль задан в `App.vue`
