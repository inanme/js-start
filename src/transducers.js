import  Immutable from 'immutable';
import {comp, map, filter, transduce} from 'transducers-js';
import Benchmark from 'benchmark';
import _ from 'lodash';

const inc = n => n + 1;
const isEven = n => n % 2 == 0;
const sum = (a, b) => a + b;

const largeVector = Immutable.List(_.range(1000000));

console.log(largeVector.count());

const suite = new Benchmark.Suite;
const xf = comp(map(inc), filter(isEven));

suite
    .add('built in Immutable-js functionality', () => largeVector.map(inc).filter(isEven).reduce(sum))
    .add('faster with transducers', () => transduce(xf, sum, 0, largeVector))
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});

