"use strict";

import $ from 'jquery';
import _ from 'lodash';

const btn = $('#btn');
const txt = $('#txt');
const cnt = $('#cnt');
const name = "mert";
const surname = "inan";
const even = x => x % 2 == 0;
const inc = x => x + 1;
const arr1 = [1, 2, 3, 4, 5];
arr1.forEach(e => cnt.append(e));
console.log(_.min(arr1), _.min(arr1), _.map(arr1, inc), _.filter(arr1, even), _.find(arr1, even));
console.log(_.times(6, i => "ball_" + i));

const objA = {"name": "colin", "car": "suzuki"};
const objB = {name, surname};

console.log(_.assign({}, objA, objB));

console.log(_.attempt(JSON.parse, "text").message);
