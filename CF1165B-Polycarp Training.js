'use strict';

function main() {
  let n = parseInt(next()), i = 0;
  let ar = [];
  for(i = 0; i < n; i++) {
    ar.push(parseInt(next()));
  }
  //ar.sort(); this is wrong sorts alphabetically on literals
  ar.sort((a, b) => a-b); // sort using compare function to sort integers -ve means a comes first
  let cur = 0;
  for(i = 0; i < n; i++) {
    if(ar[i] > cur)
      cur++;
  }
  println(cur);
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
