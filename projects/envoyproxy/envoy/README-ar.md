![شعار Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[وكيل الحافة/الوسط/الخدمة عالي الأداء وقائم على السحابة](https://www.envoyproxy.io/)

يتم استضافة Envoy بواسطة [مؤسسة الحوسبة السحابية الأصلية](https://cncf.io) (CNCF). إذا كنت شركة ترغب في المساهمة في تطور التقنيات التي تعتمد على الحاويات، وجدولة ديناميكية وموجهة نحو الخدمات المصغرة، فكر في الانضمام إلى CNCF. لمزيد من التفاصيل حول المشاركين ودور Envoy، اقرأ [الإعلان](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) الخاص بـ CNCF.

[![أفضل ممارسات CII](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![حالة Fuzzing](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## التوثيق

* [التوثيق الرسمي](https://www.envoyproxy.io/)
* [الأسئلة الشائعة](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [توثيق الأمثلة](https://github.com/envoyproxy/examples/)
* [مدونة](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) حول نموذج الخيوط في Envoy
* [مدونة](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) حول إعادة التشغيل الساخن
* [مدونة](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) حول بنية الإحصاءات
* [مدونة](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) حول واجهة برمجة التطبيقات العالمية لطبقة البيانات
* [مدونة](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) حول لوحات بيانات Envoy في Lyft

## ذات صلة

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): تعريفات API v2 كمستودع مستقل. هذا مرآة للقراءة فقط لـ [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): إطار اختبار الأداء.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): مثال حول كيفية إضافة فلاتر جديدة وربطها بالمستودع الرئيسي.

## التواصل

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): قائمة بريدية منخفضة التردد للإعلانات فقط.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): قائمة بريدية منخفضة التردد للإعلانات المتعلقة بالأمان فقط.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): نقاش المستخدمين العام.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): نقاش مطوري Envoy (واجهات برمجة التطبيقات، تصميم الميزات، إلخ).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): استخدم هذه القائمة للتواصل مع جميع القائمين على صيانة Envoy الأساسيين.
* [تويتر](https://twitter.com/EnvoyProxy/): تابعنا على تويتر!
* [سلاك](https://envoyproxy.slack.com/): للدعوة إلى Slack اذهب [هنا](https://communityinviter.com/apps/envoyproxy/envoy).
  * ملاحظة: الرد على أسئلة المستخدمين في Slack هو حسب الجهد المتاح. للحصول على رد "مضمون"، يرجى إرسال بريد إلكتروني إلى envoy-users@ وفقًا للتوجيهات في سلسلة الرسائل المرتبطة أدناه.

يرجى الاطلاع على [هذه](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) السلسلة البريدية لمزيد من المعلومات حول استخدام القوائم البريدية.

## المساهمة

المساهمة في Envoy ممتعة وC++ الحديثة أقل تعقيدًا مما قد تعتقد إذا لم يكن لديك خبرة سابقة. للبدء:

* [دليل المساهمة](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [مشاكل للمبتدئين](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [دليل البدء السريع للبناء/الاختبار باستخدام docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [دليل المطور](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* فكر في تثبيت [أدوات دعم تطوير Envoy](https://github.com/envoyproxy/envoy/blob/main/support/README.md)، والتي تساعد في أتمتة أجزاء من عملية التطوير، خاصة تلك المتعلقة بمراجعة الكود.
* يرجى التأكد من إعلامنا إذا كنت تعمل على مشكلة حتى لا يحدث تكرار في العمل!

## اجتماع المجتمع

فريق Envoy لديه اجتماع مجدول مرتين في الشهر يوم الثلاثاء الساعة 9 صباحًا بتوقيت المحيط الهادئ. التقويم العام في [هذا الرابط](https://goo.gl/PkDijT). سيتم عقد الاجتماع فقط إذا كانت هناك بنود على جدول الأعمال مدرجة في [محضر الاجتماع](https://goo.gl/5Cergb). يجب أن يكون بإمكان أي عضو في المجتمع اقتراح بنود جدول الأعمال بإضافتها إلى المحضر. سيؤكد القائمون على الصيانة الإضافات إلى جدول الأعمال، أو سيقومون بإلغاء الاجتماع خلال 24 ساعة من الموعد المجدول إذا لم يكن هناك جدول أعمال مؤكد.

## الأمان

### تدقيق الأمان

كانت هناك عدة مشاركات من طرف ثالث ركزت على أمان Envoy:
* في 2018، قامت Cure53 بإجراء تدقيق أمني، [التقرير الكامل](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* في 2021، قامت Ada Logics بتدقيق بنية الفحص التلقائي (fuzzing) لدينا مع توصيات للتحسين، [التقرير الكامل](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### الإبلاغ عن ثغرات الأمان

إذا وجدت ثغرة أو ثغرة محتملة في Envoy يرجى إعلامنا عبر [envoy-security](mailto:envoy-security@googlegroups.com). سنرسل لك رسالة تأكيد لتوثيق استلامنا لتقريرك، وسنرسل رسالة إضافية عند تحديدنا للمشكلة بشكل إيجابي أو سلبي.

لمزيد من التفاصيل يرجى الاطلاع على [عملية إصدار التحديثات الأمنية](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md) الكاملة لدينا.

### بناءات ppc64le

البناءات الخاصة بمعمارية ppc64le أو باستخدام aws-lc غير مشمولة بسياسة أمان Envoy. معمارية ppc64le حاليًا مدعومة بأفضل جهد وليست تحت صيانة القائمين على Envoy.

## الإصدارات

لمزيد من التفاصيل يرجى الاطلاع على [عملية الإصدار](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md).

---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---