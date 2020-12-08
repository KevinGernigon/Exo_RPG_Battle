var attaque = document.getElementById("attaque");
var special = document.getElementById("special");
var bouton_attaque = document.getElementById("bouton_attaque");
var bouton_defend = document.getElementById("bouton_defend");
var bouton_special = document.getElementById("bouton_special");
var bouton_monstre_attaque_1 = document.getElementById("bouton_monstre_attaque_1");
var bouton_monstre_attaque_2 = document.getElementById("bouton_monstre_attaque_2");
var bouton_monstre_attaque_3 = document.getElementById("bouton_monstre_attaque_3");
var bouton_monstre_special_1 = document.getElementById("bouton_monstre_special_1");
var bouton_monstre_special_2 = document.getElementById("bouton_monstre_special_2");
var bouton_monstre_special_3 = document.getElementById("bouton_monstre_special_3");
var pointeur_attaque = document.getElementById("pointer_attaque");
var pointeur_defend = document.getElementById("pointer_defend");
var pointeur_special = document.getElementById("pointer_special");
var pointeur_heros_1 = document.getElementById("pointeur_heros_1");
var pointeur_heros_2 = document.getElementById("pointeur_heros_2");
var pointeur_heros_3 = document.getElementById("pointeur_heros_3");
var pointeur_heros_4 = document.getElementById("pointeur_heros_4");
var pointeur_monstre_1 = document.getElementById("pointeur_monstre_1");
var pointeur_monstre_2 = document.getElementById("pointeur_monstre_2");
var pointeur_monstre_3 = document.getElementById("pointeur_monstre_3");
var monstre_1 = document.getElementById("monstre_1");
var monstre_2 = document.getElementById("monstre_2");
var monstre_3 = document.getElementById("monstre_3");
var heros_1 = document.getElementById("personnage_1");
var heros_2 = document.getElementById("personnage_2");
var heros_3 = document.getElementById("personnage_3");
var heros_4 = document.getElementById("personnage_4");
var valeur_pdv_heros_1 = document.getElementById("valeur_vie_1");
var valeur_pdv_heros_2 = document.getElementById("valeur_vie_2");
var valeur_pdv_heros_3 = document.getElementById("valeur_vie_3");
var valeur_pdv_heros_4 = document.getElementById("valeur_vie_4");
var valeur_mana_heros_1 = document.getElementById("valeur_mana_1");
var valeur_mana_heros_2 = document.getElementById("valeur_mana_2");
var valeur_mana_heros_3 = document.getElementById("valeur_mana_3");
var valeur_mana_heros_4 = document.getElementById("valeur_mana_4");
var valeur_atk_heros_1 = document.getElementById("valeur_atk_1");
var valeur_atk_heros_2 = document.getElementById("valeur_atk_2");
var valeur_atk_heros_3 = document.getElementById("valeur_atk_3");
var valeur_atk_heros_4 = document.getElementById("valeur_atk_4");
var valeur_def_heros_1 = document.getElementById("valeur_def_1");
var valeur_def_heros_2 = document.getElementById("valeur_def_2");
var valeur_def_heros_3 = document.getElementById("valeur_def_3");
var valeur_def_heros_4 = document.getElementById("valeur_def_4");
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
var bloodsplash = document.getElementById("bloodsplash");
var water = document.getElementById("water");
var hit = document.getElementById("hit");


var action_attaque
var pv_monstre_1 = 100;
var pv_monstre_2 = 100;
var pv_monstre_3 = 100;
var pdv_heros_1 = 50;
var pdv_heros_2 = 100;
var pdv_heros_3 = 100;
var pdv_heros_4 = 100;
var mana_heros_1 = 100;
var mana_heros_2 = 100;
var mana_heros_3 = 100;
var mana_heros_4 = 100;
var atk_heros_1 = 25;
var atk_heros_2 = 25;
var atk_heros_3 = 25;
var atk_heros_4 = 25;
var def_heros_1 = 10;
var def_heros_2 = 10;
var def_heros_3 = 10;
var def_heros_4 = 10;
var perso_tour = 1;
var poison = false;
var montre_1_poison = 0;
var montre_2_poison = 0;
var montre_3_poison = 0;
var tour_poison = 0;
var degats_poison = 10;
var tableau_pdv_heros = [pdv_heros_1, pdv_heros_2, pdv_heros_3, pdv_heros_4];
var min_pdv = 0;
var valeur_soin = 20;
var gel_monstre_1 = false;
var gel_monstre_2 = false;
var gel_monstre_3 = false;
var valeur_foudre = 10;

