const Logger = (logStr: string) => {
  console.log('Logger 1 Factory');
  return (constructor: Function) => {
    console.log(logStr);
    console.log(constructor);
  };
};
const Logger2 = (logStr: string) => {
  console.log('Logger 2 Factory');
  return (constructor: Function) => {
    console.log(logStr);
    console.log(constructor);
  };
};

@Logger('I can put custom logger msg')
@Logger2('logger 2')
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
