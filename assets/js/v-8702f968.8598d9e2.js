"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2539],{68075:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78e3);const s=[(0,n.uE)('<p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar un imprimir/exportar para culminar el procedimiento de manera exitosa en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><ul><li>Registro de Imprimir / Exportar Pagos <ul><li>Consultar Documento de Pago Generado</li></ul></li><li>Registro de Imprimir / Exportar Pagos de Nómina</li></ul><h2 id="registro-de-imprimir-exportar-pagos" tabindex="-1"><a class="header-anchor" href="#registro-de-imprimir-exportar-pagos" aria-hidden="true">#</a> Registro de Imprimir / Exportar Pagos</h2><p>Para poder generar los pagos de los documentos asociados a una selección de pago, se deben realizar los siguientes pasos:</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione ventana <strong>Imprimir / Exportar Pagos</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image103.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Imprimir / Exportar Pagos</strong> el cual cuenta con los siguientes campos:</p><p><img src="/assets/img/docs/balance-management/bam-balance-image104.png" alt="Campo"></p><p>Imagen 2. Ventana Imprimir / Exportar Pagos</p><p>Campo <strong>Selección de Pago</strong>,este es un campo tipo búsqueda el cual es utilizado para ubicar las selección de pagos de cuentas por pagar, el cual contiene los documentos los cuales se les generarán los pagos.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image105.png" alt="Campo"></p><p>Imagen 3. Campo Selección de Pago</p><p>Para ubicar la selección de pago está se puede realizar de dos maneras:</p><p>La primera opción es colocar directamente dentro del campo <strong>Selección de Pago</strong> el número de documento de la <strong>Selección de Pagos de Cuentas por Pagar</strong>, al realizar dicho procedimiento en ADempiere traerá automáticamente la selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image106.png" alt="Campo"></p><p>Imagen 4. Búsqueda Selección de Pago Directa</p><p>La segunda opción es tildar el botón de búsqueda que se encuentra al finalizar el campo <strong>Selección de Pago</strong> el cual tiene un ícono de una flecha hacia abajo, al tildar está opción se desplegará una ventana de búsqueda inteligente el cual posee los siguientes campos de búsqueda, los cuales pueden ser utilizados para ubicar la selección de pagos de cuentas por pagar.</p><p>Campo <strong>N° de Documento</strong> en este campo se puede colocar el número de documento de la selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image107.png" alt="Campo"></p><p>Imagen 5. Campo Nro de documento de ventana de búsqueda Selección de Pago</p><p>Note</p><p>Es importante recordar que ADempiere cuenta con un comodín de búsqueda el cual es signo porcentual <strong>(%)</strong> el cual puede ser utilizado dentro de un campo de búsqueda colocando un valor de búsqueda con el signo del porcentaje estando al inicio y final de la palabra o valor que se desea buscar ejemplo: %77%.</p><p>Esto permite realizar búsquedas más extensa del valor que se esté colocando, es decir sí en el campo <strong>N° de Documento</strong> es colocado %77% ADempiere ubicará todas las selecciones de pagos que contengan ese valor en el número de documento, ya sea que se encuentre al iniciar , al final o en la parte central.</p><p>Campo <strong>Nombre</strong></p><p><img src="/assets/img/docs/balance-management/bam-balance-image108.png" alt="Campo"></p><p>Imagen 6. Campo Nombre de ventana de búsqueda <strong>Selección de Pago</strong></p><p>Dependiendo de la opción de búsqueda que se utilice, en la parte central de esta ventana se mostrará la o las selecciones de pagos que ubique ADempiere, tilde la selección de pago con la que desea trabajar.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image109.png" alt="Campo"></p><p>Imagen 7. Tildar selección de pago</p><p>Al ubicar la selección de pago presione el botón <strong>Ok</strong> de la ventana de búsqueda, al tildar el botón ADempiere lo llevará nuevamente a la ventana principal <strong>Imprimir/Exportar Pagos</strong></p><p><img src="/assets/img/docs/balance-management/bam-balance-image110.png" alt="Campo"></p><p>Imagen 8. Botón Ok</p><p>Podrá Observar que el campo <strong>Selección de Pago</strong> se encuentra el número de documento de la selección de pago de cuentas por pagar.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image111.png" alt="Campo"></p><p>Imagen 9. Ventana de Registro guardado</p><p>Campo <strong>Cuenta Bancaria</strong> debe aparecer el banco con el que se encuentra trabajando la selección de pagos de cuentas por pagar qué ha sido ubicada en el campo <strong>Selección de Pago</strong>, por ejemplo:</p><p>Sí al momento de crear la selección de pago de cuentas por pagar, fue asociada el banco <strong>Banco Provincial S.A. Banco Universal</strong> esté debe aparecer en este campo con el número de cuenta correspondiente a él. Este banco es el banco en donde se emitirán los pagos</p><p><img src="/assets/img/docs/balance-management/bam-balance-image112.png" alt="Campo"></p><p>Imagen 10. Campo Cuenta Bancaria</p><p>Note</p><p>Para realizar la creación de una selección de pagos de cuentas por pagar visite el documento Registro desde Selección de Pago.</p><p>Campo **Regla de Pago ** este campo debe traer la regla de pago establecida en la selección de pagos de cuentas por pagar. Cabe destacar, que dependiendo de la regla de pago con la que cuente la selección de pago se definirá la acción que se utilizará para generar los pagos.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image113.png" alt="Campo"></p><p>Imagen 11. Campo Regla de Pago</p><p>Campo <strong>Documento No.</strong> este campo mostrará el número de documento de la regla de pago con la que se esté trabajando, cada regla de pago tendrá un número de documento y esté irá incrementado a medida que se deseen generar los pagos desde esta ventana, como por ejemplo:</p><p>Para las reglas de pagos <strong>Cheque</strong> si ADempiere está debidamente configurado está regla de pago bajo el banco con el que se esté trabajando, ADempiere irá incrementado su secuencia del número de documento con el número de cheque que realmente debe salir por ese banco.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image114.png" alt="Campo"></p><p>Imagen 12. Documento No</p><p>Campo <strong>Saldo Actual</strong> este campo mostrará el saldo actual que posee el banco a mostrar en el campo <strong>Cuenta Bancaria</strong> qué es el mismo qué tiene asociada la selección de pago de cuentas por pagar.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image115.png" alt="Campo"></p><p>Imagen 13. Campo Saldo Actual</p><p>Campo <strong>Moneda</strong> es la moneda con la que se emitirán los pagos, la moneda a mostrar es la misma que tiene asociada selección de pago de cuentas por pagar.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image116.png" alt="Campo"></p><p>Imagen 14. Campo Moneda</p><p>Campo <strong>Número de Pagos</strong> debe mostrar los pagos a generar por cada uno de los documentos asociados en la selección de pagos de cuentas por pagar,los pagos a generar dependen de las siguientes características:</p><p>Sí la selección de pago posee dos o más documentos de un mismos socio de negocio y apuntan a una misma cuenta bancaria, ADempiere generará un pago a ese socio de negocio con la suma de los documentos de ese proveedor, ejemplo:</p><p>En la selección de pago se encuentra cuatro (3) facturas asociadas, dos de esas facturas pertenecen a un mismo proveedor <strong>Dhl Express Aduanas Venezuela C.A.</strong></p><p>La <strong>Factura N°1</strong> tiene el total de pago 10.000,00 del socio del negocio <strong>Dhl Express Aduanas Venezuela C.A.</strong> a la cuenta bancaria **100 % Banco, Banco Universal, C.A._0156 **</p><p>La <strong>Factura N°2</strong> tiene un total pagado 30.000,00 con el mismo socio de negocio y la misma cuenta bancaria de la <strong>Factura N°1</strong>.</p><p>La factura <strong>Factura N°3</strong> tiene un total de pago de 15.000,00 a otro socio de negocio con la cuenta bancaria <strong>Mercantil C.A. Banco Universal_0105</strong>.</p><p>El número a mostrar en el total de pagos será 2 , ya que la factura N°1 y la Factura N° 2 pertenecen a un mismo socio de negocio y apuntan a una misma cuenta bancaria, ADempiere realizará un pago para esas dos facturas, cuando se complete el procedimiento se generará los siguientes pagos:</p><p>El <strong>Pago N°1</strong> a la cuenta **100 % Banco, Banco Universal, C.A._0156 ** del socio de negocio <strong>Dhl Express Aduanas Venezuela C.A.</strong> por un total de 40.000,00.</p><p>El <strong>Pago N°2</strong> la cuenta bancaria <strong>Mercantil C.A. Banco Universal_0105</strong> del otro socio del negocio por un total de 15.000,00.</p><p>Sí la selección de pago posee dos o más documentos de un mismos socio de negocio pero estos apuntan a diferentes cuentas bancarias, ADempiere generará el pago por la cantidad de documentos asociados a ese proveedor que contenga cuentas bancarias diferentes, ejemplo:</p><p>En la selección de pago se encuentra tres (3) facturas asociadas, dos de esas facturas pertenecen a un mismo proveedor <strong>Dhl Express Aduanas Venezuela C.A.</strong> :</p><p>La <strong>Factura N° 1</strong> tiene el total de pago 10.000,00 está asociada la cuenta bancaria **100 % Banco, Banco Universal, C.A._0156 **.</p><p>La <strong>factura N° 2</strong> es del mismos proveedor de la factura N°1 con un total pagado 30.000,00 y está asociada a la cuenta bancaria <strong>Mercantil C.A. Banco Universal_0105</strong>.</p><p>La <strong>Factura N°3</strong> se encuentra asociada a otro proveedor por un total de 40.000,00 al banco <strong>Mercantil C.A. Banco Universal_0105</strong>.</p><p>El número a mostrar en el total de pagos serán tres, a pesar de que esté posee dos facturas con un mismo socio de negocio en este caso no se unirán los pagos por qué en la selección de pago las facturas del socio de negocio que se repite poseen cuentas bancarias diferentes, entonces cuando se complete el procedimiento ADempiere generará tres pagos:</p><p>El <strong>Pago N°1</strong> al socio del negocio <strong>Dhl Express Aduanas Venezuela C.A.</strong> a la cuenta bancaria **100 % Banco, Banco Universal, C.A._0156 ** por 10.000,00</p><p>El <strong>Pago N°2</strong> al socio del negocio <strong>Dhl Express Aduanas Venezuela C.A.</strong> a la cuenta bancaria <strong>Mercantil C.A. Banco Universal_0105</strong> por 30.000,00.</p><p>El <strong>Pago N°3</strong> al otro socio de negocio a la cuenta bancaria <strong>Mercantil C.A. Banco Universal_0105</strong> por un total de 40.000,00.</p><p>Sí la selección de pagos posee documentos asociados con diferentes socios de negocios ADempiere generará un pago por cada uno de los documentos qué se encuentre asociados a la selección de pagos, ejemplo:</p><p>En la selección de pagos tienen tres facturas asociadas con diferentes socios de negocios el número a mostrar en el total de pagos serán tres, entonces cuando se complete el procedimiento ADempiere generará tres pagos.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image117.png" alt="Campo"></p><p>Imagen 15. Número de Pagos</p><p>Para generar los pagos de la selección de pago se pueden ADempiere cuenta con las siguientes opciones <strong>Exportar Registros</strong>, <strong>Imprimir</strong> dependiendo de la regla de pago con la que se encuentre trabajando la selección de pago se deben utilizar las siguientes opciones:</p><p><img src="/assets/img/docs/balance-management/bam-balance-image118.png" alt="Campo"></p><p>Imagen 16. Opciones Imprimir/Exportar Pagos</p><p>Para las selecciones de pago que cuenten con las reglas de pago <strong>A crédito, Débito directo, Depósito directo</strong> se debe utilizar la opción <strong>Exportar Registros</strong>, esta opción genera los pagos de los documentos asociados a la selección de pago y le permitirá generar el archivo txt de esos pagos para poder ser cargado en el banco.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image119.png" alt="Campo"></p><p>Imagen 17. Opción Exportar Registros</p><p>Al seleccionar la opción <strong>Exportar Registros</strong> ADempiere mostrará una ventana donde se observará las carpetas del equipo donde se encuentre trabajando, esto para que ubique y guarde el archivo txt que será llevado al banco.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image120.png" alt="Campo"></p><p>Imagen 18. Ventana para Ubicar el Txt</p><p>Podrá observar una vez guarde el archivo txt, un mensaje del número de registro de líneas guardadas, este número a mostrar dependerá de los registros asociados a cada una de las líneas de la selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image121.png" alt="Campo"></p><p>Imagen 19. Mensaje Número de Registro de Líneas Guardadas</p><p>Una vez tildada la opción ok de la ventana del número de registro de líneas guardadas, ADempiere mostrará el siguiente mensaje donde indica que la impresión ha sido correcta, es decir que los pagos se han generado correctamente.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image122.png" alt="Campo"></p><p>Imagen 20. Mensaje Impresión Correcta</p><p>Para las selecciones de pago que cuenten con las reglas de pago <strong>A crédito, Cheque, Tarjeta de crédito</strong> se debe utilizar la opción <strong>Imprimir</strong>, esta opción genera los pagos de los documentos asociados a la selección de pago y le permitirá imprimir el cheque desde ADempiere.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image123.png" alt="Campo"></p><p>Imagen 21. Opción Imprimir</p><p>Podrá visualizar la siguiente ventana con el mensaje de confirmación, en la cual debe seleccionar la opción <strong>OK</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image124.png" alt="Campo"></p><p>Imagen 22. Ventana con Mensaje de Confirmación</p><p>ADempiere genera el documento del registro del pago realizado a la factura desde la selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image125.png" alt="Campo"></p><p>Imagen 23. Comprobante de Relación de Pago</p><h2 id="consultar-documento-de-pago-generado" tabindex="-1"><a class="header-anchor" href="#consultar-documento-de-pago-generado" aria-hidden="true">#</a> Consultar Documento de Pago Generado</h2><p>Para ubicar en ADempiere los pagos generados de una selección de pagos a través de la opción imprimir/exportar pago se pueden ubicar de la siguiente forma:</p><p>Una de las opciones es ubicar los pagos directamente de la ventana <strong>Pago/Cobro</strong>, para ello realice los siguientes pasos:</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione la ventana <strong>Pago/Cobro</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image126.png" alt="Campo"></p><p>Imagen 24. Menú de ADempiere</p><p>Ubique en la barra de herramientas de ADempiere la opción <strong>Encontrar Registro</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image127.png" alt="Campo"></p><p>Imagen 25. Opción Encontrar Registro</p><p>Al tildar la opción de la barra de herramientas de ADempiere <strong>Encontrar Registro</strong> ADempiere mostrará una ventana de búsqueda la cual cuenta con varios criterios de búsquedas los cuales pueden ser utilizados para encontrar el pago o los pagos que se deseen ubicar.</p><p>Para este caso se desea ubicar los pagos generados desde la opción imprimir/exportar pagos, si al momento de hacer la búsqueda sabe cual es el número de documento asociado a la selección de pago y ese documento es una factura puede utilizar el criterio de búsqueda <strong>Factura</strong>.</p><p>Si no puede utilizar cualquiera de los criterios de búsqueda que le ofrece la ventana.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image128.png" alt="Campo"></p><p>Imagen 26. Ventana de búsqueda Encontrar Registros</p><p>Dependiendo de los criterios de búsqueda utilizados, podrá observar en la ventana el pago generado.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image129.png" alt="Campo"></p><p>Imagen 27. Pago Generado</p><p>Otra opción de búsqueda es ubicar los pagos desde la ventana <strong>Selección de Pagos</strong>, para ello realice los siguientes pasos:</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione la ventana <strong>Selección de Pagos</strong> y ubique la selección de pagos con la que trabajo en el proceso de imprimir/exportar pagos.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image130.png" alt="Campo"></p><p>Imagen 28. Ventana Selección de Pago</p><p>Note</p><p>Recuerde que toda ventana en ADempiere cuenta en la barra de herramientas la opción de búsqueda <strong>Encontrar Registros</strong> la cual puede ser utilizada para ubicar la selección de pagos.</p><p>Una vez ubicada la selección de pago tilde la pestaña <strong>Pago Generado</strong>, dentro de esta pestaña podrá observar un resumen de los pagos generados por socios de negocios con los que cuenta la selección de pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image131.png" alt="Campo"></p><p>Imagen 29. Pestaña Pago Generado</p><p>Para visualizar mejor el pago generado ubique dentro de la pestaña y dentro del registro del socio del negocio en el que se encuentre posicionado, el campo <strong>Pago</strong>, ese campo mostrará el número de documento del pago generado al socio del negocio,</p><p><img src="/assets/img/docs/balance-management/bam-balance-image132.png" alt="Campo"></p><p>Imagen 30. Campo Pago de la Pestaña Pago Generado</p><p>Ubíquese dentro del campo <strong>Pago</strong>, de click derecho y seleccione la opción acercar.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image133.png" alt="Campo"></p><p>Imagen 31. Opción acercar del campo Pago</p><p>Al tildar la opción acercar, ADempiere lo llevará a la ventana <strong>Pago/Cobro</strong> y podrá ver de manera detallada los datos asociados a ese pago.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image134.png" alt="Campo"></p><p>Imagen 32. Ventana Pago/Cobro desde el acercar</p><h2 id="registro-de-imprimir-exportar-pagos-de-nomina" tabindex="-1"><a class="header-anchor" href="#registro-de-imprimir-exportar-pagos-de-nomina" aria-hidden="true">#</a> Registro de Imprimir / Exportar Pagos de Nómina</h2><p>Es un proceso que permite generar un lote de pagos asociados a una selección de pagos, esto se puede realizar de 2 maneras</p><p>Exportar Pagos: Asocia las transacciones bancarias cuyas reglas de pagos sean Depósito ó Débito Directo</p><p>Imprimir Pagos: Asocia las transacciones cuyas reglas de pago sean de tipo Cheque</p><p>Luego de completar la selección de pago, procedemos a exportar los lotes de pagos. No se puede exportar los pagos sí no a completado la selección de pago</p><p>Debemos dirigirnos en la ventana <strong>Imprimir Exportar Pagos</strong> y lo primero que vamos a seleccionar es la selección de pagos que completamos anteriormente en el campo que dice <strong>Selección de Pagos</strong>.</p><p>Automáticamente aparecerá la cuenta bancaria que está definida en la selección de pagos en el Campo <strong>Cuenta Bancaria</strong></p><p>La regla de pago debe decir <strong>Débito Directo</strong> en el campo <strong>Regla de Pago</strong></p><p>Después de realizado este procedimiento debe ir al icono llamado exportar que se encuentra en la parte inferior izquierda de la ventana.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image135.png" alt="Campo"></p><p>Imagen 1. Imprimir Exportar</p><p>Para terminar este procedimiento el ADempiere le mostrará un mensaje de alerta que le dirá la cantidad de líneas que serán generadas dentro del formato txt, debe darle ok.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image136.png" alt="Campo"></p><p>Imagen 2. Líneas Exportadas</p><p>Después le dará otro mensaje de alerta para que usted confirme si el archivo descargado es correcto, si usted no está seguro por favor seleccione la opción NO, sí el archivo es correcto proceda a confirmar este procedimiento.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image137.png" alt="Campo"></p><p>Imagen 3. Confirmar Archivo Descargado</p><p>Posteriormente se descargara el archivo txt, previamente configurado con los datos que requiere el banco emisor para que pueda ser subido al banco sin ningún problema</p><p><img src="/assets/img/docs/balance-management/bam-balance-image138.png" alt="Campo"></p><p>Imagen 4. Archivo Descargado</p><p>Al culminar este proceso automáticamente serán generados los pagos a cada empleado en ADempiere</p><p>note:</p><p>Para este ejemplo de Transferencia Bancaria se trabajo con la cuenta de la caja asociada al Banco Nacional de Crédito, y el archivo descargado contiene todos los requisitos exigidos por este banco para su aprobación</p>',159)],r={},t=(0,o(13860).Z)(r,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,s)}]])},72234:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-8702f968","path":"/docs/balance-management/print.html","title":"Imprimir / Exportar Pagos","lang":"es-ES","frontmatter":{"title":"Imprimir / Exportar Pagos","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/balance-management/print.html"}],["meta",{"property":"og:title","content":"Imprimir / Exportar Pagos"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Imprimir / Exportar Pagos","slug":"registro-de-imprimir-exportar-pagos","children":[]},{"level":2,"title":"Consultar Documento de Pago Generado","slug":"consultar-documento-de-pago-generado","children":[]},{"level":2,"title":"Registro de Imprimir / Exportar Pagos de Nómina","slug":"registro-de-imprimir-exportar-pagos-de-nomina","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":10.01,"words":3002},"filePathRelative":"docs/balance-management/print.md","localizedDate":"9 de marzo de 2023"}')}}]);