// # 1. 
// - Récupère la div dont l'id est #content
// - Ajoute un h2 dedans
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 
let body = document.body
console.log(body);

let exo1 = document.getElementById('#content')
let monH2 = document.createElement('h2')
monH2.innerText = 'Part 6 - Exercice 1'
body.appendChild(monH2)

// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2

let monPara = document.createElement('p')
monPara.innerText = 'lorem ipsum'
body.appendChild(monPara)

// # 3.
// - Créer un h1 
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content

let monH1 = document.createElement('h1')
monH1.innerText = 'Le DOM - Création de HTML'
body.appendChild(monH1)
body.insertBefore(monH1, monH2)


// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire

let exo2 = document.getElementById('secondaire')
exo2.innerHTML = body.innerHTML


// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris

let maDiv = document.createElement('div')
let monUL = document.createElement('LI')
monUL.appendChild(li);
li.innerHTML=li.innerHTML + array[i]


// CORRECTION

let body = document.body
console.log(body);

//1
let idContent = document.querySelector('#content')
let monTitreh2 = document.createElement('h2')
monTitreh2.innerText = "Part 6 - Exercice1"
idContent.appendChild(monTitreh2)

//2
let paraLorem = document.createElement('p')
paraLorem.innerText = 'Lorem ipsum'
idContent.appendChild(paraLorem)

//3
let monTitreh1 = document.createElement('h1')
monTitreh1.innerText = 'Le Dom - création de html'
// idContent.prepend(monTitreh1)
idContent.insertBefore(monTitreh1, monTitreh2)

//4
let contenuId = idContent.innerHTML
let idSecondaire = document.querySelector('#secondaire')
idSecondaire.innerHTML = contenuId
idSecondaire.querySelector('h2').innerText = 'Part 6 - Exercice 2'

//5

//create div
let idMatiere = document.createElement('div')
idMatiere.setAttribute('id', 'matiere')

// insert proprement 
// let myScript = document.querySelector('script')
// body.insertBefore(idMatiere, myScript)
body.insertBefore(idMatiere, idSecondaire.nextElementSibling)

// create list
let myOl = document.createElement('ol')
idMatiere.appendChild(myOl)

let maMatiere = ['html', 'css', 'javascript']

//for each
maMatiere.forEach(el => {
    let myLi = document.createElement('li')
    myLi.innerText = el
    myOl.appendChild(myLi)
});

