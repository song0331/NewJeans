import"./index-BCrvO4Zp.js";import"./main-D3hfl2qC.js";import{s as g}from"./setTitle-DhMamm5E.js";g("Gallery");let l=0;$(".navbar-btn").click(function(){l++,l%2!=0?($(".navbar").addClass("open"),$(".navbar").removeClass("close")):($(".navbar").addClass("close"),$(".navbar").removeClass("open"))});let s=0;$(document).on("click",".img",function(o){$(o.target).toggleClass("full"),o.target.dataset.onoff==1?o.target.dataset.onoff="0":(s++,o.target.dataset.onoff="1",$(o.target).css("z-index",`${s}`))});function e(o){$.get(`/NewJeans/data/${o}.json`).done(function(t){for(let n=0;n<t.length;n++){let a=`
                  <div class="img-box ${o}">
                     <img class="img full" src="${t[n].name}" data-onoff="1" alt="">
                  </div>
                  `;$(".img-container-pc").append(a)}}).fail(function(){console.log("imgData - ajax 실패!")})}function c(o){$.get(`/NewJeans/data/${o}.json`).done(function(t){for(let n=0;n<t.length;n++){let a=`
                  <div class="img-box ${o}">
                     <img class="img" src="${t[n].name}" data-onoff="1" alt="">
                  </div>
                  `;$(".img-container-mobile").append(a)}}).fail(function(){console.log("imgDataMoblie - ajax 실패!")})}function i(){$(".ditto").remove(),$(".omg").remove(),$(".etc").remove()}$(".Ditto").click(function(){i(),e("ditto")});$(".OMG").click(function(){i(),e("omg")});$(".Etc").click(function(){i(),e("etc")});$(".Ditto-m").click(function(){i(),c("ditto")});$(".OMG-m").click(function(){i(),c("omg")});$(".Etc-m").click(function(){i(),c("etc")});$.get("/NewJeans/data/ditto.json").done(function(o){for(let t=0;t<o.length;t++){let n=`
               <div class="img-box ditto">
                  <img class="img full" src="${o[t].name}" data-onoff="1" alt="">
               </div>
               `;$(".img-container-pc").append(n)}}).fail(function(){console.log("get pc버젼 - ajax 실패!")});$.get("/NewJeans/data/ditto.json").done(function(o){for(let t=0;t<o.length;t++){let n=`
               <div class="img-box ditto">
                  <img class="img" src="${o[t].name}" data-onoff="1" alt="">
               </div>
               `;$(".img-container-mobile").append(n)}}).fail(function(){console.log("get mobile버젼 - ajax 실패!")});
