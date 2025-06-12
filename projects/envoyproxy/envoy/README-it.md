![Logo Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Proxy edge/middle/service cloud-native ad alte prestazioni](https://www.envoyproxy.io/)

Envoy è ospitato dalla [Cloud Native Computing Foundation](https://cncf.io) (CNCF). Se sei un'azienda che desidera contribuire all'evoluzione di tecnologie containerizzate, dinamicamente pianificate e orientate ai microservizi, considera l'adesione alla CNCF. Per dettagli su chi è coinvolto e sul ruolo di Envoy, leggi l'
[annuncio](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) della CNCF.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Documentazione

* [Documentazione ufficiale](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Documentazione di esempio](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) sul modello di threading
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) su hot restart
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) sull'architettura delle statistiche
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) sull'API universale del data plane
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) sulle dashboard di Envoy di Lyft

## Correlati

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): definizioni API v2 come repository indipendente. Questo è uno specchio di sola lettura di [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): framework di test sulle prestazioni.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): esempio su come aggiungere nuovi filtri e collegarli al repository principale.

## Contatti

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Mailing list a bassa frequenza dove invieremo solo annunci.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Mailing list a bassa frequenza dove invieremo solo annunci relativi alla sicurezza.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Discussione generale per gli utenti.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Discussione per sviluppatori Envoy (API, progettazione di funzionalità, ecc.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Usa questa lista per contattare tutti i manutentori principali di Envoy.
* [Twitter](https://twitter.com/EnvoyProxy/): Segui su Twitter!
* [Slack](https://envoyproxy.slack.com/): Slack, per ricevere un invito vai [qui](https://communityinviter.com/apps/envoyproxy/envoy).
  * NOTA: La risposta alle domande degli utenti su Slack è secondo disponibilità. Per una risposta "garantita" si prega di inviare un'email a envoy-users@ come descritto nel thread linkato di seguito.

Si prega di consultare [questa](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) discussione per informazioni sull'utilizzo delle mailing list.

## Contribuire

Contribuire a Envoy è divertente e il C++ moderno è molto meno spaventoso di quanto si possa pensare se non si ha esperienza precedente. Per iniziare:

* [Guida al contributo](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Issue per principianti](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Guida rapida build/test usando docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Guida per sviluppatori](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Considera l'installazione della [toolchain di supporto allo sviluppo di Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md), che aiuta ad automatizzare parti del processo di sviluppo, in particolare quelle che coinvolgono la revisione del codice.
* Assicurati di farci sapere se stai lavorando su un problema così da non duplicare il lavoro!

## Incontro della Comunità

Il team di Envoy ha un incontro programmato due volte al mese, il martedì alle 9am PT. Il calendario Google pubblico è [qui](https://goo.gl/PkDijT). L'incontro si terrà solo se ci sono punti all'ordine del giorno elencati nei [verbali dell'incontro](https://goo.gl/5Cergb). Qualsiasi membro della comunità può proporre punti aggiungendoli ai verbali. I manutentori confermeranno le aggiunte all'ordine del giorno, o cancelleranno l'incontro entro 24 ore dalla data prevista se non ci sono punti confermati.

## Sicurezza

### Audit di Sicurezza

Ci sono stati diversi audit di sicurezza di terze parti su Envoy:
* Nel 2018 Cure53 ha effettuato un audit di sicurezza, [rapporto completo](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* Nel 2021 Ada Logics ha effettuato un audit sulla nostra infrastruttura di fuzzing con raccomandazioni per miglioramenti, [rapporto completo](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Segnalazione di vulnerabilità di sicurezza

Se hai trovato una vulnerabilità o una potenziale vulnerabilità in Envoy ti preghiamo di segnalarcelo a
[envoy-security](mailto:envoy-security@googlegroups.com). Invieremo un'email di conferma per riconoscere la tua segnalazione e un'ulteriore email quando avremo identificato il problema positivamente o negativamente.

Per ulteriori dettagli consulta il nostro [processo completo di rilascio di sicurezza](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md).

### Build ppc64le

Le build per l'architettura ppc64le o che utilizzano aws-lc non sono coperte dalla policy di sicurezza di Envoy. L'architettura ppc64le è attualmente gestita "best effort" e non è mantenuta dai manutentori di Envoy.

## Rilasci

Per ulteriori dettagli consulta il nostro [processo di rilascio](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md).


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---