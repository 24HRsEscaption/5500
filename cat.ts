class Cat implements Animal {
  name: String;
  age: number;
  private _species: String;

  constructor(age: number, name: String) {
    this._species = "cat";
    this.age = age;
    this.name = name;
  }
  getAnimalInfo(): string {
    return (
      this.name +
      " is a" +
      this._species +
      "who is" +
      this.age.toString +
      "-year-old."
    );
  }
  getAnimalSound(): string {
    if (this.age > 10) {
      return "mi. I am old and tired. Just leave me alone";
    } else {
      return "mi mi mi mi mi! ";
    }
  }
}

export {Cat}