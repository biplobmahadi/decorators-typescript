const Logger = (logStr: string) => {
  console.log('Logger 1 Factory');
  return (_constructor: Function) => {
    console.log(logStr);
  };
};
const Logger2 = (logStr: string) => {
  console.log('Logger 2 Factory');
  return (_constructor: Function) => {
    console.log(logStr);
  };
};

const PropertyDeco = (target: any, propertyName: string) => {
  console.log(target, propertyName);
};

const AccessorGetDeco = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  console.log(target, name, descriptor);
};
const AccessorSetDeco = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  console.log(target, name, descriptor);
};

const MethodDeco = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  console.log(target, name, descriptor);
};
const ParamDeco = (target: any, name: string, positon: number) => {
  console.log(target, name, positon);
};

@Logger('logger 1 deco')
@Logger2('logger 2 deco')
class Person {
  @PropertyDeco
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @AccessorSetDeco
  set ageAdd(@ParamDeco age: number) {
    this.age = age;
  }
  @AccessorGetDeco
  get ageGet() {
    return this.age;
  }

  @MethodDeco
  showName(@ParamDeco msg: string) {
    console.log(this.name, 'is a good boy. And age is: ', this.age, msg);
  }
}

export {};
