![โลโก้ Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[พร็อกซี edge/middle/service ประสิทธิภาพสูงแบบคลาวด์เนทีฟ](https://www.envoyproxy.io/)

Envoy ได้รับการสนับสนุนโดย [Cloud Native Computing Foundation](https://cncf.io) (CNCF) หากคุณคือบริษัทที่ต้องการมีส่วนร่วมในการพัฒนาเทคโนโลยีที่บรรจุในคอนเทนเนอร์, กำหนดเวลาแบบไดนามิก และเน้น microservices กรุณาพิจารณาเข้าร่วม CNCF สำหรับรายละเอียดเกี่ยวกับผู้ที่มีส่วนร่วมและบทบาทของ Envoy โปรดอ่าน
[ประกาศ](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) ของ CNCF

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## เอกสาร

* [เอกสารอย่างเป็นทางการ](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [เอกสารตัวอย่าง](https://github.com/envoyproxy/examples/)
* [บล็อก](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) เกี่ยวกับ threading model
* [บล็อก](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) เกี่ยวกับ hot restart
* [บล็อก](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) เกี่ยวกับสถาปัตยกรรมสถิติ
* [บล็อก](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) เกี่ยวกับ universal data plane API
* [บล็อก](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) เกี่ยวกับแดชบอร์ดของ Envoy ใน Lyft

## ที่เกี่ยวข้อง

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): นิยาม API v2 แบบแยก repository นี่คือ mirror แบบอ่านอย่างเดียวของ [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): เฟรมเวิร์กสำหรับทดสอบประสิทธิภาพ
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): ตัวอย่างการเพิ่ม filter ใหม่และเชื่อมกับ repository หลัก

## ติดต่อ

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): รายชื่ออีเมลแบบความถี่ต่ำสำหรับประกาศข่าวสารเท่านั้น
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): รายชื่ออีเมลแบบความถี่ต่ำสำหรับประกาศเกี่ยวกับความปลอดภัยเท่านั้น
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): พูดคุยทั่วไปของผู้ใช้
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): พูดคุยสำหรับนักพัฒนา Envoy (API, การออกแบบฟีเจอร์ ฯลฯ)
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): รายชื่อเพื่อเข้าถึงผู้ดูแล Envoy หลักทั้งหมด
* [Twitter](https://twitter.com/EnvoyProxy/): ติดตามบน Twitter!
* [Slack](https://envoyproxy.slack.com/): Slack, หากต้องการเข้าร่วมไปที่ [ที่นี่](https://communityinviter.com/apps/envoyproxy/envoy)
  * หมายเหตุ: การตอบคำถามของผู้ใช้ใน Slack เป็นแบบ best effort หากต้องการ "รับประกัน" การตอบกลับ กรุณาส่งอีเมลไปที่ envoy-users@ ตามคำแนะนำในเธรดที่ลิงก์ไว้ด้านล่าง

โปรดดู [อีเมลเธรดนี้](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) สำหรับข้อมูลเกี่ยวกับการใช้รายชื่ออีเมล

## การมีส่วนร่วม

การมีส่วนร่วมกับ Envoy เป็นเรื่องสนุก และ C++ สมัยใหม่ก็น่ากลัวน้อยกว่าที่คุณคิดหากไม่มีประสบการณ์มาก่อน เริ่มต้นได้ที่:

* [คู่มือการมีส่วนร่วม](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [issue สำหรับผู้เริ่มต้น](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [เริ่มต้น build/test อย่างรวดเร็วด้วย docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [คู่มือนักพัฒนา](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* พิจารณาติดตั้ง [development support toolchain](https://github.com/envoyproxy/envoy/blob/main/support/README.md) ของ Envoy ซึ่งช่วยอัตโนมัติบางส่วนของกระบวนการพัฒนา โดยเฉพาะที่เกี่ยวกับ code review
* กรุณาแจ้งให้เราทราบหากคุณกำลังทำงานกับ issue ใด เพื่อป้องกันการทำงานซ้ำซ้อน!

## การประชุมชุมชน

ทีม Envoy มีเวลาการประชุมที่กำหนดไว้เดือนละสองครั้งในวันอังคาร เวลา 9 โมงเช้า PT ปฏิทิน Google สาธารณะ [อยู่ที่นี่](https://goo.gl/PkDijT) การประชุมจะจัดขึ้นเฉพาะเมื่อมีหัวข้อใน [บันทึกการประชุม](https://goo.gl/5Cergb) สมาชิกชุมชนทุกคนสามารถเสนอวาระโดยเพิ่มในบันทึก ทีมผู้ดูแลจะยืนยันการเพิ่มวาระ หรือจะยกเลิกการประชุมภายใน 24 ชั่วโมงก่อนวันที่กำหนดหากไม่มีวาระที่ได้รับการยืนยัน

## ความปลอดภัย

### การตรวจสอบความปลอดภัย

มีการว่าจ้างบริษัทภายนอกตรวจสอบความปลอดภัยของ Envoy หลายครั้ง:
* ปี 2018 Cure53 ได้ตรวจสอบความปลอดภัย [อ่านรายงานฉบับเต็ม](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf)
* ปี 2021 Ada Logics ตรวจสอบโครงสร้าง fuzzing ของเรา พร้อมคำแนะนำ [อ่านรายงานฉบับเต็ม](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf)

### การรายงานช่องโหว่ด้านความปลอดภัย

หากคุณพบช่องโหว่หรือความเป็นไปได้ที่จะเป็นช่องโหว่ใน Envoy กรุณาแจ้งที่
[envoy-security](mailto:envoy-security@googlegroups.com) เราจะส่งอีเมลยืนยันเพื่อรับทราบรายงานของคุณ และจะส่งอีเมลเพิ่มเติมเมื่อเรายืนยันปัญหานั้นแล้ว ไม่ว่าจะเป็นจริงหรือไม่

สำหรับรายละเอียดเพิ่มเติม โปรดดู [กระบวนการปล่อยอัปเดตความปลอดภัยฉบับสมบูรณ์](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md)

### การ build สำหรับ ppc64le

การ build สำหรับสถาปัตยกรรม ppc64le หรือการใช้ aws-lc ไม่อยู่ภายใต้นโยบายความปลอดภัยของ Envoy สถาปัตยกรรม ppc64le ขณะนี้เป็นแบบ best-effort และไม่ได้รับการดูแลโดยทีม Envoy

## การปล่อยเวอร์ชัน

สำหรับรายละเอียดเพิ่มเติม โปรดดู [กระบวนการปล่อยเวอร์ชัน](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md)


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---