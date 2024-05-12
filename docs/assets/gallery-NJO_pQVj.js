import"./main-CITXGWa4.js";import{s as e}from"./setTitle-DhMamm5E.js";import{p as i}from"./pocketbase-nuOjjRsH.js";e("Gallery");const t=async()=>{(await i.collection("gallery").getFullList()).forEach(l=>{let a=`
    <li class="image-list-item" tabindex="0">
    <img src="https://lifeishard.pockethost.io//api/files/gallery/${l.id}/${l.image}" alt="${l.year} 뉴진스" />
    </li>
        `;$(".image-list").append(a)}),$(".image-list-item").click(l=>{$(".modal")[0].show(),$(".modal").css("background-image",`url(${l.target.src})`)}),$(".image-list-item").keypress(l=>{l.preventDefault(),$(".modal")[0].show(),$(".modal").css("background-image",`url('${l.target.children[0].src}')`)}),$(".modal").click(()=>$(".modal")[0].close()),$("html").keydown(l=>{l.keyCode===27&&$(".modal")[0].close()})};t();
