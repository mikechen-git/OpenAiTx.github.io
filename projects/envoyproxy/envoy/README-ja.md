![Envoy ロゴ](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[クラウドネイティブ高性能エッジ／ミドル／サービスプロキシ](https://www.envoyproxy.io/)

Envoyは[Cloud Native Computing Foundation](https://cncf.io)（CNCF）がホストしています。コンテナ化され、動的にスケジューリングされ、マイクロサービス指向のテクノロジーの進化に関わりたい企業は、CNCFへの参加をご検討ください。参加企業やEnvoyの役割については、CNCFの[アナウンスメント](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/)をご覧ください。

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## ドキュメント

* [公式ドキュメント](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [サンプルドキュメント](https://github.com/envoyproxy/examples/)
* [スレッドモデルについてのブログ](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310)
* [ホットリスタートについてのブログ](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5)
* [統計アーキテクチャについてのブログ](https://medium.com/@mattklein123/envoy-stats-b65c7f363342)
* [ユニバーサルデータプレーンAPIについてのブログ](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a)
* [LyftのEnvoyダッシュボードに関するブログ](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1)

## 関連情報

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): v2 API定義のスタンドアロンリポジトリ。[api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/)のリードオンリーミラーです。
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): パフォーマンステストフレームワーク。
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): 新しいフィルタの追加方法とメインリポジトリへのリンクの例。

## 連絡先

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): アナウンスメントのみを配信する低頻度のメーリングリスト。
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): セキュリティ関連のアナウンスメントのみを配信する低頻度のメーリングリスト。
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): 一般ユーザーのディスカッション。
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Envoy開発者向けディスカッション（API、機能設計等）。
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): すべてのコアEnvoyメンテナに連絡を取るためのリスト。
* [Twitter](https://twitter.com/EnvoyProxy/): Twitterでフォローしてください！
* [Slack](https://envoyproxy.slack.com/): Slackへの招待はこちらから[here](https://communityinviter.com/apps/envoyproxy/envoy)。
  * 注意: Slackでのユーザー質問への対応はベストエフォートです。「確実な」回答が必要な場合は、以下のスレッド記載の指針に従いenvoy-users@にメールしてください。

メールリストの利用については[こちら](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY)のスレッドをご確認ください。

## コントリビューション

Envoyへのコントリビューションは楽しく、モダンなC++は未経験でもそれほど難しくありません。始めるには：

* [コントリビューションガイド](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [初心者向けIssue](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Dockerを使ったビルド／テストクイックスタート](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [開発者ガイド](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Envoyの[開発サポートツールチェーン](https://github.com/envoyproxy/envoy/blob/main/support/README.md)のインストールもご検討ください。これは特にコードレビュー関連の開発プロセス自動化に役立ちます。
* 作業中のIssueについては、重複作業を避けるため必ず事前にお知らせください！

## コミュニティミーティング

Envoyチームは毎月2回、火曜日午前9時（PT）に定例ミーティングを行っています。公開Googleカレンダーは[こちら](https://goo.gl/PkDijT)。議題が[ミーティング議事録](https://goo.gl/5Cergb)に記載されている場合のみ開催されます。どなたでも議事録に議題を追加可能です。メンテナは議題追加を承認するか、議題がなければ予定日の24時間前までにミーティングをキャンセルします。

## セキュリティ

### セキュリティ監査

Envoyセキュリティに関して複数の第三者による監査が行われています：
* 2018年にCure53がセキュリティ監査を実施し、[完全なレポート](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf)が公開されています。
* 2021年にAda Logicsがファジングインフラストラクチャの監査と改善提案を実施し、[完全なレポート](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf)が公開されています。

### セキュリティ脆弱性の報告

Envoyに脆弱性またはその可能性を発見された場合は、[envoy-security](mailto:envoy-security@googlegroups.com)までご連絡ください。ご報告いただいた内容を確認後、受付メールをお送りし、問題の特定ができた際には追加でご連絡いたします。

詳細は[セキュリティリリースプロセス](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md)をご覧ください。

### ppc64leビルド

ppc64leアーキテクチャまたはaws-lcを使用したビルドは、envoyセキュリティポリシーの対象外です。ppc64leアーキテクチャは現状ベストエフォートであり、Envoyメンテナによる保守は行われていません。

## リリース

詳細は[リリースプロセス](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md)をご覧ください。


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---