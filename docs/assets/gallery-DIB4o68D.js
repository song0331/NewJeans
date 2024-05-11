import"./index-DXZE7Dtf.js";import"./main-BOxjpGdl.js";import{s as i}from"./setTitle-DhMamm5E.js";import{p as t}from"./pocketbase-nuOjjRsH.js";i("Gallery");let a=!1;$(".navbar-btn").click(function(){$(".navbar").toggleClass("open",!a),$(".navbar").toggleClass("close",a),a=!a});const o=t.collection("gallery").getFullList();o.then(l=>{l.forEach(e=>{let s=`
    <li class="image-list-item" tabindex="0">
      <img class="box-item" src="https://lifeishard.pockethost.io//api/files/gallery/${e.id}/${e.image}" alt="${e.year} 뉴진스" />
    </li>
  `;$(".image-list").append(s)})});$(".image-list-item").click(l=>{$(".modal")[0].show(),$(".modal").css("background-image",`url('${l.target.src}')`)});$(".image-list-item").keypress(l=>{l.preventDefault(),$(".modal")[0].show(),$(".modal").css("background-image",`url('${l.target.children[0].src}')`)});$(".modal").click(()=>$(".modal")[0].close());$("html").keydown(l=>{l.keyCode===27&&$(".modal")[0].close()});
