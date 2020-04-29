"use strict";

const fs = require('fs');
const tools = require('@iconify/tools');

// Create directories
try {
    fs.mkdirSync('dest');
} catch (err) {
}

let collection;

tools.ImportDir('src').then(result => {
    collection = result;
    return collection.promiseAll(svg => tools.SVGO(svg));
}).then(() => {
    return collection.promiseAll(svg => tools.Tags(svg))
}).then(() => {
    return tools.ExportDir(collection, 'dest');
}).then(() => {
    console.log('Parsed ' + collection.length() + ' icons.');
}).catch(err => {
    console.error(err);
});