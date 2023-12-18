const obj = {
  name: "Gurditt",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};

// console.log(obj);

const obj2 = {
  roll: 1,
  __proto__: obj,
  //using obj as a prototype
  name: "Vijay",
};

// console.log(obj2);
// console.log(obj2.getName());
// console.log(obj2.getRoll());

const obj3 = {
  class: "MCA",
  __proto__: obj2,
  //nested prototypes
};

// console.log(obj3.getRoll());

const array1 = ["Ajay"];
// console.log(array1);

const array2 = new Array();
console.log(array2);

//making our own prototype property
Array.prototype.show = function () {
  return this;
};

const cities = ["Delhi"];
console.log(cities.show());

Array.prototype.toObject = function () {
  let newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });

  return newObj;
};

console.log(cities.toObject());

function myPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}

myPrototype.prototype = obj

const myProto = new myPrototype("Jane Doe", "23");
console.log(myProto);