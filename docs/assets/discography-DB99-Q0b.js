import"./index-BSwbjWLr.js";import"./main-BOxjpGdl.js";import{s as c}from"./setTitle-DhMamm5E.js";c("Discography");let a=!1;$(".navbar-btn").click(function(){$(".navbar").toggleClass("open",!a),$(".navbar").toggleClass("close",a),a=!a});$(".on").click(function(){$(".off").css("display","block"),$(".on").css("display","none"),$(".text").css("display","none"),console.log("on")});$(".off").click(function(){$(".on").css("display","block"),$(".off").css("display","none"),$(".text").css("display","block"),console.log("off")});$(".album img").click(function(l){console.log(11),$(".x").css("display","block"),$(".text").css("display","block")});$(".x").click(function(){console.log("click x"),$(".x").css("display","none"),$(".text").css("display","none")});function o(){s==0?($(".discography-bg").css("background-image","url(https://song0331.github.io/newjeansImg/discography/0.jpg)"),$(".left").css("color","cornflowerblue"),$(".right").css("color","cornflowerblue"),$(".album1").css("transform","translateX(0px)"),$(".album2").css("transform","translateX(3000px)"),$(".album3").css("transform","translateX(3000px)"),$(".album4").css("transform","translateX(3000px)")):s==1?($(".discography-bg").css("background-image","url(https://song0331.github.io/newjeansImg/discography/1.jpg)"),$(".left").css("color","#cd4d62"),$(".right").css("color","#cd4d62"),$(".album1").css("transform","translateX(3000px)"),$(".album2").css("transform","translateX(0px)"),$(".album3").css("transform","translateX(3000px)"),$(".album4").css("transform","translateX(3000px)")):s==2?($(".discography-bg").css("background-image","url(https://song0331.github.io/newjeansImg/discography/2.jpg)"),$(".left").css("color","#505050"),$(".right").css("color","#505050"),$(".album1").css("transform","translateX(3000px)"),$(".album2").css("transform","translateX(3000px)"),$(".album3").css("transform","translateX(0px)"),$(".album4").css("transform","translateX(3000px)")):s==3&&($(".discography-bg").css("background-image","url(https://song0331.github.io/newjeansImg/discography/3.jpg)"),$(".left").css("color","#c6596b"),$(".right").css("color","#c6596b"),$(".album1").css("transform","translateX(3000px)"),$(".album2").css("transform","translateX(3000px)"),$(".album3").css("transform","translateX(3000px)"),$(".album4").css("transform","translateX(0px)"))}let s=0;$(".right").click(function(){s<3&&(s++,o())});$(".left").click(function(){s>0&&(s--,o())});