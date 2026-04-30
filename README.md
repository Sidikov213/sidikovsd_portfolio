# sidikovsd_portfolio — личное портфолио

Личный сайт-портфолио разработчика. Проект показывает мои навыки во frontend-разработке: адаптивная вёрстка, анимации, страницы проектов, контактная форма и аккуратная подача работ.

**Сайт:** [sidikovsd.ru](https://sidikovsd.ru)

---

## Стек

- Next.js
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- Swiper
- React Icons
- Netlify / Vercel deploy

---

## Что реализовано

- главная страница с краткой презентацией;
- страницы «Обо мне», «Услуги/навыки», «Проекты», «Контакты»;
- адаптивная вёрстка под desktop и mobile;
- анимации и переходы через Framer Motion;
- слайдеры проектов и навыков;
- контактная форма;
- подготовка под деплой.

---

## Скриншот

![Портфолио sidikovsd.ru](public/for-readme.png)

---

## Запуск локально

```bash
git clone https://github.com/Sidikov213/sidikovsd_portfolio.git
cd sidikovsd_portfolio
npm install --legacy-peer-deps
npm run dev
```

После запуска сайт будет доступен по адресу:

```text
http://localhost:3000
```

---

## Production build

```bash
npm run build
npm run start
```

---

## Структура проекта

```text
sidikovsd_portfolio/
├── components/        # Компоненты интерфейса
├── pages/             # Страницы Next.js
│   ├── index.jsx
│   ├── about/
│   ├── services/
│   ├── work/
│   ├── testimonials/
│   ├── contact/
│   └── _app.jsx
├── public/            # Статические файлы
├── styles/            # Глобальные стили
├── variants.js        # Анимации Framer Motion
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Проекты, которые показываются в портфолио

| Проект | Описание | Репозиторий |
|---|---|---|
| Hair Lab | Fullstack-система бронирования барбершопа | [GitHub](https://github.com/Sidikov213/Barbershop_hairlab) |
| loyalty_system | Backend-сервис системы лояльности с Bitrix24 | [GitHub](https://github.com/Sidikov213/loyalty_system) |
| url-shortener-service | Микросервис сокращения ссылок | [GitHub](https://github.com/Sidikov213/url-shortener-service) |
| Chat_Stats | Генератор HTML-отчётов по экспортам чатов | [GitHub](https://github.com/Sidikov213/Chat_Stats) |
| Blog App | Блог-приложение с backend и frontend | [GitHub](https://github.com/Sidikov213/blog-app) |

---

## Что можно улучшить дальше

- обновить карточки проектов на сайте под актуальные репозитории;
- добавить реальные скриншоты каждого проекта;
- добавить страницу с подробным описанием backend-проектов;
- подключить аналитику посещений;
- улучшить SEO-метаданные для страниц.

---

## Контакты

- GitHub: [Sidikov213](https://github.com/Sidikov213)
- Telegram: [@sidikovsd](https://t.me/sidikovsd)
- Email: [sodirhonsidikov512@gmail.com](mailto:sodirhonsidikov512@gmail.com)

---

Проект создан как личное портфолио и витрина моих frontend/fullstack-проектов.
