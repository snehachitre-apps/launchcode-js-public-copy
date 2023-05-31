let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
dna = dna.replace("GCT", "AGG");

console.log(dna);

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dna.indexOf("CAT"))
  console.log("CAT gene found");
else
  console.log("CAT gene NOT found");

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log(dna.slice(16, 19));

//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`);



//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let tac = dna.slice(4, 7);
let cat = dna.slice(40, 43);

console.log(`${tac.toLowerCase()}o ${cat.toLowerCase()}`);