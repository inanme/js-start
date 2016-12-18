import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const txt = $('#txt');
const cnt = $('#cnt');

const name = "mert";
const surname = "inan";

Rx.Observable.from([1,2,3]).subscribe(e => console.log(e));

[1, 2, 3].forEach(e => cnt.append(e));
