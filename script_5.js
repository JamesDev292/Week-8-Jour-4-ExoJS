const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log(books.every(element => (element.rented >0)));


console.log("Quel est livre le plus emprunté ?");
let rent = books.map(element => (element.rented));
let maxLent = Math.max(...rent)
let title = books.find(element => element.rented === maxLent)
console.log(title)

console.log("Quel est le livre le moins emprunté ?");
let rents = books.map(element => (element.rented));
let minRent = Math.min(...rents)
let titles = books.find(element => element.rented === minRent);
console.log(titles)


console.log("Trouve le livre avec l'ID: 873495 ");
let ids = books.find(element => (element.id === 873495));
console.log(ids.title)


console.log("Supprime le livre avec l'ID: 133712");

let book = books.shift(element => (element.id !== 133712));
console.log(books)


console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

let last = books.sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
console.log(last)