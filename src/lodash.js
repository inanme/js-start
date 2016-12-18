import $ from 'jquery';
import _ from 'lodash';

const btn = $('#btn');
const txt = $('#txt');
const cnt = $('#cnt');

const name = "mert";
const surname = "inan";

[1, 2, 3, 4].forEach(e => cnt.append(e));

console.log(_.times(6, i => "ball_" + i));

const objA = {"name": "colin", "car": "suzuki"};
const objB = {"name": "james", "age": 17};

console.log(_.assign({}, objA, objB));
console.log(objA);
console.log(objB);

console.log(_.attempt(JSON.parse, "text").message);
