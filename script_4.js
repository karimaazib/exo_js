const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
 // Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

console.log("Les entrepreuneurs nés dans les années 70 sont : ")
entrepreneurs
    .filter(entrepreneurs => entrepreneurs.year >=1970)
    .filter(entrepreneurs => entrepreneurs.year <=1980)
    .map(entrepreneurs => console.log(entrepreneurs.first + ':' + entrepreneurs.year));
//Premièrement, la filter()méthode renvoie les entrepreneurs dont l'année de naissance est >=1970.
//Deuxièmement, la sort()méthode trie les années de naissance dans l'ordre croissant 
//Troisièmement, la map()méthode affiche chaque élément du tableau de résultats dans la console Web.


//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("**********le prénom et le nom des entrepreneurs :")
let nameEntrepreneurs=[]
entrepreneurs.forEach((name) => {
    nameEntrepreneurs.push(name.first + " " + name.last)
});
  console.log(nameEntrepreneurs);

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
let arrayAges = [];
entrepreneurs.forEach((i) =>{
let age = 2020 - i.year
  arrayAges.push(i.first + " " + i.last + " : " + age + ' ans')
});
console.log(arrayAges);



//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
let arrayLastNames = [];
entrepreneurs.forEach((name) =>{

  arrayLastNames.push(name.last);

});
console.log(arrayLastNames.sort());