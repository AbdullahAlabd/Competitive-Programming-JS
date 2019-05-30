'use strict';

function main() {
  let n = parseInt(next());
  let s = next();
  let stack = [], i = 0, res = '';
  for(i = 0; i < n; i++) {
    if((!stack.length) || s[i] != stack[stack.length-1] || stack.length % 2 == 0) {
      stack.push(s[i]);
    }
  }
  if(stack.length%2) stack.pop();
  res = stack.join('');
  println(n-res.length+'\n'+res);
}

//process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = '';
process.stdin.on('data', (chunk) => input += chunk);

// next: reads next value from input.
let inputCursor = 0;
let next = () => {
  return inputCursor < input.length ? input[inputCursor++] : ''; 
};

//print: print one or more space seperated values.
let print = (...data) => {
  for(let i = 0; i < data.length; i++) {
    process.stdout.write(data[i] + (i < data.length - 1 ? ' ' : ''));
  }
};

//println: print one or more space seperated values then a line feed.
let println = (...data) => {
  print(...data);
  print('\n');
};

//after the the input is read.
process.stdin.on('end', () => {
    input = input.trim().split(/[\s]+/);
    main();
});
