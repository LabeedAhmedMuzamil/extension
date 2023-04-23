/*Copyright (c) 2022 ksoft http://www.dummysoftware.com*/async function onInitialize(){var r=document.querySelector("#interval");chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var t,n,i,c=e[0],e=await getOptions(c),o=(null!=e&&r&&(o=e.interval,t=document.querySelector("#chkRandom"),1==e.isRandom?(o=e.random+"?",t.checked=!0):t.checked=!1,r.value=o,r.select(),t=document.querySelector("#status"),1==e.refresh?t.innerHTML="ON":t.innerHTML="OFF",1==e.isDomain&&(document.querySelector("#chkDomain").checked=!0),1==e.isCache&&(document.querySelector("#chkCache").checked=!0),1==e.isTimer&&(document.querySelector("#chkTimer").checked=!0),1==e.isAllTabs&&(document.querySelector("#chkAllTabs").checked=!0),n=document.querySelector("#lblLastRefresh"),i=document.querySelector("#lblNextRefresh"),await isRegistered()&&(null!=e.lastRefresh?(n.innerHTML=e.lastRefresh,i.innerHTML=e.nextRefresh):(n.innerHTML="n/a",i.innerHTML="n/a"),chrome.runtime.onMessage.addListener(function(e,t,o){e.tabId==c.id&&("updateLastRefresh"==e.message?(n.innerHTML=e.lastRefresh,i.innerHTML=e.nextRefresh):"updateRandomInterval"==e.message?r.value=e.value+"?":"updateTimeInterval"==e.message&&(r.value=e.value))})),1==e.isAutoClick&&(document.querySelector("#chkAutoClick").checked=!0,document.querySelector("#autoClickDiv").style.maxHeight="60px",document.querySelector("#autoClickDiv").classList.add("visible")),document.querySelector("#txtAutoClickId").value=e.autoClickId,document.querySelector("#txtAutoClickIdStatus").setAttribute("data-valid",e.autoClickIdValid),1==e.isAutoClickAfterRefresh?document.querySelector("#chkClickAfterRefresh").checked=!0:document.querySelector("#lblAutoClickDelay").classList.add("disabled"),document.querySelector("#txtAutoClickDelay").value=e.autoClickDelay||"",document.querySelector("#txtAutoClickDelay").disabled=!e.isAutoClickAfterRefresh,1==e.isNotify&&(document.querySelector("#chkNotify").checked=!0,document.querySelector("#notifyDiv").style.maxHeight="100px",document.querySelector("#notifyDiv").classList.add("visible")),document.querySelector("#txtNotifyText").value=e.notifyText,document.querySelector("#txtNotifySound").value=e.notifySound,document.querySelector("#txtNotifyDelay").value=e.notifyDelay||"",1==e.isNotifyStop&&(document.querySelector("#chkNotifyStop").checked=!0),1==e.isNotifyNotFound&&(document.querySelector("#chkNotifyNotFound").checked=!0,document.getElementById("lblNotifyOperation").innerText="NOT found"),1==e.isUrlList&&(document.querySelector("#chkUrlList").checked=!0,document.querySelector("#urlListDiv").style.maxHeight="125px",document.querySelector("#urlListDiv").classList.add("visible")),document.querySelector("#txtUrlList").value=e.urlList?e.urlList.join("\n"):"",1==e.isTimeList&&(document.querySelector("#chkTimeList").checked=!0,document.querySelector("#timeListDiv").style.maxHeight="100px",document.querySelector("#timeListDiv").classList.add("visible")),document.querySelector("#txtTimeList").value=e.timeList?e.timeList.join("\n"):""),document.querySelector("#lblDomain"));o&&(o.innerHTML=getDomain(c.url))}),r&&(r.removeEventListener("keydown",gfOUO),r.addEventListener("keydown",gfOUO),await MhDcq())}function gfOUO(e){46==e.keyCode||8==e.keyCode||9==e.keyCode||35<=e.keyCode&&e.keyCode<=40||(e.keyCode<48||57<e.keyCode)&&(e.keyCode<96||105<e.keyCode)&&e.preventDefault()}async function MhDcq(){document.querySelector("#interval").select();var e=document.querySelector("#imgLock"),e=(e.removeEventListener("click",onLockClick),e.addEventListener("click",onLockClick),await dataSync(),document.querySelector("#advancedOptionsDiv")),e=(e.removeEventListener("click",xhSMl),e.addEventListener("click",xhSMl),document.querySelector("#txtCode")),e=(e&&(e.removeEventListener("keypress",uuguX),e.addEventListener("keypress",uuguX)),document.querySelector("#btnStart")),e=(e.removeEventListener("click",MkgUM),e.addEventListener("click",MkgUM),document.querySelector("#btnStop")),e=(e.removeEventListener("click",BreoM),e.addEventListener("click",BreoM),document.querySelector("#chkDomain")),e=(e.removeEventListener("click",OzyqN),e.addEventListener("click",OzyqN),document.querySelector("#chkRandom")),e=(e.removeEventListener("click",KYuBb),e.addEventListener("click",KYuBb),document.querySelector("#chkCache")),e=(e.removeEventListener("click",ZnSuH),e.addEventListener("click",ZnSuH),document.querySelector("#chkTimer")),e=(e.removeEventListener("click",ZnSuH),e.addEventListener("click",ZnSuH),document.querySelector("#chkAllTabs")),e=(e.removeEventListener("click",ZnSuH),e.addEventListener("click",ZnSuH),document.querySelector("#btnRegister")),e=(e&&(e.removeEventListener("click",validateRegistrationCode),e.addEventListener("click",validateRegistrationCode)),document.querySelector("#chkAutoClick")),e=(e.removeEventListener("click",MmOzZ),e.addEventListener("click",MmOzZ),document.querySelector("#txtAutoClickId")),e=(e.removeEventListener("keyup",Erjor),e.addEventListener("keyup",Erjor),e.removeEventListener("paste",Erjor),e.addEventListener("paste",Erjor),txtAutoClickDelay.removeEventListener("keyup",ZnSuH),txtAutoClickDelay.addEventListener("keyup",ZnSuH),document.querySelector("#btnGetPath")),e=(e.removeEventListener("click",onGetPath),e.addEventListener("click",onGetPath),document.querySelector("#chkClickAfterRefresh")),e=(e.removeEventListener("click",onClickAfterRefresh),e.addEventListener("click",onClickAfterRefresh),document.querySelector("#chkNotify")),e=(e.removeEventListener("click",scMlH),e.addEventListener("click",scMlH),document.querySelector("#txtNotifyText")),e=(e.removeEventListener("keyup",ZnSuH),e.addEventListener("keyup",ZnSuH),e.removeEventListener("paste",ZnSuH),e.addEventListener("paste",ZnSuH),txtNotifyDelay.removeEventListener("keyup",ZnSuH),txtNotifyDelay.addEventListener("keyup",ZnSuH),document.querySelector("#txtNotifySound")),e=(e.removeEventListener("keyup",ZnSuH),e.addEventListener("keyup",ZnSuH),e.removeEventListener("paste",ZnSuH),e.addEventListener("paste",ZnSuH),document.querySelector("#btnPlaySound")),e=(e.removeEventListener("click",onPlaySound),e.addEventListener("click",onPlaySound),document.querySelector("#chkNotifyStop")),e=(e.removeEventListener("click",ZnSuH),e.addEventListener("click",ZnSuH),document.querySelector("#chkNotifyNotFound")),e=(e.removeEventListener("click",scMlHNotFound),e.addEventListener("click",scMlHNotFound),document.querySelector("#chkUrlList")),e=(e.removeEventListener("click",fuAmq),e.addEventListener("click",fuAmq),document.querySelector("#txtUrlList")),e=(e.removeEventListener("keyup",ZnSuH),e.addEventListener("keyup",ZnSuH),e.removeEventListener("paste",ZnSuH),e.addEventListener("paste",ZnSuH),document.querySelector("#chkTimeList")),e=(e.removeEventListener("click",onChkTimeList),e.addEventListener("click",onChkTimeList),document.querySelector("#txtTimeList"));e.removeEventListener("keyup",ZnSuH),e.addEventListener("keyup",ZnSuH),e.removeEventListener("paste",ZnSuH),e.addEventListener("paste",ZnSuH)}function xhSMl(){var e=document.querySelector("#advancedOptions"),t=document.querySelector("#imgAdvancedOptions");e.style.maxHeight&&"0px"!=e.style.maxHeight?t.style.backgroundPosition="0px 0px":(t.style.backgroundPosition="-15px 0px",aCWBs()),slide(e,advancedOptionsSlideHeight)}function uuguX(e){13==e.keyCode&&document.querySelector("#btnRegister").click()}function MmOzZ(){slide(document.querySelector("#autoClickDiv"),"60px"),document.querySelector("#txtAutoClickId").focus(),Erjor()}function onClickAfterRefresh(){var e=document.querySelector("#chkClickAfterRefresh").checked;document.querySelector("#txtAutoClickDelay").disabled=!e,e?document.querySelector("#lblAutoClickDelay").classList.remove("disabled"):document.querySelector("#lblAutoClickDelay").classList.add("disabled"),ZnSuH()}function scMlH(){slide(document.querySelector("#notifyDiv"),"100px"),document.querySelector("#txtNotifyText").focus(),ZnSuH()}function scMlHNotFound(e){document.getElementById("lblNotifyOperation").innerText=e.target.checked?"NOT found":"found",ZnSuH()}function fuAmq(){slide(document.querySelector("#urlListDiv"),"125px"),document.querySelector("#txtUrlList").focus(),ZnSuH()}function onChkTimeList(){slide(document.querySelector("#timeListDiv"),"100px"),document.querySelector("#txtTimeList").focus(),ZnSuH()}function onPlaySound(){var e=new Audio;e.src=document.querySelector("#txtNotifySound").value,e.play()}function MkgUM(){validateForm()&&chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var e=e[0],t=await getOptions(e);t.interval=document.querySelector("#interval").value,t.refresh=!0,await updateOptions(e,t=qbGfx(t)),chrome.runtime.sendMessage(null,{message:"refresh",tab:e,refresh:t.refresh},()=>{window.close()})})}function BreoM(){validateForm()&&chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var e=e[0],t={};t.interval=document.querySelector("#interval").value,t.refresh=!1,await updateOptions(e,t=qbGfx(t)),chrome.runtime.sendMessage(null,{message:"refresh",tab:e,refresh:t.refresh},()=>{window.close()})})}function KYuBb(){validateForm()&&chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var e=e[0],t=document.querySelector("#interval"),o=(0==document.querySelector("#chkRandom").checked?t.value=t.value.replace(/\?/g,""):t.value=t.value+"?",await getOptions(e));o.interval=t.value,await updateOptions(e,o=qbGfx(o))})}function OzyqN(){validateForm()&&chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var t,e=e[0];document.querySelector("#chkDomain").checked?((t=await getOptions(e)).interval=document.querySelector("#interval").value,t=qbGfx(t),await setStorage(getDomain(e.url),t),await updateOptions(e,t)):await removeStorage(getDomain(e.url))})}function ZnSuH(){validateForm()&&chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var e=e[0],t=await getOptions(e);t.interval=document.querySelector("#interval").value,await updateOptions(e,t=qbGfx(t))})}function Erjor(){aCWBs(function(){ZnSuH()})}function aCWBs(o){var n=document.querySelector("#txtAutoClickIdStatus"),i=document.querySelector("#txtAutoClickId"),c=i.value;null!=c&&0<c.length?chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];chrome.scripting.executeScript({target:{tabId:t.id},files:["scripts/content.js"]},e=>{chrome.tabs.sendMessage(t.id,{action:"getAutoClickIdStatus"+c},function(e){i.style.marginTop="",i.style.marginRight="",void 0!==e&&"OK"==e.result?(n.innerHTML="<img src='/images/green-check.png' alt='OK' title='OK'>",n.setAttribute("data-valid","1"),i.style.border="2px solid #00cc00"):(n.innerHTML="<img src='/images/red-x.png' alt='Invalid selector or control not found in page' title='Control not found in page'>",n.setAttribute("data-valid","0"),i.style.border="2px solid #ff0000"),o&&o()})})}):(n.innerHTML="",n.setAttribute("data-valid","0"),i.style.border="1px solid black",i.style.marginTop="1px",i.style.marginRight="2px",o&&o())}function onGetPath(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];chrome.scripting.executeScript({target:{tabId:t.id},files:["scripts/content.js"]},e=>{chrome.tabs.sendMessage(t.id,{action:"getPath"+t.id},function(){alert("Select an element on the web page to auto-click.")})})})}function qbGfx(e){return e.isRandom=document.querySelector("#chkRandom").checked,e.random=e.interval,e.isDomain=document.querySelector("#chkDomain").checked,e.isCache=document.querySelector("#chkCache").checked,e.isTimer=document.querySelector("#chkTimer").checked,e.isAllTabs=document.querySelector("#chkAllTabs").checked,e.isAutoClick=document.querySelector("#chkAutoClick").checked,e.autoClickId=document.querySelector("#txtAutoClickId").value,e.autoClickIdValid=document.querySelector("#txtAutoClickIdStatus").getAttribute("data-valid"),e.isAutoClickAfterRefresh=document.querySelector("#chkClickAfterRefresh").checked,e.autoClickDelay=parseInt(document.querySelector("#txtAutoClickDelay").value)||null,e.isNotify=document.querySelector("#chkNotify").checked,e.notifyText=document.querySelector("#txtNotifyText").value,e.notifySound=document.querySelector("#txtNotifySound").value,e.notifyDelay=parseInt(document.querySelector("#txtNotifyDelay").value)||null,e.isNotifyStop=document.querySelector("#chkNotifyStop").checked,e.isNotifyNotFound=document.querySelector("#chkNotifyNotFound").checked,e.isUrlList=document.querySelector("#chkUrlList").checked,e.urlList=cleanUrlArray(document.querySelector("#txtUrlList").value.match(/.+/g)),e.isTimeList=document.querySelector("#chkTimeList").checked,e.timeList=cleanTimeArray(document.querySelector("#txtTimeList").value.match(/.+/g)),e}async function updateOptions(e,t){return t.interval=t.interval.replace(/\?/g,""),t.random=t.random.replace(/\?/g,""),await saveOptions(e,t),t}