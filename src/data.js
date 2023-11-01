const data = [
  {
    fullname: "Mandu the amazing cat",
    age: 9,
  },
  {
    fullname: "Mia the black cat",
    age: 9,
  },
  {
    fullname: "Leeloo the growing dog",
    age: 1,
  },
  {
    fullname: "Toothless the trained dragon",
    age: 14,
  },
  {
    fullname: "ScoobyDoo the wondering dog",
    age: 58,
  },
  {
    fullname: "Horsey the horsing horse",
    age: 10,
  },
];

export function getData() {
  const animals = data.map((animal) => {
    const [name, , trait, species] = animal.fullname.split(" ");
    return {
      name,
      trait,
      species,
      age: animal.age,
    };
  });
  //Ordntli sinds ninjakode
  //Prøv den her i console for at regne ud hvad new Set gør:
  //new Set([1,3,2,1,2,3,2,1,2,3,2,1,1])
  return [animals, [...new Set(animals.map((a) => a.species))]];
}
