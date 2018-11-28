$(document).ready(function(){


var description = document.getElementById("description");
var info = document.getElementById("info");
var nav = document.getElementById("top-bar");

var mom = document.getElementById("mom");
var dad = document.getElementById("dad");
var me = document.getElementById("me");
var tracie = document.getElementById("tracie");
var taffy = document.getElementById("taffy");
var tori = document.getElementById("tori");
var tina = document.getElementById("tina");

var title_name = document.getElementById("name");
var descrip = document.getElementById("descrip");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");


	$('#mom').hover(function() {
    	$("#img2").fadeOut("slow");
    	$("#img3").fadeOut("slow");
    	$("#img4").fadeOut("slow");
    	$("#img5").fadeOut("slow");
    	$("#img6").fadeOut("slow");
    	$("#img1").animate({height: "200px"}, "slow")
    	$("#img1").animate({width: "150px"})
  	}, function() {
    	$("#img2").fadeIn();
    	$("#img3").fadeIn();
    	$("#img4").fadeIn();
    	$("#img5").fadeIn();
    	$("#img6").fadeIn();
    	$("#img1").animate({height: "150px"})
    	$("#img1").animate({width: "150px"})
  	}); 

 	$('#dad').hover(function() {
    	$("#img1").fadeOut("slow");
    	$("#img3").fadeOut("slow");
    	$("#img4").fadeOut("slow");
    	$("#img5").fadeOut("slow");
    	$("#img6").fadeOut("slow");
    	$("#img2").animate({height: "200px"}, "slow")
  	}, function() {
    	$("#img1").fadeIn();
    	$("#img3").fadeIn();
    	$("#img4").fadeIn();
    	$("#img5").fadeIn();
    	$("#img6").fadeIn();
    	$("#img2").animate({height: "150px"})
    	$("#img2").animate({width: "150px"})
  	}); 

  	$('#me').hover(function() {
    	$("#img1").fadeOut("slow");
    	$("#img2").fadeOut("slow");
    	$("#img4").fadeOut("slow");
    	$("#img5").fadeOut("slow");
    	$("#img6").fadeOut("slow");
    	$("#img3").animate({height: "200px"}, "slow")
    	$("#img3").animate({width: "150px"})
  	}, function() {
    	$("#img1").fadeIn();
    	$("#img2").fadeIn();
    	$("#img4").fadeIn();
    	$("#img5").fadeIn();
    	$("#img6").fadeIn();
    	$("#img3").animate({height: "150px"})
    	$("#img3").animate({width: "150px"})
  	}); 

  	$('#taffy').hover(function() {
    	$("#img1").fadeOut("slow");
    	$("#img2").fadeOut("slow");
    	$("#img3").fadeOut("slow");
    	$("#img5").fadeOut("slow");
    	$("#img6").fadeOut("slow");
    	$("#img4").animate({height: "200px"}, "slow")
    	$("#img4").animate({bottom: "120px"})
  	}, function() {
  		$("#img4").animate({bottom: "0px"})
    	$("#img1").fadeIn();
    	$("#img2").fadeIn();
    	$("#img3").fadeIn();
    	$("#img5").fadeIn();
    	$("#img6").fadeIn();
    	$("#img4").animate({height: "150px"})
    	
  	}); 

 	$('#tori').hover(function() {
    	$("#img1").fadeOut("slow");
    	$("#img2").fadeOut("slow");
    	$("#img3").fadeOut("slow");
    	$("#img4").fadeOut("slow");
    	$("#img6").fadeOut("slow");
    	$("#img5").animate({height: "200px"}, "slow")
    	$("#img5").animate({bottom: "120px"})
  	}, function() {
    	$("#img1").fadeIn();
    	$("#img2").fadeIn();
    	$("#img3").fadeIn();
    	$("#img4").fadeIn();
    	$("#img6").fadeIn();
    	$("#img5").animate({height: "150px"})
    	$("#img5").animate({bottom: "0px"})
  	});

	$('#tina').hover(function() {
    	$("#img1").fadeOut("slow");
    	$("#img2").fadeOut("slow");
    	$("#img3").fadeOut("slow");
    	$("#img4").fadeOut("slow");
    	$("#img5").fadeOut("slow");
    	$("#img6").animate({height: "200px"}, "slow")
    	$("#img6").animate({bottom: "120px"})
  	}, function() {
    	$("#img1").fadeIn();
    	$("#img2").fadeIn();
    	$("#img3").fadeIn();
    	$("#img4").fadeIn();
    	$("#img5").fadeIn();
    	$("#img6").animate({height: "150px"})
    	$("#img6").animate({bottom: "0px"})
  	}); 

nav.onclick = function() {
    description.style.display = 'block';
    info.style.display = 'none';
}

mom.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "MOM";
	descrip.innerHTML = "a strong woman with an infinite outpouring of love";
	item1.innerHTML = "- the ocean";
	item2.innerHTML = "- all small animals";
	item3.innerHTML = "- Jeeps and other tall vehicles";
}

dad.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "DAD";
	descrip.innerHTML = "a driven protector and good-humored confidante";
	item1.innerHTML = "- red bean ice slushies";
	item2.innerHTML = "- taking pictures of half-eaten food";
	item3.innerHTML = "- pocketing airplane snacks";
}

me.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "ME";
	descrip.innerHTML = "not just a night owl; is actually nocturnal";
	item1.innerHTML = "- singing despite inability to sing on-key";
	item2.innerHTML = "- papercrafting";
	item3.innerHTML = "- fresh mangos";
}

taffy.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "TAFFY";
	descrip.innerHTML = "a high-energy furball with no trust in the outside world";
	item1.innerHTML = "- taking tissues out of boxes";
	item2.innerHTML = "- deep conversations";
	item3.innerHTML = "- faking grief at dinnertime";
}

tori.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "TORI";
	descrip.innerHTML = "the older duck who wants to assert dominance but is too lazy";
	item1.innerHTML = "- homemade opera productions";
	item2.innerHTML = "- gazing at nature";
	item3.innerHTML = "- fighting with squirrels";
}

tina.onclick = function() {
	description.style.display = 'none';
	info.style.display = 'block';

	title_name.innerHTML = "TINA";
	descrip.innerHTML = "a brave but apathetic individual; very existential";
	item1.innerHTML = "- reminiscing on childhood";
	item2.innerHTML = "- eating food one oat at a time";
	item3.innerHTML = "- TED talks";
}

});