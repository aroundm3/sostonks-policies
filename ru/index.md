---
layout: home
lang: ru
doc: index
title: Центр юридической информации SoStonks
permalink: /ru/
---

# Центр юридической информации SoStonks
{: .doc-title}

Юридические и политические документы для **SoStonks** — приложения для бэктестинга торговых стратегий, анализа графиков и симуляции воспроизведения для iOS и iPadOS.
{: .lede}

{% assign privacy_page = site.pages | where: "doc", "privacy" | where: "lang", page.lang | first %}
{% assign terms_page = site.pages | where: "doc", "terms" | where: "lang", page.lang | first %}
<div class="doc-cards" markdown="0">
  <a class="doc-card" href="{{ privacy_page.url | relative_url }}">
    <span class="doc-card-title">Политика конфиденциальности</span>
    <span class="doc-card-desc">Какие данные обрабатывает SoStonks, как они хранятся и какой у вас выбор.</span>
  </a>
  <a class="doc-card" href="{{ terms_page.url | relative_url }}">
    <span class="doc-card-title">Условия использования</span>
    <span class="doc-card-desc">Правила использования приложения, включая раскрытие торговых рисков.</span>
  </a>
</div>

## О SoStonks

SoStonks — это профессиональный инструмент для бэктестинга торговых стратегий и технического анализа, доступный на:

- iOS
- iPadOS

Узнайте больше на сайте [sostonks.app](https://sostonks.app).

## Поддержка

Есть вопросы об этих политиках или самом приложении? Напишите нам на [support@sostonks.app](mailto:support@sostonks.app).
