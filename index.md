---
layout: home
lang: en
doc: index
title: SoStonks Legal Center
permalink: /
---

# SoStonks Legal Center
{: .doc-title}

Legal and policy documents for **SoStonks** — a strategy backtesting, chart analysis, and playback simulation app for iOS and iPadOS.
{: .lede}

{% assign privacy_page = site.pages | where: "doc", "privacy" | where: "lang", page.lang | first %}
{% assign terms_page = site.pages | where: "doc", "terms" | where: "lang", page.lang | first %}
<div class="doc-cards" markdown="0">
  <a class="doc-card" href="{{ privacy_page.url | relative_url }}">
    <span class="doc-card-title">Privacy Policy</span>
    <span class="doc-card-desc">What data SoStonks handles, how it's stored, and your choices.</span>
  </a>
  <a class="doc-card" href="{{ terms_page.url | relative_url }}">
    <span class="doc-card-title">Terms of Use</span>
    <span class="doc-card-desc">The rules for using the app, including our trading-risk disclosures.</span>
  </a>
</div>

## About SoStonks

SoStonks is a professional strategy backtesting and technical analysis tool available on:

- iOS
- iPadOS

Learn more at [sostonks.app](https://sostonks.app).

## Support

Questions about these policies or the app itself? Email us at [support@sostonks.app](mailto:support@sostonks.app).
