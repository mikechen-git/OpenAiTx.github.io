![Логотип Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Облачный высокопроизводительный прокси для edge/middle/service](https://www.envoyproxy.io/)

Envoy размещается в [Cloud Native Computing Foundation](https://cncf.io) (CNCF). Если ваша компания хочет участвовать в формировании эволюции технологий, которые упакованы в контейнеры, динамически распределяются и ориентированы на микросервисы, рассмотрите возможность присоединения к CNCF. Для получения информации о том, кто участвует и какую роль играет Envoy, прочитайте объявление CNCF
[announcement](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/).

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Документация

* [Официальная документация](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Примеры документации](https://github.com/envoyproxy/examples/)
* [Блог](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) о модели многопоточности
* [Блог](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) о горячем рестарте
* [Блог](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) об архитектуре статистики
* [Блог](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) об универсальном API плоскости данных
* [Блог](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) о дашбордах Envoy в Lyft

## Связанные проекты

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): Определения API v2 в отдельном репозитории. Это только для чтения зеркало [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Фреймворк для тестирования производительности.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Пример добавления новых фильтров и их подключения к основному репозиторию.

## Контакты

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Низкочастотная рассылка, только для важных объявлений.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Низкочастотная рассылка только для объявлений, связанных с безопасностью.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Общие обсуждения пользователей.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Обсуждение разработки Envoy (API, проектирование функций и т.д.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Используйте этот список для связи со всеми основными мейнтейнерами Envoy.
* [Twitter](https://twitter.com/EnvoyProxy/): Следите за новостями в Twitter!
* [Slack](https://envoyproxy.slack.com/): Для приглашения перейдите [сюда](https://communityinviter.com/apps/envoyproxy/envoy).
  * ПРИМЕЧАНИЕ: Ответы на вопросы пользователей в Slack предоставляются по возможности. Для "гарантированного" ответа, пожалуйста, пишите на envoy-users@ согласно инструкции в этой [теме](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY).

Пожалуйста, смотрите [эту](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) email-ветку для информации об использовании рассылок.

## Вклад

Вносить вклад в Envoy интересно, а современный C++ не так страшен, как может показаться, даже если у вас нет опыта. Чтобы начать:

* [Руководство по вкладу](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Задачи для новичков](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Быстрый старт по сборке/тестированию с использованием docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Руководство для разработчиков](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Рекомендуется установить [инструментарий поддержки разработки Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md), который помогает автоматизировать часть процесса разработки, особенно связанную с код-ревью.
* Пожалуйста, обязательно дайте нам знать, если вы работаете над задачей, чтобы не выполнять дублирующую работу!

## Встреча сообщества

Команда Envoy проводит встречи два раза в месяц по вторникам в 9 утра по PT. Публичный Google-календарь [здесь](https://goo.gl/PkDijT). Встреча проводится только если в [протоколе встречи](https://goo.gl/5Cergb) есть пункты повестки дня. Любой участник сообщества может предложить пункты для обсуждения, добавив их в протокол. Мейнтейнеры либо подтвердят дополнения, либо отменят встречу за 24 часа до назначенного времени, если не будет подтвержденной повестки.

## Безопасность

### Аудит безопасности

Было проведено несколько сторонних аудитов безопасности Envoy:
* В 2018 году компания Cure53 провела аудит безопасности, [полный отчет](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* В 2021 году Ada Logics провела аудит нашей инфраструктуры fuzzing с рекомендациями по улучшению, [полный отчет](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Сообщение о уязвимостях безопасности

Если вы нашли уязвимость или потенциальную уязвимость в Envoy, пожалуйста, сообщите нам по адресу [envoy-security](mailto:envoy-security@googlegroups.com). Мы отправим подтверждение получения сообщения и дополнительное письмо, когда мы сможем подтвердить или опровергнуть проблему.

Для получения дополнительной информации ознакомьтесь с нашим полным [процессом публикации обновлений безопасности](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md).

### Сборки ppc64le

Сборки для архитектуры ppc64le или с использованием aws-lc не покрываются политикой безопасности Envoy. Архитектура ppc64le в настоящее время поддерживается по принципу "best-effort" и не обслуживается основными мейнтейнерами Envoy.

## Релизы

Для получения дополнительной информации смотрите наш [процесс релизов](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md).


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---