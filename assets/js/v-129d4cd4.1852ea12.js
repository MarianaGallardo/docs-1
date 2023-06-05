"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7125],{37133:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});var o=n(78e3);const s=[(0,o.uE)('<p>ADempiere permite definir diferentes conversiones monetarias y estas a su vez, diferentes tasas de cambio que permiten realizar la conversión una moneda a otra para gestionar de manera efectiva las transacciones de compra/venta de la empresa u organización. El proceso de conversión monetaria se puede realizar de forma manual o automática, y es explicado de manera detallada en sus respectivos documentos.</p><ul><li>Conversión Manual</li><li>Tipo de Conversión</li><li>Tasa de Conversión desde la Ventana Moneda</li><li>Tasa de Conversión desde la Ventana Tasa de Cambio</li><li>Conversión Automática</li><li>Conversión Automática por Tipo de Conversión</li></ul><h2 id="conversion-manual" tabindex="-1"><a class="header-anchor" href="#conversion-manual" aria-hidden="true">#</a> Conversión Manual</h2><p>La conversión manual consiste en crear en ADempiere los tipos de conversión con los cuales va a trabajar la empresa. Esta funcionalidad permite lo siguiente:</p><p>Tasa de Conversión Diaria: Al trabajar con diferentes monedas en los procesos de compra/venta de la organización, se vuelve obligatoría la creación de las tasas de cambio diariamente en los diferentes tipos de conversión con los que trabaja dicha organización. Adicional a ello, la fecha final del rango o periodo de la tasa de cambio, siempre debe ser igual a la fecha de inicio de dicho rango o periodo.</p><p>En el caso de que el usuario intente crear una tasa de cambio con el mismo tipo de conversión y moneda utilizado previamente el mismo día, al intentar guardar el registro existirá una validación que no permitirá completar el proceso.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image997.png" alt="Campo"></p><p>Imagen 1. Ejemplo de Validación</p><p>Crear Tasa Recíproca: Esta funcionalidad permite que al guardar el registro sea creada de manera automática una tasa de cambio como reverso.</p><p>Note</p><p>Un ejemplo de este caso puede ser cuando el usuario crea una tasa de cambio de moneda <strong>VES</strong> a moneda <strong>USD</strong> con una tasa multiplicadora 2 entonces automáticamente se creará una tasa de cambio de moneda <strong>USD</strong> a <strong>VES</strong> con la tasa multiplicadora 0.5</p><p>../../../_images/tasa-cambio-reciproca.gif Video 1. Tasa de Cambio</p><p>En el siguiente enlace puede descargar un ejemplo del mismo para visualizarlo mejor Convert Video</p><h2 id="tipo-de-conversion" tabindex="-1"><a class="header-anchor" href="#tipo-de-conversion" aria-hidden="true">#</a> Tipo de Conversión</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Análisis de Desempeño</strong>, luego seleccione la carpeta <strong>Reglas Contables</strong>, por último seleccione la ventana <strong>Tipo de Conversión</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image207.png" alt="Campo"></p><p>Imagen 2. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Tipo de Conversión</strong>, con los diferentes registros que contiene dicha ventana.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image208.png" alt="Campo"></p><p>Imagen 3. Ventana Tipo de Conversión</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image209.png" alt="Campo"></p><p>Imagen 4. Icono Registro Nuevo de la Ventana Tipo de Conversión</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta creando el registro de tipo de conversión.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image990.png" alt="Campo"></p><p>Imagen 5. Campo Organización de la Ventana Tipo de Conversión</p><p>Introduzca en el campo <strong>Código</strong>, el código correspondiente al registro de tipo de conversión que se encuentra realizando, para este caso es utilizado el código <strong>BCV</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image210.png" alt="Campo"></p><p>Imagen 6. Campo Código de la Ventana Tipo de Conversión</p><p>Introduzca en el campo <strong>Nombre</strong> el nombre correspondiente al registro de tipo de conversión que se encuentra realizando, para este caso es utilizado el nombre de conversión <strong>BCV</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image211.png" alt="Campo"></p><p>Imagen 7. Campo Nombre de la Ventana Tipo de Conversión</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción correspondiente al registro de tipo de conversión que se encuentra realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image212.png" alt="Campo"></p><p>Imagen 8. Campo Descripción de la Ventana Tipo de Conversión</p><p>El checklist <strong>Activo</strong>, indica que el registro se encuentra activo y puede ser utilizado en cualquier transacción que lo requiera.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image213.png" alt="Campo"></p><p>Imagen 9. Checklist Activo de la Ventana Tipo de Conversión</p><p>Seleccione el checklist <strong>Predeterminado</strong>, para indicar como predeterminado el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image214.png" alt="Campo"></p><p>Imagen 10. Checklist Predeterminado de la Ventana Tipo de Conversión</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere.</p><h2 id="tasa-de-conversion-desde-la-ventana-moneda" tabindex="-1"><a class="header-anchor" href="#tasa-de-conversion-desde-la-ventana-moneda" aria-hidden="true">#</a> Tasa de Conversión desde la Ventana Moneda</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Análisis de Desempeño</strong>, luego seleccione la carpeta <strong>Reglas Contables</strong>, por último seleccione la ventana <strong>Moneda</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image215.png" alt="Campo"></p><p>Imagen 11. Menú de ADempiere</p><p>Seleccione el registro de la moneda para la cual requiere registrar una tasa de conversión. Para ejemplificar el registro es utilizada la moneda <strong>USD</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image216.png" alt="Campo"></p><p>Imagen 12. Registro de Moneda USD en ADempiere</p><p>Seleccione la pestaña <strong>Tasas de Cambio</strong> para navegar entre los diferentes registros de tasas de cambio correspondientes a la moneda <strong>USD</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image217.png" alt="Campo"></p><p>Imagen 13. Pestaña Tasas de Cambio de la Ventana Moneda</p><p>Seleccione el icono <strong>Registro Nuevo</strong> para crear un nuevo registro de tasas de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image218.png" alt="Campo"></p><p>Imagen 14. Icono Registro Nuevo de la Pestaña Tasas de Cambio</p><p>Warning</p><p>La tasa de cambio se debe crear de dólares a bolívares y de bolívares a dólares.</p><p>Seleccione en el campo <strong>Moneda Hacia</strong>, la moneda para la cual requiere convertir el dinero. Para ejemplificar el registro es utilizada la moneda <strong>VES</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image219.png" alt="Campo"></p><p>Imagen 15. Campo Moneda Hacia de la Pestaña Tasas de Cambio</p><p>Seleccione en el campo <strong>Tipo de Conversión</strong>, el tipo de conversión a utilizar. Para este caso es utilizado el tipo de conversión <strong>BCV</strong>, creado anteriormente.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image220.png" alt="Campo"></p><p>Imagen 16. Campo Tipo de Conversión de la Pestaña Tasas de Cambio</p><p>Seleccione en el campo <strong>Válido Desde</strong>, la fecha desde la cual es válida la tasa de conversión que se encuentra realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image221.png" alt="Campo"></p><p>Imagen 17. Campo Válido Desde de la Pestaña Tasas de Cambio</p><p>Seleccione en el campo <strong>Válido Hasta</strong>, la fecha hasta la cual es válida la tasa de conversión que se encuentra realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image222.png" alt="Campo"></p><p>Imagen 18. Campo Válido Hasta de la Pestaña Tasas de Cambio</p><p>Introduzca en el campo <strong>Factor de Base a Destino</strong>, la tasa por la que serán multiplicados los montos de las transacciones donde sea utilizado el tipo de conversión seleccionado anteriormente. Para ejemplificar el registro es utilizada la tasa <strong>82.000,0</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image223.png" alt="Campo"></p><p>Imagen 19. Campo Factor de Base a Destino de la Pestaña Tasas de Cambio</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere.</p><h2 id="tasa-de-conversion-desde-la-ventana-tasa-de-cambio" tabindex="-1"><a class="header-anchor" href="#tasa-de-conversion-desde-la-ventana-tasa-de-cambio" aria-hidden="true">#</a> Tasa de Conversión desde la Ventana Tasa de Cambio</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Análisis de Desempeño</strong>, luego seleccione la carpeta <strong>Reglas Contables</strong>, por último seleccione la ventana <strong>Tasa de Cambio</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image224.png" alt="Campo"></p><p>Imagen 20. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Tasa de Cambio</strong>, con diferentes campos que permiten registrar las tasas de cambio según el tipo de conversión.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image225.png" alt="Campo"></p><p>Imagen 21. Ventana Tasa de Cambio</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, para crear un nuevo registro de tasa de cambio según el tipo de conversión.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image226.png" alt="Campo"></p><p>Imagen 22. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual se encuentra realizando el registro de tasa de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image227.png" alt="Campo"></p><p>Imagen 23. Campo Organización</p><p>Seleccione en el campo <strong>Moneda</strong>, la moneda origen de la conversión.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image228.png" alt="Campo"></p><p>Imagen 24. Campo Moneda</p><p>Seleccione en el campo <strong>Moneda Hacia</strong>, la moneda destino de la conversión.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image229.png" alt="Campo"></p><p>Imagen 25. Campo Moneda Hacia</p><p>Seleccione en el campo <strong>Tipo de Conversión</strong>, el tipo de conversion de la tasa de cambio que se encuentra registrando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image230.png" alt="Campo"></p><p>Imagen 26. Campo Tipo de Conversión</p><p>Seleccione en el campo <strong>Válido Desde</strong>, la fecha de inicio del periodo de validez de la tasa de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image231.png" alt="Campo"></p><p>Imagen 27. Campo Válido Desde</p><p>Seleccione en el campo <strong>Válido Hasta</strong>, la fecha final del periodo de validez de la tasa de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image232.png" alt="Campo"></p><p>Imagen 28. Campo Válido Hasta</p><p>Introduzca en el campo <strong>Factor de Destino a Base</strong>, la tasa por la que serán multiplicados los montos de las transacciones donde sea utilizado el tipo de conversión seleccionado anteriormente. Para ejemplificar el registro es utilizada la tasa <strong>82.000,0</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image233.png" alt="Campo"></p><p>Imagen 29. Campo Factor de Destino a Base</p><p>Note</p><p>Recuerde guardar los cambios realizados seleccionando el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere.</p><h2 id="conversion-automatica" tabindex="-1"><a class="header-anchor" href="#conversion-automatica" aria-hidden="true">#</a> Conversión Automática</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Operaciones de Intercambio</strong>, luego seleccione el proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image234.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana del proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong>, para ejecutar el mismo.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image235.png" alt="Campo"></p><p>Imagen 2. Ventana Obtener Tasas de Cambio desde Proveedor</p><p>La ventana del proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong> contiene lo siguiente:</p><p>Checklist <strong>Obtener Tasas para la Moneda del Esquema Contable</strong>: Este permite limitar la búsqueda de tasas de cambio a la moneda establecida en el esquema contable. De no ser tildado este checklist, el proceso no hará filtro por la moneda del esquema contable.</p><p>Campo <strong>Fecha de la Transacción</strong>: Este permite determinar el rango de fecha para obtener las tasas de cambio. El proceso aplica el filtro si el proveedor de servicio permite hacer búsqueda por rango de fecha. Tomando en cuenta que un proveedor de servicio es el proveedor al cual se conectará la aplicación para la consulta de tasas de cambio.</p><p>Podrá visualizar que el checklist <strong>Obtener Tasas para la Moneda del Esquema Contable</strong>, se encuentra tildado para filtrar la búsqueda de tasas de cambio a la moneda del esquema.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image236.png" alt="Campo"></p><p>Imagen 3. Checklist Obtener Tasas para la Moneda del Esquema Contable</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, el rango de fecha para filtrar la búsqueda de tasas de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image237.png" alt="Campo"></p><p>Imagen 4. Campo Fecha de la Transacción</p><p>Seleccione la opción <strong>OK</strong>, para ejecutar el proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong> en base a lo seleccionado en los campos explicados anteriormente.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image238.png" alt="Campo"></p><p>Imagen 5. Opción OK del Proceso Obtener Tasas de Cambio desde Proveedor</p><p>Al ejecutar el proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong>, podrá visualizar las tasas de cambio de la siguiente manera.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image239.png" alt="Campo"></p><p>Imagen 6. Resultado del Proceso Obtener Tasas de Cambio desde Proveedor</p><h2 id="conversion-automatica-por-tipo-de-conversion" tabindex="-1"><a class="header-anchor" href="#conversion-automatica-por-tipo-de-conversion" aria-hidden="true">#</a> Conversión Automática por Tipo de Conversión</h2><p>Ubique y seleccione en el mené de ADempiere, la carpeta <strong>Análisis de Desempeño</strong>, luego seleccione la carpeta <strong>Reglas Contables</strong>, por último seleccione la ventana <strong>Tipo de Conversión</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image240.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Tipo de Conversión</strong>, con los registros de tipos de conversión que contiene ADempiere.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image241.png" alt="Campo"></p><p>Imagen 2. Ventana Tipo de Conversión</p><p>Ubique el registro correspondiente al tipo de conversión desde el cual requiere obtener las tasas de cambio. Para el presente caso, se utiliza el tipo de conversión <strong>BCV</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image242.png" alt="Campo"></p><p>Imagen 3. Tipo de Conversión BCV</p><p>Verifique que el registro de tipo de conversión seleccionado, tenga asociado el proveedor en el campo <strong>Proveedor de Tasas de Cambio</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image243.png" alt="Campo"></p><p>Imagen 4. Campo Proveedor de Tasas de Cambio</p><p>Seleccione la opción <strong>Obtener Tasas de Cambio desde Proveedor</strong>, desplegada al seleccionar el icono <strong>Proceso</strong>, ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image244.png" alt="Campo"></p><p>Imagen 5. Opción Obtener Tasas de Cambio desde Proveedor</p><p>Podrá visualizar la ventana <strong>Obtener Tasas de Cambio desde Proveedor</strong>, con diferentes campos que permiten obtener las tasas de cambio dependiendo de la selección de los mismos.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image245.png" alt="Campo"></p><p>Imagen 6. Ventana del Proceso</p><p>El checklist <strong>Obtener Tasas para la Moneda del Esquema Contable</strong>, se encuentra tildado para filtrar la búsqueda de tasas de cambio a la moneda del esquema.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image246.png" alt="Campo"></p><p>Imagen 7. Checklist Obtener Tasas para la Moneda del Esquema Contable</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, el rango de fecha para filtrar la búsqueda de tasas de cambio.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image247.png" alt="Campo"></p><p>Imagen 8. Campo Fecha de la Transacción</p><p>El checklist <strong>Actualizar Tasas Actuales</strong>, permite atualizar las tasas actuales si coinciden con la fecha.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image248.png" alt="Campo"></p><p>Imagen 9. Checklist Actualizar Tasas Actuales</p><p>Seleccione la opción <strong>OK</strong>, para ejecutar el proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong> en base a lo seleccionado en los campos explicados anteriormente.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image249.png" alt="Campo"></p><p>Imagen 10. Opción OK</p><p>Al ejecutar el proceso <strong>Obtener Tasas de Cambio desde Proveedor</strong>, podrá visualizar las tasas de cambio de la siguiente manera.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image250.png" alt="Campo"></p><p>Imagen 11. Tasas de Cambio Obtenidas del Proveedor</p>',164)],i={},t=(0,n(13860).Z)(i,[["render",function(e,a){return(0,o.wg)(),(0,o.iD)("div",null,s)}]])},41733:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-129d4cd4","path":"/docs/accounting-management/conversion.html","title":"Conversión Monetaria","lang":"es-ES","frontmatter":{"title":"Conversión Monetaria","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"ADempiere permite definir diferentes conversiones monetarias y estas a su vez, diferentes tasas de cambio que permiten realizar la conversión una moneda a otra para gestionar de ma","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/accounting-management/conversion.html"}],["meta",{"property":"og:title","content":"Conversión Monetaria"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Conversión Manual","slug":"conversion-manual","children":[]},{"level":2,"title":"Tipo de Conversión","slug":"tipo-de-conversion","children":[]},{"level":2,"title":"Tasa de Conversión desde la Ventana Moneda","slug":"tasa-de-conversion-desde-la-ventana-moneda","children":[]},{"level":2,"title":"Tasa de Conversión desde la Ventana Tasa de Cambio","slug":"tasa-de-conversion-desde-la-ventana-tasa-de-cambio","children":[]},{"level":2,"title":"Conversión Automática","slug":"conversion-automatica","children":[]},{"level":2,"title":"Conversión Automática por Tipo de Conversión","slug":"conversion-automatica-por-tipo-de-conversion","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":5},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":7.86,"words":2357},"filePathRelative":"docs/accounting-management/conversion.md","localizedDate":"8 de marzo de 2023"}')}}]);