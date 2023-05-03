"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8477],{57419:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});var i=n(78e3);const o=[(0,i.uE)('<p>La dimensión contable es una funcionalidad incorporada por ADempiere utilizada para unir información haciendo un recuento de los hechos contables que componen cada entidad. De esta forma, se define dimensiones primarias o secundarias respecto a las principales, esto quiere decir, que puede existir una dimensión acumulativa que derive a su vez múltiples dimensiones que posibilitan la implementación de métricas sumarias de cada una o agrupadas por la dimensión padre.</p><p>Estas dimensiones contables sustituyen cuentas auxiliares utilizadas comúnmente por los contadores para visualizar en detalle saldos, por ejemplo de socios de negocios que actúan como accionistas, para entenderlo mejor veamos el siguiente ejemplo:</p><p>Imaginemos una empresa que requiere ver el saldos contable de los pasivos de cada accionista de la empresa, para esto la empresa ha definido una cuentas llamada <strong>CUENTAS POR PAGAR SOCIOS Y ACCIONISTAS-MARTÍN PIÑEROS</strong> que muestra el detalle del pasivo del accionista Martín Piñeros. Así mismo, se agrega un nivel más al plan de cuentas, agregando tantas cuentas como accionistas existan, quedando de la siguiente forma:</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image399.png" alt="Campo"></p><p>Imagen 1. Plan de cuentas con dimensiones</p><p>Sin embargo, ADempiere contempla una visión holística y minimalista, que elimina la creación de múltiples cuentas contables para el detalle y a su vez las sustituye por las dimensiones contables, creando una combinación entre la cuenta contable y la dimensión, quedando de la siguiente forma:</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image400.png" alt="Campo"></p><p>Imagen 2. Dimensión Contable de Socio de Negocio</p><p>Por su parte, al crear una transacción con esta dimensión contable el resultado será el siguiente:</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image401.png" alt="Campo"></p><p>Imagen 3. Dimensión Contable ADempiere</p><p>Las entidades con las que ADempiere permite dimensionar los diferentes hechos contables son las siguientes:</p><p>Organización: Representa una entidad legal dentro de la empresa, generalmente estructurada de forma dependiente a la compañía principal, esta puede ser una sucursal, tienda o franquicia.</p><p>Socio de negocio: Representa un sujeto jurídico o natural con el que la organización establece una alianza temporal o permanente, este puede ser un proveedor, cliente, accionista o empleado. Para profundizar más este tema vaya a el documento: Registro de Socio del Negocio.</p><p>Producto: Representa el resultado obtenido de una producción, que es utilizado durante la compra o la venta, este puede ser servicio o artículo. Para profundizar más este tema vaya a el documento: Registro de Producto.</p><p>Región de Venta: Representa una zona de venta o conjunto de clientes o prospectos que son asignados a un vendedor y con las que la empresa puede establecer un negocio. Para profundizar más este tema vaya a el documento: Registro de Región de Ventas.</p><p>Actividad: Representa las actividades realizadas en la empresa, generalmente un departamento, permitiendo determinar el costo o el gasto de cada actividad.</p><p>Proyecto: Representa la planificación de actividades relacionadas al cumplimiento de un objetivo específico, generalmente delimitado por fases y tareas.</p><p>Campaña: Representa la agrupación de actividades realizadas con la finalidad de lograr un determinado objetivo.</p><p>Elementos Personalizados: A menudo los clientes han preguntado ¿Cómo hacemos si nosotros manejamos una dimensión u otro elemento para medir nuestro desempeño?.</p><p>Pues bien, ADempiere deja a disposición del cliente cinco campos para personalizar a su criterio, los mismos, funcionan exactamente igual a las dimensiones anteriormente explicadas, estos son:</p><p>Usuario1</p><p>Usuario2</p><p>Usuario3</p><p>Usuario4</p><p>Usuario5</p><p>Se puede decir entonces que una dimensión es el respaldo que da una entidad a un hecho contable, este sustituye la segmentación de cuentas contables mediante creación de cuentas detalles, en consecuencia, los asientos contables son generados a partir de las transacciones en las cuales intervienen las entidades consideradas dimensiones.</p><p>Finalmente, esta funcionalidad es implementada desde los reportes contables detallados hasta los informes financieros, permitiendo esquematizar la información de forma segmentada por entidad.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image402.png" alt="Campo"></p><p>Imagen 4. Menú de ADempiere</p><h2 id="dimension-organizacion" tabindex="-1"><a class="header-anchor" href="#dimension-organizacion" aria-hidden="true">#</a> Dimensión Organización</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image403.png" alt="Campo"></p><p>Imagen 5. Pestaña Dimensión Organización</p><h2 id="dimension-region-de-ventas" tabindex="-1"><a class="header-anchor" href="#dimension-region-de-ventas" aria-hidden="true">#</a> Dimensión Región de Ventas</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image404.png" alt="Campo"></p><p>Imagen 6. Pestaña Dimensión Región de Ventas</p><h2 id="dimension-actividad" tabindex="-1"><a class="header-anchor" href="#dimension-actividad" aria-hidden="true">#</a> Dimensión Actividad</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image405.png" alt="Campo"></p><p>Imagen 7. Pestaña Dimensión Actividad</p><h2 id="dimension-proyecto" tabindex="-1"><a class="header-anchor" href="#dimension-proyecto" aria-hidden="true">#</a> Dimensión Proyecto</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image406.png" alt="Campo"></p><p>Imagen 8. Pestaña Dimensión Proyecto</p><h2 id="dimension-socio-del-negocio" tabindex="-1"><a class="header-anchor" href="#dimension-socio-del-negocio" aria-hidden="true">#</a> Dimensión Socio del Negocio</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image407.png" alt="Campo"></p><p>Imagen 9. Pestaña Dimensión Socio del Negocio</p><h2 id="dimension-producto" tabindex="-1"><a class="header-anchor" href="#dimension-producto" aria-hidden="true">#</a> Dimensión Producto</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image408.png" alt="Campo"></p><p>Imagen 10. Pestaña Dimensión Producto</p><h2 id="dimension-campana" tabindex="-1"><a class="header-anchor" href="#dimension-campana" aria-hidden="true">#</a> Dimensión Campaña</h2><p><img src="/assets/img/docs/accounting-management/acm-accounting-image409.png" alt="Campo"></p><p>Imagen 11. Pestaña Dimensión Campaña</p>',51)],s={},t=(0,n(13860).Z)(s,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,o)}]])},11815:(e,a,n)=>{n.r(a),n.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-58876c7d","path":"/docs/accounting-management/dimensions.html","title":"Dimensiones Contables","lang":"en-US","frontmatter":{"title":"Dimensiones Contables","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"La dimensión contable es una funcionalidad incorporada por ADempiere utilizada para unir información haciendo un recuento de los hechos contables que componen cada entidad. De esta","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/accounting-management/dimensions.html"}],["meta",{"property":"og:title","content":"Dimensiones Contables"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-03T13:26:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-04-03T13:26:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Dimensión Organización","slug":"dimension-organizacion","children":[]},{"level":2,"title":"Dimensión Región de Ventas","slug":"dimension-region-de-ventas","children":[]},{"level":2,"title":"Dimensión Actividad","slug":"dimension-actividad","children":[]},{"level":2,"title":"Dimensión Proyecto","slug":"dimension-proyecto","children":[]},{"level":2,"title":"Dimensión Socio del Negocio","slug":"dimension-socio-del-negocio","children":[]},{"level":2,"title":"Dimensión Producto","slug":"dimension-producto","children":[]},{"level":2,"title":"Dimensión Campaña","slug":"dimension-campana","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1680528397000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3}]},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"docs/accounting-management/dimensions.md","localizedDate":"March 8, 2023"}')}}]);