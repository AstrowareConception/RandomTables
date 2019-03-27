
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
				var appr1 = myArray[2*i] ;
				var appr2 = myArray[2*i + 1] ;
				if (appr1 == undefined) appr1 = "" ;
				if (appr2 == undefined) appr2 = "" ;
				
				html += "<div class='row'>"
							+"<div class='cell' data-title='Table'>"+
								(i+1)
							+"</div>"
							+"<div class='cell' data-title='Apprenant'>"+
								appr1
							+"</div>"
							+"<div class='cell' data-title='Apprenant'>"+
								appr2
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
		'Tanguy',
		'Théo',
		'Tunga',
		'Karima',
		'Florent',
		'Marine',
		'Georges',
		'Pierre',
		'Thomas',
		'Aleksandra',
		"Quentin",
		'Loïc B',
		'Nada',
		'Loïc C',
		'Maria',
		'Victoria',
		'Aladin',
		'Julia',
		'Anabela',
		'Dylan',
		'Anissa',
		'Alexandre',
		'Rael',
		'Michel',
		];
		

		var messages = [
			"Chargement de l'horoscope du jour ...",
			"Calcul des risques de clash ...",
			"Détection de bugs dus au rayonnement cosmique ...",
			"Backtracking dans l'arbre des combinatoires ...",
			"Vérification de l'alignement des planètes ...",
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
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);
		myArray = shuffle(myArray);