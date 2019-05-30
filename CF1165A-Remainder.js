'use strict';

function main() {
  let n = 0, x = 0, y = 0, s = '';
  let i = 0, toBeChanged = 0;
  n = parseInt(next()), x = parseInt(next()), y = parseInt(next()), s = next();
  for(i = n-x; i < n; i++) {
    if(i != n-y-1) {
      toBeChanged += s[i] === '1';
    } else {
      toBeChanged += s[i] === '0';
    }
  }
  println(toBeChanged);
}

//process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
process.stdin.on('data', (chunk) => input += chunk);

// next: reads next value from input.
let inputCursor = 0;
let next = () => {
  return inputCursor < input.length ? input[inputCursor++] : ''; 
};

//print: print one or more space seperated values.
let print = (...data) => {
  for(let i = 0; i < data.length; i++) {
    process.stdout.write('' + data[i] + (i < data.length - 1 ? ' ' : ''));
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
