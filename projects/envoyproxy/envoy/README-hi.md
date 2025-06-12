![Envoy Logo](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[क्लाउड-नेटिव हाई-परफॉर्मेंस एज/मिडिल/सर्विस प्रॉक्सी](https://www.envoyproxy.io/)

Envoy को [Cloud Native Computing Foundation](https://cncf.io) (CNCF) द्वारा होस्ट किया जाता है। यदि आप एक
कंपनी हैं जो कंटेनर-पैकेज्ड, डायनामिकली-शेड्यूल्ड और माइक्रोसर्विस-ओरिएंटेड तकनीकों के विकास को आकार देने में मदद करना चाहती है, तो कृपया CNCF से जुड़ने पर विचार करें। इसमें कौन-कौन शामिल है और Envoy की भूमिका के बारे में विस्तार से जानने के लिए CNCF की
[घोषणा](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) पढ़ें।

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## प्रलेखन (Documentation)

* [आधिकारिक प्रलेखन](https://www.envoyproxy.io/)
* [FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [उदाहरण प्रलेखन](https://github.com/envoyproxy/examples/)
* [ब्लॉग](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) थ्रेडिंग मॉडल के बारे में
* [ब्लॉग](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) हॉट रीस्टार्ट के बारे में
* [ब्लॉग](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) स्टैट्स आर्किटेक्चर के बारे में
* [ब्लॉग](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) यूनिवर्सल डेटा प्लेन API के बारे में
* [ब्लॉग](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) Lyft के Envoy डैशबोर्ड्स पर

## संबंधित (Related)

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): v2 API परिभाषाएँ एक स्टैंडअलोन
  रिपॉजिटरी के रूप में। यह [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/) का रीड-ओनली मिरर है।
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): प्रदर्शन परीक्षण फ्रेमवर्क।
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): नए फिल्टर जोड़ने का उदाहरण
  और मुख्य रिपॉजिटरी से लिंक करना।

## संपर्क (Contact)

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): कम फ्रीक्वेंसी वाली मेलिंग
  लिस्ट जिसमें केवल घोषणाएँ भेजी जाएँगी।
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): कम फ्रीक्वेंसी वाली मेलिंग
  लिस्ट जिसमें केवल सुरक्षा संबंधित घोषणाएँ भेजी जाएँगी।
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): सामान्य उपयोगकर्ता चर्चा।
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Envoy डेवलपर चर्चा (APIs,
  फीचर डिजाइन, आदि)।
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): इस सूची का उपयोग करें
  सभी मुख्य Envoy मेंटेनर्स तक पहुँचने के लिए।
* [Twitter](https://twitter.com/EnvoyProxy/): ट्विटर पर फॉलो करें!
* [Slack](https://envoyproxy.slack.com/): स्लैक, आमंत्रण प्राप्त करने के लिए [यहाँ जाएँ](https://communityinviter.com/apps/envoyproxy/envoy)।
  * नोट: स्लैक पर उपयोगकर्ता प्रश्नों का उत्तर सर्वोत्तम प्रयास के आधार पर दिया जाता है। "गारंटीड" उत्तर के लिए कृपया
    envoy-users@ को निम्नलिखित लिंक किए गए थ्रेड के अनुसार ईमेल करें।

कृपया ईमेल सूची उपयोग के बारे में जानकारी के लिए [यह](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) ईमेल थ्रेड देखें।

## योगदान (Contributing)

Envoy में योगदान करना मजेदार है और आधुनिक C++ उतना डरावना नहीं है जितना आप सोच सकते हैं, भले ही आपको पूर्व अनुभव न हो। आरंभ करने के लिए:

* [योगदान गाइड](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [शुरुआती मुद्दे](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [डॉकर का उपयोग करके त्वरित बिल्ड/टेस्ट शुरूआत](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [डेवलपर गाइड](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Envoy [डेवलपमेंट सपोर्ट टूलचेन](https://github.com/envoyproxy/envoy/blob/main/support/README.md) स्थापित करने पर विचार करें, जो डेवलपमेंट प्रक्रिया के कुछ हिस्सों को स्वचालित करने में मदद करता है, विशेष रूप से कोड समीक्षा से संबंधित।
* कृपया सुनिश्चित करें कि यदि आप किसी मुद्दे पर काम कर रहे हैं, तो हमें बताएं ताकि हम दोहराव से बच सकें!

## सामुदायिक बैठक (Community Meeting)

Envoy टीम का निर्धारित बैठक समय प्रति माह दो बार मंगलवार को सुबह 9 बजे PT होता है। सार्वजनिक
Google कैलेंडर [यहाँ](https://goo.gl/PkDijT) है।  बैठक तभी आयोजित की जाएगी
यदि [बैठक मिनट्स](https://goo.gl/5Cergb) में एजेंडा आइटम सूचीबद्ध हैं।  समुदाय का कोई भी सदस्य
मिनट्स में जोड़कर एजेंडा आइटम प्रस्तावित कर सकता है।  मेंटेनर्स या तो एजेंडा में परिवर्धन की पुष्टि करेंगे,
या यदि कोई पुष्टि किया गया एजेंडा नहीं है तो निर्धारित तिथि के 24 घंटों के भीतर बैठक रद्द कर देंगे।

## सुरक्षा (Security)

### सुरक्षा ऑडिट (Security Audit)

Envoy सुरक्षा पर केंद्रित कई तृतीय पक्ष सहभागिता रही है:
* 2018 में Cure53 ने एक सुरक्षा ऑडिट किया, [पूर्ण रिपोर्ट](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf)।
* 2021 में Ada Logics ने हमारे फज़िंग इन्फ्रास्ट्रक्चर पर एक ऑडिट किया और सुधार के लिए सिफारिशें दीं, [पूर्ण रिपोर्ट](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf)।

### सुरक्षा कमजोरियों की रिपोर्टिंग

यदि आपने Envoy में कोई कमजोरी या संभावित कमजोरी पाई है तो कृपया हमें
[envoy-security](mailto:envoy-security@googlegroups.com) पर बताएं। हम आपकी रिपोर्ट की पुष्टि के लिए एक ईमेल भेजेंगे, और
समस्या की पहचान होने पर या न होने पर एक अतिरिक्त ईमेल भेजेंगे।

अधिक जानकारी के लिए कृपया हमारी पूरी [सुरक्षा रिलीज प्रक्रिया](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md) देखें।

### ppc64le बिल्ड्स

ppc64le आर्किटेक्चर या aws-lc का उपयोग करने वाले बिल्ड्स Envoy सुरक्षा नीति के अंतर्गत नहीं आते। ppc64le आर्किटेक्चर वर्तमान में सर्वोत्तम प्रयास के आधार पर है और Envoy मेंटेनर्स द्वारा मेंटेन नहीं किया जाता।

## रिलीज़ (Releases)

अधिक जानकारी के लिए कृपया हमारी [रिलीज प्रक्रिया](https://github.com/envoyproxy/envoy/blob/main/RELEASES.md) देखें।


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---