// console log checks

console.log('hello word');
console.log([1,2,3,4]);

var greeting = "hello";
console.log(greeting);

console.log('123');
console.log(true);

// log obejects
console.log({a:1, b:2});

// log tables
console.table({a:1, b:2});


console.error('this is some error');

//clear console

console.clear();

console.warn('this is a warning');

// check script load time
console.time('load time');
  console.log('hello word');
  console.log('hello word');
  console.log([1,2,3,4]);
  console.log('hello word');
console.timeEnd('load time');
