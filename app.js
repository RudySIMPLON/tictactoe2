
console.log("rudy")
function estValide(button){
	return button.innerHTML.length == 0;

}
function setSymbol(btn,symbole){
	btn.innerHTML=symbole;

}
function rechercherVainqueur(pions,joueurs,currentTurn){
	if(pions[0].innerHTML == joueurs[currentTurn]&&
		pions[1].innerHTML == joueurs[currentTurn]&&
		pions[2].innerHTML == joueurs[currentTurn])
		return true;


	if(pions[3].innerHTML == joueurs[currentTurn]&&
		pions[4].innerHTML == joueurs[currentTurn]&&
		pions[5].innerHTML == joueurs[currentTurn])
		return true;


	if(pions[6].innerHTML == joueurs[currentTurn]&&
		pions[7].innerHTML == joueurs[currentTurn]&&
		pions[8].innerHTML == joueurs[currentTurn])
		return true;

	if(pions[0].innerHTML == joueurs[currentTurn]&&
		pions[3].innerHTML == joueurs[currentTurn]&&
		pions[6].innerHTML == joueurs[currentTurn])
		return true;


	if(pions[1].innerHTML == joueurs[currentTurn]&&
		pions[4].innerHTML == joueurs[currentTurn]&&
		pions[7].innerHTML == joueurs[currentTurn])
		return true;


	if(pions[2].innerHTML == joueurs[currentTurn]&&
		pions[5].innerHTML == joueurs[currentTurn]&&
		pions[8].innerHTML == joueurs[currentTurn])
		return true;

	if(pions[0].innerHTML == joueurs[currentTurn]&&
		pions[4].innerHTML == joueurs[currentTurn]&&
		pions[8].innerHTML == joueurs[currentTurn])
		return true;

	if(pions[2].innerHTML == joueurs[currentTurn]&&
		pions[4].innerHTML == joueurs[currentTurn]&&
		pions[6].innerHTML == joueurs[currentTurn])
		return true;


}
function tableauEstPlein(pions){
	
	for(var i= 0,len = pions.length; i <len; i++){
		if(pions[i].innerHTML.length == 0)
			return false;

	}

	return true;

}

var Afficheur = function(element){
	var display=element;

	function setText(message){
		display.innerHTML=message;

	}
	return{sendMessage : setText};
}

function main(){

	var pions = document.querySelectorAll("#jeu button");
	console.log(pions);
	var joueurs= ["X","O"];
	var currentTurn = 0;
	jeuEstFini= rechercherVainqueur(pions,joueurs,currentTurn);
	var afficheur= new Afficheur(document.querySelector("#gameStatus"));
	console.log(afficheur);

	afficheur.sendMessage("Le jeu peut démarrer.<br/> " + " "+joueurs[currentTurn]+ " c'est votre tour");
	for(var i= 0,len = pions.length; i <len; i++){
		pions[i].addEventListener("click",function(){

			if (jeuEstFini)
				return;

			if(!estValide(this)){
				afficheur.sendMessage("Déplacement invalide !" );

		}else { 

			setSymbol(this, joueurs[currentTurn]);
			jeuEstFini= rechercherVainqueur(pions, joueurs, currentTurn);

			if(jeuEstFini){
				afficheur.sendMessage('joueur '+joueurs[currentTurn]+ " a gagné, il est vraiment trop fort")
			return; 
			}


				if(tableauEstPlein(pions)){
					afficheur.sendMessage("Match nul");
					return false;

				}


			currentTurn=currentTurn ^1;
			afficheur.sendMessage(" " +joueurs[currentTurn]+" c 'est à votre tour");
		
			}
	});

	}

}






main();