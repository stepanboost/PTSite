# Настройка Netlify для Next.js

## Важные настройки в Netlify Dashboard:

1. **Site settings → Build & deploy → Build settings:**
   - **Build command**: Оставьте пустым (используется из netlify.toml)
   - **Publish directory**: ОСТАВЬТЕ ПУСТЫМ или удалите значение (плагин сам управляет)
   - **Base directory**: Оставьте пустым

2. **Plugins:**
   - Убедитесь, что плагин `@netlify/plugin-nextjs` установлен и активен
   - Если нет - добавьте его в разделе Plugins

3. **Environment variables:**
   - Если нужны переменные окружения, добавьте их в разделе Environment variables

## Что делает плагин:

Плагин `@netlify/plugin-nextjs` автоматически:
- Обрабатывает Next.js сборку
- Настраивает правильный publish directory
- Создает необходимые функции и redirects
- Оптимизирует деплой

## Если сайт не работает:

1. Проверьте логи сборки в Netlify Dashboard
2. Убедитесь, что publish directory ПУСТОЙ в настройках
3. Убедитесь, что плагин Next.js установлен
4. Попробуйте пересобрать сайт (Trigger deploy → Clear cache and deploy site)

