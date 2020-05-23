// import addContent from './add-content';
// document.write('my first webpack app');
// addContent()
const add = require('./calculator.js').add;
const sum = add(2,3);
console.log('sum:', sum);
const moduleName = require('./calculator').name;
console.log(moduleName);
console.log('end');