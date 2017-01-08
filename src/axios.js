"use strict";

import EventBus from 'events';
import url from 'url';
import axios from 'axios';
import _ from 'lodash';

class MyEventBus extends EventBus {
}

const myEventBus = new MyEventBus();

const out = param => console.log(param);

const processReponse = response => {
    _.each(response.results, it => out(it.name));
    if (response.next) {
        const {page} = url.parse(response.next, true).query;
        console.log(page);
        myEventBus.emit('fetch_page', page);
    }
};

const fetchPeople = (page = 1) =>
    axios.get('http://swapi.co/api/people', {params: {page}})
        .then(response => processReponse(response.data))
        .catch(out);

myEventBus.on('fetch_page', page => fetchPeople(page));
myEventBus.emit('fetch_page');
