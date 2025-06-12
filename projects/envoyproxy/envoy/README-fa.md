![لوگوی Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[پراکسی لبه/میانی/سرویس با عملکرد بالا و مبتنی بر فضای ابری](https://www.envoyproxy.io/)

Envoy توسط [بنیاد محاسبات ابری بومی](https://cncf.io) (CNCF) میزبانی می‌شود. اگر شرکتی هستید که می‌خواهید در شکل‌دهی به تکامل فناوری‌هایی که به صورت بسته‌بندی کانتینری، زمان‌بندی پویا و مبتنی بر میکروسرویس‌ها هستند نقش داشته باشید، به عضویت CNCF فکر کنید. برای جزئیات بیشتر درباره اعضا و نقش Envoy، اعلامیه CNCF را مطالعه کنید:
[اعلامیه](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/).

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## مستندات

* [مستندات رسمی](https://www.envoyproxy.io/)
* [سؤالات متداول](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [مستندات نمونه](https://github.com/envoyproxy/examples/)
* [وبلاگ](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) درباره مدل نخ
* [وبلاگ](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) درباره راه‌اندازی مجدد داغ
* [وبلاگ](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) درباره معماری آمار
* [وبلاگ](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) درباره API صفحه داده جهانی
* [وبلاگ](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) درباره داشبوردهای Envoy شرکت Lyft

## مرتبط

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): تعاریف API نسخه v2 به عنوان یک مخزن مستقل. این یک آینه فقط خواندنی از [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/) است.
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): چارچوب تست عملکرد.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): مثالی برای افزودن فیلترهای جدید و لینک به مخزن اصلی.

## تماس

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): لیست پستی با فرکانس پایین که فقط اطلاعیه‌ها را ایمیل می‌کنیم.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): لیست پستی با فرکانس پایین که فقط اطلاعیه‌های امنیتی را ایمیل می‌کنیم.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): بحث‌های عمومی کاربران.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): بحث توسعه‌دهندگان Envoy (APIs، طراحی ویژگی‌ها و غیره).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): از این لیست برای ارتباط با تمام نگهدارندگان اصلی Envoy استفاده کنید.
* [توییتر](https://twitter.com/EnvoyProxy/): ما را در توییتر دنبال کنید!
* [اسلک](https://envoyproxy.slack.com/): برای دعوت شدن به اسلک [اینجا](https://communityinviter.com/apps/envoyproxy/envoy) را ببینید.
  * توجه: پاسخ به سؤالات کاربران در اسلک به صورت تلاشی بهترین انجام می‌شود. برای دریافت پاسخ «تضمینی» لطفاً مطابق راهنمایی در رشته ایمیل لینک شده زیر به envoy-users@ ایمیل بزنید.

لطفاً برای اطلاعات بیشتر درباره استفاده از لیست‌های ایمیل، [این](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) رشته ایمیل را ببینید.

## مشارکت

مشارکت در Envoy سرگرم‌کننده است و ++C مدرن بسیار ساده‌تر از چیزی است که ممکن است تصور کنید، حتی اگر قبلاً تجربه‌ای نداشته باشید. برای شروع:

* [راهنمای مشارکت](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [مسائل مناسب مبتدیان](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [شروع سریع ساخت/تست با استفاده از داکر](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [راهنمای توسعه‌دهندگان](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* نصب [ابزار پشتیبان توسعه Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md) را در نظر بگیرید، که به خودکارسازی بخش‌هایی از فرآیند توسعه، به ویژه بازبینی کد کمک می‌کند.
* لطفاً مطمئن شوید که اگر روی یک مسئله کار می‌کنید، به ما اطلاع دهید تا کار تکراری انجام نشود!

## جلسه جامعه

تیم Envoy دو بار در ماه، سه‌شنبه‌ها ساعت ۹ صبح به وقت PT جلسه برنامه‌ریزی شده دارد. تقویم عمومی گوگل [اینجا](https://goo.gl/PkDijT) است. جلسه فقط در صورتی برگزار می‌شود که موارد دستور جلسه در [صورتجلسه](https://goo.gl/5Cergb) درج شده باشد. هر عضو جامعه می‌تواند با افزودن به صورتجلسه، موارد دستور جلسه را پیشنهاد دهد. نگهدارندگان یا موارد اضافه شده را تأیید خواهند کرد، یا اگر مورد تأییدشده‌ای وجود نداشته باشد، جلسه را ظرف ۲۴ ساعت قبل از زمان مقرر لغو خواهند کرد.

## امنیت

### ممیزی امنیتی

چندین بررسی شخص ثالث بر امنیت Envoy متمرکز بوده است:
* در سال ۲۰۱۸ شرکت Cure53 یک ممیزی امنیتی انجام داد، [گزارش کامل](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* در سال ۲۰۲۱ شرکت Ada Logics یک ممیزی بر زیرساخت fuzzing ما با پیشنهادهایی برای بهبود انجام داد، [گزارش کامل](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### گزارش آسیب‌پذیری‌های امنیتی

اگر آسیب‌پذیری یا احتمال آسیب‌پذیری در Envoy پیدا کرده‌اید، لطفاً به [envoy-security](mailto:envoy-security@googlegroups.com) اطلاع دهید. ما یک ایمیل تأیید ارسال خواهیم کرد تا دریافت گزارش شما را اعلام کنیم و پس از شناسایی مثبت یا منفی مشکل، ایمیل دیگری ارسال خواهیم کرد.

برای جزئیات بیشتر لطفاً [فرآیند انتشار امنیتی کامل ما](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md) را ببینید.

### ساخت‌های ppc64le

ساخت‌ها برای معماری ppc64le یا با استفاده از aws-lc تحت پوشش سیاست امنیتی Envoy نیستند. معماری ppc64le فعلاً به صورت بهترین تلاش و بدون نگهداری توسط نگهدارندگان Envoy مدیریت می‌شود.

## نسخه‌ها

برای جزئیات بیشتر لطفاً [فرآیند انتشار](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md) را ببینید.


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---