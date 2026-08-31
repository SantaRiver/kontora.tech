# CLAUDE.md

## Обзор проекта

Персональный сайт-портфолио на Vue 2. Форк шаблона [hrishikeshpaul/portfolio-template](https://github.com/hrishikeshpaul/portfolio-template). Одностраничное приложение (SPA) с секциями: Home, About, Team, Skills, Portfolio, Recommendations, Contact.

## Технологический стек

- **Vue 2** (2.6.11) — фреймворк
- **Vue CLI** (~4.3) — сборка и dev-сервер
- **Vue Router 3** — история браузера, маршруты секций (`/about`, `/team`, `/skills`, `/portfolio`, `/contact`)
- **AOS** — анимации при скролле
- **vue-parallax-js** — параллакс-эффект
- **vue-scrollto** — плавная прокрутка
- **v-tooltip** — тултипы
- **emailjs-com** — отправка писем из формы Contact без бэкенда
- **ESLint** — `plugin:vue/essential` + `eslint:recommended`, парсер `babel-eslint`

## Команды

```bash
npm run serve   # dev-сервер с hot-reload
npm run build   # production-сборка в dist/
npm run lint    # линтинг
npm run deploy  # пуш + деплой на прод (см. "Деплой" ниже)
```

## Деплой

Прод: `root@155.212.170.201`, домен kontora.tech. Сервер обслуживает nginx
(`/etc/nginx/sites-available/kontora.tech`) — root указывает на
`/var/www/kontora.tech/dist`. `/var/www/kontora.tech` на сервере — это тот же
git-репозиторий (origin `github.com/SantaRiver/kontora.tech`), собранный на месте.

**Деплой одной командой:** `npm run deploy` (обёртка над `scripts/deploy.sh`).
Скрипт:
1. Требует чистое дерево (`git status --porcelain` пуст) — коммить перед деплоем.
2. Пушит текущую локальную ветку в `origin/master`.
3. По SSH на сервере: `git fetch` + `git reset --hard origin/master` — **любые
   несохранённые правки прямо на сервере будут затёрты**, там нельзя ничего
   редактировать руками.
4. `npm ci` — но только если `package-lock.json` изменился с прошлого деплоя
   (хэш кешируется в `.deploy_lock_hash` на сервере, туда же не коммитить).
5. `npm run build`, `nginx -t && systemctl reload nginx`.
6. Проверяет `curl https://kontora.tech/` на `HTTP 200`, иначе падает с ошибкой.

**Особенности рантайма сервера** (Node 20, npm 10), из-за которых деплой
раньше падал вручную — теперь зашиты в репозиторий, трогать не нужно:
- `NODE_OPTIONS=--openssl-legacy-provider` в `serve`/`build` в `package.json` —
  webpack 4 (Vue CLI 4) хеширует MD4, который OpenSSL 3 не поддерживает
  (`error:0308010C:digital envelope routines::unsupported`).
- `.npmrc` → `legacy-peer-deps=true` — `vue-selector@0.0.1` требует
  `peer vue@^1.0.26`, конфликтует с реальным `vue@2.6.11`; без флага и
  `npm ci`, и `npm install` падают с `ERESOLVE`.
- `package-lock.json` должен быть в синхроне с `package.json` (регенерировать
  `npm install` локально при добавлении/апдейте зависимостей) — иначе
  `npm ci` на сервере падает с `EUSAGE`.

**PNG в портфолио**: скриншоты `src/assets/portfolio/<project>/*.png` перед
коммитом стоит гонять через `pngquant --quality=65-85 --strip` +
`optipng -o2 -strip all` — экономит ~70-80% без заметной потери качества.
Оптимизировать нужно только реально используемые в `info.js` файлы (проверить
`require()` в `info.js`), в репозитории есть неиспользуемые ассеты старого
шаблона (`clumpr`, `msr`, `post`, `suicide`, `designs/*`), которые в билд не
попадают и трогать их не обязательно.

**Пререндер для краулеров** (`scripts/prerender.js`, `npm run build`'ный
`postbuild`-хук). Сайт — чистый client-side Vue 2 SPA, в исходном HTML только
`<div id="app">`; весь текст появляется после выполнения JS. Google это
переживает нормально, у Яндекса с рендерингом JS исторически похуже, поэтому
после `vue-cli-service build` реальный headless Chrome (puppeteer) открывает
собранный `dist/`, ждёт кастомное событие `render-event` (шлётся из
`main.js` после монтирования Vue — надёжнее фиксированной задержки) и
перезаписывает `dist/index.html` уже готовым, полностью отрендеренным HTML.
JS-бандлы в выдаче остаются — обычный браузер как обычно перерендеривает
поверх, только первый ответ сервера теперь не пустой для краулера.

Сознательно НЕ через `prerender-spa-plugin` — пакет заброшен (`no longer
supported`) и тянет собственный `puppeteer@1.20.0` (2019), несовместимый ни
с одним актуальным Chromium. `scripts/prerender.js` — самостоятельный скрипт
на ~70 строк поверх `puppeteer`, который держим сами.

Одноразовая настройка сервера (уже сделана на проде, но если сервер
пересоздать — понадобится снова):
- `apt-get install -y libnss3 libatk-bridge2.0-0 libgtk-3-0 libasound2t64
  libxss1 libgbm1 unzip` — рантайм-библиотеки для headless Chrome + `unzip`
  (puppeteer распаковывает Chromium через `yauzl`/`unzip`, без него ставит
  архив, но не может его распаковать: `no zip archiver is available`).
- Сам Chromium **не всегда** докачивается автоматически через `npm ci`
  (postinstall у puppeteer на этом сервере не срабатывает сам по себе,
  причина не выяснена — возможно Node 20 при заявленном puppeteer'ом
  минимуме 22.12, но пакет и без него нормально работает) — поэтому
  `deploy.sh` явно вызывает `npx puppeteer browsers install chrome` перед
  билдом на каждом деплое. Если уже скачан — быстрый no-op.

Если пререндер начнёт стабильно падать на сервере — не страшно: `postbuild`
падает уже после того, как `vue-cli-service build` успешно перезаписал
`dist/`, так что сайт всё равно останется рабочим (просто без пререндера на
этот конкретный деплой) — nginx раздаёт файлы с диска сразу, без reload.
Упадёт только сам `deploy.sh` целиком (не дойдёт до финальной проверки).
Быстрый обход — закомментировать строку `"postbuild"` в `package.json`,
задеплоить, разобраться с Chrome на сервере отдельно.

## Структура файлов

```
info.js                         # ВСЕ персональные данные сайта (главный файл для правок)
config.js                       # Ключи emailjs (в .gitignore, не коммитить!)
public/index.html               # HTML-шаблон
src/main.js                     # Точка входа, регистрация плагинов, роутер
src/App.vue                     # Корневой компонент, скролл-навигация
src/components/
  Navbar.vue                    # Навбар
  Home.vue                      # Главный экран (имя, аватар, ссылки)
  About.vue                     # Вехи студии + услуги (использует Timeline.vue)
  Team.vue                      # Команда — карточки с фото, ролью, стеком
  Skills.vue                    # Навыки, сгруппированные по категориям
  Portfolio.vue                 # Портфолио-проекты (Card.vue, Modal.vue, Gallery.vue)
  Recommendation.vue            # Отзывы
  Contact.vue                   # Форма обратной связи через emailjs
  Footer.vue                    # Подвал
  helpers/
    Timeline.vue                # Компонент временной шкалы (вехи/услуги)
    Card.vue                    # Карточка проекта
    Modal.vue                   # Модальное окно с деталями проекта
    Gallery.vue                 # Галерея скриншотов
    Logo.vue                    # Логотип
    Snackbar.vue                # Уведомление (используется в Contact)
    Wave.vue                    # SVG-волна (декоративный разделитель)
    Carousel.vue                # мёртвый код — осиротел, когда убрали
    DesignModal.vue             # вкладку "design" из Portfolio; не импортируются
    CookieConsent.vue           # баннер согласия на cookie/Метрику
src/utils/
  pluralize.js                  # русские склонения по числу (N проект/а/ов)
  analytics.js                  # вся логика Яндекс.Метрики, см. "Аналитика" ниже
src/assets/
  potrait.jpg / potrait.svg     # Фото/аватар
  logo.png                      # Логотип
  pdfs/Resume.pdf               # Резюме
  portfolio/                    # Скриншоты проектов (по папкам)
  designs/                      # Дизайн-проекты (по папкам)
  team/                         # Фото команды
public/
  privacy.html                  # статичная страница про cookie/данные, вне Vue-бандла
  og-image.png                  # картинка для шеринга (1200×630)
  robots.txt, sitemap.xml
```

## Как редактировать контент

**Весь контент сайта хранится в `info.js`** в корне проекта. Структура объекта:

| Ключ | Содержимое |
|---|---|
| `name`, `logo_name` | Имя и полное название для логотипа (`logo_name` рендерится как есть — не сокращать) |
| `flat_picture` | Путь к портрету |
| `config.navbar.blur` | Размытие фона навбара |
| `description` | Текст-представление (поддерживает `<br>`) |
| `links` | telegram, github, email (`mailto:...`), phone (`tel:...`) |
| `milestones[]` | Вехи студии — левая колонка About (name, date, description). Рендерится через `Timeline.vue`, `place`/`degree` необязательны |
| `experience[]` | Услуги — правая колонка About (name, place, date, position, description, skills) |
| `team[]` | Команда: name, role, photo (require), experience (строка "N лет опыта"), education (строка), stack[] |
| `skills[]` | Навыки по группам (title, info[], icon) |
| `portfolio[]` | Проекты (name, pictures[], technologies[], category, date, github, visit, description) |
| `portfolio_design[]` | Не используется в UI (вкладку "design" убрали из Portfolio.vue, т.к. дублировала "development") — оставлен в схеме про запас |
| `recommendations[]` | Отзывы (title, author, position, company, location) — сейчас заглушки, реальных отзывов ещё нет |

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

## Аналитика (Яндекс.Метрика)

Счётчик `112114909`. Вся логика — в `src/utils/analytics.js`, ничего не
зашито статикой в `public/index.html`.

**Gated by cookie-согласием.** Метрика (включая Вебвизор) не грузится вообще,
пока посетитель не нажал «Принять» в баннере `CookieConsent.vue` (снизу
экрана, монтируется в `App.vue`). Согласие — `localStorage`, отказ/закрытие
крестиком — `sessionStorage` (баннер не долбит повторно в рамках сессии, но
и не запоминается навсегда). Проверено вручную: без согласия — ноль запросов
к `mc.yandex.ru`; после «Принять» — счётчик, вебвизор, хиты, все с 200.

**`ssr:true` в `init()`** отключает автоматический хит при загрузке (то же
самое, что официально задокументированный `defer:true`) — рассчитан на
ручные вызовы `hit()`. Сайт — SPA с одним реальным роутом (`/about`, `/team`
и т.п. — это pushState от скролл-навигации в `App.vue`, а не настоящие
переходы), так что `router.afterEach()` в `main.js` — единственное место,
которое видит их все одинаково, включая первую загрузку.

**Цели (JS-события через `reachGoal`)** — код их отправляет, но конверсии в
интерфейсе Метрики появятся только после того, как для каждого идентификатора
вручную заведена цель: Счётчик → Цели → Добавить цель → тип
«JavaScript-событие» → Идентификатор = как в списке:

| Идентификатор | Где стреляет | Параметры |
|---|---|---|
| `contact_form_submit` | Contact.vue, форма успешно отправлена (emailjs `.then`) | — |
| `contact_form_error` | Contact.vue, emailjs вернул ошибку | — |
| `cta_discuss_project` | клик «Обсудить проект» (Home.vue hero и Navbar.vue) | `location: hero \| navbar` |
| `cta_view_work` | клик «Смотреть работы» (Home.vue hero) | — |
| `contact_link_click` | клик telegram/email/phone (Contact.vue), telegram/github/email (Footer.vue) | `channel`, `location: footer` (только в футере) |
| `portfolio_visit_click` | клик «открыть сайт» / название проекта (Modal.vue) | `project` |
| `portfolio_github_click` | клик «github» в модалке проекта (Modal.vue) | `project` |

Добавлять новую цель = дописать `trackGoal("id", params)` в обработчик клика/
события + завести такую же цель в кабинете. `trackGoal()`/`trackHit()` сами
не падают, если Метрика ещё не загружена (нет согласия) — просто no-op.

## Night Mode — убран

Переключатель тёмной/светлой темы был декоративным пережитком старого шаблона:
после редизайна сайт стал полностью тёмным (CSS-переменные в `App.vue` не
имеют светлого варианта), поэтому переключение `nightMode` ничего не красило.
Кнопку и связанную логику (`switchMode`, cookie, `vue-cookie` плагин) убрали.
`nightMode` остался статическим `false`-пропом, который прокидывается вниз по
дереву компонентов (не стали вычищать из каждого компонента — не было смысла),
но реально на что-то влияет только внутри `Modal.vue`, если туда вернуть
условные классы — сейчас там всё захардкожено под тёмную тему через CSS-
переменные. Если понадобится светлая тема — это отдельная задача дизайна, а
не возврат старого переключателя.

## Стилевые соглашения

- Шрифт: `Montserrat` (Google Fonts)
- Цвета: `#669db3ff` (pblue), `#535a5e` (pgray), `#262c30` (bg-dark2)
- Анимации при появлении: атрибут `data-aos` на элементах (инициализируется в `main.js`)
- Скроллбар кастомный: ширина 5px, стиль задан в `App.vue`
