class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
    }
  }
}

const user1 = new User("IvanIlTerribile", "32esimo", 30, "Roma");
const user2 = new User("Contessa", "Servazzantiviendalmare", 25, "Milano");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
const user3 = new User("Ugo", "Fantozzi", 30, "Torino");

console.log(user1.compareAge(user3));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = [];

function updatePetList() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";
  pets.forEach((pet, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
  });
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  updatePetList();

  document.getElementById("petForm").reset();
});
