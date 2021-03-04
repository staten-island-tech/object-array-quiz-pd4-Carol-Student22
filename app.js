const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const presidentDemo = presidents.filter(function (pres) {
  if (pres.party === "D") {
    return true;
  }
});
console.table(presidentDemo);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const presidentRep = presidents.filter(function (pres) {
  if (pres.terms <= 1 && pres.party === "R") {
    return true;
  }
});
console.table(presidentRep);

//3) return only the last three presidents
console.log(presidents.length);
const lastThreePres = presidents.slice(-3);
console.log(lastThreePres);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const presDems2 = presidents.filter(
  (pres) => pres.party === "D" && pres.terms === 2
);
console.log(presDems2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
const LBJ = ;
