class Patient {
  name: string;
  age: number;
  weight: number;
  profession: string;
  email: string;

  constructor(
    name: string,
    age: number,
    weight: number,
    profession: string,
    email: string
  ) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.profession = profession;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  getProfession(): string {
    return this.profession;
  }

  setProfession(profession: string) {
    this.profession = profession;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }
}
