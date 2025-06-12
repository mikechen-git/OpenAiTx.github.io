![Envoy 標誌](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[雲端原生高效能邊緣/中介/服務代理](https://www.envoyproxy.io/)

Envoy 由 [Cloud Native Computing Foundation](https://cncf.io) (CNCF) 主持。如果您的公司希望參與塑造容器化、動態排程及微服務導向技術的發展，歡迎加入 CNCF。關於參與者以及 Envoy 所扮演角色的更多細節，請閱讀 CNCF 的
[公告](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/)。

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## 文件

* [官方文件](https://www.envoyproxy.io/)
* [常見問題](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [範例文件](https://github.com/envoyproxy/examples/)
* [部落格](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) 關於執行緒模型
* [部落格](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) 關於熱重啟
* [部落格](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) 關於統計架構
* [部落格](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) 關於通用資料平面 API
* [部落格](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) 關於 Lyft 的 Envoy 控制面板

## 相關資源

* [data-plane-api](https://github.com/envoyproxy/data-plane-api)：v2 API 定義的獨立倉庫。這是 [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/) 的唯讀鏡像。
* [envoy-perf](https://github.com/envoyproxy/envoy-perf)：效能測試框架。
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example)：展示如何新增過濾器並鏈接至主倉庫的範例。

## 聯絡方式

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce)：低頻率郵件列表，僅用於發送公告。
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce)：低頻率郵件列表，僅用於發送安全相關公告。
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users)：一般用戶討論。
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev)：Envoy 開發者討論（API、功能設計等）。
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers)：用於聯絡所有 Envoy 核心維護者的郵件列表。
* [Twitter](https://twitter.com/EnvoyProxy/)：在 Twitter 上關注我們！
* [Slack](https://envoyproxy.slack.com/)：加入 Slack，邀請請點擊[這裡](https://communityinviter.com/apps/envoyproxy/envoy)。
  * 注意：在 Slack 上對用戶問題的回應為盡力而為。如需「保證」回覆，請依照下列連結主題中的指引，發信至 envoy-users@。

請參考[這封](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY)郵件主題以瞭解郵件列表的使用說明。

## 貢獻指南

參與 Envoy 的貢獻既有趣又現代，C++ 其實沒你想像的那麼可怕，即使你沒有相關經驗也可以輕鬆上手。開始貢獻：

* [貢獻指南](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [新手議題](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [使用 docker 快速開始建構/測試](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [開發者指南](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* 考慮安裝 Envoy [開發支援工具鏈](https://github.com/envoyproxy/envoy/blob/main/support/README.md)，這有助於自動化部分開發流程，尤其是涉及程式碼審查的部分。
* 請務必告訴我們你正在處理某個議題，以避免重複勞動！

## 社群會議

Envoy 團隊每月兩次於週二上午 9 點（太平洋時間）舉行定期會議。公開的 Google 日曆在[這裡](https://goo.gl/PkDijT)。僅當[會議記錄](https://goo.gl/5Cergb)中有議程項目時，才會舉行會議。社群成員都可以透過補充會議記錄來提出議程項目。維護者將確認議程內容，若在預定會議前 24 小時內未有議程確認，則會取消會議。

## 安全性

### 安全審核

Envoy 已接受多次第三方安全性檢查：
* 2018 年，Cure53 進行了安全審核，[完整報告](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf)。
* 2021 年，Ada Logics 對我們的模糊測試基礎設施進行審查並給出改進建議，[完整報告](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf)。

### 回報安全漏洞

如果您發現了 Envoy 的漏洞或潛在漏洞，請聯絡
[envoy-security](mailto:envoy-security@googlegroups.com)。我們會先發送確認信，並在確認問題後再次通知您。

更多細節請參見我們完整的[安全發布流程](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md)。

### ppc64le 構建

針對 ppc64le 架構或使用 aws-lc 進行的構建，不在 Envoy 安全政策涵蓋範圍內。ppc64le 架構目前僅為盡力支援，Envoy 維護者並未進行維護。

## 發行版本

更多細節請參見我們的[發行流程](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md)。

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---