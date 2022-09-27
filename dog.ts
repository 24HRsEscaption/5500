class Dog implements Animal {
  name: String;
  age: number;
  // break rule 2: break of the rule of keeping things private, bcz this should not be changed
  _species: String;

  constructor(age: number, name: String) {
    this._species = "cat";
    this.age = age;
    this.name = name;
  }
  getAnimalInfo(): string {
    // break rule no6: one job per method; this method check dog speacial care and privide basic info in the same time
    let old_dog_notice = ";"
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
