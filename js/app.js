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

const benzina = auto.filter((autobenza) => {
  return autobenza.alimentazione == 'Benzina';
});

const diesel = auto.filter((autodiesel) => {
  return autodiesel.alimentazione == 'Diesel';
});

const altreAuto = auto.filter((altre) => {
  if (altre.alimentazione != 'Benzina' && altre.alimentazione != 'Diesel') {
    return true;
  }
  return false;
})
  ;
console.log(benzina, diesel, altreAuto)