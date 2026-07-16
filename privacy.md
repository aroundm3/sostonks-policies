---
layout: legal
lang: en
doc: privacy
title: Privacy Policy
permalink: /privacy/
last_updated: "July 16, 2026"
---

# Privacy Policy
{: .doc-title}

**Last Updated: July 16, 2026**
{: .doc-meta}

## On this page
{: .toc-heading}

- [1. Introduction](#introduction)
- [2. Information We Collect](#information-we-collect)
- [3. Data Storage and Security](#data-storage-and-security)
- [4. iCloud Sync](#icloud-sync)
- [5. Third-Party Data Sources](#third-party-services)
- [6. In-App Purchases](#in-app-purchases)
- [7. Advertising](#advertising)
- [8. Analytics and Tracking](#analytics-and-tracking)
- [9. Children's Privacy](#childrens-privacy)
- [10. Your Rights and Choices](#your-rights)
- [11. Data Retention](#data-retention)
- [12. Changes to This Policy](#changes-to-this-policy)
- [13. Contact Us](#contact-us)
{: .toc-list}

## 1. Introduction
{: #introduction}

SoStonks ("**SoStonks**," "**we**," "**our**," or "**us**") is a strategy backtesting, chart analysis, and playback simulation tool for iOS and iPadOS. This Privacy Policy explains what information the app handles, how it is stored, and the choices available to you.

SoStonks is built around a simple principle: **your trading strategies, backtests, and market analysis stay on your device.** We do not operate a backend server, and we do not maintain user accounts.

By using SoStonks, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use the app.

## 2. Information We Collect
{: #information-we-collect}

**We do not collect, transmit, or have access to any personal information you enter into the app.**

The following content is created and stored entirely by you, on your own device:

- Trading strategies and rule sets you build
- Backtest results and performance reports
- Chart layouts, indicator settings, and theme preferences
- Symbol watchlists and imported/exported strategy files (e.g. Pine Script)
- Playback sessions and simulation history

We do not require you to create an account, and we never ask for your name, email address, or payment details directly — those are handled by Apple (see [Section 6](#in-app-purchases)).

## 3. Data Storage and Security
{: #data-storage-and-security}

- All app data is stored **locally on your device** in a private, sandboxed database.
- SoStonks does not operate any servers that store, process, or have access to your strategies, backtests, or watchlists.
- We cannot see, back up, or recover your data — if you delete the app without an iCloud backup enabled, your local data is deleted with it.
- The app requests only the device permissions it needs to function: local file access (to import/export strategy files, e.g. Pine Script) and clipboard access (to copy/paste symbols, rules, or exported code). You can review or revoke these at any time in your device's Settings.

## 4. iCloud Sync
{: #icloud-sync}

SoStonks can optionally sync your strategies and backtest history across your own devices using **iCloud Drive** (Apple's ubiquity container service), the same mechanism apps like Notes use.

- iCloud sync is **on by default** on a fresh install, but only becomes active if you are signed into iCloud and have iCloud Drive enabled at the system level for SoStonks.
- You can turn sync off at any time in **SoStonks → Settings → Cloud Sync**, which forces the app back to device-only storage.
- When sync is active, your data is transmitted through Apple's iCloud infrastructure and is subject to [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). SoStonks itself never receives a copy of this data — it moves directly between your devices and Apple's iCloud service.

## 5. Third-Party Data Sources
{: #third-party-services}

SoStonks fetches **publicly available market data** from the following providers, strictly for the purpose of retrieving prices and chart data:

| Provider | Purpose | Data sent |
|---|---|---|
| Binance API | Cryptocurrency price and candle data | None of your personal data — only the symbol/timeframe you request |
| Yahoo Finance | Stock, ETF, and commodity price data | None of your personal data — only the symbol/timeframe you request |
| Apple StoreKit | Processing in-app purchases | Handled entirely by Apple — see [Section 6](#in-app-purchases) |

These requests only carry the information needed to fetch chart data (e.g. "AAPL, daily candles"). We do not attach any identifier that could link a request back to you personally, and we do not control how these third parties handle standard network-level information (such as IP address) they may log as part of normal API operation. We recommend reviewing [Binance's Privacy Policy](https://www.binance.com/en/privacy) and [Yahoo's Privacy Policy](https://legal.yahoo.com/us/en/yahoo/privacy/index.html) for details on their own data practices.

## 6. In-App Purchases
{: #in-app-purchases}

SoStonks offers a single, non-consumable in-app purchase — **"Pro"** — which permanently unlocks Intrabar Playback, the Price Action / SMC toolkit, and removes ads on that Apple ID, across all your devices.

- Payment is processed entirely by **Apple, via StoreKit 2**. We never see or store your card details, billing address, or Apple ID.
- Your purchase is verified on-device using Apple's signed transaction receipts. A record that "Pro is unlocked" is kept **locally on your device only** — we do not operate a server that records who has purchased what.
- Restoring a previous purchase is handled by Apple's App Store sync (`AppStore.sync()`); no SoStonks-controlled account or login is involved.
- Refunds, billing disputes, and subscription management (if applicable in the future) are handled exclusively through Apple, at [reportaproblem.apple.com](https://reportaproblem.apple.com).

## 7. Advertising
{: #advertising}

To keep the free version of SoStonks available at no cost, we may show interstitial ads served by **Google AdMob** to users who have not purchased Pro. **Ads are permanently removed the moment you purchase Pro**, on every device signed into that Apple ID.

When advertising is active in the app:

- On iOS, the App Tracking Transparency (ATT) framework will prompt you before any ad-related data is used to track you across other companies' apps or websites. You can allow or deny this at any time from your device's **Settings → Privacy & Security → Tracking**.
- If you deny tracking (or on platforms where ATT does not apply), ads are served using only non-personalized, contextual signals rather than your advertising identifier.
- AdMob may process device- and ad-interaction-level data (such as your advertising identifier, approximate location, and ad engagement) to select, deliver, measure, and prevent fraud in ads. This processing is performed by Google, not by SoStonks — see [Google's Privacy Policy](https://policies.google.com/privacy) and [How Google uses data from partner sites/apps](https://policies.google.com/technologies/partner-sites) for details.
- We do not receive, store, or have access to the data Google's ad SDK collects on our behalf.

## 8. Analytics and Tracking
{: #analytics-and-tracking}

Outside of the advertising described in [Section 7](#advertising), SoStonks does not use any analytics, crash-reporting, or attribution SDKs:

- ✅ **No first-party analytics** — we don't track how you use the app.
- ✅ **No crash reporting** — we don't log error or diagnostic data to a server.
- ✅ **No cookies, fingerprinting, or cross-app identifiers** created by SoStonks itself.
- ✅ **No sale of data** — we have no data to sell, and we would not sell it if we did.

## 9. Children's Privacy
{: #childrens-privacy}

SoStonks is not directed at children under 13 (or the equivalent minimum age in your jurisdiction) and we do not knowingly collect personal information from children. Because the app itself collects no personal information on any server we control, this risk is inherently limited; the only exception is third-party advertising described in [Section 7](#advertising), which is subject to Google's own age-appropriate advertising controls.

## 10. Your Rights and Choices
{: #your-rights}

Because your data lives on your device (and optionally in your own iCloud account), you are already in full control of it:

- **Access & export** — open Settings → Data Manager in the app to view, export, or share any strategy or backtest.
- **Deletion** — delete a strategy or backtest from within the app, or uninstall the app to remove all local data. If iCloud sync was enabled, also remove the data from iCloud via **Settings (iOS) → [your name] → iCloud → Manage Account Storage**.
- **Portability** — strategies can be exported as Pine Script or Python at any time; nothing is locked into a proprietary format you can't take with you.
- **Opt out of personalized ads** — deny the App Tracking Transparency prompt, or purchase Pro to remove ads entirely.

If you are located in the EEA, UK, Switzerland, or California and believe we hold personal information about you beyond what is described above, contact us at [Section 13](#contact-us) and we will investigate promptly.

## 11. Data Retention
{: #data-retention}

Since SoStonks does not operate servers that store your content, there is no server-side retention period to disclose. Your strategies, backtests, and settings persist on your device (and your personal iCloud account, if sync is enabled) until you delete them or uninstall the app.

## 12. Changes to This Policy
{: #changes-to-this-policy}

We may update this Privacy Policy from time to time to reflect changes in the app's features, legal requirements, or our practices. Material changes will be reflected by updating the "Last Updated" date at the top of this page. We encourage you to review this page periodically. Continued use of SoStonks after a change becomes effective constitutes acceptance of the revised policy.

## 13. Contact Us
{: #contact-us}

If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Email:** [gnoud17.thng@gmail.com](mailto:gnoud17.thng@gmail.com)
{: .contact-block}
