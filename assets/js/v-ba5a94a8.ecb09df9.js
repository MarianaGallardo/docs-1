"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9046],{12710:(e,a,n)=>{n.r(a),n.d(a,{default:()=>l});var t=n(78e3);const o=[(0,t.uE)('<p>El elemento contable le permite definir de forma sistemática una estructura de cuentas y los parámetros que serán utilizados en el Tipo de Aplicación contable.</p><p>Esta estructura actúa como el plan de cuentas contable, presentando una lista de cuentas contables en las cuales serán registrados los hechos contables generados desde los procesos administrativos de ADempiere ERP. Estos elementos generalmente son ordenados bajo una codificación que facilitan el reconocimiento de cada cuenta.</p><p>El método consiste en asignar un número decimal que nos permita asociar la clasificación de las cuentas:</p><p>Cuentas Reales: Son denominadas así las cuentas que mantienen saldo durante y posterior a un periodo contable y que son conservadas en el balances. Generalmente estas cuentas son útiles para Generar Informe Financiero, dentro de estas cuentas se encuentran:</p><p>Activos: Se refiere a los bienes de los que una empresa dispone y tiene derechos, sean tangibles o intangibles.</p><p>Pasivos: Se refiere a los compromisos u obligaciones que la empresa contrae con una entidad.</p><p>Patrimonio: Se refiere a los aportes realizados por accionistas de la empresa.</p><p>Cuentas Nominales: Son denominadas así las cuentas que son cerradas al finalizar el período contable, transfiriendo el saldo a las cuentas reales, y posteriormente iniciarán con saldo cero, con el objetivo de iniciar el balance con estas cuentas limpias, dentro de estas cuentas se encuentran:</p><p>Ingresos: Se refiere a la ganancia o dinero que ingresa a la empresa.</p><p>Costos: Se refiere al dinero que egresa de la empresa con la finalidad de generar un activo.</p><p>Gastos: Se refiere al dinero que egresa de la empresa que no genera activos.</p><p>Estas cuentas han sido estandarizadas a nivel mundial de la siguiente forma:</p><table><thead><tr><th>Activos</th><th>Pasivos</th><th>Patrimonio</th><th>Ingresos</th><th>Costos</th><th>Gastos</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr></tbody></table><p>En ADempiere los códigos de las cuentas son conformados con números con la siguiente estructura:</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image464.png" alt="Campo"></p><p>Imagen 1. Estructura de Cuentas Contables</p><p>Para este ejemplo podríamos establecer la siguiente figura:</p><table><thead><tr><th>Activos</th><th>Corrientes</th><th>Disponibles</th><th>Banco</th><th>Cuenta Bancaria</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1</td><td>0001</td><td>0001</td></tr></tbody></table><p>El elemento contable es necesario para la definición del esquema contable, que a su vez define el óptimo funcionamiento de ADempiere, esto es porque cada transacción administrativa generará un asiento contable y por ende son requeridas las cuentas contables.</p><p>En esta oportunidad ERPyA ha diseñado para usted un material en el cual se define detalladamente esta ventana que frecuentemente será visitada por usted, que ha decidido incursionar en el uso de ADempiere ERP.</p><ul><li>Registro de Elemento Contable</li></ul><h2 id="registro-de-elemento-contable" tabindex="-1"><a class="header-anchor" href="#registro-de-elemento-contable" aria-hidden="true">#</a> Registro de Elemento Contable</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Análisis de Desempeño</strong>, luego seleccione la carpeta <strong>Reglas Contables</strong>, por último seleccione la ventana <strong>Elemento Contable</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image465.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Elemento Contable</strong>, con los diferentes registros de elementos contables que posee la misma.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image466.png" alt="Campo"></p><p>Imagen 2. Ventana Elemento Contable</p><p>Seleccione la pestaña <strong>Valor de Elemento</strong>, para crear un nuevo registro de valor en el elemento contable.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image467.png" alt="Campo"></p><p>Imagen 3. Pestaña Valor de Elemento</p><p>Luego de ubicarse en el registro del valor del elemento, seleccione el icono <strong>Registro Nuevo</strong>, para crear un nuevo registro de valor del elemento.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image468.png" alt="Campo"></p><p>Imagen 4. Icono Registro Nuevo de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el registro.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image469.png" alt="Campo"></p><p>Imagen 5. Campo Organización de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Código</strong>, el código correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image470.png" alt="Campo"></p><p>Imagen 6. Campo Código de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Cuenta Padre</strong>, la cuenta padre correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image471.png" alt="Campo"></p><p>Imagen 7. Campo Cuenta Padre de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Nombre</strong>, el nombre correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image472.png" alt="Campo"></p><p>Imagen 8. Campo Nombre de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Descripción</strong>, la descripción correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image473.png" alt="Campo"></p><p>Imagen 9. Campo Descripción de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Tipo de Cuenta</strong>, el tipo de cuenta correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image474.png" alt="Campo"></p><p>Imagen 10. Campo Tipo de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Introduzca en el campo <strong>Naturaleza de Cuenta</strong>, la naturaleza de la cuenta correspondiente al registro que esta realizando.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image475.png" alt="Campo"></p><p>Imagen 11. Campo Naturaleza de Cuenta de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Cuenta Controlada</strong>, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta controlada.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image476.png" alt="Campo"></p><p>Imagen 12. Checklist Cuenta Controlada de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Cuenta de Banco</strong>, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta de banco.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image477.png" alt="Campo"></p><p>Imagen 13. Checklist Cuenta de Banco de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Al tildar el checklist <strong>Cuenta de Banco</strong>, es habilitado el campo <strong>Cuenta Bancaria</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image478.png" alt="Campo"></p><p>Imagen 14. Campo Cuenta Bancaria de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Cuenta en Moneda Extranjera</strong>, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta en moneda extranjera.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image479.png" alt="Campo"></p><p>Imagen 15. Checklist Cuenta en Moneda Extranjera de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Al tildar el checklist <strong>Cuenta en Moneda Extranjera</strong>, es habilitado el campo <strong>Moneda</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image480.png" alt="Campo"></p><p>Imagen 16. Campo Moneda de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Entidad Acumulada</strong>, para indicar que la cuenta en la cual será utilizado este registro, es una cuenta sumaria.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image481.png" alt="Campo"></p><p>Imagen 17. Checklist Entidad Acumulada de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Note</p><p>La selección de este checklist, oculta la visibilidad de los demas checklist que se encuentran en la pestaña <strong>Valor de Elemento</strong>.</p><p>Seleccione el checklist <strong>Aplicar Actuales</strong>, para indicar que la cuenta en la cual será utilizado este registro, los valores acutales pueden ser contabilizados.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image482.png" alt="Campo"></p><p>Imagen 18. Checklist Aplicar Actuales de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Aplicar Presupuesto</strong>, para indicar que la cuenta en la cual será utilizado este registro, los valores del presupuesto pueden ser aplicados.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image483.png" alt="Campo"></p><p>Imagen 19. Checklist Aplicar Presupuesto de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el checklist <strong>Aplicar Estadísticas</strong>, para indicar que serán registradas las cantidades estadísticas en la cuenta en la cual sea utilizado este registro.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image484.png" alt="Campo"></p><p>Imagen 20. Checklist Aplicar Estadística de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña <strong>Valor de Elemento</strong>.</p><p><img src="/assets/img/docs/accounting-management/acm-accounting-image485.png" alt="Campo"></p><p>Imagen 21. Icono Guardar Cambios de la Pestaña Valor de Elemento de la Ventana Elemento Contable</p>',87)],s={},l=(0,n(13860).Z)(s,[["render",function(e,a){return(0,t.wg)(),(0,t.iD)("div",null,o)}]])},31541:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-ba5a94a8","path":"/docs/accounting-management/element.html","title":"Elemento Contable","lang":"es-ES","frontmatter":{"title":"Elemento Contable","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El elemento contable le permite definir de forma sistemática una estructura de cuentas y los parámetros que serán utilizados en el Tipo de Aplicación contable. Esta estructura actú","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/accounting-management/element.html"}],["meta",{"property":"og:title","content":"Elemento Contable"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Elemento Contable","slug":"registro-de-elemento-contable","children":[]}],"git":{"createdTime":1678314887000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":4.52,"words":1357},"filePathRelative":"docs/accounting-management/element.md","localizedDate":"8 de marzo de 2023"}')}}]);