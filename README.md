# wishlist-public

Публичная версия приложения "Wishlist": управляй списками желаний и делись ими с другими 🎁

## 🔍 Описание

Это веб-приложение для создания личных wish-листов (списки желаний) с возможностью публиковать их публично. Идеально подходит для праздников, мероприятий или совместных подарков — добавляй товары, отмечай исполненное и делись ссылкой.

## 🏗 Архитектура проекта

```/
├── frontend/ — клиентская часть (React / Vue / Svelte)
├── backend/ — серверная часть (Node.js / Express / или другой фреймворк)
└── README.md — этот файл
```

## 🚀 Быстрый старт

### 1. Клонирование

```bash
git clone https://github.com/Xanaduxan/wishlist-public.git
cd wishlist-public
```

cd frontend
npm install
cd ../backend
npm install

## 🛠 Пример .env файла

```env
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/wishlist
JWT_SECRET=твой_секретный_ключ
FRONTEND_URL=http://localhost:3000
```

```
# запуск backend
cd backend
npm run dev


# в другой вкладке терминала — frontend

# запуск frontend
cd ../frontend
npm run dev
```

<h3 style="color: #0366d6;">🛠 Основные возможности</h3>

- Создание/удаление/изменение wish-листов
- Добавление, удаление и редактирование позиций в списке
- Генерация публичной ссылки — любой может просматривать, даже без аккаунта
- Отмечание позиции как «выполненной» или «купленной»

<h3 style="color: #0366d6;">♻️ Используемые технологии</h3>

- **Frontend**: React
- **Backend**: Node.js + Express
- **База данных**: PostgreSQL
