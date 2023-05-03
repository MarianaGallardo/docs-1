"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8958],{67859:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var o=a(78e3);const r=[(0,o.uE)('<p>Esta documentación está destinada a definir la gestión de devoluciones de ADempiere para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimientos descritos aquí recuerde que de eso dependerá el buen uso del ERP.</p><p>La versión 3.9.2 de ADempiere en la localización Venezuela, contempla la documentación de los siguientes maestros necesarios para generar de manera existosa las transacciones del mismo.</p><ul><li>Devolución de Cliente <ul><li>Autorización de Devolución (Cliente)</li><li>Devolución (Cliente)</li><li>Nota de Crédito por Devolución (Cliente)</li><li>Consultar Saldos Abiertos</li><li>Consultar Detalle de Transacciones</li></ul></li><li>Devolución a Proveedor <ul><li>Autorización de Devolución a Proveedor</li><li>Devolución a Proveedor</li><li>Completar Nota de Crédito Generada</li><li>Consultar Saldos Abiertos</li><li>Consultar Detalle de Transacciones</li></ul></li></ul><h2 id="devolucion-de-cliente" tabindex="-1"><a class="header-anchor" href="#devolucion-de-cliente" aria-hidden="true">#</a> Devolución de Cliente</h2><p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar una <strong>Devolución de Cliente</strong> en la versión 3.9.2 de ADempiere en la localización Venezuela. Dicho proceso de devolución es realizado generando un documento de autorización de devolución y porterior a ello, los documentos de devolución y nota de crédito correspondientes, los mismos son necesarios para reflejar el ingreso de los productos al almacén y disminuir el saldo de la factura.</p><ul><li>Autorización de Devolución (Cliente)</li><li>Devolución (Cliente)</li><li>Nota de Crédito por Devolución (Cliente)</li><li>Consultar Saldos Abiertos</li><li>Consultar Detalle de Transacciones</li></ul><h3 id="autorizacion-de-devolucion-cliente" tabindex="-1"><a class="header-anchor" href="#autorizacion-de-devolucion-cliente" aria-hidden="true">#</a> Autorización de Devolución (Cliente)</h3><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la ventana <strong>Orden de Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image1.png" alt="Campo"></p><p>Imagen 1. Autorización de Devolución (Cliente)</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/return-management/rem-return-image2.png" alt="Campo"></p><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el documento <strong>Autorización de Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image3.png" alt="Campo"></p><p>Imagen 3. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento Destino</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/return-management/rem-return-image4.png" alt="Campo"></p><p>Imagen 4. Campo Tipo de Documento Destino</p><p>Seleccione en el campo <strong>Fecha de la Orden</strong>, la fecha en la que se esta realizando el documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image5.png" alt="Campo"></p><p>Imagen 5. Campo Fecha de la Orden</p><p>Seleccione en el campo <strong>Tipo Autorización Devolución</strong>, el motivo por el cual son devueltos los productos. Para ejemplificar el registro es utilizada la opción <strong>Producto Erróneo</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image6.png" alt="Campo"></p><p>Imagen 6. Campo Tipo Autorización Devolución</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio cliente seleccionado en la orden de venta.</p><p><img src="/assets/img/docs/return-management/rem-return-image7.png" alt="Campo"></p><p>Imagen 7. Campo Socio del Negocio</p><p>Seleccione en el campo <strong>Dirección del Socio del Negocio</strong>, la dirección del socio del negocio cliente seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image8.png" alt="Campo"></p><p>Imagen 8. Campo Dirección del Socio del Negocio</p><p>Seleccione en el campo <strong>Almacén</strong>, el almacén en el que serán ingresados los productos.</p><p><img src="/assets/img/docs/return-management/rem-return-image9.png" alt="Campo"></p><p>Imagen 9. Campo Almacén</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios seleccionada en la orden de venta.</p><p><img src="/assets/img/docs/return-management/rem-return-image10.png" alt="Campo"></p><p>Imagen 10. Campo Lista de Precios</p><p>Seleccione en el campo <strong>Agente Comercial</strong>, el vendedor que realiza la orden de venta.</p><p><img src="/assets/img/docs/return-management/rem-return-image11.png" alt="Campo"></p><p>Imagen 11. Campo Agente Comercial</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, para guardar el registro de los campos.</p><p><img src="/assets/img/docs/return-management/rem-return-image12.png" alt="Campo"></p><p>Imagen 12. Icono Guardar Cambios</p><p>Seleccione el icono <strong>Proceso</strong> en la barra de herramientas.</p><p><img src="/assets/img/docs/return-management/rem-return-image13.png" alt="Campo"></p><p>Imagen 13. Icono Proceso</p><p>Podrá apreciar un menú desplegado por el icono <strong>Proceso</strong>, en el cual debe seleccionar la opción <strong>Crear Orden de Devolución desde Entrega / Recibo</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image14.png" alt="Campo"></p><p>Imagen 14. Menú del Icono Proceso</p><p>Podrá apreciar la seguiente ventana de búsqueda inteligente en la cual debe seleccionar en el campo <strong>Entrega / Recibo</strong>, el documento de entrega con ayuda del identificador.</p><p><img src="/assets/img/docs/return-management/rem-return-image15.png" alt="Campo"></p><p>Imagen 15. Campo Entrega / Recibo</p><p>Seleccione el documento de entrega y luego seleccione la opción <strong>OK</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image16.png" alt="Campo"></p><p>Imagen 16. Opción OK</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para apreciar los productos entregados al cliente.</p><p><img src="/assets/img/docs/return-management/rem-return-image17.png" alt="Campo"></p><p>Imagen 17. Opción Comenzar Búsqueda</p><p>Seleccione el producto de la devolución e introduzca la cantidad de la devolución en la columna cantidad.</p><p><img src="/assets/img/docs/return-management/rem-return-image18.png" alt="Campo"></p><p>Imagen 18. Producto a Devolver</p><p>Seleccione la opción <strong>OK</strong>, para cargar los productos a la pestaña <strong>Línea de Autorización</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image19.png" alt="Campo"></p><p>Imagen 19. Opción OK</p><p>Seleccione la pestaña <strong>Línea de Autorización</strong>, para verificar que las cantidades, el producto y el precio cargado sean los correctos.</p><p><img src="/assets/img/docs/return-management/rem-return-image20.png" alt="Campo"></p><p>Imagen 20. Pestaña Línea de Autorización</p><p>Regrese a la ventana principal <strong>Autorización de Devolución</strong> y seleccione la opción <strong>Completar</strong> ubicada en la parte inferior derecha del documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image21.png" alt="Campo"></p><p>Imagen 21. Completar Documento</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el documento.</p><p><img src="/assets/img/docs/return-management/rem-return-image22.png" alt="Campo"></p><p>Imagen 22. Acción Completar</p><h3 id="devolucion-cliente" tabindex="-1"><a class="header-anchor" href="#devolucion-cliente" aria-hidden="true">#</a> Devolución (Cliente)</h3><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Entregas</strong>, por último seleccione la ventana de búsqueda inteligente <strong>Generar Entregas Desde Líneas de Orden</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image23.png" alt="Campo"></p><p>Imagen 23. Menú de ADempiere</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio seleccionado en el documento de <strong>Orden de Devolución Cliente</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image24.png" alt="Campo"></p><p>Imagen 24. Campo Socio del Negocio</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para buscar los documentos de ventas relacionados con el socio del negocio seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image25.png" alt="Campo"></p><p>Imagen 25. Opción Comenzar Búsqueda</p><p>Podrá apreciar las órdenes de ventas y las autorizaciones de devoluciones realizadas al socio del negocio seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image26.png" alt="Campo"></p><p>Imagen 26. Órdenes y Autorizaciones al Socio</p><p>Ubique y seleccione el documento <strong>Orden de Devolución Cliente</strong> a utilizar para crear el documento <strong>Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image27.png" alt="Campo"></p><p>Imagen 27. Seleccionar Orden de Devolución Cliente</p><p>Se mostrará las opciones del campo <strong>Acción de Documento</strong>, como se visualiza en este ejemplo la acción <strong>Completar</strong>, de esta manera se generará el documento con estado <strong>Completo</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image28.png" alt="Campo"></p><p>Imagen 28. Acción del Documento</p><p>Seleccione la opción <strong>OK</strong>, para generar el documento <strong>Devolución (Cliente)</strong> desde el documento <strong>Orden de Devolución Cliente</strong> seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image29.png" alt="Campo"></p><p>Imagen 29. Opción OK</p><p>Seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Devoluciones</strong>, luego seleccione la ventana <strong>Devolución Cliente</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image30.png" alt="Campo"></p><p>Imagen 30. Menú de ADempiere</p><p>Podrá apreciar el documento <strong>Devolución Cliente</strong>, creado desde la ventana de búsqueda inteligente.</p><p><img src="/assets/img/docs/return-management/rem-return-image31.png" alt="Campo"></p><p>Imagen 31. Documento Devolución Cliente</p><p>Note</p><p>La elaboración de este proceso permite ingresar nuevamente los productos seleccionados anteriormente al almacén de la empresa.</p><h2 id="nota-de-credito-por-devolucion-cliente" tabindex="-1"><a class="header-anchor" href="#nota-de-credito-por-devolucion-cliente" aria-hidden="true">#</a> Nota de Crédito por Devolución (Cliente)</h2><p>Para generar el documento <strong>Nota de Crédito por Devolución (Cliente)</strong>, debe existir obligatoriamente una factura para aplicar la nota de crédito. Para ejemplificar el registro de la devolución de cliente se utiliza la factura número <strong>84884</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image32.png" alt="Campo"></p><p>Imagen 32. Factura 84884</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Facturas de Ventas</strong>, por último seleccione la ventana de búsqueda inteligente <strong>Generar Facturas desde Líneas de la Orden</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image33.png" alt="Campo"></p><p>Imagen 33. Menú de ADempiere</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio del documento <strong>Autorización de Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image34.png" alt="Campo"></p><p>Imagen 34. Campo Socio del Negocio 3</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para buscar los documentos relacionados con el socio del negocio seleccionado.</p><p><img src="/assets/img/docs/return-management/rem-return-image35.png" alt="Campo"></p><p>Imagen 35. Opción Comenzar Búsqueda</p><p>Seleccione el documento <strong>Autorización de Devolución (Cliente)</strong> a utilizar para crear el documento <strong>Nota de Crédito por Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image36.png" alt="Campo"></p><p>Imagen 36. Seleccionar Autorización de Devolución Cliente</p><p>Se mostrará las opciones del campo <strong>Acción de Documento</strong>, como se visualiza en este ejemplo la acción <strong>Completar</strong>, de esta manera se generará el documento con estado <strong>Completo</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image37.png" alt="Campo"></p><p>Imagen 37. Acción de Documento</p><p>Destilde el checklist <strong>Agregar Línea de Referencia en Factura</strong> para que no se genere una línea en el documento solo con la referencia de la transacción.</p><p><img src="/assets/img/docs/return-management/rem-return-image38.png" alt="Campo"></p><p>Imagen 38. Checklist Agregar Línea de Referencia en Factura</p><p>Seleccione la opción <strong>OK</strong>, para que se genere el documento <strong>Nota de Crédito por Devolución (Cliente)</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image39.png" alt="Campo"></p><p>Imagen 39. Opción OK</p><p>Podrá visualizar el mensaje donde indica que se creó la nota de crédito desde la autorización de devolución <strong>ADCN-1000014</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image40.png" alt="Campo"></p><p>Imagen 40. Mensaje de Creación de Nota de Crédito</p><p>Seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Facturas de Ventas</strong>, por último seleccione la ventana <strong>Documentos por Cobrar</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image41.png" alt="Campo"></p><p>Imagen 41. Menú de ADempiere</p><p>Podrá apreciar el documento <strong>Nota de Crédito por Devolución (Cliente)</strong>, creado desde la ventana de búsqueda inteligente.</p><p><img src="/assets/img/docs/return-management/rem-return-image42.png" alt="Campo"></p><p>Imagen 42. Documento Nota de Crédito</p><p>En la pestaña <strong>Línea de la Factura</strong>, podrá visualizar la factura afectada número <strong>84884</strong>.</p><p><img src="/assets/img/docs/return-management/rem-return-image43.png" alt="Campo"></p><p>Imagen 43. Pestaña del Documento Nota de Crédito</p><h3 id="consultar-saldos-abiertos" tabindex="-1"><a class="header-anchor" href="#consultar-saldos-abiertos" aria-hidden="true">#</a> Consultar Saldos Abiertos</h3><p>Al consultar saldos abiertos se verifica que la nota de crédito haya sido aplicada a la factura, generando con ello un descuento al saldo abierto del socio del negocio de la siguiente manera.</p><p><img src="/assets/img/docs/return-management/rem-return-image44.png" alt="Campo"></p><p>Imagen 44. Consultar Saldos Abiertos</p><h2 id="consultar-detalle-de-transacciones" tabindex="-1"><a class="header-anchor" href="#consultar-detalle-de-transacciones" aria-hidden="true">#</a> Consultar Detalle de Transacciones</h2><p>Al consultar los detalles de transacciones se verifican los movimientos de salida de productos por medio de una entrega, generando con ello un descuento al total de productos. De igual manera es reflejada la entrada del mismo producto por medio de una devolución de cliente, generando con ello un aumento al total de productos en existencia.</p><p><img src="/assets/img/docs/return-management/rem-return-image45.png" alt="Campo"></p><p>Imagen 45. Consultar Detalle de Transacciones</p>',148)],t={},i=(0,a(13860).Z)(t,[["render",function(e,n){return(0,o.wg)(),(0,o.iD)("div",null,r)}]])},55024:(e,n,a)=>{a.r(n),a.d(n,{data:()=>o});const o=JSON.parse('{"key":"v-5fa11cb8","path":"/docs/return-management/customer-return.html","title":"Gestión de Devoluciones","lang":"en-US","frontmatter":{"title":"Gestión de Devoluciones","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Esta documentación está destinada a definir la gestión de devoluciones de ADempiere para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimien","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/return-management/customer-return.html"}],["meta",{"property":"og:title","content":"Gestión de Devoluciones"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-03T13:26:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-04-03T13:26:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Devolución de Cliente","slug":"devolucion-de-cliente","children":[{"level":3,"title":"Autorización de Devolución (Cliente)","slug":"autorizacion-de-devolucion-cliente","children":[]},{"level":3,"title":"Devolución (Cliente)","slug":"devolucion-cliente","children":[]}]},{"level":2,"title":"Nota de Crédito por Devolución (Cliente)","slug":"nota-de-credito-por-devolucion-cliente","children":[{"level":3,"title":"Consultar Saldos Abiertos","slug":"consultar-saldos-abiertos","children":[]}]},{"level":2,"title":"Consultar Detalle de Transacciones","slug":"consultar-detalle-de-transacciones","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1680528397000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4}]},"readingTime":{"minutes":6.38,"words":1913},"filePathRelative":"docs/return-management/customer-return.md","localizedDate":"March 8, 2023"}')}}]);