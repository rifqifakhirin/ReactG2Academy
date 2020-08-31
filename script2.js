let dataAngka = [10, 23, 456, 21, 77, 85, 19, 92, 43, 35];

let bilanganPrima = dataAngka.filter((value) => {
  return value % 2 != 0 && value % 3 != 0 && value % 5 != 0 && value % 7 != 0;
});
console.log(bilanganPrima);

let bilanganTiga = dataAngka.filter((value) => value % 3 == 0);
console.log(bilanganTiga);

let bilanganRatusan = dataAngka.filter((value) => value * 17 > 636);
console.log(bilanganRatusan);

let luasLingkaran = dataAngka.map((value) => {
  return Math.pow(value, 2) * Math.PI;
});
console.log(luasLingkaran);

let luasPersegi = dataAngka.map((value) => {
  return Math.pow(value, 2);
});
console.log(luasPersegi);

let volumeKubus = dataAngka.map((value) => {
  return Math.pow(value, 3);
});
console.log(volumeKubus);
