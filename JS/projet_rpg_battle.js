var monstre_1 = document.getElementById("monstre_1");
var monstre_2 = document.getElementById("monstre_2");
var monstre_3 = document.getElementById("monstre_3");
var heros_1 = document.getElementById("personnage_1");
var heros_2 = document.getElementById("personnage_2");
var heros_3 = document.getElementById("personnage_3");
var heros_4 = document.getElementById("personnage_4");
var stats_monstre_1 = document.getElementById("vie_monstre_1");
var nom_monstre_1 = document.getElementById("nom_monstre_1");
var menu_monstre_1 = document.getElementById("menu_monstre_1");


monstre_1.onmouseover = function() {
	nom_monstre_1.innerHTML = "NameTest"
	stats_monstre_1.innerHTML = "PV : 100";
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




/*attaque.onclick = function() {
  if (pv_monstre > 0 && pv_heros > 0){
    pv_monstre = pv_monstre - valeur_attaque;
    valeur_pv_monstre_1.innerHTML = "PV Monstre: " + pv_monstre;
    pv_heros = pv_heros - attaque_monstre;
    valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
  }
  if (pv_monstre <= 0){
    monstre.innerHTML = "";
    return;
  }
  if (pv_heros <= 0){
    heros.innerHTML = "";
    return;
    }
}
  
soin.onclick = function (){
  if (pv_monstre > 0 && pv_heros > 0){
    pv_heros = pv_heros - attaque_monstre;
    if (pv_heros > 80 && mana_personnage > 0){
      pv_heros = 100;
      valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
      mana_personnage = mana_personnage - cout_soin;
      valeur_mana_personnage_1.innerHTML = "Mana Joueur: " + mana_personnage;
    }
    else if (mana_personnage > 0){
      pv_heros = pv_heros + valeur_soin;
      valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
      mana_personnage = mana_personnage - cout_soin;
      valeur_mana_personnage_1.innerHTML = "Mana Joueur: " + mana_personnage;
    }
    if (pv_monstre <= 0){
      monstre.innerHTML = "";
      return;
    }
    if (pv_heros <= 0){
      heros.innerHTML = "";
      return;
    }
  }
}*/