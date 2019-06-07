'use strict';

function main() {
  // main: main function, your code goes here.
  
}

//process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = '';
process.stdin.on('data', (chunk) => input += chunk);

// next: reads next value from input.
let inputCursor = 0;
const next = () => {
  return inputCursor < input.length ? input[inputCursor++] : ''; 
};
const nextInt = () => parseInt(next());

//print: print one or more space seperated values.
const print = (...data) => {
  for(let i = 0; i < data.length; i++) {
    process.stdout.write('' + data[i] + (i < data.length - 1 ? ' ' : ''));
  }
};

//println: print one or more space seperated values then a line feed.
const println = (...data) => {
  print(...data);
  print('\n');
};

//after the the input is read.
process.stdin.on('end', () => {
    input = input.trim().split(/[\s]+/);
    main();
});
