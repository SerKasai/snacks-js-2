console.log('snack 1')

const auto = [
  {
    marca: 'Toyota',
    modello: 'Yaris',
    alimentazione: 'Benzina'
  },
  {
    marca: 'Fiat',
    modello: 'Panda',
    alimentazione: 'Benzina'
  },
  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Diesel'
  },
  {
    marca: 'Lexus',
    modello: 'CT',
    alimentazione: 'Ibrida'
  },
  {
    marca: 'BMV',
    modello: 'Serie 1',
    alimentazione: 'Benzina'
  },
  {
    marca: 'Lamborghini',
    modello: 'Aventador',
    alimentazione: 'Benzina'
  },
  {
    marca: 'DS',
    modello: '4',
    alimentazione: 'Elettrica'
  },
  {
    marca: 'Fiat',
    modello: 'Bravo',
    alimentazione: 'GPL'
  },
  {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'Diesel'
  },
  {
    marca: 'Mazda',
    modello: 'RX-8',
    alimentazione: 'Diesel'
  },
]
console.log(auto)

const benzina = auto.filter((autoBenza) => {
  return autoBenza.alimentazione == 'Benzina';
});

const diesel = auto.filter((autoDiesel) => {
  return autoDiesel.alimentazione == 'Diesel';
});

const altreAuto = auto.filter((altre) => {
  if (altre.alimentazione != 'Benzina' && altre.alimentazione != 'Diesel') {
    return true;
  }
  return false;
})
  ;
console.log(benzina, diesel, altreAuto)


// ALTERNATIVA

// let autoBenzina, autoDiesl, tutteLeAltre;

// autoBenzina = auto.filter(el => el.alimentazione === 'Benzina');
// autoDiesl = auto.filter(el => el.alimentazione === 'Diesel');
// tutteLeAltre = auto.filter(el => el.alimentazione !== 'Benzina' && el.alimentazione !== 'Diesel');

// // OPPURE
// // tutteLeAltre = auto.filter( el => {
// //   const alimentazione = el.alimentazione

// //   if ( alimentazione !== 'Benzina' && alimentazione !== 'Diesel') {
// //     return true;
// //   }
// // })

// console.log(autoBenzina);
// console.log(autoDiesl);
// console.log(tutteLeAltre);


// ALTERNATIVA CON FOR EACH

// let autoBenzina = [], autoDiesl = [], tutteLeAltre = [];

// auto.forEach((el) => {
//   const { alimentazione } = el;

//   switch (alimentazione) {
//     case 'Benzina':
//       autoBenzina.push(el);
//       break;
//     case 'Diesel':
//       autoDiesl.push(el);
//       break;
//     default:
//       tutteLeAltre.push(el)
//   }
// })

// console.log(autoBenzina);
// console.log(autoDiesl);
// console.log(tutteLeAltre);