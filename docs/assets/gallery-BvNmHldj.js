import"./index-BSwbjWLr.js";import"./main-BOxjpGdl.js";import{s}from"./setTitle-DhMamm5E.js";s("Gallery");let a=!1;$(".navbar-btn").click(function(){$(".navbar").toggleClass("open",!a),$(".navbar").toggleClass("close",a),a=!a});let g=0;$(document).on("click",".img",function(t){$(t.target).toggleClass("full"),t.target.dataset.onoff==1?t.target.dataset.onoff="0":(g++,t.target.dataset.onoff="1",$(t.target).css("z-index",`${g}`))});function l(t){$.get(`/NewJeans/data/${t}.json`).done(function(o){for(let i=0;i<o.length;i++){let e=`
                  <div class="img-box ${t}">
                     <img class="img full" src="${o[i].name}" data-onoff="1" alt="">
                  </div>
                  `;$(".img-container-pc").append(e)}}).fail(function(){console.log("imgData - ajax 실패!")})}function c(t){$.get(`/NewJeans/data/${t}.json`).done(function(o){for(let i=0;i<o.length;i++){let e=`
                  <div class="img-box ${t}">
                     <img class="img" src="${o[i].name}" data-onoff="1" alt="">
                  </div>
                  `;$(".img-container-mobile").append(e)}}).fail(function(){console.log("imgDataMoblie - ajax 실패!")})}function n(){$(".ditto").remove(),$(".omg").remove(),$(".etc").remove()}$(".Ditto").click(function(){n(),l("ditto")});$(".OMG").click(function(){n(),l("omg")});$(".Etc").click(function(){n(),l("etc")});$(".Ditto-m").click(function(){n(),c("ditto")});$(".OMG-m").click(function(){n(),c("omg")});$(".Etc-m").click(function(){n(),c("etc")});$.get("/NewJeans/data/ditto.json").done(function(t){for(let o=0;o<t.length;o++){let i=`
               <div class="img-box ditto">
                  <img class="img full" src="${t[o].name}" data-onoff="1" alt="">
               </div>
               `;$(".img-container-pc").append(i)}}).fail(function(){console.log("get pc버젼 - ajax 실패!")});$.get("/NewJeans/data/ditto.json").done(function(t){for(let o=0;o<t.length;o++){let i=`
               <div class="img-box ditto">
                  <img class="img" src="${t[o].name}" data-onoff="1" alt="">
               </div>
               `;$(".img-container-mobile").append(i)}}).fail(function(){console.log("get mobile버젼 - ajax 실패!")});
