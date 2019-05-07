// example 1
interface Person {
  name: string;
  nickName?: string;
  surname: string;
  status?: number;
  birthDate?: Date;
}
const person: Person = {
  name: 'Blitz',
  surname: 'Naruto'
}
console.log(JSON.stringify(person));

// example 2
interface Engineer {
  name: string;
  convertedPlan?: () => string;
  streamWork?: () => void;
}


const en:Engineer = {
  name: 'Murafaka'
}
console.log(JSON.stringify(en));

// example 3
let myFn: (name: string, surname?: string) => string;
myFn = (name) => {
  return 'Merry Chrismas X ' + name;
}; 
const result = myFn('P\'Ploy');
console.log(result);

// example4 with Generic ยังไม่ได้สอน Generic
type genericMyFn<T> = (name:T)=>T;
const ployGenericPloy:genericMyFn<Engineer> = (x:Engineer)=>{
  return {name:'Ploy'};
}

ployGenericPloy({name:'xxxx'})