![Envoy Logo](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Cloud-native, leistungsstarker Edge-/Middle-/Service-Proxy](https://www.envoyproxy.io/)

Envoy wird von der [Cloud Native Computing Foundation](https://cncf.io) (CNCF) gehostet. Wenn Sie ein
Unternehmen sind, das die Entwicklung von containerisierten, dynamisch bereitgestellten und
microservices-orientierten Technologien mitgestalten möchte, sollten Sie der CNCF beitreten.
Details darüber, wer beteiligt ist und welche Rolle Envoy spielt, finden Sie in der CNCF
[Ankündigung](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/).

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Dokumentation

* [Offizielle Dokumentation](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Beispiel-Dokumentation](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) über das Threading-Modell
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) über Hot Restart
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) über die Stats-Architektur
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) über die Universal Data Plane API
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) über Lyfts Envoy Dashboards

## Verwandtes

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): v2 API-Definitionen als eigenständiges
  Repository. Dies ist ein schreibgeschützter Mirror von [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Performance-Test-Framework.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Beispiel, wie man neue Filter hinzufügt
  und mit dem Hauptrepository verlinkt.

## Kontakt

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Mailingliste mit niedriger Frequenz,
  auf der wir nur Ankündigungen per E-Mail versenden.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Mailingliste mit niedriger Frequenz,
  auf der wir nur sicherheitsrelevante Ankündigungen per E-Mail versenden.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Allgemeine Nutzerdiskussion.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Diskussionen unter Envoy-Entwicklern (APIs,
  Feature-Design, usw.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Diese Liste verwenden,
  um alle Kernentwickler von Envoy zu erreichen.
* [Twitter](https://twitter.com/EnvoyProxy/): Folgen Sie uns auf Twitter!
* [Slack](https://envoyproxy.slack.com/): Slack, um eingeladen zu werden, gehen Sie [hierhin](https://communityinviter.com/apps/envoyproxy/envoy).
  * HINWEIS: Antworten auf Nutzerfragen erfolgen im Slack nach bestem Bemühen. Für eine „garantierte“ Antwort
    senden Sie bitte eine E-Mail an envoy-users@ entsprechend der Anleitung im folgenden verlinkten Thread.

Bitte lesen Sie [diesen](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) E-Mail-Thread
für Informationen zur Nutzung der E-Mail-Listen.

## Mitmachen

Die Mitarbeit an Envoy macht Spaß und modernes C++ ist viel weniger beängstigend, als Sie vielleicht denken, auch ohne Vorerfahrung.
Um loszulegen:

* [Beitragsleitfaden](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Einsteiger-Issues](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Build/Test Schnellstart mit Docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Entwicklerleitfaden](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Erwägen Sie die Installation der Envoy [Entwicklungs-Toolchain](https://github.com/envoyproxy/envoy/blob/main/support/README.md), die Teile des Entwicklungsprozesses, insbesondere im Bereich Code-Review, automatisiert.
* Bitte informieren Sie uns, wenn Sie an einem Issue arbeiten, damit keine Doppelarbeit entsteht!

## Community-Meeting

Das Envoy-Team hat zweimal im Monat dienstags um 9 Uhr PT eine geplante Meetingzeit. Der öffentliche
Google-Kalender ist [hier](https://goo.gl/PkDijT) zu finden. Das Meeting findet nur statt,
wenn im [Protokoll](https://goo.gl/5Cergb) Tagesordnungspunkte aufgeführt sind. Jedes Community-Mitglied
kann Tagesordnungspunkte vorschlagen, indem es sie ins Protokoll einträgt. Die Maintainer bestätigen
entweder die Ergänzungen oder sagen das Meeting spätestens 24 Stunden vor dem geplanten Termin ab,
falls keine bestätigte Agenda vorliegt.

## Sicherheit

### Sicherheitsaudit

Es gab mehrere unabhängige Prüfungen, die sich auf die Sicherheit von Envoy konzentrierten:
* 2018 führte Cure53 ein Sicherheitsaudit durch, [vollständiger Bericht](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* 2021 führte Ada Logics ein Audit unserer Fuzzing-Infrastruktur mit Verbesserungsempfehlungen durch, [vollständiger Bericht](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Melden von Sicherheitslücken

Wenn Sie eine Schwachstelle oder potenzielle Schwachstelle in Envoy gefunden haben, informieren Sie uns bitte unter
[envoy-security](mailto:envoy-security@googlegroups.com). Wir senden Ihnen eine Bestätigungs-E-Mail,
um Ihren Bericht zu bestätigen, und eine weitere E-Mail, sobald wir das Problem positiv oder negativ identifiziert haben.

Weitere Details finden Sie in unserem vollständigen [Sicherheitsfreigabeprozess](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md).

### ppc64le Builds

Builds für die ppc64le-Architektur oder mit aws-lc sind nicht durch die Envoy-Sicherheitsrichtlinie abgedeckt.
Die ppc64le-Architektur wird derzeit nach bestem Bemühen und nicht von den Envoy-Maintainern gepflegt.

## Releases

Weitere Details finden Sie in unserem [Release-Prozess](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md).


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---