function entierAleatoire(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var attaque_des_monstres = function(){
	setTimeout(function bloodsplash_1(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_15.png)";}, 0);
	setTimeout(function bloodsplash_2(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_14.png)";}, 50);
	setTimeout(function bloodsplash_3(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_13.png)";}, 100);
	setTimeout(function bloodsplash_4(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_12.png)";}, 150);
	setTimeout(function bloodsplash_5(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_11.png)";}, 200);
	setTimeout(function bloodsplash_6(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_10.png)";}, 250);
	setTimeout(function bloodsplash_7(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_9.png)";}, 300);
	setTimeout(function bloodsplash_8(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_8.png)";}, 350);
	setTimeout(function bloodsplash_9(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_7.png)";}, 400);
	setTimeout(function bloodsplash_10(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_6.png)";}, 450);
	setTimeout(function bloodsplash_11(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_5.png)";}, 500);
	setTimeout(function bloodsplash_12(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_4.png)";}, 550);
	setTimeout(function bloodsplash_13(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_3.png)";}, 600);
	setTimeout(function bloodsplash_14(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_2.png)";}, 650);
	setTimeout(function bloodsplash_15(){ bloodsplash.style.backgroundImage = "url(../Images/Animations/Blood/Blood_1.png)";}, 700);
	setTimeout(function bloodsplash_reset(){ bloodsplash.style.backgroundImage = "url()"}, 750);
	
	setTimeout(function water_1(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_1.png)";}, 0);
	setTimeout(function water_2(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_2.png)";}, 34);
	setTimeout(function water_3(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_3.png)";}, 68);
	setTimeout(function water_4(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_4.png)";}, 102);
	setTimeout(function water_5(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_5.png)";}, 136);
	setTimeout(function water_6(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_6.png)";}, 170);
	setTimeout(function water_7(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_7.png)";}, 204);
	setTimeout(function water_8(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_8.png)";}, 238);
	setTimeout(function water_9(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_9.png)";}, 272);
	setTimeout(function water_10(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_10.png)";}, 306);
	setTimeout(function water_11(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_11.png)";}, 340);
	setTimeout(function water_12(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_12.png)";}, 374);
	setTimeout(function water_13(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_13.png)";}, 408);
	setTimeout(function water_14(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_14.png)";}, 442);
	setTimeout(function water_15(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_15.png)";}, 476);
	setTimeout(function water_16(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_16.png)";}, 510);
	setTimeout(function water_17(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_17.png)";}, 544);
	setTimeout(function water_18(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_18.png)";}, 578);
	setTimeout(function water_19(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_19.png)";}, 612);
	setTimeout(function water_20(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_20.png)";}, 646);
	setTimeout(function water_21(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_21.png)";}, 680);
	setTimeout(function water_22(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_22.png)";}, 714);
	setTimeout(function water_23(){ water.style.backgroundImage = "url(../Images/Animations/Water/Water_23.png)";}, 748);
	setTimeout(function water_clear(){ water.style.backgroundImage = "url()";}, 750);
	
	setTimeout(function hit_1(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_15.png)";}, 0);
	setTimeout(function hit_2(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_14.png)";}, 50);
	setTimeout(function hit_3(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_13.png)";}, 100);
	setTimeout(function hit_4(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_12.png)";}, 150);
	setTimeout(function hit_5(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_11.png)";}, 200);
	setTimeout(function hit_6(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_10.png)";}, 250);
	setTimeout(function hit_7(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_9.png)";}, 300);
	setTimeout(function hit_8(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_8.png)";}, 350);
	setTimeout(function hit_9(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_7.png)";}, 400);
	setTimeout(function hit_10(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_6.png)";}, 450);
	setTimeout(function hit_11(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_5.png)";}, 500);
	setTimeout(function hit_12(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_4.png)";}, 550);
	setTimeout(function hit_13(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_3.png)";}, 600);
	setTimeout(function hit_14(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_2.png)";}, 650);
	setTimeout(function hit_15(){ hit.style.backgroundImage = "url(../Images/Animations/Hit/Hit_1.png)";}, 700);
	setTimeout(function hit_clear(){ hit.style.backgroundImage = "url()";}, 750);	
}

if (perso_tour == 1) {
	special.innerHTML = "Poison";
}

monstre_1.onmouseover = function() {
	if (pv_monstre_1 > 0){
		nom_monstre_1.innerHTML = "Mort-Vivant";
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
		nom_monstre_2.innerHTML = "Minotaure";
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
		nom_monstre_3.innerHTML = "Élémentaire";
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

/*bouton_attaque.onclick = function atkonclick(){
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
}*/

bouton_monstre_attaque_1.onmouseover = function (){
	pointeur_monstre_1.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
	bouton_monstre_attaque_1.onmouseout = function() {
		pointeur_monstre_1.style.backgroundImage = "url()";
	}
}

bouton_monstre_attaque_2.onmouseover = function (){
	pointeur_monstre_2.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
	bouton_monstre_attaque_2.onmouseout = function() {
		pointeur_monstre_2.style.backgroundImage = "url()";
	}
}

bouton_monstre_attaque_3.onmouseover = function (){
	pointeur_monstre_3.style.backgroundImage = "url(../Images/Autre/Pointer.png)";
	bouton_monstre_attaque_3.onmouseout = function (){
		pointeur_monstre_3.style.backgroundImage = "url()";
	}
}

bouton_attaque.onclick = function atkonclick(){
	bouton_attaque.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	bouton_attaque.onmouseout = function (){
		bouton_attaque.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
	bouton_monstre_attaque_1.innerHTML = "Mort-Vivant";
	bouton_monstre_attaque_1.style.backgroundImage = "url(../Images/Autre/Button.png)";
	bouton_monstre_attaque_2.innerHTML = "Minotaure";
	bouton_monstre_attaque_2.style.backgroundImage = "url(../Images/Autre/Button.png)";
	bouton_monstre_attaque_3.innerHTML = "Élémentaire";
	bouton_monstre_attaque_3.style.backgroundImage = "url(../Images/Autre/Button.png)";
}

bouton_monstre_attaque_1.onclick = function(){
	bouton_monstre_attaque_1.innerHTML = "";
	bouton_monstre_attaque_1.style.backgroundImage = "url()";
	bouton_monstre_attaque_2.innerHTML = "";
	bouton_monstre_attaque_2.style.backgroundImage = "url()";
	bouton_monstre_attaque_3.innerHTML = "";
	bouton_monstre_attaque_3.style.backgroundImage = "url()";
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
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 3000);		
}

bouton_monstre_attaque_2.onclick = function(){
	bouton_monstre_attaque_1.innerHTML = "";
	bouton_monstre_attaque_1.style.backgroundImage = "url()";
	bouton_monstre_attaque_2.innerHTML = "";
	bouton_monstre_attaque_2.style.backgroundImage = "url()";
	bouton_monstre_attaque_3.innerHTML = "";
	bouton_monstre_attaque_3.style.backgroundImage = "url()";
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
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 3000);		
}		

bouton_monstre_attaque_3.onclick = function(){
	bouton_monstre_attaque_1.innerHTML = "";
	bouton_monstre_attaque_1.style.backgroundImage = "url()";
	bouton_monstre_attaque_2.innerHTML = "";
	bouton_monstre_attaque_2.style.backgroundImage = "url()";
	bouton_monstre_attaque_3.innerHTML = "";
	bouton_monstre_attaque_3.style.backgroundImage = "url()";
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
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 3000);		
}		

bouton_defend.onclick = function (){
	bouton_defend.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	bouton_defend.onmouseout = function (){
		bouton_defend.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
	if (perso_tour == 4){
		valeur_def_heros_4.innerHTML = def_heros_4 + 20;
		message_attaque.innerHTML = "Vous augmentez votre défense de 20 points pour ce tour."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = 0;
	}
	if (perso_tour == 3){
		valeur_def_heros_3.innerHTML = def_heros_3 + 20;
		message_attaque.innerHTML = "Vous augmentez votre défense de 20 points pour ce tour."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 2){
		valeur_def_heros_2.innerHTML = def_heros_2 + 20;
		message_attaque.innerHTML = "Vous augmentez votre défense de 20 points pour ce tour."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 1){
		valeur_def_heros_1.innerHTML = def_heros_1 + 20;
		message_attaque.innerHTML = "Vous augmentez votre défense de 20 points pour ce tour."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 2500);
}

bouton_monstre_special_1.onclick = function(){
	bouton_monstre_special_1.innerHTML = "";
	bouton_monstre_special_1.style.backgroundImage = "url()";
	bouton_monstre_special_2.innerHTML = "";
	bouton_monstre_special_2.style.backgroundImage = "url()";
	bouton_monstre_special_3.innerHTML = "";
	bouton_monstre_special_3.style.backgroundImage = "url()";
	if (perso_tour == 3){
		gel_monstre_1 = true;
		message_attaque.innerHTML = "Vous avez geler le Mort-Vivant.";
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 1){
		monstre_1_poison = 3;
		message_attaque.innerHTML = "Vous avez empoisonné le Mort-Vivant."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 2500);		
}

bouton_monstre_special_2.onclick = function(){
	bouton_monstre_special_1.innerHTML = "";
	bouton_monstre_special_1.style.backgroundImage = "url()";
	bouton_monstre_special_2.innerHTML = "";
	bouton_monstre_special_2.style.backgroundImage = "url()";
	bouton_monstre_special_3.innerHTML = "";
	bouton_monstre_special_3.style.backgroundImage = "url()";
	if (perso_tour == 3){
		gel_monstre_2 = true;
		message_attaque.innerHTML = "Vous avez geler le Minotaure.";
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 1){
		monstre_2_poison = 3;
		message_attaque.innerHTML = "Vous avez empoisonné le Minotaure."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 2500);		
}

bouton_monstre_special_3.onclick = function(){
	bouton_monstre_special_1.innerHTML = "";
	bouton_monstre_special_1.style.backgroundImage = "url()";
	bouton_monstre_special_2.innerHTML = "";
	bouton_monstre_special_2.style.backgroundImage = "url()";
	bouton_monstre_special_3.innerHTML = "";
	bouton_monstre_special_3.style.backgroundImage = "url()";
	if (perso_tour == 3){
		gel_monstre_3 = true;
		message_attaque.innerHTML = "Vous avez geler l'Élémentaire.";
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 1){
		monstre_3_poison = 3;
		message_attaque.innerHTML = "Vous avez empoisonné l'Élémentaire."
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 2500);		
}

bouton_special.onclick = function (){
	bouton_special.style.backgroundImage = "url(../Images/Autre/Button_pressed.png)";
	bouton_special.onmouseout = function (){
		bouton_special.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
	if (perso_tour == 4){
		pv_monstre_1 = pv_monstre_1 - valeur_foudre;
		pv_monstre_2 = pv_monstre_2 - valeur_foudre;
		pv_monstre_3 = pv_monstre_3 - valeur_foudre;
		message_attaque.innerHTML = "Vous avez infliger " + valeur_foudre + " points de dégâts à tous les ennemis.";
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = 0;
	}
	if (perso_tour == 3){
		bouton_monstre_special_1.innerHTML = "Mort-Vivant";
		bouton_monstre_special_1.style.backgroundImage = "url(../Images/Autre/Button.png)";
		bouton_monstre_special_2.innerHTML = "Minotaure";
		bouton_monstre_special_2.style.backgroundImage = "url(../Images/Autre/Button.png)";
		bouton_monstre_special_3.innerHTML = "Élémentaire";
		bouton_monstre_special_3.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
	if (perso_tour == 2){
		for(var i = 0; i <= 2; i++){
			if(tableau_pdv_heros[i+1] > tableau_pdv_heros[i]){
				min_pdv = i;
			} else if (tableau_pdv_heros[i+1] < tableau_pdv_heros[i]){
				min_pdv = i+1;
				tableau_pdv_heros[i]=tableau_pdv_heros[i+1];
			}
		}
		if (min_pdv == 0){
			if(pdv_heros_1 > 79){
				pdv_heros_1 = 100;
				message_attaque.innerHTML = "Vous avez soigné Kai de " + 100-pdv_heros_1 + " points de vie.";
			} else {
				pdv_heros_1 = pdv_heros_1 + valeur_soin;
				message_attaque.innerHTML = "Vous avez soigné Kai de "  + valeur_soin +" points de vie.";
			}
			valeur_pdv_heros_1.innerHTML = pdv_heros_1;
		}
		if (min_pdv == 1){
			if(pdv_heros_2 > 79){
				pdv_heros_2 = 100;
				message_attaque.innerHTML = "Vous avez soigné Gezek de " + 100-pdv_heros_1 + " points de vie.";
			} else {
				pdv_heros_2 = pdv_heros_2 + valeur_soin;
				message_attaque.innerHTML = "Vous avez soigné Gezek de "  + valeur_soin +" points de vie.";
			}
			valeur_pdv_heros_2.innerHTML = pdv_heros_2;
		}
		if (min_pdv == 2){
			if(pdv_heros_3 > 79){
				pdv_heros_3 = 100;
				message_attaque.innerHTML = "Vous avez soigné Jihrah de " + 100-pdv_heros_1 + " points de vie.";
			} else {
				pdv_heros_3 = pdv_heros_3 + valeur_soin;
				message_attaque.innerHTML = "Vous avez soigné Jihrah de "  + valeur_soin +" points de vie.";
			}
			valeur_pdv_heros_3.innerHTML = pdv_heros_3;
		}
		if (min_pdv == 3){
			if(pdv_heros_4 > 79){
				pdv_heros_4 = 100;
				message_attaque.innerHTML = "Vous avez soigné Helnes de " + 100-pdv_heros_1 + " points de vie.";
			} else {
				pdv_heros_4 = pdv_heros_4 + valeur_soin;
				message_attaque.innerHTML = "Vous avez soigné Helnes de "  + valeur_soin +" points de vie.";
			}
			valeur_pdv_heros_4.innerHTML = pdv_heros_4;
		}		
		message_au_centre.style.backgroundColor = "rgba(12, 63, 145, 0.6)";
		message_au_centre.style.border = "10px solid white";
		message_au_centre.style.borderRadius = "10px";
		message_au_centre.style.padding = "10px";
		perso_tour = perso_tour + 1;
	}
	if (perso_tour == 1){
		bouton_monstre_special_1.innerHTML = "Mort-Vivant";
		bouton_monstre_special_1.style.backgroundImage = "url(../Images/Autre/Button.png)";
		bouton_monstre_special_2.innerHTML = "Minotaure";
		bouton_monstre_special_2.style.backgroundImage = "url(../Images/Autre/Button.png)";
		bouton_monstre_special_3.innerHTML = "Élémentaire";
		bouton_monstre_special_3.style.backgroundImage = "url(../Images/Autre/Button.png)";
	}
	if (perso_tour == 0){
		perso_tour = 1;
	}
	if (perso_tour == 1){
		pointeur_heros_1.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Poison";
	}
	if (perso_tour == 2){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Soin";
	}
	if (perso_tour == 3){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		pointeur_heros_4.style.backgroundImage = "url()";
		special.innerHTML = "Gel";
	}
	if (perso_tour == 4){
		pointeur_heros_1.style.backgroundImage = "url()";
		pointeur_heros_2.style.backgroundImage = "url()";
		pointeur_heros_3.style.backgroundImage = "url()";
		pointeur_heros_4.style.backgroundImage = "url(../Images/Autre/Pointer_down.png)";
		special.innerHTML = "Foudre";
	}
	setTimeout(clear_message_centre = function(){ 
		message_au_centre.style.backgroundColor = ""; 
		message_attaque.innerHTML = ""; 
		message_au_centre.style.border = ""; 
		message_au_centre.style.padding = "";}, 2500);		
}


