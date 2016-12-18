import $ from 'jquery';
import _ from 'lodash';

const btn = $('#btn');
const txt = $('#txt');
const cnt = $('#cnt');

const name = "mert";
const surname = "inan";

[1, 2, 3].forEach(e => cnt.append(e));

console.log(_.partition([1, 2, 3, 4], n => n % 2));
