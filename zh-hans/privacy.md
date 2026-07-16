---
layout: legal
lang: zh-hans
doc: privacy
title: 隐私政策
permalink: /zh-hans/privacy/
last_updated: "2026年7月16日"
---

# 隐私政策
{: .doc-title}

**最后更新日期：2026年7月16日**
{: .doc-meta}

## 本页内容
{: .toc-heading}

- [1. 简介](#introduction)
- [2. 我们收集的信息](#information-we-collect)
- [3. 数据存储与安全](#data-storage-and-security)
- [4. iCloud 同步](#icloud-sync)
- [5. 第三方数据来源](#third-party-services)
- [6. 应用内购买](#in-app-purchases)
- [7. 广告](#advertising)
- [8. 分析与追踪](#analytics-and-tracking)
- [9. 儿童隐私](#childrens-privacy)
- [10. 您的权利与选择](#your-rights)
- [11. 数据保留](#data-retention)
- [12. 本政策的变更](#changes-to-this-policy)
- [13. 联系我们](#contact-us)
{: .toc-list}

## 1. 简介
{: #introduction}

SoStonks（以下简称"**SoStonks**"或"**我们**"）是一款适用于 iOS、iPadOS、macOS 和 visionOS 的策略回测、图表分析与回放模拟工具。本隐私政策说明本应用处理哪些信息、如何存储这些信息，以及您可行使的选择。

SoStonks 的设计基于一项简单原则：**您的交易策略、回测结果和市场分析均保留在您的设备本地。** 我们不运营任何后端服务器，也不维护用户账户。

使用 SoStonks 即表示您同意按照本政策所述方式收集和使用相关信息。如果您不同意，请勿使用本应用。

## 2. 我们收集的信息
{: #information-we-collect}

**我们不会收集、传输您在本应用中输入的任何个人信息，也无法访问这些信息。**

以下内容完全由您创建，并存储在您自己的设备上：

- 您构建的交易策略与规则集
- 回测结果与绩效报告
- 图表布局、指标设置与主题偏好
- 代码自选列表以及导入/导出的策略文件（例如 Pine Script）
- 回放会话与模拟历史记录

我们不要求您创建账户，也从不直接向您索取姓名、电子邮件地址或付款信息——这些信息由 Apple 处理（参见[第 6 节](#in-app-purchases)）。

## 3. 数据存储与安全
{: #data-storage-and-security}

- 所有应用数据均以私密的沙盒化数据库形式**存储在您的设备本地**。
- SoStonks 不运营任何用于存储、处理您的策略、回测或自选列表的服务器，也无法访问这些内容。
- 我们无法查看、备份或恢复您的数据——如果您在未启用 iCloud 备份的情况下删除本应用，本地数据也将随之删除。
- 本应用仅请求其正常运行所需的设备权限：本地文件访问权限（用于导入/导出策略文件，例如 Pine Script）以及剪贴板访问权限（用于复制/粘贴代码、规则或导出的代码）。您可以随时在设备的"设置"中查看或撤销这些权限。

## 4. iCloud 同步
{: #icloud-sync}

SoStonks 可选择使用 **iCloud Drive**（Apple 的通用容器服务，与"备忘录"等应用采用的机制相同）在您自己的设备之间同步策略与回测历史记录。

- 全新安装时，iCloud 同步**默认处于开启状态**，但只有在您已登录 iCloud 且在系统层面为 SoStonks 启用了 iCloud Drive 的情况下，该功能才会实际生效。
- 您可以随时在 **SoStonks → 设置 → 云同步** 中关闭同步功能，此后应用将强制恢复为仅设备本地存储模式。
- 同步功能生效时，您的数据会通过 Apple 的 iCloud 基础设施传输，并受 [Apple 隐私政策](https://www.apple.com/legal/privacy/) 约束。SoStonks 本身从不会获得该数据的副本——数据直接在您的设备与 Apple 的 iCloud 服务之间传输。

## 5. 第三方数据来源
{: #third-party-services}

SoStonks 会从以下提供商获取**公开可用的市场数据**，且仅用于获取价格与图表数据：

| 提供商 | 用途 | 发送的数据 |
|---|---|---|
| Binance API | 加密货币价格与 K 线数据 | 不涉及您的任何个人数据——仅发送您请求的代码/时间周期 |
| Yahoo Finance | 股票、ETF 与大宗商品价格数据 | 不涉及您的任何个人数据——仅发送您请求的代码/时间周期 |
| Apple StoreKit | 处理应用内购买 | 完全由 Apple 处理——参见[第 6 节](#in-app-purchases) |

上述请求仅包含获取图表数据所需的信息（例如"AAPL，日线 K 线"）。我们不会附加任何可将请求与您个人身份关联的标识符，也无法控制这些第三方在其正常 API 运行过程中可能记录的标准网络层信息（例如 IP 地址）的处理方式。建议您查阅 [Binance 隐私政策](https://www.binance.com/en/privacy) 和 [Yahoo 隐私政策](https://legal.yahoo.com/us/en/yahoo/privacy/index.html)，以了解其各自的数据处理方式详情。

## 6. 应用内购买
{: #in-app-purchases}

SoStonks 提供单一的非消耗型应用内购买项目——**"Pro"**——购买后将在该 Apple ID 下的所有设备上永久解锁盘中回放（Intrabar Playback）、价格行为（Price Action）/ SMC 工具包，并移除广告。

- 付款完全由 **Apple 通过 StoreKit 2** 处理。我们从不查看或存储您的银行卡信息、账单地址或 Apple ID。
- 您的购买通过 Apple 的签名交易凭证在设备本地进行验证。"Pro 已解锁"的记录**仅保存在您的设备本地**——我们不运营任何记录购买者及购买内容的服务器。
- 恢复以往购买由 Apple 的 App Store 同步机制（`AppStore.sync()`）处理，不涉及任何由 SoStonks 控制的账户或登录流程。
- 退款、账单争议及订阅管理（若日后适用）**均仅通过 Apple** 处理，请访问 [reportaproblem.apple.com](https://reportaproblem.apple.com)。

## 7. 广告
{: #advertising}

为使 SoStonks 的免费版本能够持续免费提供，我们可能会向尚未购买 Pro 的用户展示由 **Google AdMob** 投放的插页式广告。**一旦您购买 Pro，登录该 Apple ID 的所有设备上的广告都将被永久移除。**

当应用内广告功能处于启用状态时：

- 在 iOS 上，App 跟踪透明度（ATT）框架会在任何广告相关数据被用于跨其他公司应用或网站追踪您之前，先向您弹出提示。您可以随时在设备的 **设置 → 隐私与安全性 → 跟踪** 中允许或拒绝此项。
- 如果您拒绝跟踪（或在不适用 ATT 的平台上），系统将仅根据非个性化的场景化信号投放广告，而不会使用您的广告标识符。
- AdMob 可能会处理设备及广告互动层面的数据（例如您的广告标识符、大致位置及广告互动情况），以进行广告选择、投放、效果衡量及反欺诈。此类处理由 **Google** 执行，而非 SoStonks——详情参见 [Google 隐私政策](https://policies.google.com/privacy) 及 [Google 如何使用合作伙伴网站/应用的数据](https://policies.google.com/technologies/partner-sites)。
- 我们不会接收、存储 Google 广告 SDK 代表我们收集的数据，也无法访问这些数据。

## 8. 分析与追踪
{: #analytics-and-tracking}

除[第 7 节](#advertising)所述的广告功能外，SoStonks 不使用任何分析、崩溃报告或归因 SDK：

- ✅ **无自有分析功能**——我们不会追踪您对本应用的使用情况。
- ✅ **无崩溃报告功能**——我们不会将错误或诊断数据记录至任何服务器。
- ✅ **不使用 Cookie、设备指纹或跨应用标识符**——SoStonks 本身不会创建此类内容。
- ✅ **不出售数据**——我们没有可出售的数据，即便有，我们也不会出售。

## 9. 儿童隐私
{: #childrens-privacy}

SoStonks 并非面向 13 周岁以下儿童（或您所在司法辖区规定的同等最低年龄）设计，我们也不会在明知情况下收集儿童的个人信息。由于本应用本身不会在我们控制的任何服务器上收集个人信息，该风险本身即受到内在限制；唯一的例外是[第 7 节](#advertising)所述的第三方广告，该广告受 Google 自身年龄适宜性广告管控措施约束。

## 10. 您的权利与选择
{: #your-rights}

由于您的数据保存在您自己的设备上（如启用同步，也可能保存在您自己的 iCloud 账户中），您本身已对其拥有完全的控制权：

- **访问与导出**——在应用内打开"设置 → 数据管理器"，即可查看、导出或分享任何策略或回测。
- **删除**——在应用内删除某项策略或回测，或卸载应用以移除全部本地数据。如已启用 iCloud 同步，还需通过"设置（iOS）→ [您的姓名] → iCloud → 管理账户存储空间"一并从 iCloud 中移除数据。
- **可携带性**——策略可随时导出为 Pine Script 或 Python 格式；不存在任何将您锁定在专有格式中而无法带走的情况。
- **选择退出个性化广告**——拒绝 App 跟踪透明度提示，或购买 Pro 以彻底移除广告。

如果您位于欧洲经济区（EEA）、英国、瑞士或加利福尼亚州，并且认为我们持有超出上述范围的您的个人信息，请通过[第 13 节](#contact-us)与我们联系，我们将及时进行调查。

## 11. 数据保留
{: #data-retention}

由于 SoStonks 不运营任何存储您内容的服务器，因此不存在需要披露的服务器端数据保留期限。您的策略、回测及设置将持续保存在您的设备上（如启用同步，也保存在您个人的 iCloud 账户中），直至您将其删除或卸载本应用为止。

## 12. 本政策的变更
{: #changes-to-this-policy}

我们可能会不时更新本隐私政策，以反映本应用功能、法律要求或我们数据处理方式的变化。如有重大变更，我们将更新本页顶部的"最后更新日期"。建议您定期查阅本页内容。在变更生效后继续使用 SoStonks，即视为您接受修订后的政策。

## 13. 联系我们
{: #contact-us}

如果您对本隐私政策或我们的数据处理方式有任何问题、疑虑或请求，请通过以下方式与我们联系：

**电子邮件：** [support@sostonks.app](mailto:support@sostonks.app)
{: .contact-block}
