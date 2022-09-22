"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45493],{47393:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-689ac800",path:"/devices/EFEKTA_iAQ.html",title:"Custom devices (DiY) EFEKTA_iAQ control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) EFEKTA_iAQ control via MQTT",description:"Integrate your Custom devices (DiY) EFEKTA_iAQ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Co2 (numeric)",slug:"co2-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Auto_brightness (binary)",slug:"auto-brightness-binary",children:[]},{level:3,title:"Long_chart_period (binary)",slug:"long-chart-period-binary",children:[]},{level:3,title:"Set_altitude (numeric)",slug:"set-altitude-numeric",children:[]},{level:3,title:"Local_time (enum)",slug:"local-time-enum",children:[]},{level:3,title:"Temperature_offset (numeric)",slug:"temperature-offset-numeric",children:[]},{level:3,title:"Humidity_offset (numeric)",slug:"humidity-offset-numeric",children:[]},{level:3,title:"Forced_recalibration (binary)",slug:"forced-recalibration-binary",children:[]},{level:3,title:"Factory_reset_co2 (binary)",slug:"factory-reset-co2-binary",children:[]},{level:3,title:"Manual_forced_recalibration (numeric)",slug:"manual-forced-recalibration-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EFEKTA_iAQ.md",git:{updatedTime:166386978e4}}},42751:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(66252);const a=(0,o._)("h1",{id:"custom-devices-diy-efekta-iaq",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-iaq","aria-hidden":"true"},"#"),(0,o.Uk)(" Custom devices (DiY) EFEKTA_iAQ")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"EFEKTA_iAQ")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Vendor"),(0,o._)("td",null,"Custom devices (DiY)")],-1),l=(0,o._)("td",null,"Description",-1),n={href:"http://efektalab.com/iAQ",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time"),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"co2, temperature, humidity, illuminance, auto_brightness, long_chart_period, set_altitude, local_time, temperature_offset, humidity_offset, forced_recalibration, factory_reset_co2, manual_forced_recalibration, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ.jpg",alt:"Custom devices (DiY) EFEKTA_iAQ"})])],-1),m=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.Uk)("How to use device type specific configuration"),b=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric" aria-hidden="true">#</a> Co2 (numeric)</h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="auto-brightness-binary" tabindex="-1"><a class="header-anchor" href="#auto-brightness-binary" aria-hidden="true">#</a> Auto_brightness (binary)</h3><p>Enable or Disable Auto Brightness of the Display. Value can be found in the published state on the <code>auto_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_brightness&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto_brightness is ON, if <code>OFF</code> OFF.</p><h3 id="long-chart-period-binary" tabindex="-1"><a class="header-anchor" href="#long-chart-period-binary" aria-hidden="true">#</a> Long_chart_period (binary)</h3><p>The period of plotting the CO2 level(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> long_chart_period is ON, if <code>OFF</code> OFF.</p><h3 id="set-altitude-numeric" tabindex="-1"><a class="header-anchor" href="#set-altitude-numeric" aria-hidden="true">#</a> Set_altitude (numeric)</h3><p>Setting the altitude above sea level (for high accuracy of the CO2 sensor). Value can be found in the published state on the <code>set_altitude</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_altitude&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3000</code>. The unit of this value is <code>meters</code>.</p><h3 id="local-time-enum" tabindex="-1"><a class="header-anchor" href="#local-time-enum" aria-hidden="true">#</a> Local_time (enum)</h3><p>Set date and time. Value can be found in the published state on the <code>local_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_time&quot;: NEW_VALUE}</code>. The possible values are: <code>set</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric" aria-hidden="true">#</a> Temperature_offset (numeric)</h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-30</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric" aria-hidden="true">#</a> Humidity_offset (numeric)</h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary" aria-hidden="true">#</a> Forced_recalibration (binary)</h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced_recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary" aria-hidden="true">#</a> Factory_reset_co2 (binary)</h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory_reset_co2 is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric" aria-hidden="true">#</a> Manual_forced_recalibration (numeric)</h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),f={},_=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),f=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[r,c,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o._)("a",n,[u,(0,o.Wm)(i)])])]),s,h])]),m,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(f,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[p])),_:1})])]),b],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);