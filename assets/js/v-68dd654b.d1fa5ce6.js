"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6256],{26745:(e,i,l)=>{l.r(i),l.d(i,{default:()=>r});var a=l(78e3);const t=[(0,a.uE)('<p><strong>Fecha de Liberación:</strong> 2022-09-19</p><h2 id="novedades" tabindex="-1"><a class="header-anchor" href="#novedades" aria-hidden="true">#</a> Novedades</h2><ul><li>Se agrega soporte a copia de validadores de modelo y definición de retentiones para la compañía</li><li>Se Agrega validacion para evitar contabilidad en Cero en Estado de Cuenta Bancario</li><li>Se Agrega validacion para evitar contabilidad en Cero en Factura CxC y CxP</li><li>Se Corrige Bug en Cantidad Ordenada en Almacenamiento cuando se Recibe en un almacen o Ubicación distinta al ordenado</li><li>Se Establece Almacen en Entrega/Recibo desde el encabezado del Recibo Express</li><li>Se Agrega Referencia a la Ubicación en Ventanas de Registro de Peso</li><li>Se agrega soporte a establecer la ubicacion en recibo express desde el registro de peso</li><li>Se Agrega soporte a Definición de Atributos de Calculo por Rubro y Agricultor</li><li>Se agrega Calculo de Peso Acondicionado y Peso a Pagar para los Rubros Maiz Blanco y Amarillo</li><li>Se Agrega Configuración Inicial para los Rubros Soportados</li><li>Se Agrega formula para caucular el peso a pagar con valores por defecto establecidos en la definicion del Agricultor</li><li>Correción de Bug en Logica Contable para Documentos no Posteables</li><li>Se Agrega funcionalidad para Menejos de Expedientes de Importación y Exportación</li></ul><h2 id="detalle-tecnico" tabindex="-1"><a class="header-anchor" href="#detalle-tecnico" aria-hidden="true">#</a> Detalle Técnico</h2><ul><li><p>Core-Tools:</p><ul><li>Add support to copy withholding and model validators</li></ul></li><li><p>CST-STD:</p><ul><li>Add Validation for Accounting Bank Interest in ZERO</li><li>Add Validation for Accounting Tax Invoice in ZERO</li><li>Fix Quantity Order When Receipt on Different Warehouse</li><li>Support Set Warehouse on Shipment from InOutBound</li></ul></li><li><p>Record-Weight:</p><ul><li>Add Locator on Record Weight Windows</li></ul></li><li><p>Raw-Material-Receipt:</p><ul><li>Add Support to Set Locator in InOutBound and InOutBoundLine From Record Weight</li></ul></li><li><p>Farmer-Assistance-Program:</p><ul><li>Add Support to Static Analysis Attributes by Business Partner And Product</li></ul></li><li><p>FAP-Venezuela-Location:</p><ul><li>Add Support to Calculation for White and Yellow Corn</li><li>Add Setup for Farming Categories</li><li>Add Category Calculation for Paid Weight With Default Setting from Farmer Definition</li></ul></li><li><p>Performance-Analysis:</p><ul><li>Change Search Cache from MTable to Doc class on Doc_NotPost logic</li></ul></li><li><p>Import-Export-Management:</p><ul><li>Add Import / Export Functionality</li></ul></li></ul><h2 id="soporte-a-versiones" tabindex="-1"><a class="header-anchor" href="#soporte-a-versiones" aria-hidden="true">#</a> Soporte a Versiones</h2><ul><li>ADempiereBase: Versión de Liberación: 3.9.3-rs-4.3</li><li>CST-STD: Versión de Liberación: rs-35.6</li><li>Consigned-Material: 1.3.0</li><li>Exchange-Operation-System: 1.2.2</li><li>Cloud-Service-Management: 1.2.7</li><li>Cash-Management: 1.1.4</li><li>Currency-Convert-Documents: 1.1.5</li><li>Farmer-Assistance-Program: 1.4.9</li><li>RethinkDB-Replicator-Client: 1.1.5</li><li>Third-Party-Access: 1.0.6</li><li>Fiscal-Printer: 1.5.6</li><li>Sales-Force-Management: 1.1.2</li><li>Delivery-Management-Service: 1.2.0</li><li>Travel-Agency-Management: 1.1.1</li><li>Withholding-Engine: 1.2.8</li><li>Migration-Tools: 1.0.4</li><li>LVE: 2.0.2</li><li>Performance-Analysis: 1.1.4</li><li>Queue-Manager: 1.0.7</li><li>Notification-Queue: 1.1.6</li><li>Point-Of-Sales-Improvements: 1.5.1</li><li>Kafka-Replicator-Client: 1.0.9</li><li>Kafka-Util: 1.0.2</li><li>Core-Tools: 1.4.6</li><li>Get-Weight:1.2.4</li><li>Record-Weight: 1.0.7</li><li>Raw-Material-Receipt: 1.1.7</li><li>Additional-Reports: 1.2.7</li><li>adempiere-customer-backend: 1.2.1</li><li>Material-Management-Improvements: 1.1.6</li><li>Warehouse-Management-System-Improvements: 1.1.6</li><li>Import-Export-Management: 1.0.4</li><li>Update-Management: 1.1.9</li><li>Mini-Retail: 1.1.7</li><li>Print-Queue: 1.1.4</li><li>ERP-Payroll-Definition: 1.0.6</li><li>Internal-Store: 1.0.4</li><li>Telegram-Notifier: 1.0.5</li><li>Costing-Engine-Improvements: 1.1.1</li><li>Default-Attribute: 1.0.1</li><li>Financial-Report: 1.0.1</li><li>Json-Replicator-Client: 1.0.2</li><li>Kubernetes-Cluster: 1.0.7</li><li>ADempiere-Exporter: 1.0.5</li><li>ADempiere-TelegramBot</li><li>e-Commerce-Queue: 1.1.5</li><li>Vue-StoreFront-API: 1.0.9</li><li>Mercado-Libre-Venezuela-API: 1.0.8</li><li>Common-Functionalities: 1.0.0</li><li>FAP-Venezuela-Location: 1.0.9</li><li>LVE-AdditionalTax: 1.2.2</li></ul><h2 id="servicios" tabindex="-1"><a class="header-anchor" href="#servicios" aria-hidden="true">#</a> Servicios</h2><ul><li>adempiere-customer-backend: 1.7.9</li><li>gateway-customer-api: solop-rs-1.2.1</li><li>frontend-core: 1.7.9</li></ul><h2 id="requerimientos" tabindex="-1"><a class="header-anchor" href="#requerimientos" aria-hidden="true">#</a> Requerimientos</h2><ul><li><p>Aplicar binario de la aplicación</p></li><li><p>Aplicar los XML&#39;s:</p></li><li><p>Core-Tools:</p><ul><li>05330_Add_Copy_Fiscal_Definition_Process.xml</li></ul></li><li><p>Record-Weight:</p><ul><li>06950_Add_Locator_to_Record_Weight.xml</li></ul></li><li><p>Farmer-Assistance-Program:</p><ul><li>08050_Add_Business_Partner_Attributes_Definition.xml</li></ul></li><li><p>FAP-Venezuela-Location:</p><ul><li>10230_Add_Setup_for_Farming_Category.xml</li></ul></li><li><p>Import-Export-Management:</p><ul><li>09480_Add_Support_to_Import_Expedient.xml</li><li>09490_Add_Import_Export_Expedient_Field_on_Documents.xml</li><li>09500_Add_Import_Export_Invoice_Reference.xml</li><li>09510_Add_Process_for_Update_Expedient_Balance.xml</li><li>09520_Add_Import_Export_Tax_Definition.xml</li><li>09530_Add_Documents_Related_to_Expedient.xml</li><li>09540_Add_Generate_Tax_Document_Process.xml</li><li>09550_Add_Fiscal_Currency_On_Expedient.xml</li><li>09560_Add_Validations_on_Fields_And_SmartBrowse.xml</li><li>09570_Add_Field_Tax_Amount_to_Smart_Browse_Generate_Tax.xml</li><li>09580_Round_Tax_Amount_on_SmartBrowse_for_Generate_Tax.xml</li></ul></li></ul>',11)],o={},r=(0,l(13860).Z)(o,[["render",function(e,i){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},16989:(e,i,l)=>{l.r(i),l.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-68dd654b","path":"/downloads/updates/rs-5x/rs-50.x%20/rs-50.0.html","title":"rs-50.0","lang":"es-ES","frontmatter":{"title":"rs-50.0","icon":"app","category":["Actualizaciones"],"star":9,"sticky":9,"tag":["Actualizaciones","Versiones","rs-50.0","2022-09-19T00:00:00.000Z"],"article":false,"summary":"Fecha de Liberación: 2022-09-19 Novedades Se agrega soporte a copia de validadores de modelo y definición de retentiones para la compañía; Se Agrega validacion para evitar contabil","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/downloads/updates/rs-5x/rs-50.x%20/rs-50.0.html"}],["meta",{"property":"og:title","content":"rs-50.0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-05T21:47:18.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Actualizaciones"}],["meta",{"property":"article:tag","content":"Versiones"}],["meta",{"property":"article:tag","content":"rs-50.0"}],["meta",{"property":"article:tag","content":"2022-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-05T21:47:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Novedades","slug":"novedades","children":[]},{"level":2,"title":"Detalle Técnico","slug":"detalle-tecnico","children":[]},{"level":2,"title":"Soporte a Versiones","slug":"soporte-a-versiones","children":[]},{"level":2,"title":"Servicios","slug":"servicios","children":[]},{"level":2,"title":"Requerimientos","slug":"requerimientos","children":[]}],"git":{"createdTime":1686001638000,"updatedTime":1686001638000,"contributors":[{"name":"tecnicoerp","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"downloads/updates/rs-5x/rs-50.x /rs-50.0.md","localizedDate":"5 de junio de 2023"}')}}]);