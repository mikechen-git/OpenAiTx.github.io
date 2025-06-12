![Envoy 로고](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[클라우드 네이티브 고성능 엣지/미들/서비스 프록시](https://www.envoyproxy.io/)

Envoy는 [Cloud Native Computing Foundation](https://cncf.io) (CNCF)에서 호스팅합니다. 컨테이너 패키지화, 동적 스케줄링, 마이크로서비스 지향 기술의 발전에 기여하고자 하는 기업이라면 CNCF 가입을 고려해 보세요. 참여 기업과 Envoy의 역할에 대한 자세한 내용은 CNCF
[공식 발표](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/)를 참고하세요.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## 문서

* [공식 문서](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [예제 문서](https://github.com/envoyproxy/examples/)
* [스레딩 모델에 대한 블로그](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310)
* [핫 리스타트에 대한 블로그](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5)
* [통계 아키텍처에 대한 블로그](https://medium.com/@mattklein123/envoy-stats-b65c7f363342)
* [범용 데이터 플레인 API에 대한 블로그](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a)
* [Lyft의 Envoy 대시보드에 관한 블로그](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1)

## 관련 항목

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): v2 API 정의가 독립형 저장소로 제공됩니다. 이는 [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/)의 읽기 전용 미러입니다.
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): 성능 테스트 프레임워크.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): 새로운 필터를 추가하고 메인 저장소에 연결하는 예제입니다.

## 연락처

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): 오직 공지사항만 이메일로 발송하는 저빈도 메일링 리스트입니다.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): 보안 관련 공지만 이메일로 발송하는 저빈도 메일링 리스트입니다.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): 일반 사용자 토론용.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Envoy 개발자 토론(APIs, 기능 설계 등).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): 모든 핵심 Envoy 유지보수자에게 연락하려면 이 리스트를 사용하세요.
* [Twitter](https://twitter.com/EnvoyProxy/): 트위터를 팔로우하세요!
* [Slack](https://envoyproxy.slack.com/): Slack, 초대받으려면 [여기](https://communityinviter.com/apps/envoyproxy/envoy)를 방문하세요.
  * 참고: Slack에서의 사용자 질문 응답은 최선의 노력이지만, "보장된" 응답을 원할 경우 아래 링크된 스레드의 안내에 따라 envoy-users@로 이메일을 보내주세요.

이메일 리스트 사용법에 대한 정보는 [여기](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) 이메일 스레드를 참고하세요.

## 기여

Envoy에 기여하는 것은 재미있고, 이전 경험이 없더라도 최신 C++은 생각보다 훨씬 덜 어렵습니다. 시작하려면:

* [기여 가이드](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [초보자 이슈](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [docker를 이용한 빌드/테스트 빠른 시작](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [개발자 가이드](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* 개발 프로세스(특히 코드 리뷰와 관련된 부분)를 자동화해주는 Envoy [개발 지원 툴체인](https://github.com/envoyproxy/envoy/blob/main/support/README.md) 설치를 고려하세요.
* 같은 이슈에 대해 중복 작업이 발생하지 않도록, 작업 중인 이슈가 있다면 꼭 알려주세요!

## 커뮤니티 미팅

Envoy 팀은 매달 두 번 화요일 오전 9시(PT)에 정기 미팅을 진행합니다. 공개 구글 캘린더는 [여기](https://goo.gl/PkDijT)에서 확인할 수 있습니다. 회의는 [회의록](https://goo.gl/5Cergb)에 안건이 있을 때만 진행됩니다. 모든 커뮤니티 구성원은 회의록에 안건을 추가하여 제안할 수 있습니다. 유지보수자는 안건 추가를 확인하거나, 확정된 안건이 없을 경우 예정일 24시간 전에 회의를 취소합니다.

## 보안

### 보안 감사

Envoy 보안 관련 여러 타사 감사가 수행되었습니다:
* 2018년 Cure53에서 보안 감사를 수행함, [전체 보고서](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* 2021년 Ada Logics에서 퍼징 인프라에 대한 감사 및 개선 권고를 수행함, [전체 보고서](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### 보안 취약점 신고

Envoy에서 취약점 또는 잠재적 취약점을 발견하셨다면 [envoy-security](mailto:envoy-security@googlegroups.com)로 알려주세요. 신고를 확인하는 이메일을 보내드리며, 문제를 확인한 후 추가 안내 이메일을 보내드립니다.

자세한 내용은 [보안 릴리즈 프로세스](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md)를 참조하세요.

### ppc64le 빌드

ppc64le 아키텍처 또는 aws-lc를 사용하는 빌드는 Envoy 보안 정책에 의해 지원되지 않습니다. ppc64le 아키텍처는 현재 최선의 노력으로 지원되며, Envoy 유지보수자에 의해 공식적으로 관리되지 않습니다.

## 릴리즈

자세한 내용은 [릴리즈 프로세스](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md)를 참조하세요.

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---