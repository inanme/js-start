/* @flow

const option: boolean = false;
const messages: Array<string> = ['hello', 'world', '!'];
const messages1: Array<number> = [1, 2, 3];

type Personal = {name: string, age: number};
type personal = {name:string};

var aboutMe: Personal = {
    name: 'Preethi',
    age: 26,
};

console.log(aboutMe);

console.log(messages.map((str: string) => `${str} _ ${str}`));
 */