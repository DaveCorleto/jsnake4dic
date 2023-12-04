// const animals = 

// [
//     { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
//     { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
//     { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" }
//   ]

// console.log(animals);

// const canidi = animals.filter((animale)=> { 
// if (animale.famiglia === "canidi")
// return animale.famiglia === "canidi";
// })

// console.log("canidi");

// const people = [
//     { nome: "anna", cognome: "magnani", eta: 32 },
//     { nome: "Matteo", cognome: "calafiori", eta: 15 },
//     { nome: "Domizia", cognome: "Gigoletti", eta: 80 },
//     { nome: "Alessia", cognome: "Bonomi", eta: 27 },
//     { nome: "Giorgio", cognome: "Cancelli", eta: 40 },
// ];

// const peopleDriver = people
//   .filter((person) => person.eta > 18)
//   .map((person) => `${person.nome} ${person.cognome} può guidare perché ha ${person.eta} anni.`);

// console.log(peopleDriver);

// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const car = [
    { marca: "Toyota", modello: "Celica", alim: "Benzina" },
    { marca: "BMW", modello: "M3", alim: "Metano" },
    { marca: "Ford", modello: "Kuga", alim: "Elettrica" },
    { marca: "Chevrolet", modello: "Corvette", alim: "Gpl" },
    { marca: "Mercedes", modello: "A180", alim: "Benzina" },
    { marca: "Ford", modello: "Fiesta", alim: "Diesel" },
    { marca: "Suzuki", modello: "Vitara", alim: "Gpl" },
    { marca: "Mazda", modello: "3", alim: "Elettrica" },
    { marca: "Wolkswagen", modello: "Golf", alim: "Metano" },
];

console.log(car);

const petrol = car.filter((petrolcar) => petrolcar.alim === "Benzina");
console.log (petrol);

const diesel = car.filter((dieselcar) => dieselcar.alim === "Diesel");
console.log (diesel);

const other = car.filter ((othercar) => othercar.alim !== "Diesel" && othercar.alim !== "Benzina");
console.log (other);

// const gpl = car.filter((gplcar) => gplcar.alim === "Gpl");
// console.log (gpl);

// const electric = car.filter((electriccar) => electriccar.alim === "Elettrica");
// console.log (electric);

// const metano = car.filter((metanocar) => metanocar.alim === "Metano");
// console.log (metano);