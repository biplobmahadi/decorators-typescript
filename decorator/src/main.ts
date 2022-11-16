const Logger = (constructor: Function) => {
  console.log('logger deco');
  console.log(constructor);
};
@Logger
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  showName() {
    console.log(this.name, 'is a good boy.');
  }
}

export {};
