# گفتگوهای دشوار (راهنمای آموزشی فارسی)

سایت استاتیک آموزشی با [Just the Docs](https://just-the-docs.github.io/just-the-docs/) برای یادگیری مهارت گفتگوهای دشوار.

این مخزن **ترجمهٔ کامل کتاب** نیست؛ یک جزوهٔ کاربردی فارسی بر اساس چارچوب *Difficult Conversations* (Stone / Patton / Heen) است.

## پیش‌نمایش محلی

نیازمندی: Ruby 3.x و Bundler (روی macOS با Homebrew معمولاً `PATH="/usr/local/opt/ruby/bin:$PATH"`)

```bash
bundle install
bundle exec jekyll serve
```

سپس به آدرس [http://localhost:4000](http://localhost:4000) بروید.

اگر بیلد به‌خاطر `sass-embedded` و نسخهٔ macOS خطا داد، همان پین داخل `Gemfile` را نگه دارید.

## انتشار روی GitHub Pages

1. مخزن را روی GitHub بسازید/پوش کنید (شاخهٔ `main`).
2. از **Settings → Pages → Build and deployment → Source** گزینهٔ **GitHub Actions** را انتخاب کنید.
3. ورک‌فلو `.github/workflows/pages.yml` با هر push بیلد و دیپلوی می‌کند.

### دامنهٔ اختصاصی

فایل `CNAME` روی `difficult-conversations.sabramooz.ir` تنظیم شده است.

1. در DNS یک رکورد مناسب به GitHub Pages بسازید.
2. در Settings → Pages دامنه را تأیید کنید.
3. اگر به‌جای دامنهٔ اختصاصی از `sabramooz.github.io/difficult-conversations` استفاده می‌کنید، در `_config.yml` مقدار `url` / `baseurl` را مطابق مسیر GitHub تنظیم و `CNAME` را حذف کنید.

## ساختار محتوا

- `index.md` — صفحهٔ خانه و نقشهٔ راه
- `chapters/` — راهنمای آموزشی هر فصل
- `_sass/custom/custom.scss` — RTL و فونت Vazirmatn
- `_config.yml` — تنظیمات Just the Docs

## ویرایش فصل‌ها

هر فایل Markdown در `chapters/` با front matter مثل این شروع می‌شود:

```yaml
---
title: عنوان فصل
layout: default
nav_order: 3
permalink: /chapters/....html
---
```

`nav_order` ترتیب سایدبار را مشخص می‌کند.

## فایل PDF

PDF کتاب عمداً در `.gitignore` است و نباید به مخزن اضافه شود.
