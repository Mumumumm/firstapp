
// 배열구조분해 할당
let x,y,z;
[x,y] = [1,2];
console.log(x,y);

[x,y]=[1];
console.log(x,y);

[x,y]=[1,2,3];
console.log(x,y);

[x, ,z]=[1,2,3];
console.log(x,z);

// 기본값
[x,y,z=3]=[1,2];
console.log(x,y,z);

[x,y=10,z=3]=[1,2];
console.log(x,y,z);

console.log("------------------------------------------");

// 객체구조분해 할당 
const {prop1: p1, prop2: p2} = {prop1:'a', prop2:'b'};
console.log(p1,p2);
console.log({prop1:p1,prop2:p2});

// 축약형
// const{prop1,prop2} = {prop1:"a", prop2:"b"};
// console.log({prop1 , prop2});

// default value
const {prop1,prop2,prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }

console.log("------------------------------------------");