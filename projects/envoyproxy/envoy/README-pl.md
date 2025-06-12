![Logo Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Natywny dla chmury, wysokowydajny proxy brzegowy/pośredni/usługowy](https://www.envoyproxy.io/)

Envoy jest hostowany przez [Cloud Native Computing Foundation](https://cncf.io) (CNCF). Jeśli jesteś
firmą, która chce mieć wpływ na rozwój technologii opakowanych w kontenery,
dynamicznie harmonogramowanych i zorientowanych na mikroserwisy, rozważ dołączenie do CNCF. Szczegóły dotyczące tego,
kto bierze udział i jaką rolę odgrywa Envoy, znajdziesz w ogłoszeniu CNCF
[announcement](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/).

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Dokumentacja

* [Oficjalna dokumentacja](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Przykładowa dokumentacja](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) o modelu wątkowania
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) o hot restart
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) o architekturze statystyk
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) o uniwersalnym API płaszczyzny danych
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) o dashboardach Envoy w Lyft

## Powiązane

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): definicje API v2 jako osobne
  repozytorium. Jest to tylko do odczytu mirror [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Framework do testowania wydajności.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Przykład dodania nowych filtrów
  i linkowania do głównego repozytorium.

## Kontakt

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Niskoczęstotliwościowa lista mailingowa,
  na którą wysyłamy wyłącznie ogłoszenia.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Niskoczęstotliwościowa lista mailingowa,
  na którą wysyłamy wyłącznie ogłoszenia dotyczące bezpieczeństwa.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Ogólna dyskusja użytkowników.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Dyskusja deweloperów Envoy (API,
  projektowanie funkcji, itp.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Użyj tej listy,
  aby skontaktować się ze wszystkimi głównymi maintainerami Envoy.
* [Twitter](https://twitter.com/EnvoyProxy/): Śledź nas na Twitterze!
* [Slack](https://envoyproxy.slack.com/): Slack, zaproszenie uzyskasz [tutaj](https://communityinviter.com/apps/envoyproxy/envoy).
  * UWAGA: Odpowiedzi na pytania użytkowników na Slacku udzielane są w miarę możliwości. Aby uzyskać "gwarantowaną" odpowiedź, wyślij email na envoy-users@ zgodnie z instrukcją w poniższym wątku.

Zobacz [ten](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) wątek mailowy
w celu uzyskania informacji o korzystaniu z list mailingowych.

## Współtworzenie

Współtworzenie Envoy to dobra zabawa, a nowoczesny C++ jest o wiele mniej straszny, niż może się wydawać, jeśli nie masz wcześniejszego doświadczenia. Aby zacząć:

* [Przewodnik współtwórcy](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Zadania dla początkujących](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Szybki start budowania/testowania z użyciem dockera](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Przewodnik dla dewelopera](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Rozważ zainstalowanie [narzędzi wspierających rozwój Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md), które pomagają zautomatyzować części procesu deweloperskiego, szczególnie te związane z przeglądem kodu.
* Pamiętaj, aby nas poinformować, jeśli pracujesz nad danym zadaniem, żebyśmy nie dublowali pracy!

## Spotkanie społeczności

Zespół Envoy ma zaplanowane spotkania dwa razy w miesiącu we wtorki o 9:00 PT. Publiczny
kalendarz Google jest [tutaj](https://goo.gl/PkDijT).  Spotkanie odbędzie się
tylko jeśli na liście [protokółu spotkania](https://goo.gl/5Cergb) pojawią się punkty do omówienia. Każdy członek społeczności może zgłosić punkt do omówienia, dodając go do protokołu. Utrzymujący projekt potwierdzą dodanie punktów do agendy lub odwołają spotkanie w ciągu 24 godzin od planowanego terminu, jeśli nie będzie potwierdzonego programu.

## Bezpieczeństwo

### Audyt bezpieczeństwa

Przeprowadzono kilka audytów bezpieczeństwa Envoy przez podmioty zewnętrzne:
* W 2018 roku Cure53 przeprowadził audyt bezpieczeństwa, [pełny raport](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* W 2021 roku Ada Logics przeprowadziło audyt naszej infrastruktury fuzzingu z zaleceniami usprawnień, [pełny raport](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Zgłaszanie luk bezpieczeństwa

Jeśli znalazłeś lukę lub potencjalną lukę bezpieczeństwa w Envoy, daj nam znać na
[envoy-security](mailto:envoy-security@googlegroups.com). Wyślemy maila potwierdzającego
otrzymanie zgłoszenia oraz kolejnego, kiedy zidentyfikujemy problem
pozytywnie lub negatywnie.

Szczegółowe informacje znajdziesz w naszym pełnym [procesie wydania bezpieczeństwa](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md).

### Kompilacje ppc64le

Kompilacje dla architektury ppc64le lub z użyciem aws-lc nie są objęte polityką bezpieczeństwa Envoy. Architektura ppc64le jest obecnie wspierana w miarę możliwości i nie jest utrzymywana przez głównych opiekunów Envoy.

## Wydania

Szczegółowe informacje znajdziesz w naszym [procesie wydawniczym](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md).


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---