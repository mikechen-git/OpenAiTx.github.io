![Logotipo de Envoy](https://github.com/envoyproxy/artwork/blob/main/PNG/Envoy_Logo_Final_PANTONE.png)

[Proxy de borde/intermedio/servicio de alto rendimiento y nativo en la nube](https://www.envoyproxy.io/)

Envoy está alojado por la [Cloud Native Computing Foundation](https://cncf.io) (CNCF). Si eres una
empresa que desea ayudar a dar forma a la evolución de tecnologías empaquetadas en contenedores,
programadas dinámicamente y orientadas a microservicios, considera unirte a la CNCF. Para obtener detalles sobre quiénes
participan y cómo Envoy juega un papel, lee el
[anuncio](https://www.cncf.io/blog/2017/09/13/cncf-hosts-envoy/) de la CNCF.

[![CII Mejores Prácticas](https://bestpractices.coreinfrastructure.org/projects/1266/badge)](https://bestpractices.coreinfrastructure.org/projects/1266)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/envoyproxy/envoy/badge)](https://securityscorecards.dev/viewer/?uri=github.com/envoyproxy/envoy)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/envoy/badge)](https://clomonitor.io/projects/cncf/envoy)
[![Azure Pipelines](https://dev.azure.com/cncf/envoy/_apis/build/status/11?branchName=main)](https://dev.azure.com/cncf/envoy/_build/latest?definitionId=11&branchName=main)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/envoy.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:envoy)
[![Jenkins](https://powerci.osuosl.org/buildStatus/icon?job=build-envoy-static-master&subject=ppc64le%20build)](https://powerci.osuosl.org/job/build-envoy-static-master/)
[![Jenkins](https://ibmz-ci.osuosl.org/buildStatus/icon?job=Envoy_IBMZ_CI&subject=s390x%20build)](https://ibmz-ci.osuosl.org/job/Envoy_IBMZ_CI/)

## Documentación

* [Documentación oficial](https://www.envoyproxy.io/)
* [Preguntas frecuentes (FAQ)](https://www.envoyproxy.io/docs/envoy/latest/faq/overview)
* [Documentación de ejemplos](https://github.com/envoyproxy/examples/)
* [Blog](https://medium.com/@mattklein123/envoy-threading-model-a8d44b922310) sobre el modelo de hilos
* [Blog](https://medium.com/@mattklein123/envoy-hot-restart-1d16b14555b5) sobre reinicio en caliente
* [Blog](https://medium.com/@mattklein123/envoy-stats-b65c7f363342) sobre la arquitectura de estadísticas
* [Blog](https://medium.com/@mattklein123/the-universal-data-plane-api-d15cec7a) sobre la API universal de data plane
* [Blog](https://medium.com/@mattklein123/lyfts-envoy-dashboards-5c91738816b1) sobre los tableros de Envoy de Lyft

## Relacionados

* [data-plane-api](https://github.com/envoyproxy/data-plane-api): definiciones de la API v2 como repositorio independiente. Este es un espejo de solo lectura de [api](https://raw.githubusercontent.com/envoyproxy/envoy/main/api/).
* [envoy-perf](https://github.com/envoyproxy/envoy-perf): Marco de pruebas de rendimiento.
* [envoy-filter-example](https://github.com/envoyproxy/envoy-filter-example): Ejemplo de cómo agregar nuevos filtros
  y enlazarlos al repositorio principal.

## Contacto

* [envoy-announce](https://groups.google.com/forum/#!forum/envoy-announce): Lista de correo de baja frecuencia donde solo enviaremos anuncios.
* [envoy-security-announce](https://groups.google.com/forum/#!forum/envoy-security-announce): Lista de correo de baja frecuencia donde solo enviaremos anuncios relacionados con seguridad.
* [envoy-users](https://groups.google.com/forum/#!forum/envoy-users): Discusión general de usuarios.
* [envoy-dev](https://groups.google.com/forum/#!forum/envoy-dev): Discusión para desarrolladores de Envoy (APIs,
  diseño de funcionalidades, etc.).
* [envoy-maintainers](https://groups.google.com/forum/#!forum/envoy-maintainers): Usa esta lista
  para contactar a todos los mantenedores principales de Envoy.
* [Twitter](https://twitter.com/EnvoyProxy/): ¡Síguenos en Twitter!
* [Slack](https://envoyproxy.slack.com/): Slack, para obtener una invitación ve [aquí](https://communityinviter.com/apps/envoyproxy/envoy).
  * NOTA: La respuesta a preguntas de usuarios en Slack es un esfuerzo voluntario. Para una respuesta "garantizada" por favor escribe a envoy-users@ siguiendo la guía en el siguiente hilo enlazado.

Consulta [este](https://groups.google.com/forum/#!topic/envoy-announce/l9zjYsnS3TY) hilo de correo
para información sobre el uso de las listas de correo.

## Contribuir

Contribuir a Envoy es divertido y C++ moderno es mucho menos intimidante de lo que podrías pensar si no tienes experiencia previa. Para comenzar:

* [Guía de contribución](https://raw.githubusercontent.com/envoyproxy/envoy/main/CONTRIBUTING.md)
* [Problemas para principiantes](https://github.com/envoyproxy/envoy/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner)
* [Guía rápida para construir/probar usando docker](https://raw.githubusercontent.com/envoyproxy/envoy/main/ci#building-and-running-tests-as-a-developer)
* [Guía para desarrolladores](https://raw.githubusercontent.com/envoyproxy/envoy/main/DEVELOPER.md)
* Considera instalar la [cadena de herramientas de soporte de desarrollo](https://github.com/envoyproxy/envoy/blob/main/support/README.md) de Envoy, que ayuda a automatizar partes del proceso de desarrollo, particularmente aquellas que involucran revisión de código.
* ¡Por favor avísanos si estás trabajando en un issue para evitar duplicar trabajo!

## Reunión comunitaria

El equipo de Envoy tiene una reunión programada dos veces al mes los martes a las 9am PT. El calendario público de Google está [aquí](https://goo.gl/PkDijT).  La reunión solo se llevará a cabo
si hay temas en la agenda listados en las [minutas de la reunión](https://goo.gl/5Cergb).  Cualquier miembro de la comunidad puede proponer temas agregándolos a las minutas.  Los mantenedores confirmarán
las adiciones a la agenda, o cancelarán la reunión dentro de las 24 horas previas a la fecha programada si no hay agenda confirmada.

## Seguridad

### Auditoría de seguridad

Ha habido varios compromisos de terceros enfocados en la seguridad de Envoy:
* En 2018 Cure53 realizó una auditoría de seguridad, [informe completo](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_cure53_2018.pdf).
* En 2021 Ada Logics realizó una auditoría en nuestra infraestructura de fuzzing con recomendaciones de mejoras, [informe completo](https://raw.githubusercontent.com/envoyproxy/envoy/main/docs/security/audit_fuzzer_adalogics_2021.pdf).

### Reportar vulnerabilidades de seguridad

Si has encontrado una vulnerabilidad o una posible vulnerabilidad en Envoy por favor avísanos en
[envoy-security](mailto:envoy-security@googlegroups.com). Te enviaremos un correo de confirmación
para reconocer tu reporte, y te enviaremos un correo adicional cuando hayamos identificado el problema
positiva o negativamente.

Para más detalles por favor consulta nuestro [proceso completo de publicación de seguridad](https://raw.githubusercontent.com/envoyproxy/envoy/main/SECURITY.md).

### Builds ppc64le

Las builds para la arquitectura ppc64le o usando aws-lc no están cubiertas por la política de seguridad de Envoy. La arquitectura ppc64le es actualmente best-effort y no está mantenida por los mantenedores de Envoy.

## Lanzamientos

Para más detalles por favor consulta nuestro [proceso de lanzamientos](https://raw.githubusercontent.com/envoyproxy/envoy/main/RELEASES.md).


---

Tranlated By [Open Ai Tx](https://github.com/OpenAiTx/OpenAiTx) | Last indexed: 2025-06-12

---