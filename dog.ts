class Dog implements Animal {
  name: String;
  age: number;
  private _species: String;

  constructor(age: number, name: String) {
    this._species = "cat";
    this.age = age;
    this.name = name;
  }
  getAnimalInfo(): string {
    let old_dog_notice = " no notice would apply";
    if (this.age > 15) {
      old_dog_notice = " this is a old dog who need special care";
    }
    return (
      this.name +
      " is a" +
      this._species +
      "who is" +
      this.age.toString +
      "-year-old." +
      old_dog_notice
    );
  }
  getAnimalSound(): string {
    return "wong wong wong";
  }
  getDogAction(action:String):string{
    return "the dog can "+action;
  }
  
}
