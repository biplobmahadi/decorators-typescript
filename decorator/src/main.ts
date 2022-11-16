const Logger = (logStr: string) => (constructor: Function) => {
  console.log(logStr);
  console.log(constructor);
};

@Logger('I can put custom logger msg')
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
