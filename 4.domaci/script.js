const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "ženski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "muški",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
];

// funkcije
function izracunajProsjek(ucenik) {
  let suma = 0;
  let br = 0;
  for (const [i, j] of Object.entries(ucenik.ocjene)) {
    suma += j;
    br += 1;
  }
  let prosjek = suma / br;
  ucenik.prosjek = prosjek;
  return prosjek;
}

function dodijeliUspjeh(ucenik) {
  let uspjeh;
  let uspjehImePrezime = "";
  if (ucenik.prosjek >= 4.5) {
    if (ucenik.pol == "ženski") {
      uspjeh = "odlična";
    } else {
      uspjeh = "odličan";
    }
  } else if (ucenik.prosjek >= 3.5) {
    if (ucenik.pol == "ženski") {
      uspjeh = "vrlo dobra";
    } else {
      uspjeh = "vrlo dobar";
    }
  } else if (ucenik.prosjek >= 2.5) {
    if (ucenik.pol == "ženski") {
      uspjeh = "dobra";
    } else {
      uspjeh = "dobar";
    }
  } else if (ucenik.prosjek >= 1.5) {
    if (ucenik.pol == "ženski") {
      uspjeh = "dovoljna";
    } else {
      uspjeh = "dovoljan";
    }
  } else if (ucenik.pol == "ženski") {
    uspjeh = "nedovoljna";
  } else {
    uspjeh = "nedovoljan";
  }

  ucenik.uspjeh = uspjeh;
  ucenik.uspjehImePrezime = `${ucenik.ime} ${ucenik.prezime} je ${uspjeh}.`;
}

function statistikaUspjeha(ucenici) {
  let statistika = {
    odlican: 0,
    vrlodobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };

  for (let i = 0; i < ucenici.length; i++) {
    if (ucenici[i].uspjeh == "odličan" || ucenici[i].uspjeh == "odlična") {
      statistika.odlican++;
    } else if (
      ucenici[i].uspjeh == "vrlo dobra" ||
      ucenici[i].uspjeh == "vrlo dobar"
    ) {
      statistika.vrlodobar++;
    } else if (ucenici[i].uspjeh == "dobra" || ucenici[i].uspjeh == "dobar") {
      statistika.dobar++;
    } else if (
      ucenici[i].uspjeh == "dovoljna" ||
      ucenici[i].uspjeh == "dovoljan"
    ) {
      statistika.dovoljan++;
    } else {
      statistika.nedovoljan++;
    }
  }
  return statistika;
}

function sortirajUcenike(ucenici) {
  return ucenici.sort((a, b) => {
    if (a.prezime < b.prezime) return -1;
    if (a.prezime > b.prezime) return 1;
    return 0;
  });
}

// dodjeljivanje funkcija
for (let i = 0; i < ucenici.length; i++) {
  izracunajProsjek(ucenici[i]);
}

for (let i = 0; i < ucenici.length; i++) {
  dodijeliUspjeh(ucenici[i]);
}

// testiranje funkcija
for (let i = 0; i < ucenici.length; i++) {
  console.log(
    `${i + 1}. ${ucenici[i].ime} ${ucenici[i].prezime}: ${ucenici[i].prosjek}`
  );

  console.log(ucenici[i].uspjehImePrezime);
}

console.log(statistikaUspjeha(ucenici));

const sortiraniUcenici = sortirajUcenike(ucenici);
console.log(`Sortirani ucenici po prezimenu:`);
for (let i = 0; i < sortiraniUcenici.length; i++) {
  console.log(
    `${i + 1}. ${sortiraniUcenici[i].prezime} ${sortiraniUcenici[i].ime}`
  );
}

///////////////////////////////////////////////////
// for (const [i, j] of Object.entries(ucenici[0])) {
//   console.log(i, j);
// }
