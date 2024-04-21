let a=0;$(".navbar-btn").click(function(){a++,a%2!=0?($(".navbar").addClass("open"),$(".navbar").removeClass("close")):($(".navbar").addClass("close"),$(".navbar").removeClass("open"))});
