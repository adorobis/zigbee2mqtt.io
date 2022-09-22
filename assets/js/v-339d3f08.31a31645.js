"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50050],{64511:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-339d3f08",path:"/devices/ZVG1.html",title:"RTX ZVG1 control via MQTT",lang:"en-US",frontmatter:{title:"RTX ZVG1 control via MQTT",description:"Integrate your RTX ZVG1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Weather_delay (enum)",slug:"weather-delay-enum",children:[]},{level:3,title:"Timer_state (enum)",slug:"timer-state-enum",children:[]},{level:3,title:"Timer (numeric)",slug:"timer-numeric",children:[]},{level:3,title:"Timer_time_left (numeric)",slug:"timer-time-left-numeric",children:[]},{level:3,title:"Last_valve_open_duration (numeric)",slug:"last-valve-open-duration-numeric",children:[]},{level:3,title:"Water_consumed (numeric)",slug:"water-consumed-numeric",children:[]},{level:3,title:"Cycle_timer_1 (text)",slug:"cycle-timer-1-text",children:[]},{level:3,title:"Cycle_timer_2 (text)",slug:"cycle-timer-2-text",children:[]},{level:3,title:"Cycle_timer_3 (text)",slug:"cycle-timer-3-text",children:[]},{level:3,title:"Cycle_timer_4 (text)",slug:"cycle-timer-4-text",children:[]},{level:3,title:"Normal_schedule_timer_1 (text)",slug:"normal-schedule-timer-1-text",children:[]},{level:3,title:"Normal_schedule_timer_2 (text)",slug:"normal-schedule-timer-2-text",children:[]},{level:3,title:"Normal_schedule_timer_3 (text)",slug:"normal-schedule-timer-3-text",children:[]},{level:3,title:"Normal_schedule_timer_4 (text)",slug:"normal-schedule-timer-4-text",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZVG1.md",git:{updatedTime:166386978e4}}},74172:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="rtx-zvg1" tabindex="-1"><a class="header-anchor" href="#rtx-zvg1" aria-hidden="true">#</a> RTX ZVG1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZVG1</td></tr><tr><td>Vendor</td><td>RTX</td></tr><tr><td>Description</td><td>Zigbee smart water valve</td></tr><tr><td>Exposes</td><td>switch (state), battery, weather_delay, timer_state, timer, timer_time_left, last_valve_open_duration, water_consumed, cycle_timer_1, cycle_timer_2, cycle_timer_3, cycle_timer_4, normal_schedule_timer_1, normal_schedule_timer_2, normal_schedule_timer_3, normal_schedule_timer_4, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZVG1.jpg" alt="RTX ZVG1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the button on the device for 3 seconds. After this the device will automatically join.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="weather-delay-enum" tabindex="-1"><a class="header-anchor" href="#weather-delay-enum" aria-hidden="true">#</a> Weather_delay (enum)</h3><p>Value can be found in the published state on the <code>weather_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;weather_delay&quot;: NEW_VALUE}</code>. The possible values are: <code>disabled</code>, <code>24h</code>, <code>48h</code>, <code>72h</code>.</p><h3 id="timer-state-enum" tabindex="-1"><a class="header-anchor" href="#timer-state-enum" aria-hidden="true">#</a> Timer_state (enum)</h3><p>Value can be found in the published state on the <code>timer_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disabled</code>, <code>active</code>, <code>enabled</code>.</p><h3 id="timer-numeric" tabindex="-1"><a class="header-anchor" href="#timer-numeric" aria-hidden="true">#</a> Timer (numeric)</h3><p>Auto off after specific time. Value can be found in the published state on the <code>timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="timer-time-left-numeric" tabindex="-1"><a class="header-anchor" href="#timer-time-left-numeric" aria-hidden="true">#</a> Timer_time_left (numeric)</h3><p>Auto off timer time left. Value can be found in the published state on the <code>timer_time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="last-valve-open-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-valve-open-duration-numeric" aria-hidden="true">#</a> Last_valve_open_duration (numeric)</h3><p>Time the valve was open when state on. Value can be found in the published state on the <code>last_valve_open_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric" aria-hidden="true">#</a> Water_consumed (numeric)</h3><p>Liters of water consumed. Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>l</code>.</p><h3 id="cycle-timer-1-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-1-text" aria-hidden="true">#</a> Cycle_timer_1 (text)</h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_1&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-2-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-2-text" aria-hidden="true">#</a> Cycle_timer_2 (text)</h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_2&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-3-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-3-text" aria-hidden="true">#</a> Cycle_timer_3 (text)</h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_3&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-4-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-4-text" aria-hidden="true">#</a> Cycle_timer_4 (text)</h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_4</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_4&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-1-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-1-text" aria-hidden="true">#</a> Normal_schedule_timer_1 (text)</h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_1&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-2-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-2-text" aria-hidden="true">#</a> Normal_schedule_timer_2 (text)</h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_2&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-3-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-3-text" aria-hidden="true">#</a> Normal_schedule_timer_3 (text)</h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_3&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-4-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-4-text" aria-hidden="true">#</a> Normal_schedule_timer_4 (text)</h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_4</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_4&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',40),o={},d=(0,i(83744).Z)(o,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);