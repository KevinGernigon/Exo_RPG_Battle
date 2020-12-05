var attaque = document.getElementById("attaque");

var monstre_1 = document.getElementById("monstre_1");
var monstre_2 = document.getElementById("monstre_2");
var monstre_3 = document.getElementById("monstre_3");
var heros_1 = document.getElementById("personnage_1");
var heros_2 = document.getElementById("personnage_2");
var heros_3 = document.getElementById("personnage_3");
var heros_4 = document.getElementById("personnage_4");
var pdv_heros_1 = document.getElementById("valeur_vie_1");
var pdv_heros_2 = document.getElementById("valeur_vie_2");
var pdv_heros_3 = document.getElementById("valeur_vie_3");
var pdv_heros_4 = document.getElementById("valeur_vie_4");
var mana_heros_1 = document.getElementById("valeur_mana_1");
var mana_heros_2 = document.getElementById("valeur_mana_2");
var mana_heros_3 = document.getElementById("valeur_mana_3");
var mana_heros_4 = document.getElementById("valeur_mana_4");
var atk_heros_1 = document.getElementById("valeur_atk_1");
var atk_heros_2 = document.getElementById("valeur_atk_2");
var atk_heros_3 = document.getElementById("valeur_atk_3");
var atk_heros_4 = document.getElementById("valeur_atk_4");
var stats_monstre_1 = document.getElementById("vie_monstre_1");
var stats_monstre_2 = document.getElementById("vie_monstre_2");
var stats_monstre_3 = document.getElementById("vie_monstre_3");
var nom_monstre_1 = document.getElementById("nom_monstre_1");
var nom_monstre_2 = document.getElementById("nom_monstre_2");
var nom_monstre_3 = document.getElementById("nom_monstre_3");
var menu_monstre_1 = document.getElementById("menu_monstre_1");
var menu_monstre_2 = document.getElementById("menu_monstre_2");
var menu_monstre_3 = document.getElementById("menu_monstre_3");

var pv_monstre_1 = 100;
var pv_monstre_2 = 100;
var pv_monstre_3 = 100;
pdv_heros_1 = 100;
pdv_heros_2 = 100;
pdv_heros_3 = 100;
pdv_heros_4 = 100;
mana_heros_1 = 100;
mana_heros_2 = 100;
mana_heros_3 = 100;
mana_heros_4 = 100;
atk_heros_1 = 25;
atk_heros_2 = 25;
atk_heros_3 = 25;
atk_heros_4 = 25;

monstre_1.onmouseover = function() {
	if (pv_monstre_1 > 0){
		nom_monstre_1.innerHTML = "Mort-Vivant"
		stats_monstre_1.innerHTML = "PV : " + pv_monstre_1;
		menu_monstre_1.style.border = "thick solid #FFFFFF";
		menu_monstre_1.style.borderRadius = "10px";
		menu_monstre_1.style.padding = "10px";
		monstre_1.onmouseout = function (){
			nom_monstre_1.innerHTML = "";
			stats_monstre_1.innerHTML = "";
			stats_monstre_1.style.background = "";
			menu_monstre_1.style.border = "";
			menu_monstre_1.style.padding = "";
		}
	}
}

monstre_2.onmouseover = function() {
	if (pv_monstre_2 > 0){
		nom_monstre_2.innerHTML = "Minotaure"
		stats_monstre_2.innerHTML = "PV : " + pv_monstre_2;
		menu_monstre_2.style.border = "thick solid #FFFFFF";
		menu_monstre_2.style.borderRadius = "10px";
		menu_monstre_2.style.padding = "10px";
		monstre_2.onmouseout = function (){
			nom_monstre_2.innerHTML = "";
			stats_monstre_2.innerHTML = "";
			stats_monstre_2.style.background = "";
			menu_monstre_2.style.border = "";
			menu_monstre_2.style.padding = "";
		}
	}
}

monstre_3.onmouseover = function() {
	if (pv_monstre_3 > 0){
		nom_monstre_3.innerHTML = "Élémentaire"
		stats_monstre_3.innerHTML = "PV : " + pv_monstre_3;
		menu_monstre_3.style.border = "thick solid #FFFFFF";
		menu_monstre_3.style.borderRadius = "10px";
		menu_monstre_3.style.padding = "10px";
		monstre_3.onmouseout = function (){
			nom_monstre_3.innerHTML = "";
			stats_monstre_3.innerHTML = "";
			stats_monstre_3.style.background = "";
			menu_monstre_3.style.border = "";
			menu_monstre_3.style.padding = "";
		}
	}
}

attaque.onclick = function (){
	if (pv_monstre_1 > 0){
		pv_monstre_1 = pv_monstre_1 - atk_heros_1;
	} 
	if (pv_monstre_1 <= 0){
		monstre_1.style.backgroundImage = "url()";
	}
}