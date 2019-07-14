candidatos = null;

function CargarCandidatos() {
	candidatos = [
	// ID_CANDIDATO_PARTIDO, NOMBRE_CANDIDATO, LISTA_CANDIDATO, slug, PARTIDO_CANDIDATO, TWITTER_CANDIDATO, address[2]ANDIDATO, BET_DEPRECATED, YOUTUBE
	Candidato(0, 'Mauricio Macri', 'LISTA 135', 'macri', 1,'@mauriciomacri', "bc1qmacrl000gactqwexqppl3rvnp2t2gd0056pzw4", "", "eMgAk82AuYw"), 
	Candidato(0, 'Alberto Fernández', 'LISTA 136', 'fernandez', 0, '@alferdez', "bc1qfernandex5qxk2xptn78075cuqfq2ugh008pxx", "", "ah2XUCiDr3U"),
	Candidato(0, 'Roberto Lavagna', 'LISTA 137A', 'lavagna', 3, '@RLavagna', "bc1qlavagna0v8vlzzkcsc9kr97lmqtsfym6ja0nxx", "", "4Th3SnEjc6k"),
	Candidato(0, 'José Luis Espert', 'LISTA 87', 'espert', 5, '@jlespert', "bc1qespert00d9nst6qvsy5pqdwysgn0e28h2f4cqv", "", "YRLKcTRLt5w"),
	Candidato(0, 'Nicolás del Caño', 'LISTA 133', 'delcano', 2, '@NicolasdelCano', "bc1qdelcan00s7mkpu479qm7dlhwr5jhyktj4c5f8m", "", "ytEATkbjtTc"), 
	Candidato(0, 'Manuela Castañeira', 'LISTA 13', 'castaneira', 4, '@manuelac22', "bc1qcastanel6lzuutmjm7kmjyk4szkl72jj8uyg6v", "", "EZHn5DyxPZ8"),
	Candidato(0, 'José Gómez Centurion', 'LISTA 131', 'centurion', 6, '@juanjomalvinas', "bc1qcenturl0j247x6rr728kphu3f84r9h2yzze20z", "", "o1WUb13pArU"), 
	Candidato(0, 'José A. Romero Feris', 'LISTA 36A', 'feris', 8, '@romeroferis', "bc1qferls00007p5drz6vq9xveypenxgjy962wsxsd", "", "t4vQBWbotVU"),
	Candidato(0, 'Alejandro Biondini', 'LISTA 132', 'biondini', 7, '@BiondiniAR', "bc1q3l0ndlnlw5kuz4c92evghms67fg2jqwul5498a", "", "pW6iQFlJvE0"),
	Candidato(0, 'Raúl Humberto Albarracín', 'LISTA 57', 'albarracin', 9, '@Rhalbarracin', "bc1qal6arracarevg0vq7ax3slywgpu74f00d9c9d9", "", "")
	];
	shuffle(candidatos);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}