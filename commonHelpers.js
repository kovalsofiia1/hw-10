import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as x,i as w}from"./assets/vendor-651d7991.js";const D="/hw-10/assets/bi_x-octagon-4d6c239e.svg",r=document.querySelector("button[data-start]"),c=document.querySelector("span[data-days]"),a=document.querySelector("span[data-hours]"),i=document.querySelector("span[data-minutes]"),u=document.querySelector("span[data-seconds]");f();let l=null,d=null;x("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){I(),k(t[0])}});r.addEventListener("click",()=>{d=setInterval(h,1e3)});function m(){clearInterval(d)}function I(){m(),c.textContent=e(0),a.textContent=e(0),i.textContent=e(0),u.textContent=e(0)}function f(){r.disabled=!0}function T(){r.disabled=!1}function b(t){return console.log(t),console.log(t.getTime()),!(t.getTime()<Date.now())}function k(t){b(t)?(l=t,T(),h()):(w.show({class:"",title:"Error",message:"Please choose a date in the future!",position:"topRight",titleColor:"white",messageColor:"white",backgroundColor:"red",iconUrl:`${D}`,iconColor:"white"}),f())}function h(){const{days:t,hours:o,minutes:n,seconds:s}=v(l.getTime()-Date.now());t===0&&o===0&&n===0&&s===0&&m(),c.textContent=e(t),a.textContent=e(o),i.textContent=e(n),u.textContent=e(s)}function e(t){return t<10?"0"+t:t+""}function v(t){const y=Math.floor(t/864e5),C=Math.floor(t%864e5/36e5),g=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:C,minutes:g,seconds:p}}
//# sourceMappingURL=commonHelpers.js.map