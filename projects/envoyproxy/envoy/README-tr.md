![Envoy Logosu](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Bulut-yerel yüksek performanslı kenar/orta/servis proxy'si](https://www.envoyproxy.io/)

Envoy, [Cloud Native Computing Foundation](https://cncf.io) (CNCF) tarafından barındırılmaktadır. Eğer siz de
konteyner paketli, dinamik olarak zamanlanabilen ve mikroservis odaklı teknolojilerin evrimini şekillendirmek isteyen bir
şirketseniz, CNCF'ye katılmayı düşünebilirsiniz. Kimlerin dahil olduğu ve Envoy'un nasıl bir rol oynadığı hakkında detaylı bilgi için CNCF
[duyurusunu](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) okuyabilirsiniz.

[![CII En İyi Uygulamalar](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Durumu](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Dokümantasyon

* [Resmi dokümantasyon](https://www.envoyproxy.io/)
* [SSS](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Örnek dokümantasyon](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) iş parçacığı modeli hakkında
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) sıcak yeniden başlatma hakkında
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) istatistik mimarisi hakkında
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) evrensel veri düzlemi API'si hakkında
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) Lyft'in Envoy panoları hakkında

## İlgili

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): v2 API tanımları için bağımsız bir
  depo. Bu, [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/) deposunun salt-okunur bir yansımasıdır.
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Performans test çerçevesi.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Yeni filtrelerin nasıl ekleneceğine dair örnek
  ve ana depoya nasıl bağlanacağı hakkında.

## İletişim

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Sadece duyuruların gönderileceği
  düşük frekanslı e-posta listesi.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Sadece güvenlik ile ilgili duyuruların gönderileceği
  düşük frekanslı e-posta listesi.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Genel kullanıcı tartışmaları.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Envoy geliştirici tartışmaları (API'ler,
  özellik tasarımı, vb.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Tüm çekirdek Envoy geliştiricilerine
  ulaşmak için bu listeyi kullanabilirsiniz.
* [Twitter](https://twitter.com/EnvoyProxy/): Twitter'dan bizi takip edin!
* [Slack](https://envoyproxy.slack.com/): Slack, davet almak için [buraya](https://communityinviter.com/apps/envoyproxy/envoy) tıklayın.
  * NOT: Slack'te kullanıcı sorularına verilen yanıtlar en iyi çaba ile sağlanmaktadır. "Garanti" bir yanıt almak için lütfen aşağıdaki bağlantılı başlıktaki yönlendirme uyarınca envoy-users@ adresine e-posta gönderin.

E-posta listesi kullanımı hakkında bilgi için lütfen [bu](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) e-posta dizisine bakın.

## Katkıda Bulunma

Envoy'a katkıda bulunmak eğlencelidir ve modern C++ önceki deneyiminiz olmasa bile düşündüğünüz kadar korkutucu değildir. Başlamak için:

* [Katkı rehberi](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Başlangıç seviyesindeki konular](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Docker ile derleme/test hızlı başlangıç](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Geliştirici rehberi](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Geliştirme sürecinin bazı bölümlerini, özellikle kod incelemeleriyle ilgili olanları otomatikleştirmeye yardımcı olan Envoy [geliştirme destek araç zincirini](https://github.com/envoyproxy/envoy/blob/main/support/README.md) kurmayı düşünebilirsiniz.
* Lütfen bir konuda çalışıyorsanız bize mutlaka bildirin, böylece aynı işi iki kez yapmayalım!

## Topluluk Toplantısı

Envoy ekibinin, ayda iki kez Salı günü saat 9'da PT'de planlanmış toplantı zamanı vardır. Kamuya açık
Google takvimi [burada](https://goo.gl/PkDijT).  Toplantı yalnızca
[Toplantı notlarında](https://goo.gl/5Cergb) gündem maddeleri varsa yapılacaktır.  Topluluğun herhangi bir üyesi
notlara ekleme yaparak gündem maddeleri önerebilir.  Geliştiriciler eklenen gündem maddelerini onaylayacak
veya onaylı bir gündem yoksa toplantıdan 24 saat önce toplantıyı iptal edeceklerdir.

## Güvenlik

### Güvenlik Denetimi

Envoy güvenliğiyle ilgili çeşitli üçüncü taraf incelemeleri yapılmıştır:
* 2018 yılında Cure53 bir güvenlik denetimi gerçekleştirdi, [tam rapor](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* 2021 yılında Ada Logics, fuzzing altyapımız üzerine iyileştirme önerileriyle bir denetim yaptı, [tam rapor](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Güvenlik açıklarını bildirme

Envoy'da bir güvenlik açığı veya potansiyel bir güvenlik açığı bulduysanız lütfen bize
[envoy-security](mailto:envoy-security@googlegroups.com) adresinden bildirin. Raporunuzu aldığımızı onaylayan bir e-posta göndereceğiz
ve sorunu olumlu ya da olumsuz olarak tespit ettiğimizde ek bir e-posta göndereceğiz.

Daha fazla detay için lütfen tam [güvenlik sürüm sürecimize](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md) bakın.

### ppc64le yapıları

ppc64le mimarisi için yapılan yapılar veya aws-lc kullanılarak yapılanlar envoy güvenlik politikası kapsamında değildir. ppc64le mimarisi şu anda en iyi çaba ile desteklenmektedir ve Envoy geliştiricileri tarafından bakımda değildir.

## Sürümler

Daha fazla ayrıntı için lütfen [sürüm sürecimize](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md) bakın.

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---