![Envoy Logo](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[云原生高性能边缘/中间/服务代理](https://www.envoyproxy.io/)

Envoy 由 [云原生计算基金会](https://cncf.io)（CNCF）托管。如果您是希望推动容器化、动态调度和面向微服务技术发展的公司，欢迎加入 CNCF。关于参与者详情以及 Envoy 的作用，请阅读 CNCF 的[公告](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/)。

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## 文档

* [官方文档](https://www.envoyproxy.io/)
* [常见问题](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [示例文档](https://github.com/envoyproxy/examples/)
* [线程模型相关博客](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310)
* [热重启相关博客](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5)
* [统计架构相关博客](https://medium.com/@mattklein123/envoy-stats-b65c7f363342)
* [通用数据平面 API 相关博客](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a)
* [Lyft 的 Envoy 仪表盘相关博客](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1)

## 相关项目

* [data-plane-api](https://github.com/envoyproxy/data-plane-api)：v2 API 定义的独立仓库。这是 [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/) 的只读镜像。
* [envoy-perf](https://github.com/envoyproxy/envoy-perf)：性能测试框架。
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example)：展示如何新增过滤器并链接到主仓库的示例。

## 联系方式

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce)：低频邮件列表，仅用于公告。
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce)：低频邮件列表，仅用于发布安全相关公告。
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users)：普通用户讨论。
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev)：Envoy 开发者讨论（API、特性设计等）。
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers)：联系所有核心 Envoy 维护者。
* [Twitter](https://twitter.com/EnvoyProxy/)：在 Twitter 上关注我们！
* [Slack](https://envoyproxy.slack.com/)：Slack，点击[这里](https://communityinviter.com/apps/envoyproxy/envoy)邀请加入。
  * 注意：Slack 上对用户问题的回复仅为尽力而为。如需“保证”回复，请根据下述邮件主题指南发送邮件至 envoy-users@。

有关邮件列表使用的信息，请参见[此邮件主题](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY)。

## 贡献

为 Envoy 做贡献很有趣，而且现代 C++ 比你想象的容易，即使你没有相关经验。入门指南如下：

* [贡献指南](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [新手问题](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [使用 docker 快速构建/测试](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [开发者指南](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* 建议安装 Envoy [开发支持工具链](https://github.com/envoyproxy/envoy/blob/main/support/README.md)，可自动化部分开发流程，尤其是涉及代码审查的环节。
* 请确保在处理某个 issue 时告知我们，以避免重复劳动！

## 社区会议

Envoy 团队每月定期两次（周二上午 9 点 PT）召开会议。公开 Google 日历[在这里](https://goo.gl/PkDijT)。只有当[会议纪要](https://goo.gl/5Cergb)中列出议程时，才会召开会议。社区任何成员都可以通过在会议纪要中添加内容来提议议程。维护者将确认议程的添加，否则会在会议预定时间前 24 小时内取消会议（若无确定议程）。

## 安全

### 安全审计

已经有多次第三方对 Envoy 安全性进行的审计：
* 2018 年 Cure53 进行了安全审计，[完整报告](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf)。
* 2021 年 Ada Logics 对我们的模糊测试基础设施进行了审计并提出改进建议，[完整报告](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf)。

### 漏洞报告

如果你发现了 Envoy 的漏洞或潜在漏洞，请通过 [envoy-security](mailto:envoy-security@googlegroups.com) 联系我们。我们会发送确认邮件，并在明确问题后发送进一步通知。

详情请参阅完整的[安全发布流程](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md)。

### ppc64le 构建

ppc64le 架构或使用 aws-lc 的构建不在 Envoy 安全策略范围内。ppc64le 架构当前仅为尽力支持，未由 Envoy 维护者维护。

## 发布

更多详情请参阅我们的[发布流程](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md)。

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---