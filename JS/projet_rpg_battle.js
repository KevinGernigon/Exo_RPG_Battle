var attaque = document.getElementById("attaque");
var bouton_attaque = document.getElementById("bouton_attaque");
var bouton_defend = document.getElementById("bouton_defend");
var bouton_special = document.getElementById("bouton_special");
var pointeur_attaque = document.getElementById("pointer_attaque");
var pointeur_defend = document.getElementById("pointer_defend");
var pointeur_special = document.getElementById("pointer_special");
var pointeur_heros_1 = document.getElementById("pointeur_heros_1");
var pointeur_heros_2 = document.getElementById("pointeur_heros_2");
var pointeur_heros_3 = document.getElementById("pointeur_heros_3");
var pointeur_heros_4 = document.getElementById("pointeur_heros_4");
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
var message_attaque = document.getElementById("message_attaque");
var message_au_centre = document.getElementById("message_au_centre")

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
atk_heros_2 = 20;
atk_heros_3 = 25;
atk_heros_4 = 25;
var tour = 0;
var perso_tour = 1;



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

bouton_attaque.onmouseover = function (){
	pointeur_attaque.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
	pointeur_defend.style.backgroundImage = "url()";
	pointeur_special.style.backgroundImage = "url()";
}

bouton_defend.onmouseover = function (){
	pointeur_attaque.style.backgroundImage = "url()";
	pointeur_defend.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
	pointeur_special.style.backgroundImage = "url()";
}

bouton_special.onmouseover = function (){
	pointeur_attaque.style.backgroundImage = "url()";
	pointeur_defend.style.backgroundImage = "url()";
	pointeur_special.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
}

bouton_attaque.onclick = function atkonclick(){
	bouton_attaque.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	var choix_joueur = prompt("Quel monstre souhaitez-vous attaquer ? 1 - Mort-Vivant || 2 - Minotaure || 3 - Élémentaire");
	if (choix_joueur == 1 && pv_monstre_1 > 0){
		if (perso_tour == 4){
			pv_monstre_1 = pv_monstre_1 - atk_heros_4;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_4 + " points de dégâts au Mort-Vivant."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = 0;
		}
		if (perso_tour == 3){
			pv_monstre_1 = pv_monstre_1 - atk_heros_3;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_3 + " points de dégâts au Mort-Vivant."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 2){
			pv_monstre_1 = pv_monstre_1 - atk_heros_2;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_2 + " points de dégâts au Mort-Vivant."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 1){
			pv_monstre_1 = pv_monstre_1 - atk_heros_1;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_1 + " points de dégâts au Mort-Vivant."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
	}
	if (choix_joueur == 2 && pv_monstre_2 > 0){
		if (perso_tour == 4){
			pv_monstre_2 = pv_monstre_2 - atk_heros_4;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_4 + " points de dégâts au Minotaure."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = 0;
		}
		if (perso_tour == 3){
			pv_monstre_2 = pv_monstre_2 - atk_heros_3;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_3 + " points de dégâts au Minotaure."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 2){
			pv_monstre_2 = pv_monstre_2 - atk_heros_2;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_2 + " points de dégâts au Minotaure."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 1){
			pv_monstre_2 = pv_monstre_2 - atk_heros_1;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_1 + " points de dégâts au Minotaure."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
	}
	if (choix_joueur == 3 && pv_monstre_3 > 0){
		if (perso_tour == 4){
			pv_monstre_3 = pv_monstre_3 - atk_heros_4;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_4 + " points de dégâts à l'Élémentaire."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = 0;
		}
		if (perso_tour == 3){
			pv_monstre_3 = pv_monstre_3 - atk_heros_3;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_3 + " points de dégâts à l'Élémentaire."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 2){
			pv_monstre_3 = pv_monstre_3 - atk_heros_2;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_2 + " points de dégâts à l'Élémentaire."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
		if (perso_tour == 1){
			pv_monstre_3 = pv_monstre_3 - atk_heros_1;
			message_attaque.innerHTML = "Vous avez infliger " + atk_heros_1 + " points de dégâts à l'Élémentaire."
			message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
			message_au_centre.style.border = "10px solid white";
			message_au_centre.style.borderRadius = "10px";
			message_au_centre.style.padding = "10px";
			perso_tour = perso_tour + 1;
		}
	}	
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
	}
		bouton_attaque.onmouseout = function (){
			bouton_attaque.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
}

bouton_defend.onclick = function (){
	bouton_defend.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	bouton_defend.onmouseout = function (){
		bouton_defend.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
}

bouton_special.onclick = function (){
	bouton_special.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	bouton_special.onmouseout = function (){
		bouton_special.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
}