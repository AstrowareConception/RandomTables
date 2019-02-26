
		/**
		 * Shuffles array in place. ES6 version
		 * @param {Array} a items An array containing the items.
		 */
		function shuffle(a) {
		    for (let i = a.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [a[i], a[j]] = [a[j], a[i]];
		    }
		    return a;
		}

		function fillTable()
		{
			var table = document.getElementById("table_content") ;
			var html = "<div class='row header'><div class='cell'>Table n°</div><div class='cell'>Apprenant</div><div class='cell'>Apprenant</div></div>" ;
			for (i = 0 ; i < myArray.length / 2 ; i++)
			{
				html += "<div class='row'>"
							+"<div class='cell' data-title='Table'>"+
								(i+1)
							+"</div>"
							+"<div class='cell' data-title='Apprenant'>"+
								myArray[2*i]
							+"</div>"
							+"<div class='cell' data-title='Apprenant'>"+
								myArray[2*i + 1]
							+"</div>"
						+"</div>" ;
			}
			table.innerHTML = html ;

		}

		function setMessage(i)
		{
			if (i < messages.length)
			{
				var label = document.getElementById("label") ;
				label.innerHTML = messages[i] ;
				setTimeout(function(){ setMessage(i+1);}, 3000);
			}
			else 
			{
				$('#loader').fadeOut(3000, function () {
					$('#table').fadeIn(3000);

				});
			}
			

		}

		var myArray = [
		'Alban',
		'Théo',
		'Tunga',
		'Karima',
		'Florent',
		'Tanguy',
		'Marine',
		'Nada',
		'Georges',
		'Pierre',
		'Thomas',
		"Quentin",
		'Loïc B',
		'Loïc C',
		'Maria',
		'Victoria',
		'Anabela',
		'Aladin',
		'Julia',
		'Dylan',
		'Anissa',
		'Alexandre',
		'Aleksandra',
		'Rael'
		];
		

		var messages = [
			"Chargement de l'horoscope du jour ...",
			"Calcul des risques de clash ...",
			"Détection de bugs dus au rayonnement cosmique ...",
			"Backtracking dans l'arbre des combinatoires ...",
			"Vérification de l'alignement des étoiles ...",
			"Altération des capacités sensitives ...",
			"Approximation des compatibilités amoureuses ...",
			"Prise en compte de la météo ...",
			"Auto-correction de bugs insignifiants ...",
			"Evaluation des risques de dépression ...",
			"Optimisation des humeurs de chacun ...",
			"Dernières vérifications ...",
			"Préparation de l'affichage des résultats"
			];
		myArray = shuffle(myArray);