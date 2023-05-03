"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6759],{19214:(e,a,o)=>{o.r(a),o.d(a,{default:()=>s});var n=o(78e3);const i=[(0,n.uE)('<h2 id="simulacion" tabindex="-1"><a class="header-anchor" href="#simulacion" aria-hidden="true">#</a> Simulación</h2><p>La simulación de préstamos es ideal para realizar cálculos rápidos y consultas de préstamos a solicitantes, generando una tabla simulada de amortización completa, además de monto total estimado de impuesto a pagar, monto total estimado de interés a pagar y cuota fija estimada.</p><p>Se creó un formulario o ventana personalizada convirtiendo a ADempiere en una herramienta eficiente y sumamente útil en cuanto a tomas de decisiones se trata tanto para la entidad (Prestamista) como para el solicitante sin ser necesario generar datos y guardar en nuestra base de datos, asimismo, reduce los tiempos de gestión del usuario con ADempiere.</p><p>A continuación se detalla las instrucciones para proceder a simular un préstamo de forma exitosa:</p><p>Vaya a la ventana de Simulador de Préstamo (Adjunto Imagen)</p><p><img src="/assets/img/docs/loan-management/lom-loan-image1.png" alt="Campo"></p><p>Imagen 1. Menú de Préstamos</p><p>A continuación se desplegará la siguiente ventana disponible para simular un préstamo.</p><p><img src="/assets/img/docs/loan-management/lom-loan-image2.png" alt="Campo"></p><p>Imagen 2. Simulador de Préstamo</p><p>Proceda a llenar los parámetros necesarios para la simulación de préstamo:</p><p>Socio del Negocio: Indique el socio del negocio solicitante previamente configurado (Vea Configuraciones Esenciales para el Proceso de Préstamo).</p><p>Producto Financiero: Seleccione el producto financiero o préstamo a aplicar previamente configurado (Vea Configuración de Producto Financiero (Préstamo)),este parámetro posee una validación, los préstamos disponibles en esta lista dependerá de el grupo de socio de negocio al cual pertenezca el socio de negocio seleccionado y la configuración del producto financiero en aplicación de producto.</p><p>Monto de Capital: Indique el monto del préstamo solicitado.</p><p>Frecuencia de Pago: ADempiere establece por herencia la frecuencia configurada en el producto financiero seleccionado, sin embargo puede modificarlo.</p><p>Fecha Inicio: Indique la fecha de inicio del préstamo.</p><p>Fecha Final: ADempiere calcula y establece la fecha basada en la frecuencia y la fecha de inicio, sin embargo puede modificarlo.</p><p>Nro de Cuotas: ADempiere establece por herencia el Nro de cuotas basadas en la cantidad mínima de cuotas configurada en el producto financiero seleccionado, sin embargo puede modificarlo.</p><p>Moneda: ADempiere establece por herencia la moneda basada en la configuración del producto financiero seleccionado, sin embargo puede modificarlo.</p><p>Tasa Financiera: ADempiere establece por herencia la tasa financiera basada en la configuración del producto financiero seleccionado, no puede ser modificado.</p><p><img src="/assets/img/docs/loan-management/lom-loan-image3.png" alt="Campo"></p><p>Imagen 3. Simulador de Préstamo con Parámetros</p><p>Seleccione la opción procesar text</p><p>A continuación verá los siguientes resultados:</p><p><img src="/assets/img/docs/loan-management/lom-loan-image4.png" alt="Campo"></p><p>Imagen 4. Ejecución de Simulador</p><h2 id="interpretando-la-ventana" tabindex="-1"><a class="header-anchor" href="#interpretando-la-ventana" aria-hidden="true">#</a> Interpretando la Ventana</h2><p>Panel de resultados de Amortización Estimada:</p><p>La amortización estimada es generada basada en el sistema francés, el mismo consiste en mantener cuotas de amortización constantes, debido a esto, cada mes la entidad recibe intereses en función del capital pendiente, es decir, en los primeros períodos, la entidad percibe una cantidad mayor de intereses que de capital y en los períodos finales más capital e intereses menores, la frecuencia de las cuotas estimadas (Resultado) varía según la frecuencia de pago seleccionada como parámetro ó heredado desde el producto financiero, el número de cuotas dependerá del Nro de Cuota indicado en el simulador ó heredado desde el producto financiero.</p><p><img src="/assets/img/docs/loan-management/lom-loan-image5.png" alt="Campo"></p><p>Imagen 5. Área de Simulación</p><p>Panel de resultados Totales Estimados:</p><p>Los totales estimados le indicarán al solicitante el Total de Interés, Total de Impuesto, y el Total General en la cual es sumado el Capital más el Total de Interés más Total de Impuesto, arrojando entonces el monto que definitivamente se estima cancelará el solicitante si es procesado el préstamo.</p><p><img src="/assets/img/docs/loan-management/lom-loan-image6.png" alt="Campo"></p><p>Imagen 6. Área de Totales</p><h2 id="generar-prestamo-desde-simulacion" tabindex="-1"><a class="header-anchor" href="#generar-prestamo-desde-simulacion" aria-hidden="true">#</a> Generar Préstamo desde Simulación</h2><p>Una vez procesada la simulación:</p><p><img src="/assets/img/docs/loan-management/lom-loan-image7.png" alt="Campo"></p><p>Imagen 7. Ejecución de Simulador</p><p>Seleccione la opción ok Ok</p><p><img src="/assets/img/docs/loan-management/lom-loan-image8.png" alt="Campo"></p><p>Imagen 8. Área de Acciones</p><p>A continuación se desplegará el siguiente dialogo</p><p><img src="/assets/img/docs/loan-management/lom-loan-image9.png" alt="Campo"></p><p>Imagen 9. Área de Proceso</p><p>Si desea generar el préstamo seleccione la opción ok Ok, caso contrario seleccione la opción cancelar Cancelar</p><p><img src="/assets/img/docs/loan-management/lom-loan-image10.png" alt="Campo"></p><p>Imagen 10. Área de Pregunta</p><p>Si seleccionó la opción OK el sistema generará el préstamo de forma exitosa generando el siguiente mensaje indicando el número del préstamo generado:</p><p><img src="/assets/img/docs/loan-management/lom-loan-image11.png" alt="Campo"></p><p>Imagen 11. Área de Resultado</p>',51)],t={},s=(0,o(13860).Z)(t,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,i)}]])},19650:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-97fb5baa","path":"/docs/loan-management/execution.html","title":"Ejecución","lang":"en-US","frontmatter":{"title":"Ejecución","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Simulación La simulación de préstamos es ideal para realizar cálculos rápidos y consultas de préstamos a solicitantes, generando una tabla simulada de amortización completa, además","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/loan-management/execution.html"}],["meta",{"property":"og:title","content":"Ejecución"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-03T13:26:37.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-04-03T13:26:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Simulación","slug":"simulacion","children":[]},{"level":2,"title":"Interpretando la Ventana","slug":"interpretando-la-ventana","children":[]},{"level":2,"title":"Generar Préstamo desde Simulación","slug":"generar-prestamo-desde-simulacion","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1680528397000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3}]},"readingTime":{"minutes":2.47,"words":742},"filePathRelative":"docs/loan-management/execution.md","localizedDate":"March 9, 2023"}')}}]);