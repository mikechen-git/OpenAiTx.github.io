![Logo Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Proxy edge/middle/service berkinerja tinggi berbasis cloud-native](https://www.envoyproxy.io/)

Envoy dihosting oleh [Cloud Native Computing Foundation](https://cncf.io) (CNCF). Jika Anda adalah
perusahaan yang ingin membantu membentuk evolusi teknologi yang dikemas dalam container,
dijadwalkan secara dinamis dan berorientasi microservices, pertimbangkan untuk bergabung dengan CNCF. Untuk detail tentang siapa saja yang
terlibat dan bagaimana peran Envoy, baca pengumuman CNCF
[announcement](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/).

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Dokumentasi

* [Dokumentasi resmi](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Dokumentasi contoh](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) tentang model threading
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) tentang hot restart
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) tentang arsitektur statistik
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) tentang universal data plane API
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) tentang dashboard Envoy milik Lyft

## Terkait

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): Definisi API v2 sebagai repositori
  mandiri. Ini adalah mirror read-only dari [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Kerangka kerja pengujian performa.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Contoh cara menambah filter baru
  dan menghubungkannya ke repositori utama.

## Kontak

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Daftar email dengan frekuensi rendah
  di mana kami hanya akan mengirimkan pengumuman.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Daftar email dengan frekuensi rendah
  di mana kami hanya akan mengirimkan pengumuman terkait keamanan.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Diskusi umum pengguna.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Diskusi pengembang Envoy (API,
  desain fitur, dll.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Gunakan daftar ini
  untuk menghubungi seluruh maintainer inti Envoy.
* [Twitter](https://twitter.com/EnvoyProxy/): Ikuti kami di Twitter!
* [Slack](https://envoyproxy.slack.com/): Slack, untuk undangan silakan [di sini](https://communityinviter.com/apps/envoyproxy/envoy).
  * CATATAN: Tanggapan atas pertanyaan pengguna di Slack bersifat best effort. Untuk respons yang "terjamin" silakan email
    envoy-users@ sesuai panduan pada thread yang tertaut berikut.

Silakan lihat thread email [ini](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY)
untuk informasi penggunaan daftar email.

## Kontribusi

Berkontribusi pada Envoy itu menyenangkan dan C++ modern jauh lebih mudah dari yang Anda bayangkan, bahkan jika Anda belum punya pengalaman sebelumnya. Untuk mulai:

* [Panduan kontribusi](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Isu pemula](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Panduan singkat build/test menggunakan docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Panduan pengembang](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Pertimbangkan memasang [toolchain dukungan pengembangan Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md), yang membantu mengotomatisasi bagian dari proses pengembangan, khususnya yang berkaitan dengan review kode.
* Pastikan Anda memberitahu kami jika Anda sedang mengerjakan sebuah isu agar tidak terjadi duplikasi pekerjaan!

## Pertemuan Komunitas

Tim Envoy memiliki jadwal pertemuan dua kali setiap bulan pada hari Selasa pukul 9 pagi PT. Kalender Google publik dapat dilihat [di sini](https://goo.gl/PkDijT).  Pertemuan hanya akan diadakan
jika terdapat agenda yang tercantum dalam [notulen pertemuan](https://goo.gl/5Cergb).
Setiap anggota komunitas bisa mengusulkan agenda dengan menambahkannya ke notulen. Para maintainer akan mengonfirmasi
penambahan agenda, atau akan membatalkan pertemuan dalam waktu 24 jam sebelum tanggal terjadwal jika tidak ada agenda yang dikonfirmasi.

## Keamanan

### Audit Keamanan

Telah dilakukan beberapa audit pihak ketiga yang berfokus pada keamanan Envoy:
* Tahun 2018 Cure53 melakukan audit keamanan, [laporan lengkap](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* Tahun 2021 Ada Logics melakukan audit pada infrastruktur fuzzing kami beserta rekomendasi perbaikan, [laporan lengkap](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Melaporkan kerentanan keamanan

Jika Anda menemukan kerentanan atau potensi kerentanan di Envoy, silakan hubungi kami di
[envoy-security](mailto:envoy-security@googlegroups.com). Kami akan mengirim email konfirmasi
untuk mengakui laporan Anda, dan akan mengirim email tambahan ketika kami telah mengidentifikasi isu
secara positif maupun negatif.

Untuk detail lebih lanjut silakan lihat [proses rilis keamanan](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md) kami.

### Build ppc64le

Build untuk arsitektur ppc64le atau yang menggunakan aws-lc tidak tercakup dalam kebijakan keamanan envoy. Arsitektur ppc64le saat ini bersifat best-effort dan tidak dipelihara oleh maintainer Envoy.

## Rilis

Untuk detail lebih lanjut silakan lihat [proses rilis](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md) kami.

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---