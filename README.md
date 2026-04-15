# 🚀 Next.js One-Page Application
 
Современное одностраничное приложение с модульной архитектурой и дизайн-системой.

## ✨ Особенности

- **📱 Одностраничное приложение** - Hero, About, Services, Contact секции
- **🎨 Кастомная дизайн-система** - бирюзовый (#00CEAF) + жёлтый (#FFDF80)
- **🔤 Google Fonts** - Arimo (заголовки) + Heebo (текст)
- **🎭 Анимации** - Framer Motion + shadcn/ui
- **📦 Модульная архитектура** - каждая секция в отдельной папке
- **⚡ TypeScript** - полная типизация
- **🎯 Современный стек** - Next.js 15 + TailwindCSS 4

## 🛠️ Технологии

- [Next.js 15](https://nextjs.org/) - React фреймворк
- [TypeScript](https://www.typescriptlang.org/) - типизация
- [TailwindCSS 4](https://tailwindcss.com/) - стили
- [shadcn/ui](https://ui.shadcn.com/) - компоненты UI
- [Framer Motion](https://www.framer.com/motion/) - анимации
- [Google Fonts](https://fonts.google.com/) - типографика

## 📁 Архитектура

### Модульная структура секций

```
components/sections/
├── hero/              ← Главная секция (100vh)
│   ├── index.tsx      ← Основной компонент
│   ├── hero-form.tsx  ← Форма обратной связи
│   ├── stats-block.tsx ← Блок статистики
│   └── scroll-indicator.tsx ← Индикатор прокрутки
├── about/             ← Секция "О нас"
│   ├── index.tsx
│   ├── team-grid.tsx  ← Сетка команды
│   └── company-stats.tsx ← Статистика компании
├── services/          ← Секция услуг
│   ├── index.tsx
│   ├── service-card.tsx ← Карточка услуги
│   └── pricing-table.tsx ← Таблица тарифов
└── contact/           ← Секция контактов
    ├── index.tsx
    ├── contact-form.tsx ← Форма обратной связи
    └── contact-info.tsx ← Контактная информация
```

### Преимущества модульной архитектуры

- 🔗 **Инкапсуляция** - каждая секция самодостаточна
- 📦 **Переиспользование** - секции можно копировать между проектами
- 🚀 **Масштабируемость** - легко добавлять новые секции
- 🛠️ **Поддержка** - изменения в одной секции не влияют на другие

## 🎨 Дизайн-система

### Цвета

```css
--primary: #00CEAF        /* Бирюзовый - основной */
--accent: #FFDF80         /* Жёлтый - акцент */
--background: #ffffff     /* Белый фон */
--foreground: #000000     /* Чёрный текст */
```

### Типографика

- **Arimo** - заголовки (64px h1, 24px h2)
- **Heebo** - основной текст (20px)

### Готовые классы

```css
/* Цвета */
bg-primary text-primary-foreground
bg-accent text-accent-foreground

/* Шрифты */
font-arimo    /* заголовки */
font-heebo    /* основной текст */
```

## 🚀 Быстрый старт

### Установка

```bash
git clone <repository>
cd next_qa
npm install
```

### Запуск разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### Сборка

```bash
npm run build
npm start
```

## 📝 Как добавить новую секцию

1. **Создать папку секции:**

```bash
mkdir components/sections/portfolio
```

2. **Добавить основной компонент:**

```tsx
// components/sections/portfolio/index.tsx
export function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen">
      {/* Содержимое секции */}
    </section>
  );
}
```

3. **Добавить подкомпоненты:**

```tsx
// components/sections/portfolio/project-card.tsx
export function ProjectCard() {
  /* ... */
}
```

4. **Импортировать в main page:**

```tsx
import { PortfolioSection } from "@/components/sections/portfolio";

// Добавить в JSX
<PortfolioSection />;
```

5. **Добавить в навигацию:**

```tsx
// components/navigation.tsx
{ label: "Портфолио", href: "#portfolio" }
```

## 🎯 shadcn/ui компоненты

### Добавление новых компонентов

```bash
npx shadcn@latest add dialog
npx shadcn@latest add card
npx shadcn@latest add input
```

### Использование

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Кнопка
</Button>;
```

## 📚 Документация

- [ARCHITECTURE.md](./ARCHITECTURE.md) - подробная архитектура
- [SETUP.md](./SETUP.md) - детали настройки

## 📄 Лицензия

MIT
