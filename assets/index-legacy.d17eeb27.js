System.register(["./main-legacy.5b55923d.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.s}],execute:function(){e({a:function({address:e,device_id:t,content:a,signature:s}){return r({method:"get",url:"/v1api/v3/users/getRebateInfo",params:{address:e,device_id:t,content:a,signature:s}})},b:function({address:e,device_id:t,reg_code:a,content:s,signature:n}){return r({method:"post",url:"/v1api/v3/users/bindRegCode",data:{address:e,device_id:t,reg_code:a,content:s,signature:n}})},c:function(e,t=0,a=1,s=20){return r({method:"get",url:"/v1api/v3/users/pointsDetail",params:{shareCode:e,interval:t,pageNO:a,pageSize:s}})},d:function(e,t=0,a=1,s=20){return r({method:"get",url:"/v1api/v3/users/rebateDetail",params:{shareCode:e,interval:t,pageNO:a,pageSize:s}})},e:function({address:e,rebate_id:t,total_rebate:a,self_rebate:s,content:n,signature:i}){return r({method:"post",url:"/v1api/v3/users/editRebateInfo",data:{address:e,rebate_id:t,total_rebate:a,self_rebate:s,content:n,signature:i}})},f:function(e,t=0,a=1,s=20){return r({method:"get",url:"/v1api/v3/users/promotedUsers",params:{shareCode:e,interval:t,pageNO:a,pageSize:s}})},g:function(){return r({method:"get",url:"/v1api/v2/settings/serverTime"})}})}}}));
